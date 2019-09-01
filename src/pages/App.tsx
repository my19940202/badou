import * as React from "react";
import {Switch, Redirect, Route} from 'react-router-dom';
import pageUser from './user';
import {Login} from './Login';
import {Index} from './Index'

export class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // TODO: 还没有完全理解路由的使用情况
            // 需要深入了解一下
            <Switch>
                <Route path="/:category/:pages" component={Index} />
                <Route exact={true} path="/user" component={pageUser} />
                <Route exact={true} path="/login" component={Login} />
                <Redirect path="/" to={{pathname: '/index/articlelist'}} />
            </Switch>
        )
    }
}
