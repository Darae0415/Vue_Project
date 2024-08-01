<template>
<div>
  <select name="" id="">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="대구" selected>대구</option>
    <option value="수원">수원</option>
    <option value="광주">광주</option>
  </select>
</div>
<div>
  <select v-model="city" @change="changeCity">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="대구">대구</option>
    <option value="수원">수원</option>
    <option value="광주">광주</option>
  </select>
  <p>{{message}}</p>
</div>
<div>
    <p><label >이메일<input type="text" placeholder="이메일을 입력하세요"
    v-model="emailValue"
    @input="changeEmail"></label><br/><span>{{msgEmail}}</span></p><br/>
    <!-- 8자이상 숫자문자조합 @#제외 비번과 비번확인 일치 -->
    <p><label >비밀번호<input type="text"
    v-model="pwd1"
    @input="changePwd"  placeholder="비밀번호를 입력하세요"></label><br/>
    <span>{{msgPwd1}}</span></p><br/>
    <p><label >비밀번호확인<input type="text"
    v-model='pwd2'
    @input="changePwd2" placeholder="비밀번호확인을 입력하세요"></label><br/>
    <span>{{msgPwd2}}</span></p><br/>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      city:'광주',
      message:'',
      emailValue:'',
      msgEmail:'이메일을 입력하세요.',
      pwd1:'',
      pwd2:'',
      msgPwd1:'비밀번호를 입력하세요.',
      msgPwd2:'비밀번호 확인을 입력하세요.',
    };
  },
  methods: {
    checkPwd(pwd){
        let msg = '';
        // 문자열길이
        const len = pwd.length;
        // 문자포함
        const hasWord = /[a-zA-Z]/.test(pwd);
        // 숫자포함
        const hasNum = /[\d]/.test(pwd);
        // 금지어포함여부
        const hasForbid = /[@#]/.test(pwd);
        if(len < 8) {
            msg='비밀번호는 8자리 이상이어야 합니다.';
        } else if(!hasWord) {
            msg='비밀번호에는 문자가 포함되어야 합니다.';
        } else if(!hasNum) {
            msg='비밀번호에는 숫자가 포함되어야 합니다.';
        } else if(hasForbid) {
            msg='@, # 금지단어입니다.';
        } else{
            msg='';
        }
        return msg;
    },
    changePwd(){
        let msg = this.checkPwd(this.pwd1);
        if(msg === ''){
            msg='비밀번호가 유효합니다.';
        }
        this.msgPwd1 = msg;
    },
    changePwd2(){
        let msg = this.checkPwd(this.pwd2);
        if(msg == ''){
            if(this.pwd1 === this.pwd2){
                msg='비밀번호확인이 일치합니다.';
            } else{
                msg='비밀번호확인이 일치하지 않습니다.'
            }
        }
        this.msgPwd2 = msg;
    },
    changeCity(){
      switch(this.city){
        case '서울': this.message='안녕하세요 반갑습니다.'; break;
        case '부산': this.message='안녕하십니꺼 반갑스니더.'; break;
        case '대구': this.message='안녕하셔유 반가워유.'; break;
        case '수원': this.message='안녕하시오 반갑소잉.'; break;
        case '광주': this.message='안녕하세요 반갑습니다.'; break;
        default : this.message='안녕하세요 반갑습니다.'; break;
      }
    },
    changeEmail(){
        // this.emailValue이 이메일 형식에 맞는지 체크
        const emailExp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //문자열 + @ + 문자열 + . + 문자열
        if(this.emailValue.length == 0){
            this.msgEmail='이메일을 입력하세요';
        } else if (emailExp.test(this.emailValue) == true ) {
            this.msgEmail = '정상적인 이메일 주소입니다.';
        } else {
            this.msgEmail = '이메일 주소가 올바르지 않습니다.';
        }
    },
  },
  computed: {
  },
};
</script>

<style scoped>

</style>