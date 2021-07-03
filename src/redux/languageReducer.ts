import { createAction, handleActions } from 'redux-actions'

export interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export const change_language = createAction('CHANGE_LANGUAGE')

const handleActionsThing = handleActions<LanguageState>(
  {
    CHANGE_LANGUAGE: (state, action) => ({
      ...state,
      language: action.payload as any
    })
  },
  defaultState
)

// export default (state = defaultState, action) => {
//   if (action.type == 'change_language') {
//     // 通过组件的中store.dispatch() 来触发到这里
//     const newSate = { ...state, language: action.payload }
//     return newSate
//   }
//   return state
// }

export default handleActionsThing
