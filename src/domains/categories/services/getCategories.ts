import httpClient from '@/infrastructure/axios'
import { Category } from '../types'

const endpoint: string = '/Category'

const getCategories = async (): Promise<Category[]> => {
  try {
    const { data: response } = await httpClient.get<Category[]>(`${endpoint}`)

    return response ?? []
  } catch(error) {
    console.error(error)

    return []
  }
}

export default getCategories