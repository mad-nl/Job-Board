<template>
    <div class="mt-10 flex justify-center px-4 sm:px-0">
        <form class="w-full sm:w-8/12 md:w-6/12 lg:w-4/12" @submit.prevent="login">
            <h2 class="mb-4 text-2xl font-bold text-center">Login</h2>

            <div class="mb-4">
                <label for="email" class="inline-block mb-1 font-medium">Email</label>
                <input type="email" name="email" id="email"
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
                    placeholder="you@somewhere.com" v-model="form.email" />
            </div>

            <div class="mb-4">
                <label for="password" class="inline-block mb-1 font-medium">Password</label>
                <input type="password" name="password" id="password"
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4" v-model="form.password" />
            </div>

            <button type="submit"
                class="w-full p-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Login
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        login() {
            this.$axios.$get('/sanctum/csrf-cookie').then(response => {
                try {
                    this.$auth.loginWith('local', {
                        data: this.form
                    })
                } catch (e) {
                    // 
                }
            })
        }
    }
}
</script>