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
  position: relative;
  background-color: rgba(186,119,138,0.73);
  width: 15px;
  height: 15px;
  border-radius: 25px;
  z-index: 5;
  margin: 0 auto;
  bottom: 73%;
  left: 0.2vw;
  -webkit-box-shadow: 0px 0px 13px 13px rgba(186,119,138,0.7);
-moz-box-shadow: 0px 0px 13px 13px rgba(186,119,138,0.7);
box-shadow: 0px 0px 13px 13px rgba(186,119,138,0.7);
}

.circleouter {
  position: relative;
  background-color: rgba(186, 119, 138, 0.15);
  width: 65px;
  height: 65px;
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
