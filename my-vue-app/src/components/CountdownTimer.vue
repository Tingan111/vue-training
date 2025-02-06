<script setup>
import {ref ,onMounted,onUnmounted } from "vue";
const props=defineProps({ seconds:Number });

const emit=defineEmits(["finished"])

const timeLeft= ref(props.seconds);

let timer=null;
onMounted(()=>{
    timer=setInterval(()=>{
        if(timeLeft.value>0){
        timeLeft.value--;
        }else{
        clearInterval(timer);
        emit("finished");
        }
    },1000);
})

onUnmounted(()=>{
    clearInterval(timer)
})
</script>
<template>
    <div>
        <h3>剩餘時間：{{ timeLeft }}秒</h3>
    </div>
</template>