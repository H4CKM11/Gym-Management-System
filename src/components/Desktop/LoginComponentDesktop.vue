<template>
        <div class="flex shadow-2xl min-w-[50%] 1920res:min-h-[60%] 2500res:min-h-[50%]">

            <!-- Login Sign -->
            <div class="bg-white w-[40%] flex flex-col justify-center p-12">
                <div class="w-[85%] ">
                    <div class="flex items-center justify-center"><img src="../../assets/images/Gold's_Gym_Logo.png" class="w-32"/></div>
                    <div class="flex flex-col mt-8 gap-8">
                            <p class="text-3xl text-gray-600 font-bold">Login</p>
                            <input type="text" v-model="username" class=" border-b-2 focus:outline-none" id="username" placeholder="Enter your username">
                            <input type="password" v-model="password" @keyup.enter="submitForm" class=" border-b-2 focus:outline-none" id="password" placeholder="Enter your password">
                    </div>
                    <p class="text-right hover:text-black hover:cursor-pointer text-gray-600 mt-2">Forgot Password?</p>
                    <button class="bg-Golds-Gym-Yellow text-gray-700 font-bold py-2 px-4 rounded w-full mt-8" @click="submitForm">Log In</button>
                </div>
            </div>

            <!-- Image -->
            <img src="../../assets/images/image2.jpg" class=" w-[60%] object-cover object-center"/>
        </div>


          <Teleport to="body">
            <div class="fixed bottom-16 right-16">
                <ToastNotificationError :modalActive="modalErrorActive">
                  <div class="p-4 font-semibold text-red-800">{{ message }}</div>
                </ToastNotificationError>
            </div>
          </Teleport>

          <Teleport to="body">
            <div class="fixed bottom-16 right-16">
                <ToastNotificationOk :modalActive="modalOkActive">
                  <div class="p-4 font-semibold text-green-800">{{ message }}</div>
                </ToastNotificationOk>
            </div>
          </Teleport>

</template>


<!-- Logic -->
<script setup>
import axios from "axios";
import {ref} from "vue"
import ToastNotificationError from '../Universal/ToastNotificationError.vue'
import ToastNotificationOk from "../Universal/ToastNotificationOk.vue";
import router from "../../router";

const username = ref("");
const password = ref("");
const message = ref("");

const modalErrorActive = ref(null);
const modalOkActive = ref(null);

const toggleErrorModal = () => {
    modalErrorActive.value = !modalErrorActive.value;
}

const toggleOkModal = () => {
  modalOkActive.value = !modalOkActive.value;
}


const submitForm = async () => {

  const data = {
                username: username.value,
                password: password.value
            }


  try{
    const response = await axios.post("http://localhost:5205/Employee/Login", data);

    console.log(response.data.success);
    if(response.data.success)
    {
      message.value = response.data.message;
      toggleOkModal();
      modalOkTimeOut();
    }
  }
  catch (error) {
    message.value = error.response.data.message
    console.log(message.value);
    toggleErrorModal ();
    console.log(modalErrorActive.value);
    modalErrorTimeOut();
  }
}

const modalErrorTimeOut = () =>
{
  setTimeout(() => {
    toggleErrorModal()},
    5000
);

  console.log(modalErrorActive.value)
}

const modalOkTimeOut = () =>
{
  setTimeout(() => {
    toggleOkModal();
    router.push('/dashboard');},
    2500
);
}


</script>




<!-- Extra Style -->
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
