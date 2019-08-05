<template>
  <div id="us-map">
    <svg>
      <g class="us">
        <g class="us__counties"/>
        <path class="us__states"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'USChoroplethMap'
}
</script>

<style scoped lang="scss">
#us-map {
  .us__counties {
    fill: #e0e0e0;
    path.selected {
      stroke: #000;
      stroke-width: 0.5px;
    }
  }
  .us__states {
    fill: none;
    stroke: #fff;
    stroke-width: 1.5px;
    stroke-linejoin: round;
  }
}
</style>
