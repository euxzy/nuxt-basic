<template>
  <header>
    <nav>
      <h1>hello</h1>
      <ul class="flex gap-3">
        <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
