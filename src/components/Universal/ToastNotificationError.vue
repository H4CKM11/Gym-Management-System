<template>
        <Transition name="slide-fade">
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
        </Transition>
</template>

<script setup>
    defineProps({
        modalActive: {
            type:Boolean,
            default: false,
        }
    })
</script>

<style>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
