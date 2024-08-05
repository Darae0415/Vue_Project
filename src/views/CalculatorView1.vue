<template>
  <div class="">
    <h3>CalcylatorView1</h3>
    <input type="text" v-model="num1" @keyup="plusNumbers"><span> + </span>
    <input type="text" v-model="num2" @keyup="plusNumbers"><span> = </span>
    <span> {{result}} </span>
  </div>
</template>

<script>
export default {
  name: 'CalcylatorView1',
  props: {

  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      num1:0,
      num2:0,
      result:0,
    };
  },
  watch: {

    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {

    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    plusNumbers(){
      this.result = Number(this.num1) + Number(this.num2);
    }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>