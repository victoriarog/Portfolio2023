<template>
    <div class="card">
    <img :src="image" alt="Project Card" class="cimg">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ cardtext }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    cardtext: String
  },
};
</script>

<style scoped>

  .card {
    width: 40%;
    left: 5vw;
    position: relative;
    padding: 4vh;
  }

  /* .card:hover {
    -webkit-box-shadow: 0px 0px 50px 1px rgba(33,33,36,0.1);
    -moz-box-shadow: 0px 0px 50px 1px rgba(33,33,36,0.1);
    box-shadow: 0px 0px 50px 1px rgba(33,33,36,0.1);
  } */

  /* .cimg {

  } */
    
</style>