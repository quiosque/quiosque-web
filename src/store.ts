// src/store/quiosque.ts
import { create } from 'zustand'

interface User {
  id: number
  name: string
  email: string
  store_id: string 
}

interface QuiosqueState {
  user: User | null       
  store_id: string | null 
  setUser: (userData: User) => void   
  clearUser: () => void             
}


export const useQuiosqueStore = create<QuiosqueState>((set) => ({
  user: null,
  store_id: null,
  setUser: (userData) => set(() => ({
    user: userData,
    store_id: userData.store_id
  })),
  clearUser: () => set(() => ({
    user: null,
    store_id: null
  })),
}))
