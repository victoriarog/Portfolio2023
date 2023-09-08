<template>
     <CustomCursor/>
    <Header/>
    <div style="padding-bottom: 5vh;">
        <h1 class="comph1">{{ $t('about') }}</h1>
        <div class="garlictxt">
        <img class="garlic" src="../assets/heros/garlic.png" alt="cat shaped like a garlic"/>
        <p class="abouttxt">{{ $t('abouttxt') }}</p>
        </div>
        <!-- <div class="scroll-down"></div> -->
        <Timeliine/>
    </div>
</template>

<style scoped>
    .scroll-down {
  position: relative;
  left: 50%;
  bottom: 10px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0;
  width: 39px;
  height: 39px;
  border-bottom: 5px solid #212124;
  border-right: 5px solid #212124;
  z-index: 9;
  left: 48.8%;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 2s ease-in-out infinite;
  -moz-animation:    fade_move_down 2s ease-in-out infinite;
  animation:         fade_move_down 2s ease-in-out infinite;
}



    @-webkit-keyframes fade_move_down {
    0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
    }
    @-moz-keyframes fade_move_down {
    0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
    }
    @keyframes fade_move_down {
    0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
</style>
