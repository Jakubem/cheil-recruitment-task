<template>
  <picture class="single-image">
    <source 
      v-if="mobileSrc" 
      :srcset="mobileSrc" 
      type="image/webp" 
      media="(max-width: 700px)" 
      :alt="alt">
    <source 
      v-if="mobileSrc" 
      :srcset="mobileSrc" 
      type="image/png" 
      media="(max-width: 700px)" 
      :alt="alt">
    <source 
      :srcset="src" 
      type="image/webp" 
      :alt="alt">
    <source 
      :srcset="fallback" 
      type="image/png" 
      :alt="alt">
    <img 
      :src="fallback" 
      :alt="alt">
  </picture>
</template>
<script>

  export default {
    mounted: function () {

    },
    methods: {

    },
    props: ['src', 'fallback', 'alt', 'mobileSrc'],
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
    position: relative;
    bottom: 40px;
    left: 0;
    right: 0;
    margin: auto;
    animation: anchor .3s ease-in-out 1s 1 running;
    // animation-iteration-count: .3s ease-in-out 0 1 0;
  }

  @keyframes anchor {
    0% {
      transform: scale(1)
    }
    50% {
      transform: scale(1.5)
    } 
    100% {
      transform: scale(1)
    } 
  }

  .logo-img img,
  .logo-img source {
    width: 141px;
    height: 52px;
  }
</style>