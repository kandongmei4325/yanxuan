<template>
  <div>
    <header>
      <span class="span">
        <router-link to="/user">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>我的地址</span>
      <span></span>
    </header>
    <section>
      <ul>
        <li>
          <div>
            <input type="checkbox" checked="checked" />
          </div>
          <div>
            <p>《==张...13782066324</p>
            <span>000000</span>
          </div>
          <div>
            <i class="el-icon-edit-outline"></i>
          </div>
        </li>
      </ul>
    </section>
    <footer>
      <router-link to="/newAddress" tag="p">+新增收货地址+</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "myAddress",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  font-size: 0.4rem;
  text-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #ffffff;
  height: 1.4rem;
  line-height: 1.4rem;
  display: flex;
  justify-content: space-between;
  .span {
    margin-left: 0.3rem;
  }
}
section {
  ul {
    > li {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 1.4rem;

      border: 1px solid;
      input {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        color: red;
      }
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.26rem;
        display: block;
      }
      i {
        font-size: 0.6rem;
      }
    }
  }
}
footer {
  width: 100%;
  height: 1.5rem;
  background: #aaffff;
  position: fixed;
  bottom: 1rem;
  line-height: 1.5rem;
  p {
    font-size: 0.5rem;

    text-align: center;
  }
}
</style>