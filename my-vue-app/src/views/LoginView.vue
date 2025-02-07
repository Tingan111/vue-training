<script setup>
import router from '../router';
import { userAuthStore } from '../store/auth';
const authStore=userAuthStore();
</script>
<template>
    <div>
        <h1>登入頁面</h1>
<router-link to="/">回首頁</router-link>
<button @click="authStore.login">登入</button>
</div>
</template>