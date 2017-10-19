export const INCREMENT = 'about/INCREMENT'
export const DECREMENT = 'about/DECREMENT'
export const RESET_COUNT = 'about/RESET_COUNT'
export const TOGGLE_DRAWER = 'about/TOGGLE_DRAWER'

const initialState = {
  count: 0,
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        }
      case RESET_COUNT:
        return {
          ...state,
          count: 0
        }
      case TOGGLE_DRAWER:
        return {
          ...state,
          isOpen: !this.isOpen
        }
      default:
        return state
    }
  }

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT
    })
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT
    })
  }
}

export const resetCount = () => {
  return dispatch => {
    dispatch({
      type: RESET_COUNT
    })
  }
}

export const toggleDrawer = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_DRAWER
    })
  }
}
