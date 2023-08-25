<template>
    <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad 
        nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
        Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
        habeo iusto primis ea eam.
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent 
            detracto. Ea quis iuvaret expetendis his, te elit voluptua 
            dignissim per, habeo iusto primis ea eam.
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2015</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent 
            detracto. Ea quis iuvaret expetendis his, te elit voluptua 
            dignissim per, habeo iusto primis ea eam.
        </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2012</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent 
            detracto. Ea quis iuvaret expetendis his, te elit voluptua
            dignissim per, habeo iusto primis ea eam.
        </p>
    </div>
  </div>
  <div class="container left">
    <div class="content">
      <h2>2011</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci,
            ad nec admodum perfecto mnesarchum, vim ea mazim fierent
             detracto. Ea quis iuvaret expetendis his, te elit voluptua
              dignissim per, habeo iusto primis ea eam.
            </p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2007</h2>
        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci,
             ad nec admodum perfecto mnesarchum, vim ea mazim fierent
              detracto. Ea quis iuvaret expetendis his, te elit voluptua 
              dignissim per, habeo iusto primis ea eam.
            </p>
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

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 70%;
  margin: 0 auto;
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
  background-color: rgba(71, 78, 93, 0.15);
  border-radius: 10px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  /* Make all right containers behave like the left ones */
  .right {
  left: 0%;
  }
}
</style>