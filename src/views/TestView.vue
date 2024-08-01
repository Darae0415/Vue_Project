<template>
<div>
  <!-- 속성 연결 -->
  <img src='https://borgssam.github.io/MySite/img/album_01.jpg' alt="" title="가방 든 사나이"><br/>
  <img v-bind:src='imgSrc' v-bind:title="imgTitle" alt=""><br/>
</div>
<div>
  <button :disabled="btn_1" :style="color_red">버튼</button>
  <button :disabled="btn_2" :style="color_blue">버튼</button>
</div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      imgSrc:'https://borgssam.github.io/MySite/img/album_01.jpg',
      imgTitle:'가방 든 사나이',
      btn_1:true,
      btn_2:false,
      color_blue:{color:'blue', fontSize:'24px'},
      color_red:{color:'red', fontSize:'24px'},
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>