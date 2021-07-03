// useReducer 单个组件中对参数使用进行抽离，方便方法复用管理
export const hanleUseReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        console.log(state);
        return { ...state, nums: state.nums + 1 }
      case 'reduce':
        return { ...state, nums: state.nums - 1 }
      default:
        return state
    }
  }