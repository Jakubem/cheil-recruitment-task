// This is top level component. It contains whole hero section with carousel and navbar.

<template>
  <header>
    <header-nav></header-nav>
    <div class="carousel-navigation">
      <button 
        class="carousel-navigation__button carousel-navigation__button--prev"
        @click.prevent="prevSlide">
        <img class="carousel-navigation__arrow" src="images/angle-left.svg" alt="">
      </button>
      <button 
        class="carousel-navigation__button carousel-navigation__button--next"
        @click.prevent="nextSlide">
        <img class="carousel-navigation__arrow" src="images/angle-right.svg" alt="">
      </button>
    </div>
    <carousel 
      ref="carousel" 
      :per-page="1" 
      :autoplay="true"
      :easing="'linear'"
      :autoplayTimeout="6000" 
      :loop="true"
      :paginationActiveColor="'#adadad'"
      :paginationColor="'transparent'"
      :paginationPadding="13">
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Dino'"
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
          :heroCopyMobile="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
          :src="'images/Background1.webp'"
          :alt="'background with hot air balloons flying over the hill'"
          :fallback="'images/Background1.png'"
          :mobileSrc="'images/Background-mob1.png'">
        </hero-card>
      </slide>
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Bino'" 
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'" 
          :heroCopyMobile="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
          :src="'images/Background2.png'"
          :alt="'background with view on mountains'"
          :fallback="'images/Background2.png'"
          :mobileSrc="'images/Background-mob2.png'">
        </hero-card>
      </slide>
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Cino'" 
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'" 
          :heroCopyMobile="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
          :src="'images/Background3.png'"
          :alt="'background with view on forest'"
          :fallback="'images/Background3.png'"
          :mobileSrc="'images/Background-mob3.png'">
        </hero-card>
      </slide>
    </carousel>
  </header>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  import HeroCard from './heroCard.vue';
  import HeaderNav from './headerNav.vue';
    export default {
    components: {
      Carousel,
      Slide,
      HeroCard,
      HeaderNav
    },
    mounted: function () {

    },
    methods: {
      // methods for custom carousel navigation
      prevSlide: function() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
      },
      nextSlide: function() {
        this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
      },
    },
    data: function () {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .carousel-navigation {
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 20px;
    right: 20px;
    top: 400px;
    z-index: 3;
  }
  .carousel-navigation__button {
    width: 40px;
    height: 40px;
    font: 20px 'Source Sans Pro';
    color: $c-white;
    background-color: $c-red;
    border-radius: $border-radius;
  }
  .carousel-navigation__arrow {
    height: 40px;
  }

  @media screen and (max-width: 1400px) {
    .carousel-navigation {
      top: 300px;
    }
  }

  @media screen and (max-width: 1200px) {
      .carousel-navigation {
        top: 250px;
      }
    }

  @media screen and (max-width: 1000px) {
    .carousel-navigation {
      top: 200px;
    }
    .carousel-navigation__button {
      width: 25px;
      height: 25px;
    }
    .carousel-navigation__arrow {
      height: 25px;
    }
  }

  @media screen and (max-width: 700px) {
    .carousel-navigation {
      display: none;
    }
  }
</style>