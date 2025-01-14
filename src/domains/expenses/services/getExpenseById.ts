import httpClient from '@/infrastructure/axios'
import { Expense } from '../types'

const getUrl = (id: number) => `/Expenses/${id}`

const getExpenseDetails = async (id: number): Promise<Expense | undefined> => {
  try {
    const { data: response } = await httpClient.get<Expense>(getUrl(id))

    return response ?? {}
  } catch(error) {
    console.error(error)

    return
  }
}

export default getExpenseDetails