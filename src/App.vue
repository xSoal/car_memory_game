<template>
  <div id="app">
    <StartPage
     v-if="!canGo"
     :boardSize="boardSize"
     @onSizeChange="onSizeChangeHandler"
     @go="onStart"
    />
    <Board :boardSize="boardSize" v-else/>
  </div>
</template>

<script>

import Board from "@/components/Board";
import StartPage from "@/components/StartPage";

export default {
  name: 'App',
  components: {
    Board,
    StartPage
  },
  data(){
    return {
      canGo: false,
      boardSize: 4,
    }
  },
  methods: {
    onStart(){
      this.canGo = true;
    },
    onSizeChangeHandler(newSize){
      this.boardSize = newSize
    }
  }
}
</script>

<style>

#app {
  background-color: #40002D;
  width: 100vw;
  height: 100vh;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
