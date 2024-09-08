<script setup lang="ts">
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

import { MapPin } from 'lucide-vue-next';
</script>

<template>
    <div class="flex justify-between pt-[70px]">
        <section class="flex">
            <div>
                <NuxtImg src="/photo.png"
                    class="max-h-[140px] rounded-[100px] p-[3px] border-[#64D98A] border-[3px]" />
            </div>

            <section class="ml-[30px]">
                <h2 class="dark:text-[#FFFFFF] text-[40px] font-bold">
                    Валентин Питенев
                </h2>
                <h2 class="text-[#949494] text-[24px]">
                    frontend разработчик
                </h2>
                <div class="flex mt-[15px] dark:text-[#FFFFFF]">
                    <MapPin :size="15" class="mt-[4px]" />
                    <h2 class="text-[15px] ml-[3px]">Москва</h2>
                </div>
            </section>
        </section>

        <button class="mt-[18px] mb-auto" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd" />
            </svg>
        </button>
    </div>
</template>