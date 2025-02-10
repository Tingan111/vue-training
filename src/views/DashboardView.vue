<script setup>
import { userAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';
const authStore=userAuthStore();
const router=useRouter();
//如果未登入,導回登入頁面
if(!authStore.isAuthenitcated){
  router.push("/login")
}
</script>
<template>
  <div>
<h1>會員中心</h1>
<router-link to="/">回首頁</router-link>
<button @click="authStore.logout">登出</button>
  </div>
</template>