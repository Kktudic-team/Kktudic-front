<template>
    <div class="cont">
        <div class="box">
            <div class="inputs">
              <input @keyup.enter="search" type="text" v-model="startWord" placeholder="시작 단어">
              <input @keyup.enter="search" type="text" v-model="missionWord" placeholder="미션 단어">
              <button @click="search">검색</button>
            </div>
            <p v-if="!sec">단어를 검색해주세요!</p>
            <p v-else>{{ sec }}초 소요됨</p>
            <div class="outputs">
              <ul>
                <li class="out" v-for="(d, idx) in state.word" :key="idx">
                  <h3>{{ d }}</h3>
                  <span>단어 길이: {{ d.length-1 }}  |  미션 단어 갯수: {{ state.count[idx] }}</span>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const state = reactive({
  word: [],
  count: []
})

const startWord = ref('')
const missionWord = ref('')
const sec = ref('')

const search = async () => {
  if (!startWord.value) {
    return
  }
  document.querySelector('input[type="text"]').focus()
  try {
    const { data } = await axios.post('https://port-0-kktudic-backend-r8xoo2mlefs9qly.sel3.cloudtype.app/api/submit', {
      startWord: startWord.value,
      missionWord: missionWord.value
    })
    state.word = data.word
    state.count = data.count
    sec.value = data.time
    startWord.value = ''
    missionWord.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>

<style src='@/css/Home.css' scoped>
</style>
