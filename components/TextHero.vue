<template>
    <div class="custom-component" :class="assignedClass" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div class="circleouter">
    </div>
        <div class="circleinner">
        </div>
    <div v-if="isHovered" class="hover-text"><p>{{ hoverText }}</p></div>
    </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: {
    assignedClass: String,
    hoverText: String,
  },
  data() {
    return {
      isHovered: false, 
    };
  },
};
</script>

<style scoped>

.custom-component {
  height: 7vh;
  width: 7vh;
}

.circleinner {
  position: absolute;
  background-color: #ba778a;
  width: 15px;
  height: 15px;
  border-radius: 25px;
  z-index: 5;
  top: 35%;
  left: 35%;
}

.circleouter {
  position: relative;
  background-color: rgba(186, 119, 138, 0.15);
  width: 60px;
  height: 60px;
  border-radius: 30px;
  z-index: 4;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-name: pulse-outer; 
}


@keyframes pulse-outer {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.hover-text {
  position: relative;
  text-align: center;
  font-size: 2.5vh;
  width: 20vw !important;
}


</style>
