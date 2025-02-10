<script setup>
import {ref} from 'vue';
const title=ref('標題')
const items=ref({
  1:{id:1,label:'內容一'},
  2:{id:1,label:'內容二'},
  3:{id:1,label:'內容三'},
})
</script>
<template>
<h1>{{title}}</h1>
<ul>
  <li v-for="({id,label},index) in items" :key="id">{{index}}{{label}}</li>
</ul>

</template>