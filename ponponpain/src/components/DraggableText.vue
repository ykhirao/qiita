<template>
  <div id="DraggableText">
    <h3>pͪoͣnͬpͣoͥnͭpͣa͡inͥ を支える技術</h3>
    <div>
      <input type="text" class="square-input" v-model="baseText" placeholder="ベーステキスト / ponponpain">
    </div>
    <span v-for="code in codes" :key="code.id" class="selectable-button" @click="add(code.id)">
      {{ code.val }}
    </span>
    <div>
      <button @click="del" class="selectable-button">1文字削除</button>
      <button @click="clear" class="selectable-button">全文字削除</button>
      <button @click="addSpace" class="selectable-button">空白挿入</button>
      <button @click="copy" class="selectable-button">コピーする</button>
      <button @click="ponponpain" class="selectable-button">pͫoͦnͧpͩoͣnͫpͤaͩi͢nͣの例</button>
    </div>
    <div class="show-text">
      {{ showText }}
    </div>
    <div>
      <input type="text" class="square-input" :placeholder="showUpperText" disabled>
    </div>
    <div>
      <input type="text" class="hidden-input-for-copy" readonly :value="showText">
    </div>
    <div id="footer">
      <a href="https://qiita.com/ykhirao/items/9ca1fbd294883e06dbd6">Qiita元記事はこちら</a>
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
    showText: function () {
      return this.baseText.split('').map((char, i) => {
        return `${char}${this.getCodeById(this.upperTextArray[i])}`
      }).join("")
    },
    showUpperText: function () {
      return this.upperTextArray.map(id => {
        return `  ${this.getCodeById(id)}`
      }).join("")
    }
  },
  methods: {
    removeAt: function (i) {
      this.lower.splice(i, 1)
    },
    add: function (i) {
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
      const input = document.querySelector(".hidden-input-for-copy");
      input.select();
      document.execCommand("Copy");
    },
    ponponpain() {
      this.upperTextArray = [875, 870, 871, 873, 867, 875, 868, 873, 866, 867];
      this.baseText = 'ponponpain';
    }
  },
  data() {
    return {
      baseText: "",
      upperTextArray: [],
      codes,
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

.base-input-container {
  display: flex;
  font-size: 1em;
}

.base-input-container label {
  font-size: .6em;
  padding: .2em;
  width: 20%;
}

.base-input-container span {
  font-size: 0.3em;
}

.selectable-button {
  padding: .1em .3em;
  line-height: 180%;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.selectable-button:hover {
  background-color: chocolate;
}

.square-input {
  text-align: center;
  padding: .2em .5em;
  font-size: 1em;
  width: 80%;
}

.show-text {
  font-size: 2.5em;
  padding: 0.4em;
}

.hidden-input-for-copy {
  /* display: none; だとコピーが効かないので画面外にコピー用componentを描画する */
  position: fixed;
  right: 300%;
}

#footer {
  position: fixed;
  bottom: 0;
  font-size: .5em;
  margin-bottom: 1em;
}
</style>
