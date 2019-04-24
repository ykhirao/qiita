<template>
  <div id="DraggableText">
    <span
      v-for="code in codes"
      :key="code.id"
      class="flex-span"
      @click="add(code.id)"
    >
      {{ code.val }}
    </span>
    <span @click="del" class="flex-span">del</span>
    <span @click="clear" class="flex-span">clear</span>
    <span @click="addSpace" class="flex-span">space</span>
    <span @click="copy" class="flex-span">copy</span>
    <div class="show-text">
      {{showText}}
    </div>
    <div>
      <input type="text" class="input-lower" :placeholder="showUpperText" disabled>
    </div>
    <div>
      <input type="text" class="input-lower" v-model="lowerText">
    </div>
    <div>
      <input id="input-copy" type="text" readonly class="input-copy" :value="showText">
    </div>
  </div>
</template>
<script>
import codes from './../assets/codes.js'

export default {
  name: "DraggableText",
  components: {
  },
  computed: {
    showText: function() {
      return this.lowerText.split('').map((char, i) => {
        return `${char}${this.getCodeById(this.upperTextArray[i])}`
      }).join("")
    },
    showUpperText: function() {
      return this.upperTextArray.map(id => {
        return `  ${this.getCodeById(id)}`
      }).join("")
    }
  },
  methods: {
    removeAt: function(i) {
      this.lower.splice(i, 1)
    },
    add: function(i) {
      this.upperTextArray.push(i)
    },
    getCodeById(id) {
      const obj = this.codes.find(code => id === code.id)
      return obj ? obj.val : ""
    },
    del() {
      this.upperTextArray.splice(-1)
    },
    addSpace() {
      this.upperTextArray.push(0)
    },
    clear() {
      this.upperTextArray = []
    },
    copy() {
      const input = document.getElementById("input-copy");
      input.select();
      document.execCommand("Copy");
    },
  },
  data() {
    return {
      lowerText: "ponponpain",
      upperTextArray: [ 875, 870, 871, 873, 867, 875, 868, 873, 866, 867 ],
      codes: codes,
    }
  }
}
</script>
<style scoped>
.flex-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
}
.flex-span {
  padding: .3em .6em;
  line-height: 180%;
}
.flex-span:hover {
  background-color: chocolate;
}
.input-lower {
  text-align: center;
  padding: .2em .5em;
  font-size: 2em;
  width: 90%;
}
.show-text {
  font-size: 2.5em;
}
.input-copy {
  position: fixed;
  right: 200%;
}
</style>

