import React from 'react'
import { Row, Table, Divider, Icon } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as page1Actions from '../../redux/modules/demo/page1'
import './styles/page1.less'

type State = {
}

type Props = {
    table1Data: Object,
    table1DataLoading: Boolean,
    getTable1DataAction: typeof page1Actions.getTable1DataAction,
}

class Demo1 extends React.Component<State, Props> {
    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    componentWillMount = () => {
        this.props.getTable1DataAction({ pageSize: 10, pageNum: 1 })
    }

    // 渲染第一个Table组件
    renderFirstTable = () => {
        const { table1DataLoading, table1Data } = this.props
        const { table1Data: data, total } = table1Data
        const columns = [
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
                render: text => <a>{text}</a>
            },
            {
                title: '是否是管理员',
                dataIndex: 'isAdmin',
                key: 'isAdmin',
                render: text => text === 'yes' ? '是' : '否'
            },
            { title: '所在看板数', dataIndex: 'boardCount', key: 'boardCount' },
            { title: '所在卡片数', dataIndex: 'cardCount', key: 'cardCount' },
            {
                title: '是否需要邮件通知',
                dataIndex: 'isEmail',
                key: 'isEmail',
                render: text => text === 'yes' ? '是' : '否'
            },
            {
                title: '操作',
                dataIndex: 'Action',
                key: 'Action',
                render: (text, recode) => (
                    <span>
                        <Icon type="edit" title="编辑数据" className="card-action" />
                        <Divider type="vertical" />
                        <Icon type="delete" title="删除数据" className="card-action" />
                    </span>
                )
            }
        ]

        return (
            <Table
                columns={columns}
                dataSource={data}
                loading={table1DataLoading}
                pagination={{
                    total: total,
                    defaultCurrent: 1,
                    pageSize: 10,
                    onChange: (pageNum, pageSize) => {
                        this.props.getTable1DataAction({ pageSize, pageNum })
                    }
                }}
            />
        )
    }

    render() {
        return (
            <Row>
                <div className="firstTable">
                    {this.renderFirstTable()}
                </div>
            </Row>
        )
    }
}

export default connect(
    (state, props) => {
        const { table1Data, table1DataLoading } = state.page1Redux
        return {
            table1Data,
            table1DataLoading
        }
    },
    (disPatch: Function) => bindActionCreators({ ...page1Actions }, disPatch)
)(Demo1)
