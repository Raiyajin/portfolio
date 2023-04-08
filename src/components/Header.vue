<template>
    <div class="mb-20">
        <header class="bg-white dark:bg-slate-900 absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Home</span>
                        <a class="h-8 w-auto font-bold text-2xl dark:text-gray-200" >Rayan HAOUAS</a>
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200" @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-semibold text-gray-900 dark:text-gray-200">{{ item.name }}</a>
                    <button @click="setDarkMode" class="text-base font-semibold text-gray-900 dark:text-gray-200">🌞</button>
                </div>
            </nav>
            <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
                <div class="fixed inset-0 z-50" />
                <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-end justify-end">
                        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                            <span class="sr-only">Close menu</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-gray-100">{{ item.name }}</a>
                                <a @click="setDarkMode" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-gray-100">🌞</a>
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
        { name: 'About me', href: '#' },
        { name: 'Projects', href: '#' },
    ]

    const mobileMenuOpen = ref(false)

    function setDarkMode(event)
    {
        console.log("hi");
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }

    }
</script>

<script>
export default {
    name: "Header"
}
</script>