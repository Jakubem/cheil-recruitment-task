// This is single hero carousel slide.

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
      <p class="hero__copy hero__copy--mobile">
        {{ heroCopyMobile }}
      </p>
      <div class="button-group">
        <button-base :content="'get started now'"></button-base>
        <button-base class="button--mobile-hidden" :content="'learn more'"></button-base>
      </div>
    </div>
    <single-image
      :src="src"
      :fallback="fallback"
      :alt="alt"
      :mobileSrc="mobileSrc">
    </single-image>
    <single-image
      class="anchor-icon"
      :src="'images/anchor-icon.webp'"
      :alt="' '"
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
    props: ['heroIntro', 'headline', 'heroCopy', 'heroCopyMobile', 'src', 'alt', 'fallback', 'mobileSrc'],
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
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
  }

  .hero__intro {
    font: 400 24px 'Source Sans Pro';
    color: $c-white;
    text-align: center;
    margin: 0 15px 15px 15px;
    word-wrap: break-word;
  }

  .hero__headline {
    font: bold 72px 'Open Sans';
    color: $c-white;
    margin: 0 15px 10px 15px;
    text-transform: uppercase;
    text-align: center;
    word-wrap: break-word;
  }

  .hero__copy {
    font: 300 14px 'Open Sans';
    line-height: 24px;
    color: $c-white;
    max-width: 600px;
    margin: 20px 15px 65px 15px;
    text-align: center;
    word-wrap: break-word;
  }

  .hero__copy--mobile {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    .hero__copy {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 1200px) {
    .hero__content {
      margin-top: 140px;
    }
    .hero__intro {
      font-size: 20px;
      margin-bottom: 0;
    }
    .hero__headline {
      margin-bottom: 0;
      font-size: 60px;
    }
    .hero__copy {
      margin: 5px;
      margin-bottom: 20px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    .hero__content {
      margin-top: 80px;
    }
    .hero__intro {
      font-size: 18px;
      margin: 0 15px;
    }

    .hero__headline {
      margin-bottom: 0;
      font-size: 46px;
    }

    .hero__copy {
      margin: 15px;
      font-size: 12px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 800px) {
    
    .hero__copy.hero__copy--mobile {
      display: inline;
    }

    .hero__copy {
      display: none;
    }

    .hero__headline {
      font-size: 50px;
      line-height: 54px;
    }
  }

  @media screen and (max-width: 750px) {
    .hero__copy {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 700px) {
    .hero__content {
      margin-top: 190px;
    }
    .hero__intro {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .hero__headline {
      margin-bottom: 15px;
    }
    .hero__copy {
      margin-bottom: 35px;
    }
  }

  @media screen and (max-width: 400px) {
    .hero__content {
      margin-top: 130px;
    }
  }

  @media screen and (max-width: 350px) {
    .hero__content {
      margin-top: 120px;
    }
    .hero__intro {
      margin-bottom: 5px;
    }
    .hero__headline {
      margin-bottom: 10px;
      font-size: 40px;
    }
    .hero__copy {
      margin-top: 10px;
      margin-bottom: 15px;
    }
  }

</style>