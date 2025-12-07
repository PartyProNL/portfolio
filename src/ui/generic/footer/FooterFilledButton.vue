<template>
  <a :href="url" class="bg-core-700 rounded-full py-3 pl-4 pr-5 flex items-center gap-2 text-core-300 text-md font-medium hover:bg-core-800 transition-colors">
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  url: string;
}

defineProps<Props>()
</script>
