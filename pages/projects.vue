<template>
   <CustomCursor/>
    <Header/>
    <div>
        <h1 class="comph1">{{ $t('projects') }}</h1>

        <Modal 
        v-show="showModal[index]"
        @close-modal="showModal[index] = false"
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :cardtext="card.cardtext"
        :extratext="card.extratext"
         />

        <Card
        @click="showModal[index] = true"
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :title="card.title"
        :cardtext="card.cardtext"
        :link="card.link"
        :code="card.code"
        />
    </div>
</template>

<script>
    import Modal from '~/components/Modal.vue';
    import Card from '~/components/Card.vue';
    import cardsData from 'assets/cards';
    export default {
  components: {
    Card,
    Modal,
  },
  data() {
    return {
      showModal: new Array(cardsData.length).fill(false),
      cards: cardsData,
    };
  },
};
</script>
