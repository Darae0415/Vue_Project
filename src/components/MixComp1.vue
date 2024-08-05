<template>
  <div class="">
    <h2>컴포넌트 1</h2>
    <p>{{sharedData}}</p>
    <button @click="sharedMethod">공유 메소드</button>
  </div>
</template>

<script>
import{commonMixin} from '@/mixins/commonMixin';
export default {
  name: 'MixComp1',
  mixins:[commonMixin],
  props: {

  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>