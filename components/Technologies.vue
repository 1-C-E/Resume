<script setup lang="ts">
import { Wrench } from 'lucide-vue-next';
</script>

<template>
    <div>
        <div class="headline flex">
            <Wrench class="my-auto mr-[10px]" :size="28" />
            <h2>Технологии</h2>
        </div>

        <section class="mt-[30px] ">

            <figure class="flex justify-center mt-[90px]">
                <NuxtImg src="/technologies/tailwind-white.svg" v-if="$colorMode.value == 'dark'"
                    class="technologies" />
                <NuxtImg src="/technologies/tailwind-black.svg" v-else class="technologies" />
            </figure>

            <div class="flex justify-between mt-[80px]">
                <figure class="mt-auto mb-[70px]">
                    <NuxtImg src="/technologies/nuxt-white.svg" v-if="$colorMode.value == 'dark'"
                        class="technologies" />
                    <NuxtImg src="/technologies/nuxt-black.svg" v-else class="technologies" />
                </figure>

                <figure>
                    <NuxtImg src="/technologies/react-native-white.svg" v-if="$colorMode.value == 'dark'"
                        class="h-[150px]" />
                    <NuxtImg src="/technologies/react-native-black.svg" v-else class="h-[150px]" />
                </figure>

                <figure class="mt-auto mb-[70px]">
                    <NuxtImg src="/technologies/next-white.svg" v-if="$colorMode.value == 'dark'"
                        class="h-[38px]" />
                    <NuxtImg src="/technologies/next-black.svg" v-else class="h-[38px]" />
                </figure>
            </div>

            <figure class="flex justify-center mt-[80px]">
                <NuxtImg src="/technologies/figma-white.svg" v-if="$colorMode.value == 'dark'" class="technologies" />
                <NuxtImg src="/technologies/figma-black.svg" v-else class="technologies" />
            </figure>
                     
        </section>
    </div>
</template>