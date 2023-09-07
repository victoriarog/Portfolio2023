<template>
   <CustomCursor/>
    <Header/>
    <div>
        <h1 class="comph1">{{ $t('projects') }}</h1>

        <Card
      v-for="(card, index) in cards"
      :key="index"
      :image="card.image"
      :title="card.title"
      :cardtext="card.cardtext"
        />
    </div>
</template>

<script>
    
    import Card from '~/components/Card.vue';
    import cardsData from 'assets/cards';
    export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: cardsData,
    };
  },
};
</script>
