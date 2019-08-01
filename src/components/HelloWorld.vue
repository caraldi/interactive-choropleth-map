<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <USChoroplethMap/>
  </div>
</template>

<script>
import USChoroplethMap from '@/components/USChoroplethMap'

export default {
  name: 'HelloWorld',
  components: {
    USChoroplethMap
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
