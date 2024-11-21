import { ICategoriesDTO } from "./categories"


export interface IProductsRecordDTO {
  id: number,
  name: string,
  description: string,
  price: number,
  imgUrl: string,
  date: Date,
  categories: ICategoriesDTO[]
}

export interface IProductsResponseDTO {
  content: IProductsRecordDTO[],
  totalElements: number,
  totalPages: number,
  size: number,
  number: number,
  first: number,
  last: number,
  empty: boolean
}



