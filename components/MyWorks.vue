<script setup lang="ts">
import { BriefcaseBusiness } from 'lucide-vue-next';
</script>

<template>
    <div>
        <div class="headline flex">
            <BriefcaseBusiness class="my-auto mr-[10px]" :size="28" />
            <h2>Мои работы</h2>
        </div>

        <section class="flex overflow-x-auto overflow-x: scroll w-[25rem] space-x-[80px] w-full mt-[20px]">
            <NuxtImg src="/screenshots/anytime_1.png" class="screenshots" />
            <NuxtImg src="/screenshots/anytime_2.png" class="screenshots" />
            <NuxtImg src="/screenshots/anytime_sign_up.png" class="screenshots" />
            <NuxtImg src="/screenshots/thoms_1.png" class="screenshots" />
            <NuxtImg src="/screenshots/thoms_mobile.png" class="screenshots h-full my-auto" />
            <NuxtImg src="/screenshots/thoms_mobile_2.png" class="screenshots h-full my-auto" />
            <NuxtImg src="/screenshots/thoms_mobile_3.png" class="screenshots h-full my-auto" />
        </section>
    </div>
</template>