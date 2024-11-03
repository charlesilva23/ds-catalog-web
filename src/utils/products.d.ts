

export interface ICategoriesDTO {
  id: number,
  name: string
}

export interface IProductsRecordDTO {
  id: number,
  name: string,
  description: string,
  price: number,
  imgUrl: string,
  date: Date,
  categories: 
    {
      id: number,
      name: string
    }
}



