<template>
  <div class="cont">
    <div class="box">
      <h1 class="name">{{ notice.title }}</h1>
      <p class="day">{{ notice.createdAt }}</p>
      <span class="content" v-html="notice.content"></span>
      <div class="back" @click="$router.push('/notice')">
        <img src="/assets/Back_arrow.svg" alt="Back-arrow">
        <span>뒤로가기</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'
const route = useRoute()
const notice = ref({})
onMounted(() => {
  const id = route.params.id
  axios.get(`https://kkutudicapi.teamlog.kr/notices/${id}`)
    .then(response => {
      notice.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})
</script>

<style src='@/css/Detail.css' scoped>
</style>
