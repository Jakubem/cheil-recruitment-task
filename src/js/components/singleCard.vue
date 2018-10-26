<template>
  <div class="single-card">
    <div class="single-card__image">
      <single-image
        class="card-icon"
        :src="src"
        :fallback="fallback">
      </single-image>
    </div>
    <h3 class="single-card__headline">
      {{ headline }}
    </h3>
    <p class="single-card__copy">
      {{ copy }}
    </p>
  </div>
</template>

<script>
  import SingleImage from './singleImage.vue';
  export default {
    components: {
      SingleImage
    },
    data: function () {
      return {
      };
    },
    props: ['src', 'fallback', 'headline', 'copy'],
    methods: {
      // Optional methods goes here. You should then call them, passing method name as prop.
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .single-card {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .single-card__image {
    height: 73px;
    width: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $c-gray__light;
    border-radius: $border-radius;
  }

  .single-card__headline {
    color: $c-gray;
    font: bold 14px 'Open Sans';
    text-transform: uppercase;
    letter-spacing: 0.01em;
    margin: 0 15px 15px 15px;
    padding: 0;
    box-sizing: border-box;
    &::after {
      content: '';
      display: block;
      width: 42px;
      height: 1px;
      margin: 0 auto;
      background-color: $c-gray;
    }
  }
</style>