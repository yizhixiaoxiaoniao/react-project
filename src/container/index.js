// 根组件
import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Head from './header'
import './styles/index.less'

const { Content, Sider } = Layout
const { SubMenu } = Menu

type State = {}

type Props = {}

class App extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Layout className="container">
                <Head />
                <Layout>
                    <Sider className="slider">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['user', 'bars']}
                        >
                            <SubMenu key="user" title={<span><Icon type="user" />链接标签1</span>}>
                                <Menu.Item key="1"><Link to="/demo1">标签1-1</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/demo2">标签1-2</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/demo3">标签1-3</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/demo4">标签1-4</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="bars" title={<span><Icon type="bars" />链接标签2</span>}>
                                <Menu.Item key="5"><Link to="/demo1">标签2-1</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/demo2">标签2-2</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/demo3">标签2-3</Link></Menu.Item>
                                <Menu.Item key="8"><Link to="/demo4">标签2-4</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content className="righeContent">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default App
