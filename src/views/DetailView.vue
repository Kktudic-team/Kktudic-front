<template>
  <div class="cont">
    <div class="box" v-if="!isNotice">
      <h2 class="name">존재하지 않는 공지입니다.</h2>
    </div>
    <div class="box" v-else>
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
const isNotice = ref(false)
onMounted(() => {
  const id = route.params.id
  axios.get(`https://kkutudicapi.teamlog.kr/api/notices/${id}`)
    .then(response => {
      notice.value = response.data
      isNotice.value = true
    })
    .catch(error => {
      console.log(error)
      isNotice.value = false
    })
})
</script>

<style src='@/css/Detail.css' scoped>
</style>
