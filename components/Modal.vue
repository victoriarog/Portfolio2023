<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
      <div class="modal" @click.stop>
        <img :src="image" alt="Project Card" class="mimg">
        <h1>{{ title }}</h1>
        <p>{{ cardtext }}</p>
        <p>{{ extratext }}</p>
      </div>
      <div class="close" @click="$emit('close-modal')">
      </div>
    </div>
  </template>
  
  
  
  <script>
   export default {
  props: {
    image: String,
    title: String,
    cardtext: String,
    extratext: String,
  },
};
  </script>

<style scoped>

.mimg {
    height: 30vh;
    width: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: rgba(33, 33, 36, 0.3);
  z-index: 8;
}

.modal {
  /* text-align: center; */
  background-color: #f7f4eb;
  max-height: 60vh;
  overflow-y: auto;
  width: 50vw;
  margin-top: 5%;
  padding: 5vh;
  border-radius: 25px;
}
.close {
  position: absolute;
  top: 9%;
  margin-left: 54vw ;
  height: 40px;
  width: 40px;
  background-color: #212124;
  border-radius: 125px;
}

.close:hover {
    background-color: #ba778a;
}

h1 {
  font-size: 4vh !important;
  margin: 20px 0;
}

p {
  font-size: 2.5vh;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
  cursor: none;
}
</style>

  