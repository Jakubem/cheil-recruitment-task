<template>
  <nav class="nav">
    <a href="./#" class="nav__logo-link">
      <h1 class="nav__logo">
        <single-image
          class="logo-img"
          :src="'images/logo.webp'"
          :alt="'Bino logo'"
          :fallback="'images/logo.png'">
        </single-image>
      </h1>
    </a>
    <button
      class="hamburger-icon"
      :class="{'hamburger-icon--state-open': open}"
      @click="open = !open">
    </button>
    <ul 
      class="nav__list"
      :aria-hidden="!open"
      :class="{'nav__list--state-open': open}">
      <li class="nav__item">
        <header-nav-item
          class="nav__link--state-active"
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
      SingleImage,
    },
    mounted: function () {

    },
    methods: {
    },
    props: ['active'],
    data: function() {
      return {
        open: false,
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .nav {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1170px;
    z-index: 1;
  }
  .nav__list {
    display: flex;
  }

  // closed menu (hamburger icon)
  .hamburger-icon {
    display: none;
    position: absolute;
    right: 30px;
    top: 48px;
    width: 30px;
    height: 3px;
    background: $c-gray__light;
    transition: .2s;
    will-change: transform;
    z-index: 2;
    &::after,
    &::before {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      height: 3px;
      background: $c-gray__light;
      width: 30px;
    }
    &::after {
      top: -11px;
    }
    &::before {
      bottom: -11px;
    }
  }

  // open menu (x icon)
  .hamburger-icon--state-open {
    background-color: transparent;
    // left: 0;
    &::after {
      top: 0;
      transform: rotate(-45deg);
      background: $c-black;
    }
    &::before {
      bottom: 0;
      transform: rotate(45deg);
      background: $c-black;
    }
  }

  @media screen and (max-width: 700px) {
    .nav__logo-link {
      margin: 19px auto;
    }
    .hamburger-icon {
      display: block;
    }
    .nav__item {
      width: 100%;
      padding: 15px 0;
      border-bottom: 1px solid $c-gray;
      &:hover {
        background-color: $c-gray__light;
      }
      &:first-child {
        border-top: 1px solid $c-gray;
      }
    }
    .nav__list {
      display: none;
      position: absolute;
      top: 0;
      padding: 100px 0 60px 0;
      flex-direction: column;
      background-color: $c-white;
      width: 100%;
    }
    .nav__list--state-open {
      display: block;
      position: absolute;
      left: 0;
    }
  }


</style>