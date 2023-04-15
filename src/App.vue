<template>
  <div>
    <HeaderItem />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script setup>
import HeaderItem from './components/HeaderItem.vue'
</script>
