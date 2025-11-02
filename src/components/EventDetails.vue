<script setup lang="ts">
import type { Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="text-right">
    <p class="text-base my-[5px]">{{ event.category }}</p>
    <p class="text-base my-[5px]">{{ event.organizer }}</p>
  </div>
</template>