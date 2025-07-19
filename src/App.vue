<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/counter">Contador</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>
<style>
nav a {
  margin-right: 1rem;
}
</style>
