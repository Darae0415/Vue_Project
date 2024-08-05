<template>
  <div class="">
    <H1>사용자정보</H1>
    <div >
      <p><b>이름:</b>{{user.name}}</p>
      <p><b>이메일:</b>{{user.email}}</p>
    </div>
    <button @click="saveUserData1"> 사용자정보저장1</button>
    <button @click="saveUserData2"> 사용자정보저장2</button>
    <input type="text" v-model="editName">
    <input type="text" v-model="editEmail">
    <button @click="saveUser">저장</button>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';

export default {
  name: 'UserView',
  setup() {
    const store = useStore();
    //vuex에서 user데이터를 가져오기
    const user = computed(()=> store.state.user);
    
    const editName =ref('');
    const editEmail =ref('');

    const saveUser = () =>{      
      const data = {name: editName.value, email:editEmail.value}
      store.commit('setUser', data);
    }
    //데이터1를 vuex에 저장하는 메서드
    const saveUserData1 = ()=>{
      const data = {name: '이순신', email:'ceo@sea.com'}
      store.commit('setUser', data);
    };

    //데이터2를 vuex에 저장하는 메서드
    const saveUserData2 = ()=>{
      const data = {name: '장발장', email:'thief@france.com'}
      store.commit('setUser', data);
    };

    return {
       user, editName, editEmail, saveUserData1, saveUserData2, saveUser,
    };
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>