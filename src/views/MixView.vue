<template>
  <div>
    <!-- MixComp1과 MixComp2 컴포넌트를 사용 -->
    <mix-comp-1/>
    <mix-comp-2/>
  </div>
</template>

<script>
// 컴포넌트를 올바르게 import 합니다.
import MixComp1 from '@/components/MixComp1.vue';
import MixComp2 from '@/components/MixComp2.vue';

export default {
  name: 'MixView',
  components: {
    MixComp1,
    MixComp2,
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
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