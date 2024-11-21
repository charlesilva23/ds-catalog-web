import baseURL from "@/utils/baseURL"
import { ICategoriesResponseDTO } from "@/utils/categories";
import axios from "axios"


const base = "categories";

export const getCategories = async () => {
  const response = await axios.get<ICategoriesResponseDTO>(`${baseURL}/${base}`)
  return response.data
}