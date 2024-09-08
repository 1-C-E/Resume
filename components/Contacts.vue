<script setup lang="ts">

</script>

<template>
    <div class="flex justify-between px-[50px]">

        <div>
            <a class="contacts" href="https://t.me/svch_pech">
                <figure>
                    <NuxtImg src="/contacts/telegram-white.svg" v-if="$colorMode.value == 'dark'"
                        class="h-[30px] mr-[5px]" />
                    <NuxtImg src="/contacts/telegram-black.svg" v-else class="h-[30px] mr-[5px]" />
                </figure>
                <h2>telegram</h2>
            </a>
        </div>

        <div>
            <a class="contacts" href="https://hh.ru/resume/f76a86e1ff0dacf5130039ed1f69616950716f">
                <figure>
                    <NuxtImg src="/contacts/hh-white.png" v-if="$colorMode.value == 'dark'" class="h-[30px] mr-[5px]" />
                    <NuxtImg src="/contacts/hh-red.png" v-else class="h-[30px] mr-[5px]" />
                </figure>
                <h2>hh.ru</h2>
            </a>
        </div>

        <div>
            <a class="contacts"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScTTzJmHCKJJpRGnJNmnGHzFMjPtpQhgThJqWKjkvcBgKfzSTHGrLFwvXMQrpRmMKDQSL">
                <NuxtImg src="/contacts/mail-white.svg" v-if="$colorMode.value == 'dark'" class="h-[30px] mr-[5px]" />
                <NuxtImg src="/contacts/mail-black.svg" v-else class="h-[30px] mr-[5px]" />
                <h2>gmail</h2>
            </a>
        </div>

        <div>
            <a class="contacts" href="https://github.com/1-C-E?tab=repositories">
                <NuxtImg src="/contacts/git-white.svg" v-if="$colorMode.value == 'dark'" class="h-[30px] mr-[5px]" />
                <NuxtImg src="/contacts/git-black.svg" v-else class="h-[30px] mr-[5px]" />
                <h2>github</h2>
            </a>
        </div>

    </div>
</template>