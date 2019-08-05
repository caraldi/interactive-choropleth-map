<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <USChoroplethMap/>
  </div>
</template>

<script>
import * as types from '@/store/types'
import USChoroplethMap from '@/components/USChoroplethMap'

export default {
  name: 'HelloWorld',
  components: {
    USChoroplethMap
  },
  props: {
    msg: String
  },
  created () {
    return this.$store.dispatch(types.FETCH_US_MAP_DATA)
  }
}
</script>

<style scoped lang="scss">

</style>
