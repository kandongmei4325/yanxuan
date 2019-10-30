<template>
  <div class="box">
    <header>
      <div class="left">
        <i class="el-icon-user"></i>
      </div>
      <div class="right">
        <router-link to="/login" tag="h3" v-show="userInfo==''">
          点击登录
          <p>
            <span>积分：0</span>
          </p>
        </router-link>
        <h3  v-show="!userInfo==''">
          {{userInfo.nick}}
          <p>积分：{{userInfo.source}}</p>
        </h3>
      </div>
      <div class="bottom">
        <i class="el-icon-edit"></i>
        <p>新上线更稳定的付费快递查询接口</p>
      </div>
    </header>
    <section>
      <router-link to="/order" tag="div" class="top">
        <p>
          <i class="el-icon-s-order"></i>
          <span>我的订单</span>
        </p>
        <p>
          <span>></span>
        </p>
      </router-link>

      <ul class="count">
        <li>
          <p class="el-icon-wallet"></p>
          <span>待付款</span>
        </li>
        <li>
          <p class="el-icon-takeaway-box"></p>
          <span>待发货</span>
        </li>
        <li>
          <p class="el-icon-truck"></p>
          <span>待收货</span>
        </li>
        <li>
          <p class="el-icon-chat-line-square"></p>
          <span>待评价</span>
        </li>
      </ul>
      <ul class="footer">
        <li>
          <i class="el-icon-coin" style="color:#faaa95"></i>
          <span>我的盈余</span>
          <span style="color:#bac8d5">0元</span>
        </li>
        <li>
          <i class="el-icon-price-tag" style="color:#faaa95"></i>
          <span>我的砍价</span>
        </li>
        <li>
          <i class="el-icon-money" style="color:#eeb355"></i>
          <span>我的礼卷</span>
        </li>
        <li>
          <i class="el-icon-star-off" style="color:#eeb355"></i>
          <span>我的收藏</span>
        </li>
        <router-link to="/myAddress" tag="li">
          <i class="el-icon-map-location" style="color:#75b6f3"></i>
          <span>我的地址</span>
        </router-link>
        <li>
          <i class="el-icon-service" style="color:#75b6f3"></i>
          <span>联系客服</span>
        </li>
      </ul>
    </section>
    <footer>
      <h3>清欢严选 from 阚冬梅</h3>
    </footer>
  </div>
</template>

<script>
export default {
  computed:{
    userInfo(){
      return this.$store.state.userinfo
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: auto;
}
header {
  width: 100%;
  height: 4rem;
  position: relative;
  background: #d5c6a5;
  .left {
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    top: 1.2rem;
    left: 0.4rem;
  }
  .right {
    position: absolute;
    left: 2.2rem;
    top: 1.2rem;
    color: #fff;
    h3 {
      font-size: 0.3rem;
      line-height: 0.8rem;
    }
    p {
      font-size: 0.2rem;
      line-height: 0.5rem;
      text-align: center;
      background: #b3a078;
      width: 1.2rem;
      height: 0.5rem;
      border-radius: 0.1rem;
    }
  }
  .bottom {
    width: 100%;
    height: 1rem;
    position: relative;
    top: 4rem;
    background: #fff;
    border-bottom: 20px solid #f5f5f5;
    i {
      position: absolute;
      font-size: 0.3rem;
      left: 0.4rem;
      top: 0.35rem;
    }
    p {
      position: absolute;
      left: 1rem;
      bottom: 0.35rem;
      font-size: 0.2rem;
      color: red;
    }
  }
}

section {
  width: 100%;
  background: #fff;
  margin-top: 1rem;
  .top {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f5f5f5;
    i {
      font-size: 0.5rem;
      margin-left: 0.3rem;
    }
    span {
      font-size: 0.32rem;
    }
  }
  .count {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 20px solid #f5f5f5;
    li {
      p {
        font-size: 0.8rem;
      }
      span {
        display: block;
        font-size: 0.3rem;
      }
    }
  }
}
.footer {
  width: 100%;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  li {
    width: 30%;
    text-align: center;
    i {
      font-size: 0.8rem;
    }
    span {
      display: block;
      font-size: 0.3rem;
    }
  }
}
footer {
  width: 100%;
  height: 3rem;
  background: #f5f5f5;
  h3 {
    margin-top: 1rem;
    font-size: 0.3rem;
    text-align: center;
    line-height: 2rem;
  }
}
</style>