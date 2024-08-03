<template>
    <div class="border-b-2 border-t-2 border-gray-200 p-4 pb-2 flex justify-between group" :class="{ 'bg-blue-200': job.highlighted }">
        <img :src="job.company_logo" :alt="`${job.company_name} logo`" class="h-12 w-12 mr-4">

        <div class="flex flex-wrap items-center justify-between w-full">
            <div class="w-full md:w-4/12 mb-2">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-yellow-500 mr-1" v-if="job.pinned">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
                    </svg>

                    <h2 class="font-bold leading-none">{{  job.job_title }}</h2>
                </div>
                <a href="#" class="text-sm">{{  job.company_name }}</a>

                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 text-gray-600 mr-1">
                        <path fill-rule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clip-rule="evenodd" />
                    </svg>
                    <div class="text-sm text-gray-600">{{ job.job_location }}</div>
                </div>
            </div>

            <div class="w-full md:w-4/12 mb-2">
                <nuxt-link :to="{ name: 'tags-slug', params: { slug: tag.slug } }" v-for="tag in job.tags" :key="tag.slug" class="inline-block text-gray-600 border-2 border-gray-300 px-3 py-1 rounded-lg mr-2 bg-white">{{ tag.title }}</nuxt-link>
            </div>

            <div class="mb-2">
                <slot name="action">
                    <div class="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a :href="job.job_link" target="_blank" class="inline-block border-2 border-blue-400 text-blue-400 font-bold rounded-lg px-3 py-2 bg-white">Apply for this job</a>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        job: {
            required: true,
            type: Object
        }
    }
}
</script>