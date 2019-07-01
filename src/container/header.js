import React from 'react'
import { Layout } from 'antd'
import './styles/header.less'

const { Header } = Layout

class Head extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Header className="header">
                <div className="logo" />
            </Header>
        )
    }
}

export default Head
