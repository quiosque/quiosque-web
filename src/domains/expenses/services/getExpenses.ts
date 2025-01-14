import httpClient from '@/infrastructure/axios'
import { Expense, ExpensesResponseData } from '../types'

const endpoint: string = '/Expenses'

const getExpenses = async (): Promise<Expense[]> => {
  try {
    const { data: response } = await httpClient.get<ExpensesResponseData>(`${endpoint}`)

    return response.expenses ?? []
  } catch(error) {
    console.error(error)

    return []
  }
}

export default getExpenses