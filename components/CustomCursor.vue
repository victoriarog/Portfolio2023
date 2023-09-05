<template>
    <div>
        <div id="outer"></div>
        <div id="inner"></div>
    </div>
</template>

<style scoped>
    html, body {
        cursor: none;
    }

    #inner {
  position: absolute;
  background-color: #212124;
  width: 10px;
  height: 10px;
  border-radius: 15px;
  z-index: 10;
  pointer-events: none;
}

#outer {
  position: absolute;
  background-color: rgba(71, 78, 93, 0.15);
  width: 50px;
  height: 50px;
  border-radius: 30px;
  z-index: 9;
  pointer-events: none;
}
</style>

<script>
export default {
  mounted() {
    const inner = document.getElementById("inner");
    const outer = document.getElementById("outer");

    this.updateCursorPos = (e) => {
        let left = e.pageX;
  let top = e.pageY;
  
  inner.style.left = (left - 4) + "px";
  inner.style.top = (top - 4) + "px";
  
  outer.animate({
    left: (left - 25) + "px",
    top: (top - 25) + "px",
  }, {duration: 1000, fill: "forwards"});
    };

    window.addEventListener("mousemove", this.updateCursorPos);
  },
  beforeDestroy() {
    window.removeEventListener("mousemove", this.updateCursorPos);
  },
};
</script>
