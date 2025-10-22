<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details {
  text-align: right;
}
.event-details p {
  font-size: 16px;
  margin: 5px 0;
}
</style>