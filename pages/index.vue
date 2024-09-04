<script setup lang="ts">
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}
</script>

<template>
    <div class="h-full dark:bg-[#000000]">
        <div class="max-w-[900px] mx-auto px-[50px]">
            <header class="flex justify-between pt-[70px]">
                <section class="flex">
                    <div>
                        <!-- <NuxtImg src="/photo.png"
                            class="h-[140px] rounded-[100px] p-[3px] border-[#64D98A] border-[3px]" /> -->
                        <NuxtImg src="/kast.png" v-if="$colorMode.value == 'dark'"
                            class="h-[140px] rounded-[100px] p-[3px] border-[#64D98A] border-[3px]" />
                        <NuxtImg src="/photo.png" v-else
                            class="h-[140px] rounded-[100px] p-[3px] border-[#64D98A] border-[3px]" />
                    </div>

                    <section class="ml-[30px]">
                        <div class="dark:text-[#FFFFFF] text-[40px] font-bold">
                            Валентин Питенев
                        </div>
                        <div class="text-[#949494] text-[24px]">
                            frontend разработчик
                        </div>
                    </section>
                </section>

                <button class="mt-[18px] mb-auto"
                    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                    <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </header>

            <main>
                <h2 class="main_text mt-[30px]">
                    Меня зовут Валентин, и я являюсь frontend разработчиком. Моя основная специализация заключается в
                    создании современных и функциональных веб-сайтов, а также мобильных приложений, которые помогают
                    пользователям решать их задачи и улучшать взаимодействие с цифровыми продуктами.
                </h2>
                <p class="headline">
                    Мои работы
                </p>
                <section class="flex overflow-x-auto overflow-x: scroll w-[25rem] space-x-[80px] w-full mt-[20px]">
                    <NuxtImg src="/screenshots/anytime_1.png" class="screenshots" />
                    <NuxtImg src="/screenshots/anytime_2.png" class="screenshots" />
                    <NuxtImg src="/screenshots/anytime_sign_up.png" class="screenshots" />
                    <NuxtImg src="/screenshots/thoms_1.png" class="screenshots" />
                    <NuxtImg src="/screenshots/thoms_mobile.png" class="screenshots h-full my-auto" />
                    <NuxtImg src="/screenshots/thoms_mobile_2.png" class="screenshots h-full my-auto" />
                    <NuxtImg src="/screenshots/thoms_mobile_3.png" class="screenshots h-full my-auto" />
                </section>
                <h2 class="main_text">
                    У меня есть опыт работы в стратапах, который составляет 1 год и 3 месяца. За это время
                    я
                    успел погрузиться в различные технологии и инструменты, которые применяются в сфере разработки. Я
                    активно осваивал новые фреймворки и библиотеки, что позволило мне расширить свои навыки и улучшить
                    качество создаваемых мной проектов.
                </h2>


                <div class="headline">Технологии</div>

                <section class="mt-[30px]">
                    <div class="flex">
                        <div>
                            <div class="flex">
                                <figure>
                                    <NuxtImg src="/technologies/nuxt-white.svg" v-if="$colorMode.value == 'dark'"
                                        class="technologies" />
                                    <NuxtImg src="/technologies/nuxt-black.svg" v-else class="technologies" />
                                </figure>

                                <figure class="ml-[120px] mt-[50px]">
                                    <NuxtImg src="/technologies/next-white.svg" v-if="$colorMode.value == 'dark'"
                                        class="technologies" />
                                    <NuxtImg src="/technologies/next-black.svg" v-else class="technologies" />
                                </figure>
                            </div>

                            <figure class="ml-[50px] mt-[90px]">
                                <NuxtImg src="/technologies/tailwind-white.svg" v-if="$colorMode.value == 'dark'"
                                    class="technologies" />
                                <NuxtImg src="/technologies/tailwind-black.svg" v-else class="technologies" />
                            </figure>
                        </div>

                        <figure class="ml-auto mt-[20px]">
                            <NuxtImg src="/technologies/react-native-white.svg" v-if="$colorMode.value == 'dark'"
                                class="h-[150px]" />
                            <NuxtImg src="/technologies/react-native-black.svg" v-else class="h-[150px]" />
                        </figure>
                    </div>

                    <figure class="ml-[550px]">
                        <NuxtImg src="/technologies/figma-white.svg" v-if="$colorMode.value == 'dark'" class="technologies"/>
                        <NuxtImg src="/technologies/figma-black.svg" v-else class="technologies"/>
                    </figure>
                </section>

                <h2 class="main_text mt-[100px]">
                    Каждый новый проект для меня — это возможность не только применить уже имеющиеся знания, но и
                    научиться
                    чему-то новому, что, безусловно, способствует моему профессиональному росту. Я стремлюсь к тому,
                    чтобы
                    мои разработки были не только эстетически привлекательными, но и удобными для пользователей.
                </h2>
            </main>
            <footer class="flex text-[14px] mt-[100px] justify-center pb-[20px] dark:text-[#FFFFFF]">
                © 2024
            </footer>
        </div>
    </div>
</template>