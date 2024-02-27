<template>
    <div class="show-time">
        <div class="container__top__previous-show-time"></div>
        
        <div class="container__top__hours-wasted">
          <div class="hours-wasted__days">
            <span class="numbers" id="days">00</span>
            <span class="description">days</span>
          </div>
          <div class="hours-wasted__hours">
            <span class="numbers" id="hours">00</span>
            <span class="description">hours</span>
          </div>
          <div class="hours-wasted__minutes">
            <span class="numbers" id="minutes">00</span>
            <span class="description">minutes</span>
          </div>
        </div>
    </div>
</template>


<script>
</script>


<style scoped>

.show-time{
}

.container__top__hours-wasted > div {
  color: white;
  display: inline-block;
  position: relative;
  padding: 0 1%;
  cursor: default; 
}

.container__top__hours-wasted > div:before {
  color: white;
  content: ':';
  position: absolute;
  top: 0%;
  left: -10px;
  font-size: 4em;
  font-weight: 200; 
}

.container__top__hours-wasted div:first-child:before {
  color: white;
  content: ''; 
}

.numbers {
  color: white;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 5em;
  font-weight: 100;
  display: block;
  letter-spacing: 5px;
  margin-bottom: -9.33333px; 
}

.description {
  color: white;
  opacity: .2;
  text-transform: uppercase;
}

input, .container__top__hours-wasted {
  color: white;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden; 
}

</style>