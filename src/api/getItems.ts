import { IProduct } from "../models/model";

export function getProducts(): Promise<IProduct[]> {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .catch(e => console.error('ошибка getProducts ', e))
} 

