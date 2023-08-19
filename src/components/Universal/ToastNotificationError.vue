<template>
    <div class="bg-red-200 w-96 rounded-lg" v-show="modalActive">
        <div v-if="modalActive">
            <div class="flex font-bold text-red-800 p-3 items-center gap-1">
                <i class="fa-solid fa-circle-xmark text-lg"></i>
                <p>From System:</p>
            </div>
            <div class="border-b-2 border-red-400 w-full"></div>
            <slot />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        modalActive: {
            type:Boolean,
            default: false,
        }
    })
</script>
