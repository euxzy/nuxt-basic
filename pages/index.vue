<script lang="ts" setup>
const { loading, loadingTitle, hideLoading } = useLoading()
</script>

<template>
  <div>
    <h1 class="text-blue-800">ini page home</h1>

    <div v-if="loading">{{ loadingTitle }}</div>

    <button @click="hideLoading">Button loading</button>
  </div>
</template>
