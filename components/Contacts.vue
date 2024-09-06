<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between px-[80px]">

        <div class="contacts_2">
            <a href="https://t.me/svch_pech" class="contacts">
                <figure>
                    <NuxtImg src="/contacts/telegram-white.svg" v-if="$colorMode.value == 'dark'"
                        class="h-[30px] mr-[5px]" />
                    <NuxtImg src="/contacts/telegram-black.svg" v-else class="h-[30px] mr-[5px]" />
                </figure>
                <h2>Telegram</h2>
            </a>
        </div>

        <div class="contacts_2">
            <a href="https://hh.ru/resume/f76a86e1ff0dacf5130039ed1f69616950716f" class="contacts">
                <figure>
                    <NuxtImg src="/contacts/hh-white.png" v-if="$colorMode.value == 'dark'" class="h-[30px] mr-[5px]" />
                    <NuxtImg src="/contacts/hh-red.png" v-else class="h-[30px] mr-[5px]" />
                </figure>
                <h2>hh.ru</h2>
            </a>
        </div>

        <div class="contacts_2">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScTTzJmHCKJJpRGnJNmnGHzFMjPtpQhgThJqWKjkvcBgKfzSTHGrLFwvXMQrpRmMKDQSL"
                class="contacts">
                <NuxtImg src="/contacts/mail-white.svg" v-if="$colorMode.value == 'dark'" class="h-[30px] mr-[5px]" />
                <NuxtImg src="/contacts/mail-black.svg" v-else class="h-[30px] mr-[5px]" />
                <h2>gmail</h2>
            </a>
        </div>

    </div>
</template>