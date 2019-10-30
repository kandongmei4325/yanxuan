<template>
  <div>
    <div class="special2">
      <span class="span">
        <router-link to="/">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>专栏详情</span>
      <span></span>
    </div>
    <div class="topic">
      <h2 v-html="topic.title"></h2>
      <img :src="topic.pic" alt />
      <p v-html="topic.content"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "special2",
  data() {
    return {
      topic: ""
    };
  },
  created() {
    axios
      .get(
        `https://api.it120.cc/small4/cms/news/detail?id=${this.$route.params.id}`
      )
      .then(res => {
        console.log(res);
        this.topic = res.data.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.special2 {
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
.topic {
  margin-top: 3rem;
  h2 {
    font-size: 0.5rem;
    text-align: center;
  }
  img {
    margin-top: 1rem;
    width: 100%;
    height: 4rem;
  }
  p {
    font-size: 0.35rem;
    line-height: 1rem;
  }
}
</style>