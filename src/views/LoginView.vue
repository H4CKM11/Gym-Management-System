<template>
    <div class="bg-slate-100 h-screen flex justify-center items-center">

                <div class="flex shadow-2xl min-w-[50%] 1920res:min-h-[60%] 2500res:min-h-[50%]">

                    <!-- Login Sign -->
                    <div class="bg-white w-[40%] flex flex-col justify-center p-12">
                        <div class="w-[85%] ">
                            <div class="flex items-center justify-center"><img src="../assets/images/Gold's_Gym_Logo.png" class="w-32"/></div>
                            <div class="flex flex-col mt-8 gap-8">
                                    <p class="text-3xl text-gray-600 font-bold">Login</p>
                                    <input type="text" v-model="username" class=" border-b-2 focus:outline-none" id="username" placeholder="Enter your username">
                                    <input type="password" v-model="password" class=" border-b-2 focus:outline-none" id="password" placeholder="Enter your password">
                            </div>
                            <p class="text-right hover:text-black hover:cursor-pointer text-gray-600 mt-2">Forgot Password?</p>
                            <button class="bg-Golds-Gym-Yellow text-gray-700 font-bold py-2 px-4 rounded w-full mt-8" @click="submitForm()">Log In</button>
                            <p class="mt-3 text-center">Don't have an account? Register</p>
                        </div>
                    </div>

                    <!-- Image -->
                    <img src="../assets/images/image2.jpg" class=" w-[60%] object-cover object-center"/>
                </div>
        
    </div>
</template>

<script setup>
import {ref} from 'vue'
const username = ref("");
const password = ref("");
const submitForm = () => {
    console.log(username.value, password.value);
}
</script>

<style>
/* Target autofill background */
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}

/* Override autofill text color */
input:-webkit-autofill::first-line {
  color: #000; /* Change text color as needed */
}
</style>

