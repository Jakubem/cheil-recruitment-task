<template>
  <header>
    <div class="hero__content">
      <p class="hero__intro">
        {{ heroIntro }}
      </p>
      <h2 class="hero__headline">
        {{ headline }}
      </h2>
      <line-separator>
      </line-separator>
      <p class="hero__copy">
        {{ heroCopy }}
      </p>
      <div class="button-group">
        <button-base :content="'get started now'"></button-base>
        <button-base class="button--mobile-hidden" :content="'learn more'"></button-base>
      </div>
    </div>
    <single-image
      :src="src"
      :fallback="fallback"
      :mobileSrc="mobileSrc">
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
  import LineSeparator from './lineSeparator.vue';
  export default {
    components: {
      SingleImage,
      ButtonBase,
      LineSeparator
    },
    props: ['heroIntro', 'headline', 'heroCopy', 'src', 'fallback', 'mobileSrc'],
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
    height: 100%;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
  }

  .hero__intro {    
    font: 400 24px 'Source Sans Pro';
    color: $c-white;
    margin: 0 15px 15px 15px;
  }

  .hero__headline {
    font: bold 72px 'Open Sans';
    color: $c-white;
    margin: 0 15px 15px 15px;
    text-transform: uppercase;
    text-align: center;
  }

  .hero__copy {
    font: 400 14px 'Open Sans';
    color: $c-white;
    max-width: 600px;
    margin: 0 15px 15px 15px;
    text-align: center;
  }
</style>