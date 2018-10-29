<template>
  <div class="single-card">
    <div class="single-card__image">
      <single-image
        class="card-icon"
        :src="src"
        :alt="alt"
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
    props: ['src', 'fallback', 'headline', 'alt', 'copy'],
    methods: {
      // Optional methods goes here. You should then call them, passing method name as prop.
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .single-card {
    margin: 20px;
    margin-bottom: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .single-card__image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    transition: .2s;
    will-change: transform;
    box-sizing: border-box;
    padding: 0;
    height: 73px;
    width: 73px;
    &::after {  
      content: '';
      display: block;    
      position:absolute;
      transition: .2s;
      will-change: transform;
      left:50%;
      top:50%;
      right:0;
      bottom:0;
      margin-left: -50%;
      margin-top: -50%;
      padding: 0;
      border: 1px solid $c-gray__light;
      border-radius: $border-radius;
    }
    &:hover::after {
      transform: rotate(45deg);
      border-color: $c-red;
    }
    &:hover + .single-card__headline {
      color: $c-red;
    }
  }

  .single-card__headline {
    color: $c-gray__text;
    font: 600 18px 'Open Sans';
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
      margin-top: 15px;
      background-color: $c-gray;
    }
  }

  .single-card__copy {
    text-align: center;
    color: $c-gray__text;
    font: 300 12px 'Source Sans Pro';
    line-height: 20px;
    width: 250px;
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    .single-card__copy {
      font-size: 14px;
    }
    .single-card {
      margin-bottom: 30px;
    }
  }
</style>