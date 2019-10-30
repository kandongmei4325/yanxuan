<template>
  <div>
    <div class="header">
      <span class="span">
        <router-link to="/">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <p>您的可用积分为</p>
      <h2>999</h2>
      <h3></h3>
    </div>
    <button class="btn">签到</button>
    <div class="signIn1">
      <img src="/static/img/i5.png" alt />
      <ul>
        <li>消费购物</li>
        <li>购物完成，确认收货后立返积分</li>
      </ul>
      <router-link to="/" tag="button" class="btn1">去购物</router-link>
    </div>
    <div class="signIn2">
      <img src="/static/img/i6.png" alt />
      <ul>
        <li>积分兑换</li>
        <li>积分兑换好礼，20积分即可兑换礼卷</li>
      </ul>
      <router-link to="/giftVoucher" tag="button" class="btn2">去兑换</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 5.2rem;
  background: #f4eddd;
}
.span {
  margin-left: 0.5rem;
  font-size: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #fff;
}
p {
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.5rem;
  padding-top: 0.2rem;
  color: #b9b6b2;
}
h2 {
  font-size: 0.5rem;
  text-align: center;
  color: #b29e72;
  line-height: 2rem;
}
h3 {
  background: #e8e1cf;
  width: 100%;
  height: 1.2rem;
}
.btn {
  width: 3rem;
  height: 0.7rem;
  background: #b3a078;
  text-align: center;
  margin-left: 30%;
  border-radius: 20rem;
  border: #fff;
  color: #fff;
  margin-bottom: 0.5grrem;
  outline: none;
}
.signIn1 {
  width: 7rem;
  height: 1.7rem;
  background: #f4ebe2;
  display: flex;
  justify-content: space-around;
  margin: 0.3rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-around;
}
ul {
  list-style: none;
}
li {
  margin-top: 0.2rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  color: #ebd2b9;
}
.btn1 {
  width: 0.9rem;
  height: 0.4rem;
  background: #ebd2b9;
  border: none;
  margin-top: 0.65rem;
  border-radius: 0.1rem;
  color: #fff;
  outline: none;
}

.signIn2 {
  width: 7rem;
  height: 1.7rem;
  background: #ede6d6;
  display: flex;
  justify-content: space-around;
  margin: 0.3rem;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-around;
}
ul {
  list-style: none;
  margin-left: -0.5rem;
}
li {
  margin-top: 0.2rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  color: #d5cab0;
}
.btn2 {
  width: 0.9rem;
  height: 0.4rem;
  background: #d5cab0;
  border: none;
  margin-top: 0.65rem;
  border-radius: 0.1rem;
  color: #fff;
  outline: none;
}
img {
  width: 1.2rem;
  height: 1.6rem;
}
</style>