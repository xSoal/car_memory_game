<template>
  <div class="startPage">
    <div class="startPage__inner">
      <div class="countCont">
        размер поля <input type="number" v-model="boardSizeLocal" step="2" min="2" max="15" @change="onChange" >
      </div>
      <div class="buttonCont">
        <button @click="$emit('go')">Go</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
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
    onChange(){
      if(this.boardSizeLocal < 2){
        this.boardSizeLocal = 2
      }
      if(this.boardSizeLocal > 15){
        this.boardSizeLocal = 15;
      }

      if(this.boardSizeLocal % 2 === 1){
        this.boardSizeLocal = ++this.boardSizeLocal;
      }
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



.countCont input {
  width: 100%;
  max-width: 50px;
  display: block;
  margin: 15px auto;
  background-color: #71266E;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-size: 24px;
  text-align: center;
  padding-left: 15px;
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