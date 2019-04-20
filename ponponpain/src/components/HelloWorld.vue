<template>
  <div id='demo'>
      <p>I will display &#771;</p>
      <p>
        a &#874;        a &#874;aa
      </p>
      <p>
          <ruby>
              <rb>亜米利加</rb>
              <rp>（</rp>
              <rt>アメリカ</rt>
              <rp>）</rp>
              </ruby>
      </p>
      <textarea name="" id="" cols="50" rows="5"></textarea>

      a&#874;
      <p></p>
      pͪoͣnͬpͣoͥnͭpͣa͡inͥ
    <p v-on:click="click_1(); click_2()">クリックイベントはこちら</p>
    <ul v-for="text in list" :key="text">
      <li>{{text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
