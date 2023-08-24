<template>
    <div class="flex flex-col h-screen max-w-[5%] bg-Golds-Gym-Yellow rounded-r-lg">
        <img src="../../assets/images/Gold's_Gym_Logo.png" class="p-4" />
        <nav class="flex flex-col justify-between mt-8 h-screen">
            <div class="flex flex-col">
                <div :class="{'bg-light' : isDashboardRoute}" class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-object-group text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Dashboard</ul>
                </div>
                <div class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-user text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Members</ul>
                </div>
                <div class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-money-bill-1 text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Billing</ul>
                </div>
                <div class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-compass text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Website</ul>
                </div>
            </div>



            <div class="flex flex-col gap-3 mb-5">
                <div class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-id-card text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Account</ul>
                </div>
                <div class="flex flex-col items-center hover:bg-Golds-Gym-Light p-3 transition-all ease-in">
                    <i class="fa-regular fa-circle-question text-[1.75rem]"></i>
                    <ul class="font-semibold text-sm">Help</ul>
                </div>
            </div>

        </nav>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import {onMounted, computed} from 'vue'

const route = useRoute();
const isDashboardRoute = computed(() => route.name === 'dashboard');

const checkRouteLocation = () => {
    const path = route.path;
    console.log(path);
}

onMounted(() =>{
    checkRouteLocation();
})


</script>

<style>
.bg-light {
  background-color: #fff680; 
  border-left-color: black;
  border-left-style: solid;
  border-left-width: 5px;
}
</style>
