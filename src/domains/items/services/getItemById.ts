import httpClient from '@/infrastructure/axios'
import { Item } from '../types'

const getUrl = (id: number) => `/Item/${id}`

const getItemDetails = async (id: number): Promise<Item | undefined> => {
  try {
    const { data: response } = await httpClient.get<Item>(getUrl(id))

    return response ?? {}
  } catch(error) {
    console.error(error)

    return
  }
}

export default getItemDetails