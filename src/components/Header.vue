<template>
    <div class="mb-20">
        <header class="bg-white dark:bg-slate-900 absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <router-link to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Home</span>
                        <a class="h-8 w-auto font-bold text-2xl dark:text-gray-200" title="Home page">Rayan HAOUAS</a>
                    </router-link>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <router-link v-for="item in navigation" :key="item.name"  :to="item.path" :title="item.title" class="text-base font-semibold text-gray-900 dark:text-gray-200">{{ item.name }}</router-link>
                    <a title="Download my resume !" class="text-base font-semibold text-gray-900 dark:text-gray-200 inline" href="/src/assets/RESUME%20HAOUAS%20RAYAN.pdf" download>Resume <svg width="36" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200"><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"/></svg></a>
                    <button title="Switch the dark mode ON/OFF" @click="setDarkMode" class="text-base font-semibold text-gray-900 dark:text-gray-200">
                        <svg v-if="isDark" width="36" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline fill-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        <svg v-else width="36" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="dark:fill-gray-200">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>

                    </button>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-end justify-end">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen=false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <router-link v-for="item in navigation" :key="item.name" :to="item.path" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-gray-100">{{ item.name }}</router-link>
                                <a title="Download my resume !" class="inline-flex w-fit items-center mr-2 inline rounded-lg px-3 py-2 border text-base font-semibold leading-7 group hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-900" href="/src/assets/RESUME%20HAOUAS%20RAYAN.pdf" download>
                                    Resume <svg width="25px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200 dark:group-hover:fill-gray-900 ml-2"><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"/>
                                    </svg>
                                </a>
                                <a @click="setDarkMode" title="Switch the dark mode ON/OFF" class="inline-flex w-fit border rounded-lg px-3 py-2 text-base font-semibold leading-7 group hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-900">
                                    Dark mode <svg v-if="isDark" width="25px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline fill-gray-900 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                    </svg>
                                    <svg v-else width="25px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline dark:fill-gray-200 dark:group-hover:fill-gray-900 ml-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    </div>

</template>

<script setup>
    import { ref } from 'vue'
    import { Dialog, DialogPanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'



    const navigation = [
        { name: 'About me', path: '/', title: 'More about me !' },
        { name: 'Projects', path: '/projects', title: 'Check my projects !' },
    ];

    const mobileMenuOpen = ref(false);

    let isDark = ref(document.documentElement.classList.contains('dark'));

    /**
     * Set the browser dark mode ON/OFF according to its current status
     */
    function setDarkMode()
    {
        if (isDark.value) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        isDark.value = document.documentElement.classList.contains('dark')
    }
</script>

<script>
    export default {
        name: "Header"
    }
</script>