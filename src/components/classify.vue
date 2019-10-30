<template>
  <div>
    <header>
      <input type="text" placeholder="    搜索商品" />
    </header>
    <section>
      <div class="left">
        <ul>
          <li @click="all" :class="index==1?'active':''">所有分类</li>
          <li @click="jujia" :class="index==2?'active':''">居家生活</li>
          <li @click="peishi" :class="index==3?'active':''">配件装饰</li>
          <li @click="fuzhuang" :class="index==4?'active':''">新品服装</li>
          <li @click="dianqi" :class="index==5?'active':''">日用电器</li>
        </ul>
      </div>
      <div class="right">
        <div class="swper"></div>
        <ul>
          <li v-for="(item,index) in arr" :key="index">
            <img :src="item.icon" alt />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      list: [],
      arr: [],
      index: 1
    };
  },
  created() {
    axios
      .post("https://api.it120.cc/small4/shop/goods/category/all")
      .then(res => {
        console.log(res);
        this.list = res.data.data;
        this.arr = this.list;
      });
  },
  methods: {
    all() {
      this.index = 1;
      this.arr = this.list;
    },
    jujia() {
      this.index = 2;
      this.arr = this.list.filter(item => {
        return item.type == "jujia2";
      });
    },
    peishi() {
      this.index = 3;
      this.arr = this.list.filter(item => {
        return item.type == "peishi2";
      });
    },
    fuzhuang() {
      this.index = 4;
      this.arr = this.list.filter(item => {
        return item.type == "fuzhuang2";
      });
    },
    dianqi() {
      this.index = 5;
      this.arr = this.list.filter(item => {
        return item.type == "dianqi2";
      });
    }
  }
};
</script>

<style  lang="scss" scoped>
header {
  > input {
    width: 5rem;
    height: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    background: #f5f5f5;
    margin-left: 0.2rem;
    padding-left: 0.3rem;
  }
  width: 100%;
  height: 0.7rem;
  border-bottom: 1px solid #e6e6e6;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  background: #fff;
}

section {
  width: 100%;
  display: flex;
  margin-top: 1rem;
  .left {
    width: 30%;
    position: fixed;
    left: 0;
    background: #fff;

    > ul {
      list-style: none;
      > li {
        width: 1.9rem;
        height: 0.8rem;
        font-size: 0.26rem;
        line-height: 1rem;
        text-align: center;
        width: 100%;
      }
      .active {
        color: red;
        border-left: 3px solid red;
      }
    }
  }
  .right {
    width: 70%;
    margin-left: 30%;
    > .swper {
      width: 5.3rem;
      height: 2rem;
      background: #e6e6e6;
      border-radius: 0.2rem;
      margin-top: 0.2rem;
    }
    > ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 0.5rem;
      > li {
        width: 30%;
        margin-top: 0.3rem;
        img {
          width: 1.6rem;
          height: 1.6rem;
        }
        p {
          font-size: 0.24rem;
          text-align: center;
        }
      }
    }
  }
}
</style>