import i18n from 'i18next'

import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from './languageActions'
export interface LanguageState {
  language: 'en' | 'zh'
  languageList: { name: string; code: string }[]
}

const defaultStore: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' }
  ]
}

export default (state = defaultStore, action:LanguageActionTypes) => {
  if (action.type == CHANGE_LANGUAGE) {
    i18n.changeLanguage(action.payload)
    const newState = { ...state, language: action.payload }
    return newState
  }

  if (action.type == ADD_LANGUAGE) {
    const newState = {
      ...state,
      languageList: [...state.languageList, action.payload]
    }

    return newState
  }
  return state
}
