<script setup lang="ts">
import { BriefcaseBusiness, MoveRight, Minus } from 'lucide-vue-next';
</script>

<template>
    <div>
        <div class="headline flex">
            <BriefcaseBusiness class="headline_img" />
            <h2>Мои работы</h2>
            <Minus class="headline_arrow ml-[40px]" />
            <Minus class="headline_arrow" />
            <MoveRight class="headline_arrow ml-[4px]" />
        </div>

        <section class="flex overflow-x-auto overflow-x: scroll-smooth no-scrollbar space-x-[80px] w-full mt-[20px]">
            <NuxtImg src="/screenshots/anytime_1.png" class="screenshots" />
            <NuxtImg src="/screenshots/anytime_2.png" class="screenshots" />
            <NuxtImg src="/screenshots/anytime_sign_up.png" class="screenshots" />
            <NuxtImg src="/screenshots/thoms_1.png" class="screenshots" />
            <NuxtImg src="/screenshots/thoms_mobile.png" class="screenshots my-auto screenshots_2" />
            <NuxtImg src="/screenshots/thoms_mobile_2.png" class="screenshots my-auto screenshots_2" />
            <NuxtImg src="/screenshots/thoms_mobile_3.png" class="screenshots my-auto screenshots_2" />
        </section>
    </div>
</template>