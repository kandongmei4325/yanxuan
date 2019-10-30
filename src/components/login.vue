<template>
  <div class="big">
    <div class="box">
      <header>
        <h3>账号登录</h3>
        <p>傻狗-严选商城欢迎你</p>
      </header>
      <section>
        <input type="text" placeholder="手机号码" v-model="phone" />
        <input type="password" placeholder="密码" v-model="pass" />
        <button @click="login">登录</button>
        <p>忘记密码</p>
        <router-link to="/register" tag="a" href="#">还没有注册？ 立即注册</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      phone: "",
      pass: ""
    };
  },
  methods: {
    login() {
      axios
        .post(
          `https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=${this.phone}&pwd=${this.pass}`
        )
        .then(res => {
          console.log(res);
          if (res.data.code==0) {
            window.localStorage.setItem("token", JSON.stringify(res.data.data));
            axios
              .post(
                `https://api.it120.cc/small4/user/detail?token=${res.data.data.token}`
              )
              .then(res => {
                console.log(res);
                window.localStorage.setItem(
                  "userinfo",
                  JSON.stringify(res.data.data.base)
                );
              });
              this.$router.push({path:"/"})
          }else{
            alert(res.data.msg)
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.big {
  padding: 0.5rem 0.2rem;
  position: fixed;
  top: 0;
}
.box {
  width: 6.8rem;
  height: 15.5rem;
  border: #f5f5f5 3px solid;
}
header {
  width: 100%;
  margin-left: 0.5rem;

  h3 {
    font-size: 0.5rem;
    line-height: 2rem;
  }
  p {
    font-size: 0.3rem;
  }
}
section {
  width: 100%;
  text-align: center;
  margin-top: 0.8rem;
  > input {
    width: 5.4rem;
    height: 1rem;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
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
  }
}
</style>