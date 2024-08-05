<template>
  <div class="">
    <!-- composition API 사용 -->
    <h3>CalcylatorView4</h3>
    <input type="text" v-model="state.num1"><span> + </span>
    <input type="text" v-model="state.num2"><span> = </span>
    <span>{{state.result}}</span>
  </div>
</template>

<script>
import {reactive, computed} from 'vue';

export default {
  name: 'CalcylatorView4',
  setup(){
    //반응형 상태객체 : 속성이 변경될 때마다 자동으로 DOM업데이트

    //reactive : 데이터를 바꿀 때마다 화면도 자동 업데이트 되도록 해줌
    let state = reactive({
      num1:0, //첫번째 텍스트박스와 바인딩 될 숫자 상태
      num2:0, //두번째 텍스트박스와 바인딩 될 숫자 상태
      result: computed( ()=>Number(state.num1)+Number(state.num2) ),
      //computed : 자동으로 계산해줌 num1, num2가 바뀔때마다 result도 알아서 계산
      //계산된 결과를 저장할 상태
    });
    return{state};
  },

};
</script>

<style scoped>

</style>