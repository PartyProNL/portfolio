<template>
  <div
      class="rounded-3xl h-[500px] bg-core-200 bg-cover bg-center"
      :class="{'col-span-2': !project.isGridVertical}"
      :style="{backgroundImage: `url('${project.gridImageUrl}')`}"
  >

  </div>
</template>

<script setup lang="ts">
import type {Project} from "../../../domain/project/model/Project.ts";

interface Props {
  project: Project,
}

defineProps<Props>()
</script>
