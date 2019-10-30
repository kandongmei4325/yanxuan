<template>
  <div id="home">
    <header>
      <div class="block">
        <span class="demonstration"></span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in img" :key="item">
            <a href="http://www.baidu.com" target="_blank">
              <img :src="'/static/img/'+item" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </header>
    <section>
      <div>
        <ul>
          <router-link to="/signIn" tag="li">
            <img src="/static/img/yanxuan_03.jpg" alt />
            <span>签到</span>
          </router-link>
          <router-link to="/giftVoucher" tag="li">
            <img src="/static/img/yanxuan_05.jpg" alt />
            <span>礼卷</span>
          </router-link>
          <router-link to="/bargain" tag="li">
            <img src="/static/img/yanxuan_07.jpg" alt />
            <span>砍价</span>
          </router-link>
          <router-link to="/special" tag="li">
            <img src="/static/img/yanxuan_10.jpg" alt />
            <span>专栏</span>
          </router-link>
        </ul>
      </div>
      <div class="title">
        <router-link to="/bargain" tag="h1">
          全民砍价
          <span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <div class="left">
              <img :src="item.pic" alt />
            </div>
            <div class="right">
              <h1 v-html="item.name"></h1>
              <h2>{{item.characteristic}}</h2>
              <ol>
                <li>
                  <h3 class="red">￥{{item.minPrice}}</h3>
                  <span>底价</span>
                </li>
                <li>
                  <h3>￥{{item.originalPrice}}</h3>
                  <span>原价</span>
                </li>
                <li>
                  <h3>￥{{item.pingtuanPrice}}</h3>
                  <span>件限量</span>
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
      <div class="title">
        <router-link to="/special" tag="h1">
          精选专题
          <span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </div>
      <div class="topic-box wrapper" ref="wrapper_topic">
        <ul>
          <router-link
            :to="'/special/'+item.id"
            tag="li"
            v-for="(item,index) in topic"
            :key="index"
          >
            <img :src="item.pic" alt />
            <h2 v-html="item.title"></h2>
            <p>{{item.descript}}</p>
          </router-link>
        </ul>
      </div>
      <div class="title">
        <router-link to="/recommend" tag="h1">
          人气推荐
          <span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </div>
      <div class="popularity" style="padding-bottom:1.5rem;">
        <ul>
          <li v-for="(item,index) in popularity" :key="index">
            <div class="count">
              <img :src="item.pic" alt />
              <h1>{{item.name}}</h1>
              <h2>{{item.characteristic}}</h2>
            </div>
            <p>￥{{item.minPrice}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
  name: "home",
  data() {
    return {
      img: ["i1.jpg", "i2.png", "i3.jpg"],
      list: [],
      topic: [],
      popularity: []
    };
  },
  created() {
    axios
      .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
      .then(res => {
        console.log(res.data.data);
        for (var i in res.data.data.goodsMap) {
          this.list.push(res.data.data.goodsMap[i]);
        }
        this.list = this.list.splice(0, 3);
      });
    axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      this.topic = res.data.data;
    });
    axios.get("https://api.it120.cc/small4/shop/goods/list").then(res => {
      this.popularity = res.data.data.splice(8, 4);
    });
    this.$store.state.token = JSON.parse(window.localStorage.getItem("token"))
    this.$store.state.userinfo = JSON.parse(window.localStorage.getItem("userinfo"))

  },
  mounted() {
    this.$nextTick(() => {
      // 使用 this.$nextTick 为了确保组件已经渲染完毕
      this.scroll = new BScroll(this.$refs.wrapper_topic, {
        scrollX: true,
        scrollY: false
      }); // 实例化BScroll接受两个参数，第一个为父盒子的dom节点 })
    });
  }
};
</script>

<style scoped>
</style>