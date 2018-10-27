<template>
  <header>
    <header-nav></header-nav>
    <carousel 
      :per-page="1" 
      :autoplay="true"
      :easing="'linear'"
      :paginationEnabled="true"
      :autoplayTimeout="6000" 
      :loop="true"
      :paginationActiveColor="'#adadad'"
      :paginationColor="'transparent'">
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Dino'"
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'"
          :src="'images/Background1.webp'"
          :fallback="'images/Background1.png'"
          :mobileSrc="'images/Background-mob1.png'">
        </hero-card>
      </slide>
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Bino'" 
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'" 
          :src="'images/Background2.png'"
          :fallback="'images/Background2.png'"
          :mobileSrc="'images/Background-mob2.png'">
        </hero-card>
      </slide>
      <slide>
        <hero-card 
          :heroIntro="'Our Clients Are Our First Priority'"
          :headline="'Welcome to Cino'" 
          :heroCopy="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'" 
          :src="'images/Background3.png'"
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

    },
    data: function () {
      return {
      };
    },
  }
</script>

<style>
</style>