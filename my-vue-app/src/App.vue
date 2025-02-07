<script setup>
//當你使用 ref 時，它會回傳一個 帶有 .value 屬性的物件，這個 .value 存放的是你想要的數據。
import {ref,computed} from "vue";
import CountdownTimer from "./components/CountdownTimer.vue";
import router from "./router";

const currenTime =ref(new Date().toLocaleTimeString());
setInterval(()=>{
  currenTime.value=new Date().toLocaleTimeString();
},1000)
  //顯示現在時間
  //先設一個常數time指定 現在時間
  //用setIntersavl計時器 每過1秒更新一次時間


//引入import 要加入computed 

const number=ref(0);
const square=computed(()=>number.value ** 2);
const cube=computed(()=>number.value ** 3);
const resetNumber=(()=>{number.value=0})
//定義常數number 使用ref存放0
//v-model="number"：讓 <input> 與 number 變數雙向綁定，輸入變數會自動更新。
//computed()：自動計算 number 的平方和立方，當 number 改變時，Vue 會自動更新這些值。

const onTimerFinsh=()=>{
  alert("時間到！")
}
</script>

<template>
<router-view />
<h1>現在時間{{currenTime}}</h1>
<div>
<input type="number" v-model="number" />

<p>平方：{{square}}</p>
<p>三次方：{{cube}}</p>
<button @click="resetNumber">重置</button>
<CountdownTimer :seconds="10" @finished="onTimerFinsh"/>
</div>
</template>

<style scoped>

</style>


