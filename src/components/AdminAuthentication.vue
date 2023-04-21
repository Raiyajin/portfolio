<template>
    <div class="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin access only</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
                <div>
                    <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                    <div class="mt-2">
                        <input v-model="username" id="username" name="username" type="text" autocomplete="username" required="required" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"  required="required" class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button @click="submitConnection" type="button" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>

    let username;
    let password;

    let submitConnection = () => {
        /**
         * Submit a connection to the backend API and store a token into the session
         * @type {string}
         */

        let body = JSON.stringify({
            username: username,
            password: password
        })

        fetch(import.meta.env.VITE_API_URL + "users/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => sessionStorage.setItem("token", data["token"]))
            .then(() => location.reload())
            .catch(error => console.error("Error:", error));
    }

</script>

<script>
    export default {
        name: "AdminAuthentication"
    }

</script>