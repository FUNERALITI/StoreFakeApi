import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../models/model';

export interface BasketState {
  value: IProduct[]
}

const initialState: BasketState = {
  value: []
}

// создаем кусок пиццы в Redux
const basketSlice = createSlice({
  name: 'basket',
  // инициализируем дефолтное состояние
  initialState: initialState,
  // reducers - функции для изменения нашего состояния basket
  reducers: {
    // функция добавления в стейт basket нового элемента 
    // параметр {state} - всегда идет первым в reducers'ах чтобы мы могли работать с нашим state в данном случае это basket
    // параметр {action} - объект, который имеет два поля:
    //             {payload} - здесь данные, которые мы передаем в функцию, в нашем случае это продукт: IProduct
    //             {type} - какой-то тип, нас пока не ебет, работает только с payload TODO: посмотреть что такое type
    addProductToBasket: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },
    removeProductBasket: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter(el => el.id !== action.payload)
    }

  }
})
// экспортируем наши методы(reducers) чтобы иметь к ним доступ в компонентах
export const { addProductToBasket, removeProductBasket } = basketSlice.actions


// экспортируем наш слайс(кусок пиццы), чтобы в сторе его положить в нашу коробку пиццы и создать единое хранилище
export default basketSlice