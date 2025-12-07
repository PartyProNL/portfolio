<template>
  <div class="w-full h-screen relative flex justify-center items-center pointer-events-none">
    <div class="absolute inset-0 w-full h-full flex">
      <div class="pointer-events-auto w-full h-full bg-core-900" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-100" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-200" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-300" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-400" :class="{'reveal': finished}" />
      <div class="pointer-events-auto w-full h-full bg-core-900 animation-delay-500" :class="{'reveal': finished}" />
    </div>

    <div class="relative font-normal text-5xl text-core-300" :class="{'fade-out': finished}">
      <div class="flex items-center gap-4">
        <p>Loading</p>

        <div class="h-1 w-16 bg-core-300" />

        <p class="w-16">{{ progress }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const emit = defineEmits(["finish"])
const finished = ref(false)
const progress = ref(0)

function start() {
  increaseProgress()

  setTimeout(() => {
    emit("finish");
    finished.value = true
  }, 2000)
}

function increaseProgress() {
  if (progress.value != 100) {
    setTimeout(() => {
      progress.value++
      increaseProgress()
    }, 10)
  }
}

start()
</script>

<style scoped>
@keyframes reveal {
  0% {
    height: 100%;
  }
  100% {
    height: 0;
  }
}

.reveal {
  animation-name: reveal;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(.13,.43,.31,1);
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
}

.fade-out {
  animation-name: fade-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
