<template>
<div>
<!-- v-if, v-else -->
<table>
  <thead>
    <th>품명</th>
    <th>가격</th>
    <th>품목</th>
    <th>배송료</th>
  </thead>
  <tbody>
    <tr>
      <td>마우스1</td>
      <td>10000</td>
      <td>PC용품</td>
      <td>2500</td>
    </tr>
    <tr>
      <td>마우스2</td>
      <td>10000</td>
      <td>PC용품</td>
      <td>2500</td>
    </tr>
    <tr>
      <td>마우스3</td>
      <td>10000</td>
      <td>PC용품</td>
      <td>2500</td>
    </tr>
  </tbody>
</table><br/>

<table>
  <thead>
    <th>품명</th>
    <th>가격</th>
    <th>품목</th>
    <th>배송료</th>
  </thead>
  <tbody>
    <tr v-for="(item,index) in goods" v-bind:key="index">
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td>{{item.category}}</td>
      <td>{{item.delivery}}</td>
    </tr>
  </tbody>
</table>
</div>

<div>
  <p v-if="true">호랑이</p><br/>
  <p v-if="false">사자</p><br/>
</div>
<!-- v-else-if -->
<div>
  <label>점수를 입력하세요.
    <input type="number" v-model="score">
  </label><br/>
  <p v-if="score>=90">A학점</p>
  <p v-else-if="score>=80">B학점</p>
  <p v-else-if="score>=70">C학점</p>
  <p v-else-if="score>=60">D학점</p>
  <p v-else>F학점</p>
</div>
<div>
  <label>점수를 입력하세요.<br/>
    국어: <input type="number" v-model.number="kor"><br/>
    영어: <input type="number" v-model.number="eng"><br/>
    수학: <input type="number" v-model.number="math"><br/>
  </label><br/>
  <p>학점 평균 : {{age_score}}</p>
  <p v-if="total_score>=90">A학점</p>
  <p v-else-if="total_score>=80">B학점</p>
  <p v-else-if="total_score>=70">C학점</p>
  <p v-else-if="total_score>=60">D학점</p>
  <p v-else>F학점</p>
</div>
    <!-- 이벤트 v-on / @ -->
<div>
  <button v-on:click="showMessage">메세지 버튼</button>
</div>
    <!-- 구구단 -->
<div>
  <label><input type="number" v-model="dan"> 단</label><br/>
  <button @click="googoodan">계산</button>
  <p>{{dan}}단</p>
  <p v-for="(line,index) in googoo" :key="index">{{line}}</p>
</div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      goods:[
        {"name":"마우스", "price":"10000", "category":"PC용품", "delivery":"2500"},
        {"name":"키보드", "price":"30000", "category":"PC용품", "delivery":"2500"},
        {"name":"모니터", "price":"2000000", "category":"PC용품", "delivery":"0"},
      ],
      score:0,
      kor:'',
      eng:'',
      math:'',
      dan:2,
      googoo:[],
    };
  },
  methods: {
    showMessage(){
      alert('메세지 발생');
    },
    showScore(){
      this.score = (this.kor + this.eng + this+this.math)/3;
    },
    googoodan(){
      this.googoo=[];
      for(let n=1; n<10; n++){
        this.googoo.push(`${this.dan} * ${n} = ${this.dan*n}`);
      }
      this.dan
    }
  },
  computed: {
    total_score(){
      return (this.kor + this.eng + this.math) / 3;
    },
    age_score(){
      return this.total_score.toFixed(1);
    }
  },
};
</script>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
  }
td,th{border: 1px solid #ddd;}
</style>