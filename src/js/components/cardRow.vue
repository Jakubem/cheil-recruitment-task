<template>
  <section class="card-row">
    <ul class="card-row__list">
      <li class="card-row__item">
        <single-card
          :copy="'Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.'"
          :headline="'sleek design'"
          :src="'images/1.webp'"
          :fallback="'images/1.png'">
        </single-card>
      </li>
      <li class="card-row__item">
        <single-card
          :copy="'Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.'"
          :headline="'clean code'"
          :src="'images/2.webp'"
          :fallback="'images/2.png'">
        </single-card>
      </li>
      <li class="card-row__item">
        <single-card
          :copy="'Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.'"
          :headline="'creative ideas'"
          :src="'images/3.webp'"
          :fallback="'images/3.png'">
        </single-card>
      </li>
      <li class="card-row__item">
        <single-card
          :copy="'Lorem Ipsum is simply dummy text of the printing and typesetting let. Lorem Ipsum has been the industry.'"
          :headline="'free support'"
          :src="'images/4.webp'"
          :fallback="'images/4.png'">
        </single-card>
      </li>
    </ul>
  </section>
</template>

<script>
  import SingleCard from './singleCard.vue';
  export default {
    components: {
      SingleCard
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

<style lang="scss" scoped>
  @import '../../css/_var.scss';
  .card-row__list {
    display: flex;
    justify-content: center;
  }
</style>