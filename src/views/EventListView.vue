<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const router = useRouter()

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)
const perPage = computed(() => props.perPage)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / perPage.value)
  return page.value < totalPages
})

const changePageSize = (event: any) => {
  const target = event.target as HTMLSelectElement
  const newPerPage = parseInt(target.value)
  router.push({ 
    name: 'event-list-view', 
    query: { page: 1, perPage: newPerPage } 
  })
}

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(perPage.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="mb-5 text-center">
    <label for="page-size" class="mr-[10px] font-bold">Events per page:</label>
    <select id="page-size" :value="perPage" @change="changePageSize" class="px-[10px] py-[5px] border border-gray-300 rounded cursor-pointer bg-white hover:border-gray-700">
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="10">10</option>
    </select>
  </div>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="flex w-[290px]">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="page != 1"
        class="flex-1 no-underline text-gray-700 text-left"
        >&#60; Prev Page</RouterLink
      >

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNextPage"
        class="flex-1 no-underline text-gray-700 text-right"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>
