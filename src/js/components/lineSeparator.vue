<template>
  <span class="line-separator">
  </span>
</template>

<script>
  export default {
    data: function () {
      return {
      };
    },
    methods: {
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .line-separator {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 20px auto;
    background-color: $c-red;
    border-radius: 50%;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      right: 5%;
      bottom: 5px;
      height: 1px;
      width: 79px;
      background: $c-gray--warm;
      margin-right: 22px;
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      left: 5%;
      bottom: 5px;
      height: 1px;
      width: 79px;
      background: $c-gray--warm;
      margin-left: 22px;
    }
  }
</style>