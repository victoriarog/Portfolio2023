<template>
    <div class="card">
    <img :src="image" alt="Project Card">
    <div class="card-content">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String
  },
};
</script>

<style scoped>
    
</style>