<template>
<div class="">
  <input type="text" value="333"/><br/>
  <input type="text" v-bind:value="nick"><br/>
  <input type="text" v-model="nick"><br/>
  <input type="number" v-model.number="age"><br/>
  <textarea cols="30" rows="10">동해물과 백두산이</textarea>
  <textarea v-model="message" cols="30" rows="10"></textarea><br/>
  <select >
    <option value="1">서울</option>
    <option value="2">부산</option>
    <option value="3" selected>대구</option>
    <option value="4">수원</option>
  </select>
  <br/>
  <br/>
  <select v-model="city">
    <option value="1">서울</option>
    <option value="2">부산</option>
    <option value="3">대구</option>
    <option value="4">수원</option>
  </select>
  <br/>
</div>
</template>

<script>
export default{
  name:'TestView',
  components:{},
  data(){
    return{
      nick:'노래하는 큰바위',
      age:30,
      message:'깊은 산 속 옹달샘 누가와서 먹나요',
      city:'4',
    }
  },
  methods:{}
}
</script>

<style scoped>

</style>