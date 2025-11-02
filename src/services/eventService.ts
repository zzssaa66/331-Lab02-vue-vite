import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export function getEvents(perPage: Number, page: Number) {
  return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
}

export function getEvent(id: number) {
  return apiClient.get('/events/' + id)
}

const EventService = {
  getEvents,
  getEvent
}

export default EventService