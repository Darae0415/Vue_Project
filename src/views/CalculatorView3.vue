<template>
  <div class="">
    <!-- composition API 사용 -->
    <h3>CalcylatorView3</h3>
    <input type="text" v-model="num1"><span> + </span>
    <input type="text" v-model="num2"><span> = </span>
    <span>{{result}}</span>
  </div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue';
function plusNumbers(){
    //반응형 상태객체 : 속성이 변경될 때마다 자동으로 DOM업데이트
    let state = reactive({
    //reactive : 데이터를 바꿀 때마다 화면도 자동 업데이트 되도록 해줌
      num1:0, //첫번째 텍스트박스와 바인딩 될 숫자 상태
      num2:0, //두번째 텍스트박스와 바인딩 될 숫자 상태
      result: computed( ()=>Number(state.num1)+Number(state.num2) ),
      //computed : 자동으로 계산해줌 num1, num2가 바뀔때마다 result도 알아서 계산
      //계산된 결과를 저장할 상태
    });
    //toRefs:반응형 상태객체 -> 일반 자바스크립트 객체
    return toRefs(state);
}
export default {
  name: 'CalcylatorView3',
  setup(){
    //구조분해할당으로 num1,num2,result 값을 얻기 ↓
    // plusNumvers에서 num1,num2,result 값을 받아오기(추출)
    let {num1,num2,result}=plusNumbers();
    
    //구조분해된 변수값을 반환
    return{num1,num2,result};
  },

};
</script>

<style scoped>

</style>