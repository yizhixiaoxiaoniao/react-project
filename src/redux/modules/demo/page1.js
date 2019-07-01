import { createAsyncAction, ansyHandleFactory, handleActions } from '../../../utils/actionFactory'

const url = '/api'

const getTable1DataActionType: Function = ansyHandleFactory('GET_TABLE1_DATA')

const page1Redux = handleActions(
    getTable1DataActionType('GET', {
        pending: (state) => ({ ...state, loading: true }),
        accept: (state, action) => ({ ...state, loading: false, table1Data: action.payload })
    }),
    {
        table1Data: [],
        table1DataLoading: false,
        loading: false
    }
)

export default page1Redux

type getTable1DataParams = {}

export const getTable1DataAction: (obj: getTable1DataParams) => any = createAsyncAction(
    `${url}/getTable1Data`,
    getTable1DataActionType('GET')
)