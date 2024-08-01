<template>
  <div class="">
    <input type="checkbox" id="cbtn_agree" name="cbtn_agree">
    <label for="cbtn_agree">동의</label><br/>
    
    <label><input type="checkbox" v-model="agree">동의</label><br/>
    <label><input type="checkbox" v-model="agree2"
    true-value="동의" false-value="비동의">{{agree2}}</label><br/>
  </div>
  <div>
    <p>기본피자에 원하시는 토핑을 추가하세요.</p>
    <label><input type="checkbox" v-model="pizza" value="치즈">치즈</label><br/>
    <label><input type="checkbox" v-model="pizza" value="파인애플">파인애플</label><br/>
    <label><input type="checkbox" v-model="pizza" value="버섯">버섯</label><br/>
    <p>당신이 추가로 선택하신 토핑은 {{pizza}} 입니다.</p>
  </div>
  <div>
    <p>당신의 탕수육을 먹는 취향은?</p>
    <label><input type="radio" v-model="sweet_sour_pork" value="부먹">부먹</label>
    <label><input type="radio" v-model="sweet_sour_pork" value="찍먹">찍먹</label>
    <p>당신은 <span style="color:red; font-we">{{sweet_sour_pork}}파</span> 입니다.</p>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      agree:false,
      agree2:false,
      pizza:[],
      sweet_sour_pork:'',
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>