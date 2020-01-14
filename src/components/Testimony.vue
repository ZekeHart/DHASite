<template>
  <div class="testimony-main">
      <h1 class="speaker-name">test: {{name}}</h1>
      <img class="speaker-img" :src=imageUrl> 
      <p class="testimony-text">{{testimonyText}}</p>
  </div>
</template>

<script>
import testimonies from '../assets/testimonies.json'
export default {
  name: "Testimony",
  props: {
      idNumber: Number
    },
  data: () => {
    return {
      name: null,
      imageUrl: null,
      testimonyText: null
    };
  },
  mounted() {
    this.name = testimonies[this.idNumber].name,
    this.imageUrl = testimonies[this.idNumber].image,
    this.testimonyText = testimonies[this.idNumber].text
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.speaker-name {
    padding-top: 10%;
}
</style>
