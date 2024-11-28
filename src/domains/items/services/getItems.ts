import httpClient from '@/infrastructure/axios'
import { Item, ItemsResponseData } from '../types'

const endpoint: string = '/Item'

const getItems = async (): Promise<Item[]> => {
  try {
    const { data: response } = await httpClient.get<ItemsResponseData>(`${endpoint}`)

    return response.items ?? []
  } catch(error) {
    console.error(error)

    return []
  }
}

export default getItems