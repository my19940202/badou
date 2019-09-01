
import * as React from "react";
import {render} from "react-dom";
import {Router} from 'react-router-dom';
import history from './history';
import 'antd/dist/antd.css';
import './styles.css';
import {App} from './pages/App';

const rootElement = document.getElementById("root");
render(
    <Router history={history}>
        <App/>
    </Router>,
  rootElement
);
