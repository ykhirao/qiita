<template>
  <div id="DraggableText">
    <draggable
      element="ul"
      class="flex-container"
      :group="{ name: 'upper', pull: 'clone', put: false }"
    >
      <li
        v-for="alphabet in alphabets"
        :key="alphabet.id"
        class="flex-li"
      >
        {{ alphabet.word }}
      </li>
    </draggable>
    ~~~~~~~~~~~~~~~~~
    <draggable
      element="ul"
      class="flex-container"
      group="lower"
    >
      <li
        v-for="(alphabet, key) in lower"
        :key="key"
        class="flex-li"
      >
        {{ alphabet.word }}
        <i class="fa fa-times close" @click="removeAt(key)">x</i>
      </li>
    </draggable>
    <draggable
      element="ul"
      class="flex-container"
      :group="{ name: 'lower', pull: 'clone', put: false }"
    >
      <li 
        v-for="(alphabet, key) in alphabets"
        :key="key"
        class="flex-li"
      >
        <span>{{ alphabet.word }}</span>
      </li>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  name: "DraggableText",
  components: {
    draggable,
  },
  computed: {
  },
  methods: {
    removeAt: function(i) {
      // console.log(this)
      this.lower.splice(i, 1)
    }
  },
  data() {
    return {
      alphabets: [
        { id: 1, word: 'a' },
        { id: 2, word: 'b' },
        { id: 3, word: 'c' },
        { id: 4, word: 'd' },
        { id: 5, word: 'e' },
        { id: 6, word: 'f' },
        { id: 7, word: 'g' },
        { id: 8, word: 'h' },
        { id: 9, word: 'i' },
        { id: 10, word: 'j' },
        { id: 11, word: 'k' },
        { id: 12, word: 'l' },
        { id: 13, word: 'm' },
        { id: 14, word: 'n' },
        { id: 15, word: 'o' },
        { id: 16, word: 'p' },
        { id: 17, word: 'q' },
        { id: 18, word: 'r' },
        { id: 19, word: 's' },
        { id: 20, word: 't' },
        { id: 21, word: 'u' },
        { id: 22, word: 'v' },
        { id: 23, word: 'w' },
        { id: 24, word: 'x' },
        { id: 25, word: 'y' },
        { id: 26, word: 'z' },
      ],
      lower: [
        { id: 16, word: 'p' },
        { id: 15, word: 'o' },
        { id: 14, word: 'n' },
        { id: 16, word: 'p' },
        { id: 15, word: 'o' },
        { id: 14, word: 'n' },
        { id: 16, word: 'p' },
        { id: 1, word: 'a' },
        { id: 9, word: 'i' },
        { id: 14, word: 'n' },
      ]
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
.flex-li {
  padding: .2em .5em;
  border: solid 1px #000;
}
</style>

