<template>
  <div class="cont">
    <div class="box">
      <table class="tb">
        <thead>
          <tr class="thr">
            <th class="num">번호</th>
            <th class="name">이름</th>
            <th class="day">작성 날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="notice in notices" :key="notice.id" @click="goToDetail(notice.id)">
            <td class="num">{{ notice.id }}</td>
            <td class="name">{{ notice.title }}</td>
            <td class="day">{{ notice.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import router from '@/router'
const notices = ref([])
onMounted(() => {
  axios.get('http://localhost:3000/api/notices')
    .then(response => {
      notices.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})
const goToDetail = (id) => {
  router.isReady().then(() => {
    router.push(`/notice/${id}`)
  })
}
</script>

<style src='@/css/Notice.css' scoped>
</style>
