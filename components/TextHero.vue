<template>
    <div class="custom-component" :class="assignedClass">
    <div class="circleouter">
        <div class="circleinner">
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  props: {
    assignedClass: String,
  },
};
</script>

<style scoped>

.circleinner {
  position: absolute;
  background-color: #ba778a;
  width: 13px;
  height: 13px;
  border-radius: 25px;
  z-index: 5;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  animation-duration: 2s; /* Duration of the pulsating animation */
  animation-timing-function: ease-in-out; /* Smooth animation timing */
  animation-iteration-count: infinite; /* Infinite looping */
  animation-name: pulse-inner;
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

@keyframes pulse-inner {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

</style>
