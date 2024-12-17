import httpClient from '@/infrastructure/axios'
import { ProductDetails } from '../types'

const getUrl = (id: number) => `/Product/${id}`

const getProductDetails = async (id: number): Promise<ProductDetails | undefined> => {
  try {
    const { data: response } = await httpClient.get<ProductDetails>(getUrl(id))

    return response ?? {}
  } catch(error) {
    console.error(error)

    return
  }
}

export default getProductDetails