<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventDetails from '@/components/EventDetails.vue'
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'
import { eventService } from '@/services/eventService'

const events = ref<Event[]>([])

onMounted(async () => {
  try {
    events.value = await eventService.getEvents()
  } catch (error) {
    console.error('Failed to fetch events:', error)
  }
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <EventDetails v-for="event in events" :key="`details-${event.id}`" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
