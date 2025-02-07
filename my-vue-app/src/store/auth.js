import { defineStore } from "pinia";
import { ref } from "vue";

export const userAuthStore=defineStore("auth",()=>{
const isAuthenitcated=ref(false);

const login =()=>{
    isAuthenitcated.value=true;
};

const logout=()=>{
    isAuthenitcated.value=false;
};

return {isAuthenitcated,login,logout};
})
