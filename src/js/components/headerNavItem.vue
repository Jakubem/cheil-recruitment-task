<template>
  <a class="nav__link" :href="href">{{ content }}</a>
</template>

<script>
  export default {
    methods: {
    },
    props: ['href', 'content'],
    data: function() {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .nav__link {
    font: 400  14px 'Source Sans Pro';
    text-transform: uppercase;
    letter-spacing: 0.01em;
    margin-left: 56px;
    padding: 0 0 15px 0;
    box-sizing: border-box;
    color: $c-white;
    transition: .2s;
    will-change: border background;
    &:hover,
    &:focus,
    &--state-active {
      color: $c-red;
      border-bottom: 1px solid $c-red;
    }
  }

  @media screen and (max-width: 1000px) {
    .nav__link {
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 700px) {
    .nav__link {
      font: 400  26px 'Open Sans';
      color: $c-gray__text;
      width: 100%;
      padding: 0;
      &:hover,
      &:focus,
      &--state-active {
        border-bottom: none;
      }
    }
  }

</style>