<script setup>
import { userAuthStore } from '../store/auth';

const authStore=userAuthStore();
</script>
<template>
    <div>
        <h1>首頁</h1>
<p v-if="authStore.isAuthenitcated">已登入</p>
<p v-else>未登入</p>
        <router-link to="/login">登入</router-link>
        <router-link to="/dashboard">會員中心</router-link>
    </div>
</template>