<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  {id: 1,label: "10 party hats"},
  {id: 2,label:"2 board games"},
  {id: 3,label: "20 cups"}
])
const newItem = ref("")
</script>

<template>
<div>
  <input v-model.trim="newItem" type="text" placeholder="Add an item">
 <button v-on:click="items.push({id:items.length + 1,label:newItem})">
  Save item
</button>
<ul v-for="{id,label} in items" :key="id">{{ id }}:{{ label }}</ul>
</div>
</template>
