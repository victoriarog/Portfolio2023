<template>
  <div class="divline">
    <div class="timeline">
  <div class="container left">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2020</h1>
        <p class="timelinep">Originally, I hoped to dedicate myself to game development and engine programming, 
          but decided to enroll into a more general course to see if I liked it and could dedicate my life
          and career to this. Enrolled into a Computer Science course at the Harbour.Space University in Barcelona.
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2020</h1>
        <p class="timelinep">During my time at H.Space, I reached out to CG Spectrum and enrolled into their Game Programming in C++ 
          course to broaden my horizons and keep myself busy during quarantine.
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2021</h1>
        <p class="timelinep">Picked up a front End course in university on a whim and ended up falling in love with it and started taking more and more 
          Front End oriented classes and studying on my own time. 
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2021</h1>
        <p class="timelinep">Had a lucky opportunity to enroll into an internship with an up and coming startup "Urban Animals NFT" to 
          develop their website and be a part of their technical team. Unfortunately startup didn't take off and was frozen 
          indefinetely.  
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2023</h1>
        <p class="timelinep">Wrapping up my studies at H.Space and looking forward to my future. Thanks to my teacher in my Vue/Nuxt class, 
          I found a framework I truly "clicked" with although it isn't the most popular one. Nevertheless, I am excited to 
          develop my skills even more and find a community.
            </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h1 style="padding-top: 0.4vh;">2023</h1>
        <p class="timelinep">Looking for Junior-level jobs and, luckily, in the meantime working remotely as a Frontend intern at 
          Wildberries, Russia. Here's to bright future! :>
            </p>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
    * {
  box-sizing: border-box;
}

body {
  background-color: #474e5d;
}

.divline {
  padding: 2vh 0 5vh 0;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  width: 60%;
  margin: 0 auto;
  padding: 5vh 0 22vh 0;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #212124;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  right: -13px;
  background-color: #ba778a;
  border: 4px solid #212124;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}


.left {
  left: 0;
}

.right {
  left: 50%;
}



/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

.content {
  padding: 5px 20px;
  position: relative;
  background-color: rgba(71, 78, 93, 0.1);
  border-radius: 10px;
}

.timelinep {
  font-size: 2.3vh;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {

  .timeline {
    width: 90%;
  }

  .timeline::after {
  left: 15px;
  }
  
  .container {
  width: 100%;
  }

  .left::after, .right::after {
  left: 1px;
  }
  .right {
  left: 0%;
  }
}
</style>