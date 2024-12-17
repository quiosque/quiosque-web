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

    return {
      totalItemCost: 0,
      totalExpensesCost: 0,
      totalSales: 0,
      salesByMonth: []
    }
  }
}

export default getDashData