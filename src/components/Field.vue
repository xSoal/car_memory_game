<template>
 <div
     :style="{width: fieldSize.w + 'px', height: fieldSize.h + 'px'}"
     class="field"
     :class="{
      show : data.isOpen || data.isPlayed,
      played : data.isPlayed
     }"
 >
   <div
       class="front"
       @click="selectField"
   ></div>
   <div class="back">{{data.value}}</div>
 </div>
</template>

<script>
export default {
  name: "Field",
  props: ['data', 'fieldSize'],
  data(){
    return {

    }
  },
  methods: {
    selectField(){
      if(this.data.isPlayed) return;
      this.$emit('onSelect', this.data);
    }
  }
}
</script>

<style scoped>
  .field {
    position: relative;
    overflow: hidden;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 78px;
    
  }

  .field.played .back {
    opacity: .4;
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    transition: all .4s ease-in-out;
    backface-visibility: hidden;
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    transform: rotateY(-179deg);
    background-color: #A15089;

  }

  .front {
    transform: rotateX(0) rotateY(0);
    z-index: 1;
    border: 1px solid #40002D;
    background-color: #601048;
  }

  .field.show .front {
    transform: rotateY(179deg);
  }

  .field.show .back {
    transform: rotateX(0deg) rotateY(0deg);
  }

</style>