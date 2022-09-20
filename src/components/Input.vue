<template>
  <div class="inputCont">
    <div class="input__button less" @click="lessHandler">-</div>
    <div class="input__button more" @click="moreHandler">+</div>
    <input ref="input" class="input" type="text" v-model="boardSizeLocal"  >
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["boardSize"],
  computed: {
    boardSizeLocal: {
      get(){
        return this.boardSize
      },
      set(newValue){
        const value = parseInt(newValue) ? parseInt(newValue) : 3;
        this.$refs.input.value = value;
        this.$emit('change', value)
      }
    }
  },

  methods: {
    lessHandler(){
      this.boardSizeLocal = this.boardSizeLocal - 1;
    },
    moreHandler(){
      this.boardSizeLocal = this.boardSizeLocal + 1;
    }
  },



}
</script>

<style scoped>

.input__button {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  color: white;
  border: 1px solid white;
  font-size: 1.4rem;
  cursor: pointer;
}

.input__button.less {
  bottom: 0;
}

.input__button.more {
  top: 0;
}


.inputCont {
  position: relative;
}

.input {
  width: 100%;
  max-width: 150px;
  display: block;
  margin: 15px auto;
  padding: 15px;
  background-color: #71266E;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-size: 24px;
  text-align: center;

}


</style>