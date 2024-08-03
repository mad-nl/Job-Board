<template>
    <div class="mt-10 flex justify-center px-4 sm:px-0">
        <form class="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12" v-if="me" @submit.prevent="submit">
            <div class="mb-10">
                <h2 class="mb-6 text-3xl font-bold text-center">Listing Details</h2>
                <div class="mb-4">
                    <label for="job_title" class="inline-block mb-2 font-medium text-gray-700">Job Title</label>
                    <input type="text" name="job_title" id="job_title"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter job title" :class="{ 'border-red-500': errors['input.job_title'] }"
                        v-model="me.jobs[0].job_title" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_title']">{{
                        errors['input.job_title'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="job_location" class="inline-block mb-2 font-medium text-gray-700">Job Location</label>
                    <input type="text" name="job_location" id="job_location"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter job location" :class="{ 'border-red-500': errors['input.job_location'] }"
                        v-model="me.jobs[0].job_location" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_location']">{{
                        errors['input.job_location'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="job_link" class="inline-block mb-2 font-medium text-gray-700">Job Application
                        URL</label>
                    <input type="text" name="job_link" id="job_link"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter application URL" :class="{ 'border-red-500': errors['input.job_link'] }"
                        v-model="me.jobs[0].job_link" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.job_link']">{{
                        errors['input.job_link'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="tags" class="inline-block mb-2 font-medium text-gray-700">Tags</label>

                    <v-select inputId="tags" :options="tags" label="title" :reduce="tag => tag.id" multiple
                        class="border-2 border-gray-200 rounded-lg"
                        :class="{ 'border-red-500 rounded-lg': errors['input.tags.connect'] }"
                        v-model="me.jobs[0].tags">
                    </v-select>

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.tags.connect']">{{
                        errors['input.tags.connect'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="company_name" class="inline-block mb-2 font-medium text-gray-700">Company Name</label>
                    <input type="text" name="company_name" id="company_name"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter company name" :class="{ 'border-red-500': errors['input.company_name'] }"
                        v-model="me.jobs[0].company_name" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_name']">{{
                        errors['input.company_name'][0] }}</div>
                </div>

                <div class="mb-4">
                    <label for="company_logo" class="inline-block mb-2 font-medium text-gray-700">Company Logo</label>
                    <input type="text" name="company_logo" id="company_logo"
                        class="bg-gray-50 border border-gray-300 rounded-lg w-full h-12 px-4"
                        placeholder="Enter company logo" :class="{ 'border-red-500': errors['input.company_logo'] }"
                        v-model="me.jobs[0].company_logo" />

                    <div class="text-sm text-red-500 mt-1" v-if="errors['input.company_logo']">{{
                        errors['input.company_logo'][0] }}</div>
                </div>

                <div class="mb-4 flex items-center">
                    <input type="checkbox" name="highlighted" id="highlighted" class="mr-2"
                        v-model="me.jobs[0].highlighted" />
                    <label for="highlighted" class="font-medium text-gray-700">Highlight Listing</label>
                </div>

                <div class="mb-4 flex items-center">
                    <input type="checkbox" name="pinned" id="pinned" class="mr-2" v-model="me.jobs[0].pinned" />
                    <label for="pinned" class="font-medium text-gray-700">Pin to Top</label>
                </div>
            </div>

            <button type="submit"
                class="w-full h-12 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Edit Listing
            </button>
        </form>
    </div>
</template>

<script>
import USER_JOB_BY_ID from '@/graphql/UserJobById.gql'
import ALL_TAGS from '@/graphql/AllTags.gql'
import UPDATE_JOB from '@/graphql/UpdateJob.gql'

export default {
    middleware: 'auth',
    async asyncData({ store }) {
        await store.dispatch('checkAuth')
    },
    data() {
        return {
            errors: {}
        }
    },

    computed: {
        tagsIds() {
            return this.me.jobs[0].tags.map(t => t.id)
        }
    },

    apollo: {
        me: {
            prefetch: false,
            query: USER_JOB_BY_ID,
            variables() {
                return {
                    id: this.$route.params.id
                }
            }
        },

        tags: {
            query: ALL_TAGS
        },
    },

    methods: {
        submit() {
            this.$apollo.mutate({
                mutation: UPDATE_JOB,
                variables: { ...this.me.jobs[0], tags: this.tagsIds }
            }).then(() => {
                this.$router.replace({ name: 'user-listings' })
            }).catch((e) => {
                this.errors = e.graphQLErrors[0].extensions.validation
            })
        }
    }
}
</script>