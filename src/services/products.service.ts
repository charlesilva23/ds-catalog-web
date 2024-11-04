import baseURL from "@/utils/baseURL";
import { ICategoriesResponseDTO, IProductsResponseDTO } from "@/utils/products"
import axios from "axios"

const base = "products";

export const getProducts = async () => {
  const response = await axios.get<IProductsResponseDTO>(`${baseURL}/${base}`)
  return response.data
}

export const getCategories = async () => {
  const response = await axios.get<ICategoriesResponseDTO>(`${baseURL}/categories`)
  return response.data
}