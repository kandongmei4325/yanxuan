<template>
  <div>
    <div class="special">
      <span class="span">
        <router-link to="/">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>严选专栏</span>
      <span></span>
    </div>
    <ul>
      <router-link :to="'/special/'+item.id" tag="li" v-for="(item,index) in topic" :key="index">
        <img :src="item.pic" alt />
        <h2 v-html="item.title"></h2>
        <p>{{item.descript}}</p>
        <span>查看详情</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "special",
  data() {
    return {
      topic: []
    };
  },
  created() {
    axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      console.log(res);
      this.topic = res.data.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.special {
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
ul {
  margin-top: 1.4rem;
  width: 100%;
  li {
    display: flex;
    height: 4rem;
    position: relative;
    padding: 0.12rem;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      width: 1.5rem;
      height: 0.5rem;
      line-height: 0.5rem;
      border: 1px solid #ffffff;
      border-radius: 0.2rem;
      font-size: 0.16rem;
      margin-left: 40%;
      position: absolute;
      text-align: center;
      top: 2.6rem;
      color: #ffffff;
    }
  }
}
h2 {
  width: 100%;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.4rem;
  top: 1rem;
  position: absolute;
  color: #ffffff;
}
p {
  width: 5.2rem;
  margin-left: 1rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: absolute;
  line-height: 0.4rem;
  top: 1.8rem;
  color: #ffffff;
}
</style>