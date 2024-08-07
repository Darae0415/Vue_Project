<!-- HTML코드를 작성하는 영역 -->
<template>
</template> 

<script>
export default {
  name: '', // 컴포넌트 이름
  components: { }, // 다른 컴포넌트를 사용할 때 import 해주고 
                   // 배열식으로 저장 ex> component: { TopArea, BodyArea, }
  data() { return { }; },    
    // HTML과 Java Script에서 사용할 데이터를 변수선언 후 사용가능하게 해줌
    // ex> return{ name:'', age:0, job:'',};
  setup() { },    // Vue 3 Composition API를 구현하게 하는 메소드
  methods: { },   // component내에서 사용할 메소드를 정의하는 곳
                  // 메소드란? 객체가 할 수 있는 행동을 정의
  created() { },  //  컴포넌트가 처음 만들어질 때 실행되는 함수(초기설정)
  mounted() { },  // 컴포넌트가 화면에 나타났을때 자동으로 실행되는 함수.
  unmounted() {
    
  }// 컴포넌트가 화면에서 사라질때 자동으로 실행되는 함수(mounted와 반대)
};
</script>

<!-- 이 현재 컴포넌트에(scoped)만 적용 시키고 싶은 스타일을 구현하는 것 -->
<style scoped>
</style>