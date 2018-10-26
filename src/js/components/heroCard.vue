<template>
  <header>
    <div class="hero__content">
      <p class="hero__intro">
        {{ heroIntro }}
      </p>
      <h2 class="hero__headline">
        {{ headline }}
      </h2>
      <p class="hero__copy">
        {{ heroCopy }}
      </p>
      <div class="button-group">
        <button-base :content="'get started now'"></button-base>
        <button-base :content="'learn more'"></button-base>
      </div>
    </div>
    <single-image
      :src="src"
      :fallback="fallback">
    </single-image>
    <single-image
      class="anchor-icon"
      :src="'images/anchor-icon.webp'"
      :fallback="'images/anchor-icon.png'">
    </single-image>
  </header>
</template>

<script>
  import SingleImage from './singleImage.vue';
  import ButtonBase from './buttonBase.vue';
  export default {
    components: {
      SingleImage,
      ButtonBase
    },
    props: ['heroIntro', 'headline', 'heroCopy', 'src', 'fallback'],
    data: function () {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';

  .hero__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero__intro {    
    font: 400 24px 'Source Sans Pro';
    color: $c-white;
    margin: 0 15px 15px 15px;
  }

  .hero__headline {
    font: bold 72px 'Open Sans';
    color: $c-white;
    text-transform: uppercase;
    margin: 0 15px 15px 15px;
  }

  .hero__copy {
    font: 400 14px 'Open Sans';
    color: $c-white;
    margin: 0 15px 15px 15px;
  }
</style>