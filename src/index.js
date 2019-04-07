import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from "./router/AppRouder"
import "./static/css/common.less"
import './static/css/font.css'
import './static/css/iconfont.css'
import './index.less';
//redux
import { Provider } from "react-redux"
import configStore from "./store"
const store =configStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>
, document.getElementById('root'));
