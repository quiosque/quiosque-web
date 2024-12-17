import httpClient from '@/infrastructure/axios'
import { DashData } from '../types'

const endpoint: string = '/Dashboard'

const getDashData = async (): Promise<DashData> => {
  try {
    const { data: response } = await httpClient.get<DashData>(`${endpoint}`, {
      data: {
        year: '2024'
      }
    })

    return response ?? {}
  } catch(error) {
    console.error(error)

    return {}
  }
}

export default getDashData