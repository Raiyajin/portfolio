<template xmlns="http://www.w3.org/1999/html">
    <div class="flex sm:hidden items-center justify-center px-4 pt-4">
        <img class="border-4 rounded-full" src="/src/assets/rayan.png" alt="Picture"/>
    </div>
    <div class="flex justify-center sm:pt-8">
        <div class="w-full mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex justify-center">
            <span class="w-full sm:w-3/5 top-0 max-w-4xl mr-4">
                <h1 class="my-4 text-2xl font-bold text-gray-900 dark:text-gray-200">About me</h1>
                <p class="text-base font-semibold text-gray-600 dark:text-gray-400">
                    I'm Rayan, a soon to be DevOps Engineer, I love python and am always looking for new challenges in software development projects.
                </p>
                <p class="text-base font-semibold text-gray-600 dark:text-gray-400">
                    This website has been made in order for me to keep a trace of everything I've done that allowed me to reach my objectives.
                </p>
            </span>
            <span class="sm:w-2/5 hidden sm:flex item-center justify-center">
                <img class="h-full border-4 rounded-full" src="/src/assets/rayan.png" alt="Picture"/>
            </span>
        </div>

    </div>
</template>
<script>
export default {
    name: "MainPage"
}
</script>