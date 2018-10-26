<template>
  <picture class="single-image">
    <source :srcset="src" type="image/webp" :alt="alt">
    <source :srcset="fallback" type="image/png" :alt="alt">
    <img :src="fallback" :alt="alt">
  </picture>
</template>
<script>

  export default {
    mounted: function () {

    },
    methods: {

    },
    props: ['src', 'fallback', 'alt'],
    data: function() {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
  .single-image img {
    display: block;
  }

  .single-image img,
  .single-image source {
    width: 100%;
  }

  .anchor-icon img,
  .anchor-icon source {
    width: 75px;
  }

  // .card-icon img,
  // .card-icon source {
  //   width: auto;
  //   max-height: 20px;
  // }

  .logo-img img,
  .logo-img source {
    width: 141px;
    height: 52px;
  }
</style>