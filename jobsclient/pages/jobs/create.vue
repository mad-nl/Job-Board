<template>
    <div class="mt-10 flex justify-center px-4 sm:px-0">
        <form class="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12" @submit.prevent="submit">
            <div class="mb-10">
                <h2 class="mb-6 text-3xl font-bold text-center">Listing Details</h2>
                <div class="mb-4">
                    <label for="job_title" class="inline-block mb-2 font-medium text-gray-700">Job Title</label>
                    <input type="text" name="job_title" id="job_title"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter job title" :class="{ 'border-red-500': errors['input.job_title'] }" v-model="form.job_title" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_title']">{{ errors['input.job_title'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="job_location" class="inline-block mb-2 font-medium text-gray-700">Job Location</label>
                    <input type="text" name="job_location" id="job_location"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter job location" :class="{ 'border-red-500': errors['input.job_location'] }" v-model="form.job_location" />

                        <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_location']">{{ errors['input.job_location'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="job_link" class="inline-block mb-2 font-medium text-gray-700">Job Application
                        URL</label>
                    <input type="text" name="job_link" id="job_link"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter application URL" :class="{ 'border-red-500': errors['input.job_link'] }" v-model="form.job_link" />

                        <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_link']">{{ errors['input.job_link'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="tags" class="inline-block mb-2 font-medium text-gray-700">Tags</label>

                    <v-select inputId="tags" :options="tags" label="title" :reduce="tag => tag.id" multiple
                        class="border-2 border-gray-200 rounded-lg" :class="{ 'border-red-500 rounded-lg': errors['input.tags.connect'] }" v-model="form.tags">
                    </v-select>

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.tags.connect']">{{ errors['input.tags.connect'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="company_name" class="inline-block mb-2 font-medium text-gray-700">Company Name</label>
                    <input type="text" name="company_name" id="company_name"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter company name" :class="{ 'border-red-500': errors['input.company_name'] }" v-model="form.company_name" />

                        <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_name']">{{ errors['input.company_name'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="company_logo" class="inline-block mb-2 font-medium text-gray-700">Company Logo</label>
                    <input type="text" name="company_logo" id="company_logo"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter company logo" :class="{ 'border-red-500': errors['input.company_logo'] }" v-model="form.company_logo" />

                        <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_logo']">{{ errors['input.company_logo'][0] }}</div>
                </div>

                <div class="mb-4 flex items-center">
                    <input type="checkbox" name="highlighted" id="highlighted" class="mr-2"
                        v-model="form.highlighted" />
                    <label for="highlighted" class="font-medium text-gray-700">Highlight Listing</label>
                </div>

                <div class="mb-4 flex items-center">
                    <input type="checkbox" name="pinned" id="pinned" class="mr-2" v-model="form.pinned" />
                    <label for="pinned" class="font-medium text-gray-700">Pin to Top</label>
                </div>
            </div>

            <div class="mb-10 bg-gray-100 p-6 rounded-lg" v-if="!$auth.loggedIn">
                <h2 class="mb-6 text-3xl font-bold text-center">Create an Account</h2>

                <div>
                    <div class="mb-4">
                        <label for="email" class="inline-block mb-2 font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                            placeholder="Enter your email" :class="{ 'border-red-500': errors['input.user.create.email'] }" v-model="form.user_email" />

                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.email']">{{ errors['input.user.create.email'][0] }}</div>
                    </div>

                    <div class="mb-4">
                        <label for="name" class="inline-block mb-2 font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name"
                            class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                            placeholder="Enter your name" :class="{ 'border-red-500': errors['input.user.create.name'] }" v-model="form.user_name" />

                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.name']">{{ errors['input.user.create.name'][0] }}</div>
                    </div>

                    <div class="mb-4">
                        <label for="password" class="inline-block mb-2 font-medium text-gray-700">Password</label>
                        <input type="password" name="password" id="password"
                            class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                            placeholder="Enter your password" :class="{ 'border-red-500': errors['input.user.create.password'] }" v-model="form.user_password" />

                            <div class="text-sm text-red-500 mt-1" v-if="errors['input.user.create.password']">{{ errors['input.user.create.password'][0] }}</div>
                    </div>
                </div>
            </div>

            <button type="submit"
                class="w-full h-12 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Create Listing
            </button>
        </form>
    </div>
</template>

<script>
import ALL_TAGS from '@/graphql/AllTags.gql'
import CREATE_JOB_WITH_USER from '@/graphql/CreateJobWithUser.gql'
import CREATE_JOB from '@/graphql/CreateJob.gql'

export default {
    data() {
        return {
            errors: {},
            form: {
                job_title: '',
                job_location: '',
                job_link: '',
                tags: [],
                company_name: '',
                company_logo: '',
                highlighted: false,
                pinned: false,
                user_name: '',
                user_email: '',
                password: ''
            }
        }
    },

    apollo: {
        tags: {
            query: ALL_TAGS
        }
    },

    methods: {
        createListing() {
            this.$apollo.mutate({
                mutation: CREATE_JOB,
                variables: this.form
            }).then(() => {
                this.$router.replace({ name: 'index' })
            }).catch(e => {
                this.errors = e.graphQLErrors[0].extensions.validation
            })
        },

        createListingWithUser() {
            this.$apollo.mutate({
                mutation: CREATE_JOB_WITH_USER,
                variables: this.form
            }).then(() => {
                this.$axios.$get('/sanctum/csrf-cookie').then(response => {
                    this.$auth.loginWith('local', {
                        data: {
                            email: this.form.user_email,
                            password: this.form.user_password,
                        }
                    }).then(() => {
                        this.$router.replace({ name: 'index' })
                    })
                })
            }).catch((e) => {
                this.errors = e.graphQLErrors[0].extensions.validation
            })
        },

        submit() {
            if (!this.$auth.loggedIn) {
                this.createListingWithUser()
                return
            }

            this.createListing()
        }
    }
}
</script>