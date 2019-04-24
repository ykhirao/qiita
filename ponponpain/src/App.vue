<template>
  <div id="app">
    <h3>pͪoͣnͬpͣoͥnͭpͣa͡inͥ を支える技術</h3>
    <DraggableText />
  </div>
</template>

<script>
import DraggableText from './components/DraggableText.vue'

export default {
  name: 'app',
  components: {
    DraggableText,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.7rem;
  margin-right: auto; /* 1 */
  margin-left:  auto; /* 1 */
  max-width: 960px; /* 2 */ 
  padding-right: 10px; /* 3 */
  padding-left:  10px; /* 3 */
}
ul {
  list-style: none;
}
</style>
