<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="nav">
    <NuxtLink to="/"><h3 class="headert">{{ $t('home') }}</h3><img class="icon" src="../assets/icons/home.svg" :height="35" :width="35"/></NuxtLink>
    <NuxtLink to="/projects"><h3 class="headert">{{ $t('projects') }}</h3><img class="icon" src="../assets/icons/folder.svg" :height="35" :width="35"/></NuxtLink>
    <NuxtLink to="/art" style="display: none;"><h3 class="headert">{{ $t('art') }}</h3><img class="icon" src="../assets/icons/art.svg" :height="35" :width="35"/></NuxtLink>
    <NuxtLink to="/about"><h3 class="headert">{{ $t('about') }}</h3><img class="icon" src="../assets/icons/smile.svg" :height="35" :width="35"/></NuxtLink>
  </div>
</template>
   