<template>
  <div>
    <div class="text-center py-10">
      <h1 class="text-4xl font-bold mb-2">Your listings</h1>
    </div>

    <div class="mt-10" v-if="me">
      <Job v-for="job in me.jobs" :key="me.id" :job="job">
        <template slot="action">
          <nuxt-link :to="{ name: 'jobs-id-edit', params: { id: job.id } }" class="font-medium text-blue-500">Edit</nuxt-link>
        </template>
      </Job>
    </div>
  </div>
</template>

<script>
import USER_JOBS from '@/graphql/UserJobs.gql'
export default {
  middleware: 'auth',
  async asyncData({ store }) {
    await store.dispatch('checkAuth')
  },
  apollo: {
    me: {
      query: USER_JOBS,
      fetchPolicy: 'network-only',
      prefetch: false
    }
  }
}
</script>
