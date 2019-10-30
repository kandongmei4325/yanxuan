<template>
  <div class="order">
    <img src alt />
    <p>页面发现了~点击返回页面！</p>
    <p>5秒后自动返回首页</p>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  margin-top: 3rem;
}
p {
  text-align: center;
  font-size: 0.3rem;
  color: #87d8ff;
  margin-top: 0.5rem;
}
</style>