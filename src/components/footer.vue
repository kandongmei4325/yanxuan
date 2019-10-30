<template>
  <div class="foote">
    <ul>
      <router-link to="/" tag="li">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/classify" tag="li">
        <i class="el-icon-data-analysis"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <i class="el-icon-shopping-cart-2"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/user" tag="li">
        <i class="el-icon-user"></i>
        <span>个人</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "foote"
};
</script>

<style lang="scss" scoped>
.foote {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 999999999999;
  background: white;
  ul {
    display: flex;
    width: 100%;
    li {
      width: 25%;
      font-size: 0.2rem;
      text-align: center;
      i {
        margin: 0.1rem auto;
        font-size: 0.5rem;
      }
      span {
        display: block;
      }
    }
  }
}
</style>