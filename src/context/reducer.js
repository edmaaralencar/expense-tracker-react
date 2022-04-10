import {
  TOGGLE_SIDEBAR,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  GET_TRANSACTIONS_BEGIN,
  GET_TRANSACTIONS_SUCCESS,
  CREATE_TRANSACTION_BEGIN,
  CREATE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_BEGIN,
  DELETE_TRANSACTION_SUCCESS,
  GET_SAVINGS_BEGIN,
  GET_SAVINGS_SUCCESS,
  CREATE_SAVING_BEGIN,
  CREATE_SAVING_SUCCESS,
  DELETE_SAVING_BEGIN,
  DELETE_SAVING_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS
} from './actions'

import { initialState } from './AppContext'

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar
    }
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token
    }
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token
    }
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null
    }
  }

  if (action.type === GET_TRANSACTIONS_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === GET_TRANSACTIONS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      transactions: action.payload.transactions
    }
  }

  if (action.type === CREATE_TRANSACTION_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === CREATE_TRANSACTION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      transactions: [...state.transactions, action.payload.transaction]
    }
  }

  if (action.type === DELETE_TRANSACTION_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === DELETE_TRANSACTION_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      transactions: state.transactions.filter(
        transaction => transaction._id !== action.payload.transaction._id
      )
    }
  }

  if (action.type === GET_SAVINGS_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === GET_SAVINGS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      savings: action.payload.savings
    }
  }

  if (action.type === CREATE_SAVING_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }

  if (action.type === CREATE_SAVING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      savings: [...state.savings, action.payload.saving]
    }
  }

  throw new Error(`no such action : ${action.type}`)
}

export default reducer
