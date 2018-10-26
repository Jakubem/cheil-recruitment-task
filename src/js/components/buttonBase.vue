<template>
  <button class="button">{{ content }}</button>
</template>

<script>
  export default {
    data: function () {
      return {
      };
    },
    props: ['state', 'content', 'method'],
    methods: {
      // Optional methods goes here. You should then call them, passing method name as prop.
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';

  .button {
    color: $c-white;
    background-color: transparent;
    border-radius: $border-radius;
    width: 255px;
    height: 56px;
    font: bold 14px 'Open Sans';
    text-transform: uppercase;
    letter-spacing: 0.01em;
    margin: 0 15px 15px 15px;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid $c-white;
    transition: .2s;
    will-change: border-color background-color;
    &:hover,
    &:focus {
      border-color: $c-red;
      background-color: $c-red;
    }
  }

</style>