<template>
  <div class="">
    <page-title title="1번 페이지" age="3" hobbies="['자전거','등반','꽃꽂이','게임']"
    family="{papa:'아빠',mama:'엄마'}"/>
    <PageTitle :title="title2" 
    :age="age1" 
    :hobbies="hobbies1"
    :family="{papa:'아빠2',mama:'엄마2'}"
    :func="customfunc"
    />
    <PageTitle v-bind:title="title3" v-bind:age="age2" v-bind:hobbies="hobbies2"/>
  </div>
  <div>
    <input type="text" v-model="hobby">
    <button @click="addhobby">취미추가</button>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  name: 'TestView',
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  components: {
    PageTitle
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      title1:'page 1',
      title2:'page 2',
      title3:'page 123',
      age1:4,
      age2:5,
      hobbies1:[],
      hobbies2:'',
      hobby:'',
      func:'',
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
    addhobby(){
      this.hobbies1.push(this.hobby);
      return '';
    },
    customfunc(){
        return '결과값 뾰로롱';
    },
    //컴포넌트에서 사용할 메소드를 설정합니다.
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