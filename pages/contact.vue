<script lang="ts" setup>
definePageMeta({
  // layout: 'custom',
  layout: false,
})

// const setLayoutToDefault = () => {
//   setPageLayout('default')
// }
</script>

<template>
  <div>
    <!-- <h1>ini page contact</h1>
      <button @click="setLayoutToDefault">Return default layout</button> -->
    <NuxtLayout name="custom">
      <template #header>
        <div>Test</div>
      </template>
      <h1>ini page contact</h1>
    </NuxtLayout>
  </div>
</template>
