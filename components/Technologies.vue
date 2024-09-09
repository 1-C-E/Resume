<script setup lang="ts">
import { Wrench } from 'lucide-vue-next';
</script>

<template>
    <div>
        <div class="headline flex">
            <Wrench class="headline_img" />
            <h2>Технологии</h2>
        </div>

        <section class="mt-[30px] ">

            <figure class="flex justify-center sm:mt-[90px]">
                <NuxtImg src="/technologies/tailwind-white.svg" v-if="$colorMode.value == 'dark'" class="tailwind" />
                <NuxtImg src="/technologies/tailwind-black.svg" v-else class="tailwind" />
            </figure>

            <div class="flex justify-between gap-10 min-[512px]:mt-[25px] sm:mt-[80px]">
                <figure class="mt-auto mb-[58px] min-[512px]:mb-[70px]">
                    <NuxtImg src="/technologies/nuxt-white.svg" v-if="$colorMode.value == 'dark'" class="nuxt" />
                    <NuxtImg src="/technologies/nuxt-black.svg" v-else class="nuxt" />
                </figure>

                <figure>
                    <NuxtImg src="/technologies/react-native-white.svg" v-if="$colorMode.value == 'dark'"
                        class="react_native" />
                    <NuxtImg src="/technologies/react-native-black.svg" v-else class="react_native" />
                </figure>

                <figure class="mt-auto mb-[60px] min-[512px]:mb-[70px]">
                    <NuxtImg src="/technologies/next-white.svg" v-if="$colorMode.value == 'dark'" class="next" />
                    <NuxtImg src="/technologies/next-black.svg" v-else class="next" />
                </figure>
            </div>

            <figure class="flex justify-center min-[512px]:mt-[25px] sm:mt-[80px]">
                <NuxtImg src="/technologies/figma-white.svg" v-if="$colorMode.value == 'dark'" class="figma" />
                <NuxtImg src="/technologies/figma-black.svg" v-else class="figma" />
            </figure>

        </section>
    </div>
</template>