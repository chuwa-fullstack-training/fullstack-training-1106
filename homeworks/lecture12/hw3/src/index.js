// 文件路径: src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 全局样式
import App from './App'; // 导入App组件

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
