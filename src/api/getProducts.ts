import { IProduct } from "../models/model";

export async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error);
    throw new Error('Не удалось получить продукты');
  }
}