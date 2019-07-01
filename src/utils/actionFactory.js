// 异步Action factory文件
import fetch from 'isomorphic-fetch'
import { message } from 'antd'
import * as reduxActions from 'redux-actions'

const { createAction, handleActions: oldHandleActions } = reduxActions

// 创建三种类型ActionType
function createActionType(actionType: String): Object {
    return {
        pending: `pending ${actionType}`,
        accept: `accept ${actionType}`,
        reject: `reject ${actionType}`
    }
}

// 处理get请求参数
function handleGetReqParams(uri: String, obj: Object = {}): String {
    let data = Object.keys(obj).map((item) => (
        item + '=' + obj[item]
    ))
    const query = (Object.keys(obj).length !== 0) ? `?${data.join('&')}` : ''

    return uri + query
}

// 统一封装http请求params参数
function handleReq(uri: String, obj: Object, method: fetchMethod): Object {
    let resp = {}

    switch (method) {
        case 'GET': {
            resp = { url: handleGetReqParams(uri, obj), params: { method: 'GET', credentials: 'same-origin' } }
            break
        }
        case 'PUT':
        case 'DELETE':
        case 'POST': {
            resp = { url: uri, params: { method, data: JSON.stringify(obj), credentials: 'same-origin' } }
            break
        }
        default: {
            resp = { url: '', params: {} }
            break
        }
    }
    return resp
}

// 统一封装Http请求
function fetchApi(req: Object): Promise {
    const { url, params } = req
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('请求下发失败'), 30 * 1000)
        fetch(url, params).then(resolve, reject)
    })
}

// 处理服务端返回数据，code 0表示请求正常，其余一律抛出error msg
function handleResponse(responseData: Object): Any {
    const { code, msg, data } = responseData
    if (code === 0) {
        return data
    }
    message.error(msg)
}

// 创建异步Action
function createAsyncAction(
    uri: String,
    params: Object,
    method?: fetchMethod = 'GET',
): Function {
    const { actions: actionTypes, method: httpMethod } = params
    const [pending, accept, reject] = Object.keys(actionTypes).map((item) => (
        createAction(actionTypes[item])
    ))

    return (obj?: Object) => (disPatch: Function): Promise => {
        disPatch(pending())

        const req = handleReq(uri, obj, httpMethod || method)

        return fetchApi(req)
            .then((response) => response.json())
            .then((responseData) => {
                const data = handleResponse(responseData)
                disPatch(accept(data))
            })
            .catch((err) => {
                disPatch(reject())
                throw err
            })
    }
}

// 处理ActionType，返回newReducer/actions
function ansyHandleFactory(actionType: String = ''): Function {
    return (method: String, newReducer?: Object): Object => {
        const actions = createActionType(`${method} ${actionType}`)
        if (newReducer) {
            const obj = {
                [actions.pending]: newReducer.pending || (state => ({ ...state, loading: true })),
                [actions.accept]: newReducer.accept || (state => ({ ...state, loading: false })),
                [actions.reject]: newReducer.reject || (state => ({ ...state, loading: false }))
            }
            return obj
        }
        return { method, actions }
    }
}

// 统一封装handleActions，返回原生handleActions
function handleActions(...args: Array<Object>): Object {
    const { length } = args
    const initialState = args[length - 1]
    let obj = {}
    for (let i = 0, l = length - 1; i < l; i++) {
        obj = { ...obj, ...args[i] }
    }
    return oldHandleActions(obj, initialState)
}

export {
    ansyHandleFactory,
    createAsyncAction,
    handleActions
}