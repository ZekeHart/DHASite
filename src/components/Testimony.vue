<template>
  <div class="page-container">
      <h1 class="speaker-name-t">{{name}}</h1>
      <img class="speaker-img-t" :src=imageUrl> 
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
<style lang='scss' scoped>
.speaker-name-t {
    padding-top: 10%;
    font-size: 2rem;
    margin: auto;
    text-align: center;
    padding-bottom: 5%;
}

.speaker-img-t {
    max-width: 60%;
    margin: auto;
    align-self: center;
    display: block;
    border-radius: 50%;
    border: #8c67ef solid 2px;
  }

  .testimony-text {
    margin-top: 5%;
  }


@media (min-width: 1281px) {
  
  .speaker-img-t {
      max-width: 20%;
      margin-top: 0;
      margin: auto;
      align-self: center;
      display: block;
      border-radius: 50%;
      border: #8c67ef solid 2px;
    }
  .speaker-name-t {
      text-align: center;
      margin-top: 5%;
      margin-bottom: 2%;
      font-size: 3rem;
  }

  .testimony-text {
      margin-top: 3%;
      font-size: 1.5rem;
      line-height: 3rem;
  }
  .btn {
      margin-bottom: 5%;
  }
    .speaker-name {
      margin-top: 2%;
      margin-bottom: 2%;
      font-size: 1.5rem;
  }
}
</style>
