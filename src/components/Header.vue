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
                    <a class="text-base font-semibold text-gray-900 dark:text-gray-200 inline" href="/src/assets/RESUME%20HAOUAS%20RAYAN.pdf" download>Resume <svg width="36" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200"><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"/></svg></a>
                    <button @click="setDarkMode" class="text-base font-semibold text-gray-900 dark:text-gray-200"><svg width="30px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200">
                        <path d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
                    </svg></button>
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
                                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-200 dark:hover:text-gray-900 hover:bg-gray-100">{{ item.name }}</a>
                                <a class="inline-flex w-fit items-center mr-2 inline rounded-lg px-3 py-2 border text-base font-semibold leading-7 group hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-900" href="/src/assets/RESUME%20HAOUAS%20RAYAN.pdf" download>
                                    Resume <svg width="25px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200 dark:group-hover:fill-gray-900 ml-2"><path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z"/><path d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"/>
                                </svg>
                                </a>
                                <a @click="setDarkMode" class="inline-flex w-fit border rounded-lg px-3 py-2 text-base font-semibold leading-7 group hover:bg-gray-100 dark:text-gray-200 dark:hover:text-gray-900">
                                    Dark mode <svg width="25px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="inline fill-gray-900 dark:fill-gray-200 dark:group-hover:fill-gray-900 ml-2">
                                    <path d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"></path>
                                </svg></a>
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

    function setDarkMode()
    {
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