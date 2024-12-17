import httpClient from '@/infrastructure/axios'
import { ProductsResponse } from '../types'

const endpoint: string = '/Product'

const getProducts = async (): Promise<ProductsResponse[]> => {
  try {
    const { data: response } = await httpClient.get<ProductsResponse[]>(`${endpoint}`)

    return response ?? []
  } catch(error) {
    console.error(error)

    return []
  }
}

export default getProducts