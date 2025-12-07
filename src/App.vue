<script setup lang="ts">
import SplashScreen from "./ui/screens/splash/SplashScreen.vue";
import {ref} from "vue";

const isLoading = ref(true)

function onFinish() {
  isLoading.value = false
}
</script>

<template>
  <div class="relative w-full h-screen">
    <SplashScreen class="absolute inset-0 z-100" @finish="onFinish()" />
    <div class="absolute inset-0">
      <RouterView v-if="!isLoading" />
    </div>
  </div>
</template>
