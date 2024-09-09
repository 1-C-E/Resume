<script setup lang="ts">

</script>

<template>
    <div class="flex min-[601px]:justify-between sm:px-[50px] max-[600px]:grid max-[600px]:grid-cols-2 gap-[10px]">

        <div>
            <a class="contacts" href="https://t.me/svch_pech">
                <figure>
                    <NuxtImg src="/contacts/telegram-white.svg" v-if="$colorMode.value == 'dark'"
                        class="contacts_img" />
                    <NuxtImg src="/contacts/telegram-black.svg" v-else class="contacts_img" />
                </figure>
                <h2 class="contacts_name">telegram</h2>
            </a>
        </div>

        <div>
            <a class="contacts" href="https://hh.ru/resume/f76a86e1ff0dacf5130039ed1f69616950716f">
                <figure>
                    <NuxtImg src="/contacts/hh-white.png" v-if="$colorMode.value == 'dark'" class="contacts_img" />
                    <NuxtImg src="/contacts/hh-red.png" v-else class="contacts_img" />
                </figure>
                <h2 class="contacts_name">hh.ru</h2>
            </a>
        </div>

        <div>
            <a class="contacts" href="mailto:pitenev357@gmail.com">
                <NuxtImg src="/contacts/mail-white.svg" v-if="$colorMode.value == 'dark'" class="contacts_img" />
                <NuxtImg src="/contacts/mail-black.svg" v-else class="contacts_img" />
                <h2 class="contacts_name">gmail</h2>
            </a>
        </div>

        <div>
            <a class="contacts" href="https://github.com/1-C-E">
                <NuxtImg src="/contacts/git-white.svg" v-if="$colorMode.value == 'dark'" class="contacts_img" />
                <NuxtImg src="/contacts/git-black.svg" v-else class="contacts_img" />
                <h2 class="contacts_name">github</h2>
            </a>
        </div>

    </div>
</template>