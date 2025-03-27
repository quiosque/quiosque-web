// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import httpClient from '@/infrastructure/axios'
import { ProductsResponse } from '../types'

const endpoint: string = 'products'

const getProducts = async (): Promise<ProductsResponse[]> => {
  try {
    const { data: response } = await httpClient.get<ProductsResponse[]>(`/Store/${Quiosque.store_id}/${endpoint}`)

    return response ?? []
  } catch(error) {
    console.error(error)

    return []
  }
}

export default getProducts