import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";

// vuex store 생성
const store = createStore(
  {
    //상태초기화 (vue : data와 유사)
    state(){
      return{
        user:{},
      }
    },
    getters:{

    },
    // 변의정의
    mutations:{
      setUser(state, data){
        state.user = data;
      }
    },
    actions:{

    },
    // 플러그인 : 상태를 지속적으로 저장하는 역할
    plugins:[
      persistedstate({
        paths:['user'], //로컬 스토리지에 저장할 상태의 경로를 설정
      } 
      ),
    ],
  }
);
export default store;