export async function getSingleProduct(id: number) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении продуктов:", error);
    throw new Error("Не удалось получить продукты");
  }
}
