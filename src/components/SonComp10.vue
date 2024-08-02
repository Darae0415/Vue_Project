<template>
  <div class="son">
    <p>큰아들 : {{message}}</p><br/>
    <cute-gson-11 ref="gson11"/><br/>
    <cute-gson-12 ref="gson12"/><br/>
    <button @click="clickSon10">큰아들버튼</button><br/>
  </div>
</template>

<script>
import CuteGson11 from './CuteGson11.vue';
import CuteGson12 from './CuteGson12.vue';
export default {
  name: 'SonComp10',
  props: {

  },
  components: {
    CuteGson11,CuteGson12
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      message:'',
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  watch: {
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {

    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    clickSon10(){
      this.message = '큰 아들이 버튼을 눌렀습니다.'
      this.$refs.gson11.clickMsg();
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
.son{
  background-color: moccasin;
  padding: 20px;
  margin: 20px;
}
.gson{
  background-color: yellow;
}
</style>