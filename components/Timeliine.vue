<template>
  <div class="divline">
    <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>1998</h2>
        <p>Born in Moscow, Russia, on May 20th 1998
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2013</h2>
        <p>Moved from Moscow to Barcelona, Spain
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
        <p>Graduated from the British School of Barcelona
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2020</h2>
        <p>Started Bachelors degree in Computer Science in 
          Harbour.Space University, Barcelona, Spain.  
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2021</h2>
        <p>- Diploma in C++ Programming for Unreal Engine from CG Spectrum. <br/>
           - Started work as a Frontend Developer at Urban Animals NFT
            </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2023</h2>
        <p>Graduated from Harbour.Space University
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
  max-width: 60%;
  margin: 0 auto;
  padding: 2vh 0 2vh 0;
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
  background-color: #f7f4eb;
  border: 4px solid #212124;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}



/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 5px 20px;
  position: relative;
  background-color: rgba(71, 78, 93, 0.1);
  border-radius: 10px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {

  .timeline::after {
  left: 31px;
  }
  
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }

  .left::after, .right::after {
  left: 15px;
  }
  .right {
  left: 0%;
  }
}
</style>