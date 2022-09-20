<template>
  <div class="startPage">
    <div class="startPage__inner">
      <div class="countCont">
        размер поля
        <Input @change="onChangeHandler" :boardSize="boardSizeLocal" />
      </div>
      <div class="buttonCont">
        <button @click="$emit('go')">Go</button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
export default {
  name: "StartPage",
  components: {
    Input
  },
  props: ['boardSize'],
  computed: {
    boardSizeLocal: {
      get: function(){
        return this.boardSize
      },
      set: function(newVal){
          this.$emit('onSizeChange', newVal)
      }
    },
  },

  methods: {
    onChangeHandler(newValue){
      if(newValue < 2){
        newValue = 2
      }
      if(newValue > 15){
        newValue = 15;
      }
      this.boardSizeLocal = parseInt(newValue);
    }
  }

}
</script>

<style scoped>

.startPage {
  background-color: #71266E;
  width: 100vw;
  height: 100vh;
  padding: 2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.startPage__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.countCont {
  font-size: 24px;
  text-align: center;
}




button {
  margin: auto;
  margin-top: 5px;
  padding: 1px 25px;
  background-color: #71266E;
  border: 1px solid white;
  color: white;
  font-size: 24px;
}

.countCont {
  width: 100%;
}



.buttonCont {
  width: 100%;
  text-align: center;
}

</style>