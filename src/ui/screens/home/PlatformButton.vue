<template>
  <div
      class="cursor-pointer group flex items-center gap-1.5 pl-4 pr-5 py-2.5 border-2 border-core-200 rounded-full hover:bg-core-200 transition-colors"
      :class="{ 'bg-core-900 hover:bg-core-900 border-core-900 text-core-50': selected }"
  >
    <slot />

    <p class="font-medium text-md">{{ name }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string,
  selected: boolean,
}

defineProps<Props>();
</script>
