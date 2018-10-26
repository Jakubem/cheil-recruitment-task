<template>
  <nav class="nav">
    <a href="./#">
      <h1 class="nav__logo">
        <single-image
          class="logo-img"
          :src="'images/logo.webp'"
          :fallback="'images/logo.png'">
        </single-image>
      </h1>
    </a>
    <ul class="nav__list">
      <li class="nav__item nav__item--state-active">
        <header-nav-item 
          :content="'home'"
          :href="'./#home'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'about us'"
          :href="'./#about-us'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'portfolio'"
          :href="'./#portfolio'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'pricing'"
          :href="'./#pricing'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'team'"
          :href="'./#team'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'blog'"
          :href="'./#blog'">
        </header-nav-item>
      </li>
      <li class="nav__item">
        <header-nav-item 
          :content="'contact'"
          :href="'./#contact'">
        </header-nav-item>
      </li>
    </ul>
  </nav>
</template>

<script>
  import HeaderNavItem from './headerNavItem.vue';
  import SingleImage from './singleImage.vue';
  export default {
    components: {
      HeaderNavItem,
      SingleImage
    },
    mounted: function () {

    },
    methods: {

    },
    props: ['active'],
    data() {
      return {

      };
    },
  }
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    z-index: 1;
  }
  .nav__list {
    display: flex;
  }
</style>