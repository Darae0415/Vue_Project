<template>
  <div class="son">
    <p>둘째아들</p>
    <cute-gson-21 ref="gson21"/>
    <cute-gson-22 ref="gson22"/>
    <input type="text" v-model="sndMsg">
    <input type="button" value="둘째아들버튼" @click="clickBtn">
  </div>
</template>

<script>
import CuteGson21 from './CuteGson21.vue';
import CuteGson22 from './CuteGson22.vue';
export default {
  name: 'GoodSon20',
  props: {
  },
  components: {
    CuteGson21,CuteGson22
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      sndMsg:'',
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    changeTextColor(idx, data){
      this.$refs.gson21.changeTextColor(idx,data);
      this.$refs.gson22.changeTextColor(idx,data);
    },
    clickBtn(){
      this.$refs.gson21.message = this.sndMsg;
      this.$refs.gson22.message = this.sndMsg;
    },
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
.son{
  background-color: moccasin;
  padding:20px;
  margin: 20px;
}
.gson{
  background-color: yellow;
}
</style>