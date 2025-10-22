import type { Event } from '@/types'

const API_BASE_URL = 'https://my-json-server.typicode.com/zzssaa66/vue-events-mock-api'

export const eventService = {
  async getEvents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/events`)
    return response.json()
  },
  
  async getEvent(id: number): Promise<Event> {
    const response = await fetch(`${API_BASE_URL}/events/${id}`)
    return response.json()
  }
}