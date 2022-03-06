<template>
  <div class="board">
    <div
      v-for="(row,rowIndex) in board"
      :key="rowIndex"
      class="row"
    >
      <Field
        v-for="field in row"
        :key="field.index"
        :data="field"
        :fieldSize="fieldSize"
        @onSelect="onSelectHandler"
      />
    </div>
  </div>
</template>

<script>

import getBoard from "@/utils/getBoard";
import Field from "@/components/Field";

export default {
  name: "Board",
  props: ['boardSize'],
  components: {
    Field
  },
  data(){
    return {
      board: null,
      fieldSize: null,
      currentField: null,
    }
  },
  methods: {
    getFieldSize(){
      this.fieldSize = {
        w: Math.floor(window.innerWidth / this.boardSize),
        h: Math.floor(window.innerHeight / this.boardSize)
      }
    },
    onSelectHandler(field){
      if(this.currentField === field) return;
      field.isOpen = true;

      if(!this.currentField){
        this.currentField = field;
        return;
      }

      else if(this.currentField.value === field.value){
        this.currentField.isPlayed = true;
        field.isPlayed = true;
        this.currentField = null;
        return;
      }

      else {
        let copyLink = this.currentField;
        this.currentField = null;

        setTimeout(()=>{
          copyLink.isOpen = false;
          field.isOpen = false;
        },350)

      }

    }
  },
  mounted() {
    this.board = getBoard(this.boardSize);
    this.getFieldSize();
    window.addEventListener('resize', this.getFieldSize);
  },
}
</script>

<style scoped>

.board {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.row {
  width: 100%;
  display: flex;
}

</style>