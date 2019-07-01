// 路由入口文件
import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import Demo1 from './pages/demo/page1'
import Demo2 from './pages/demo/page2'
import Demo3 from './pages/demo/page3'
import Demo4 from './pages/demo/page4'
import App from './container/index'

const getRouterConf = ({ history, location, match }) => {
    history.push('/demo1')

    return null
}

// 页面路由配置
const routerConfig: Object = {
    name: '页面模块一',
    children: [
        { name: '链接标签1', component: Demo1, path: '/demo1' },
        { name: '链接标签2', component: Demo2, path: '/demo2' },
        { name: '链接标签3', component: Demo3, path: '/demo3' },
        { name: '链接标签4', component: Demo4, path: '/demo4' },
    ]
}

// 动态解析页面路由配置
const ansyRouterConfig: Function = (config: Object) => (
    config.children ? config.children.map((item, index) => (
        <Route key={item.path} path={item.path} component={item.component} exact />
    )) : null
) 

const router = (
    <Router>
        <Route path="/" component={(props) => (
            <App {...props}>
                <Switch>
                    {ansyRouterConfig(routerConfig)}
                    <Route path="/" component={withRouter(getRouterConf)} />
                </Switch>
            </App>
        )} />
    </Router>
)

export default router
