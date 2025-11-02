<script setup lang="ts">
import type { Student } from '@/types'
defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-class">
    <div class="p-5 w-[250px] cursor-pointer border border-gray-600 mb-[18px] bg-gray-50 hover:scale-101 hover:shadow-lg">
      <h2 class="mb-[10px] text-gray-700">{{ student.name }} {{ student.surname }}</h2>
      <span class="font-bold text-green-600">GPA: {{ student.gpa }}</span>
    </div>
  </div>
</template>