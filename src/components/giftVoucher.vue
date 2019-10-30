<template>
  <div>
    <div class="header">
      <router-link to="/" tag="span" class="el-icon-arrow-left span"></router-link>
      <div>
        <input type="text" placeholder="请输入礼卷码" />
        <button>兑换</button>
      </div>
    </div>
    <div class="gift">
      <h2>
        1
        <span>元</span>
      </h2>
      <div>
        <h3>满减1</h3>
        <h4>满100元使用</h4>
      </div>
      <button>立即领取</button>
      <p>领取十年有效</p>
    </div>

    <div class="gift">
      <h2>
        2
        <span>元</span>
      </h2>
      <div>
        <h3>满减2</h3>
        <h4>满200元使用</h4>
      </div>
      <button>立即领取</button>
      <p>领取十年有效</p>
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
  height: 2.4rem;
  background: url("/static/img/i7.png") no-repeat;
  background-size: 100% 4rem;
  padding-top: 2.8rem;
  > div {
    width: 5rem;
    height: 0.6rem;
    margin-left: 45%;
    position: relative;
    left: -2.25rem;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.span {
  font-size: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
}
input {
  width: 10rem !important;
  height: 0.6rem;
  border: 1px solid #ee7c7b;
  padding-left: 0.2rem;
  border-radius: 0.2rem;
}
button {
  width: 3rem;
  height: 0.6rem;
  background: #ee7c7b;
  color: #fff;
  border: none;
  margin-left: 0.4rem;
  border-radius: 0.2rem;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #fbaa46;
  padding-left: 0.1rem;
}
.gift {
  background: #ee7c7b;
  width: 7rem;
  height: 2.3rem;
  border-radius: 0.2rem;
  margin-left: 0.2rem;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: -0.8rem;
  margin-bottom: 0.3rem;
  > h2 {
    font-size: 0.5rem;
    position: absolute;
    top: 0.8rem;
    left: 0.5rem;
    color: #fff;
    span {
      font-size: 0.2rem;
    }
  }
  > div {
    position: absolute;
    top: 0.5rem;
    left: 2rem;
    > h3 {
      font-size: 0.4rem;
      color: #fff;
    }
    > h4 {
      font-size: 0.26rem;
      line-height: 0.8rem;
      color: #fff;
    }
  }
  > button {
    width: 1.3rem;
    height: 0.5rem;
    background: #fce8e7;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    border-radius: 0.1rem;
    color: #ee7c7b;
    outline: none;
  }
}
p {
  font-size: 0.26rem;
  color: #fff;
  position: absolute;
  bottom: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #cc7773;
  width: 95%;
  padding-left: 0.3rem;
  border-radius: 0 0 0.2rem 0.2rem;
}
</style>