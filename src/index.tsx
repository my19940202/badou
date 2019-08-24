
import * as React from "react";
import {render} from "react-dom";
import {Router, Route, Switch, Link} from 'react-router-dom';
import history from './history';
import 'antd/dist/antd.css';
import {Button} from 'antd';
// TODO: 路由处理
// 各个子页面处理

let pageTest = () => (
    <>
        <Button type="primary">page test</Button>
        <Button type="dashed">xxxx</Button>
    </>
);

let pageXX = () => (
    <>
        <Button type="primary">page xx</Button>
        <Button type="dashed">Dashed fuck you</Button>
    </>
);

let pageIndex = () => (
    <>
        <Button type="primary">首页啦</Button>
        <ul role="nav">
            <li><Link to="/test">去test</Link></li>
            <li><Link to="/xx">去xxxx</Link></li>
        </ul>
    </>
);


// 页面整体入口
let App = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={pageIndex}/>
            <Route exact={true} path="/test" component={pageTest}/>
            <Route exact={true} path="/xx" component={pageXX}/>
        </Switch>
    );
};


const rootElement = document.getElementById("root");
render(
    <Router history={history}>
        <Route path="/" component={App}/>
    </Router>,
  rootElement
);
