<template>
  <div class="list">
    <div class="bargain">
      <span class="span">
        <router-link to="/">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>砍价列表</span>
      <span></span>
    </div>
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
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  created() {
    axios.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then(res => {
        console.log(res.data.data);
        for (var i in res.data.data.goodsMap) {
          this.list.push(res.data.data.goodsMap[i]);
        }
        //    this.list=this.list.splice(0,3);
      });
  }
};
</script>

<style lang="scss" scoped>
.bargain {
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
  width: 100%;
  margin-top: 1.4rem;
  > li {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #9f9f9f;
    padding: 0.16rem;
  }
}

.left {
  width: 2.3rem;
  height: 2.3rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3rem;
  }
}
.right {
  width: 4.6rem;
  height: 2.3rem;
}
h1 {
  font-size: 0.3rem;
}
h2 {
  font-size: 0.18rem;
  margin-top: 0.26rem;
}
ol {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    width: 30%;
    height: 0.6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: left;
    margin-top: 0.8rem;
  }
  .red {
    color: red;
    font-size: 0.22rem;
  }
  h3 {
    width: 100%;
    font-size: 0.2rem;
  }
  span {
    width: 100%;
    font-size: 0.2rem;
  }
}
</style>             
                  
          
           


        
 