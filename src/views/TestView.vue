<template>
<div>
  <label> 성 : <input type="text" v-model="familyName1" @input="makeFullName"></label><br/>
  <label> 이름 : <input type="text" v-model="Name1" @input="makeFullName"></label><br/>
  <p>성명 : {{fullName1}}</p><br/>
</div>
<div>
  <label> 성 : <input type="text" v-model="familyName2"></label><br/>
  <label> 이름 : <input type="text" v-model="Name2"></label><br/>
  <p>성명(computed) : {{makeFullName2}}</p><br/>
</div>
<div>
  <label> 성 : <input type="text" v-model="familyName3"></label><br/>
  <label> 이름 : <input type="text" v-model="Name3"></label><br/>
  <p>성명(watch) : {{makeFullName3}}</p><br/>
</div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
  },
  data() {
    return {
      fullName1:'',
      familyName1:'',
      Name1:'',

      familyName2:'',
      Name2:'',

      familyName3:'',
      Name3:'',

    };
  },
  watch:{
    familyName3(){
      this.makeFullName3 = this.familyName3+ ' '+this.Name3;
    },
    Name3(){
      this.makeFullName3 = this.familyName3+ ' '+this.Name3;
    },
  },
  methods: {
    makeFullName(){
      this.fullName1 = this.familyName1+ '  ' + this.Name1;
    }
  },
  computed: {
    makeFullName2(){
      return this.familyName2+ '  ' + this.Name2;
    }
  },
};
</script>

<style scoped>

</style>