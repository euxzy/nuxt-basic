<template>
  <div>
    <slot name="header">
      <h1 class="text-4xl">This Header</h1>
    </slot>
    <nav>
      <ul class="flex gap-3">
        <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
      </ul>
    </nav>
    <h1>ini custom layouts</h1>
    <slot />
  </div>
</template>
