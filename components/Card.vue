<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" alt="Project Card" class="cimg">
    </div>
    <div class="card-content">
      <h1 style="padding: 0;">{{ title }}</h1>
      <p class="pctext">{{ cardtext }}</p>
      <div class="pdivcard">
      <a :href="link" class="acard"><p class="pcard">Live</p></a>
      <a :href="code" class="acard"><p class="pcard">Code</p></a>
      </div>
    </div>
  </div>
</template>

<style scoped>

@media screen and (min-width: 1200px) {
.card {
  display: flex;
  width: 60%;
  left: 5vw;
  position: relative;
  padding: 4vh;
  border-bottom: #212124 2px solid;
}

h1 {
  font-size: 4.5vh !important;
}

.card-image {
  flex: 0 0 auto;
  margin-right: 20px; 
}

.cimg {
  height: 30vh;
  width: auto;
  z-index: 1;
}

.card-content {
  flex: 1; 
}

.pctext {
  font-size: 2vh;
}

.pdivcard {
  display: flex;
}

.acard {
  flex: 1;
  transform: none;
}

.pcard {
  font-size: 2.5vh !important;
}

.pcard:hover {
  text-decoration: underline;
}

.pcard, .acard {
  padding: 0 !important;
}

}
</style>

<script>
export default {
  props: {
    image: String,
    title: String,
    cardtext: String,
    link: String,
    code: String,
  },
};
</script>