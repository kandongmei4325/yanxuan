<template>
  <div class="big">
    <div class="box">
      <header>
        <h3>新用户注册</h3>
        <p>很高兴您将成为商城的会员(注册只需要一步)</p>
      </header>
      <section>
        <input type="text" placeholder="手机号码" v-model="phone" />
        <input type="password" placeholder="密码" v-model="pass" />
        <input type="password" placeholder="确认密码" v-model="word" />
        <input type="text" placeholder="用户名" v-model="name" />
        <div>
          <input type="text" placeholder="图形验证码" v-model="code" />
          <img :src="this.img" alt />
        </div>

        <select @change="changesheng" v-model="getsheng" class="select1">
          <option v-for="(item,index) in sheng" :key="index">{{item.name}}</option>
        </select>
        <select class="select2">
          <option v-for="(item,index) in shi" :key="index">{{item.name}}</option>
        </select>
        <div>
          <input type="text" class="input" />
          <input type="text" placeholder="获取验证码" />
        </div>
        <button @click="login">立即注册</button>
        <router-link to="/login" tag="a" href="#">已有账号？ 立即登录</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      img: "",
      sheng: [],
      shi: [],
      phone: "",
      pass: "",
      word: "",
      name: "",
      code: "",
      getsheng: ""
    };
  },
  methods: {
    changesheng() {
      let index = this.sheng.findIndex(item => {
        return this.getsheng == item.name;
      });
      console.log(index);

      console.log(this.sheng[index].id);
      axios
        .post(
          `https://api.it120.cc/common/region/child?pid=${this.sheng[index].id}`
        )
        .then(res => {
          console.log(res.data.data);
          this.shi = res.data.data;
        });
    },
    login() {}
  },
  created() {
    let time = new Date().getTime();
    axios
      .post(`https://api.it120.cc/small4/verification/pic/get?key=${time}`)
      .then(res => {
        this.img = res.config.url;
      }),
      axios.post("https://api.it120.cc/common/region/province").then(res => {
        console.log(res);
        this.sheng = res.data.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.big {
  width: 100%;
  padding: 0.2rem;
}
.box {
  width: 96%;
  height: 18rem;
  border: #f5f5f5 3px solid;
}
header {
  width: 100%;
  margin-left: 0.3rem;

  h3 {
    font-size: 0.6rem;
    line-height: 2rem;
  }
  p {
    font-size: 0.45rem;
  }
}
section {   
  width: 100%;
  text-align: center;
  margin-top: 0.8rem;
  > input {
    width: 5.9rem;
    height: 1rem;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
    outline: none;
  }
  .input {
    width: 2.5rem;
    height: 1rem;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
    position: relative;
    left: 0.2rem;
    outline: none;
  }
  button {
    width: 4rem;
    height: 0.7rem;
    background: #6ea1f8;
    color: #fff;
    margin-top: 0.8rem;
    border: none;
    border-radius: 0.1rem;
    text-align: center;
    outline: none;
  }
  p {
    font-size: 0.4rem;
    margin-top: 0.5rem;
  }
  a {
    text-decoration: none;
    font-size: 0.4rem;
    margin-top: 0.5rem;
    display: block;
  }
  div {
    width: 90%;
    display: flex;
    justify-content: space-around;
    margin-left: 0.2rem;
    > input {
      width: 45%;
      height: 1rem;
      border-radius: 0.1rem;
      border: none;
      background: #f5f5f5;
      padding-left: 0.5rem;
      margin-top: 0.5rem;
      margin-left: 0.1rem;
      outline: none;
    }
    img {
      width: 42%;
      height: 1rem;
      margin-top: 0.5rem;
    }
  }

  .select1 {
    width: 45%;
    height: 1rem;
    border-right: none;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    position: relative;
    left: 0.2rem;
    padding-left: 0.5rem;
  }
  .select2 {
    width: 45%;
    height: 1rem;
    border-right: none;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    position: relative;
    right: 0.2rem;
    padding-left: 0.5rem;
  }
}
</style>