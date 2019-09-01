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
            // 还是没有完全理解路由的使用情况
            <Switch>
                <Route path="/:category/:pages" component={Index} />
                <Route exact={true} path="/user" component={pageUser} />
                <Route exact={true} path="/login" component={Login} />
                <Redirect path="/" to={{pathname: '/index/articlelist'}} />
            </Switch>
        )
    }
}
