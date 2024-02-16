import { configureStore } from "@reduxjs/toolkit"
import basketSlice from "./slices/basketSlice"

// Конфигурируем наш store, пока не ебет как это работает, просто запоминаем как передать slice (reducer: basketSlice.reducer)
const store = configureStore({
  reducer: basketSlice.reducer,
})


// экспортируем стор, чтобы получить доступ к нему в компонентах
export default store