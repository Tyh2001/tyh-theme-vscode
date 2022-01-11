<template>
  <div>
    <Bar />
    <div class="home_box">
      <!-- <van-field v-model="SOEID" placeholder="PLEASE ENTER YOUR SOEID" /> -->
      <tyh-input
        size="large"
        v-model="SOEID"
        placeholder="PLEASE ENTER YOUR SOEID"
      />

      <tyh-button
        :disabled="btndisabled"
        class="onLogin"
        type="primary"
        @click="change"
      >
        ENTER
      </tyh-button>
      <img class="banner" src="" />
    </div>
  </div>
</template>

<script setup>
import Bar from '@/components/Bar.vue'
import { ref } from 'vue'
import { onLogin } from '@/api/user'
import qs from 'qs'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Toast } from 'vant'
import { toDates } from '@/utils/changeTime'
const SOEID = ref('')
const btndisabled = ref(false)
const router = useRouter()
const store = useStore()
async function change () {
  if (SOEID.value === '') {
    Toast('Please enter SOEID')
    return
  }
  Toast.loading({
    message: 'Loading...',
    forbidClick: true,
    loadingType: 'spinner',
  })
  btndisabled.value = true
  const { data } = await onLogin(qs.stringify({ SOEID: SOEID.value, time: toDates(Date.parse(new Date())) }))
  console.log(data)
  if (data.code === 201) {
    Toast(data.msg)
    btndisabled.value = false
    store.commit('changeSOEID', SOEID.value)
    router.push('/vote')
    return
  } else if (data.code === 301) {
    router.push('/list')
    btndisabled.value = false
    return
  }
  Toast('Error')
  btndisabled.value = false
}
</script>

<style scoped>
.home_box {
  width: 80vw;
  margin: auto;
}
.home_box .tyh-input {
  width: 100%;
  height: 47px;
  margin-top: 65px;
  border-radius: 5px;
}
</style>