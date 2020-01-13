<template>
    <section id='testimonies'>
        <h1 class='page-header'>Testimonies</h1>
        <div class='page-container'>
            <div class='grid-item'>
                <img class='speaker-img' src='https://dha-vs-everybody.s3.us-east-2.amazonaws.com/ashley-square.png'>
                <h3 class='speaker-name'>Ashley Canady</h3>
                <p class='quote'>We have a lot of our loved ones that are displaced. This week has been very hectic. I got back in town right before New Years and I know I put at least 233 hours or more in McDougald Terrace, and I don’t get paid.</p>
                <button class='btn'>See more</button>
            </div>
            <div class='grid-item'>
                <img class='speaker-img' src='https://dha-vs-everybody.s3.us-east-2.amazonaws.com/samanther-square.png'>
                <h3 class='speaker-name'>Samantha Crowder</h3>
                <p class='quote'> My question is, to the City of Durham, have you ever had to look in your baby’s eyes and fear death because of the conditions of your living situation?</p>
                <button class='btn'>See more</button>
            </div>
            <div class='grid-item'>
                <img class='speaker-img' src='https://dha-vs-everybody.s3.us-east-2.amazonaws.com/cymone-square.png'>
                <h3 class='speaker-name'>Cymone Douglas</h3>
                <p class='quote'>We’re humans, and I don’t know how many times I’ve got to say it, but we’re struggling. We’re struggling as it as because we’re living in McDougald.</p>
                <button class='btn'>See more</button>
            </div>
        </div>
    </section>
</template>

<style lang='scss'>
$a: #8c67ef; 

.page-header {
    max-width: 80%;
}
.page-container {
    margin-top: 5%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80vw, 1fr));
    grid-gap: 10vh;
    justify-content: space-evenly;
}

.grid-item {
    margin: auto;
    box-shadow: -5px 8px 10px rgba(0, 0, 0, 0.25);
    padding: 20px;
}

.speaker-img {
    margin: auto;
    align-self: center;
    display: block;
    border-radius: 50%;
    max-width: 35%;
    border: $a solid 2px;
}

.quote {
    color: #000;
    text-align: center;
}

.speaker-name {
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 1.5rem;
}
.btn {
    text-align: center;
    margin: auto;
    display: block;
    align-self: center;
    border: 2px solid $a;
    color: #fff;
    background-color: $a;
    padding: 10px 16px;
    margin-top: 5%;
    font-size: 16px;
}

@media (min-width: 1281px) {
  
  .page-container {
    grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  }

  .speaker-img {
    border: $a solid 4px;
  }

  .speaker-name {
      font-size: 2rem;
  }
  
}
</style>