import { createStore } from 'redux'
import languageReducer from './language/languageReducer'
const store = createStore(languageReducer)
console.log(store)
export type RootState = ReturnType<typeof store.getState>
export default store
