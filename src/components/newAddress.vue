<template>
  <div>
    <header>
      <span class="span">
        <router-link to="/user">
          <i class="el-icon-arrow-left"></i>
        </router-link>
      </span>
      <span>新增地址</span>
      <span></span>
    </header>
    <section>
      <div>
        <span class="nbsp">联系人</span>
        <input type="text" placeholder="姓名" />
      </div>
      <div>
        <span>手机号码</span>
        <input type="text" placeholder="11位手机号码" />
      </div>
      <div>
        <span>选择地区</span>
        <select>
          <option v-for="(item,index) in sheng" :key="index">选择省</option>
        </select>
        <select>
          <option v-for="(item,index) in shi" :key="index">选择市</option>
        </select>
        <select>
          <option v-for="(item,index) in qu" :key="index">选择区5</option>
        </select>
      </div>
      <div>
        <span>详细地址</span>
        <input type="text" placeholder="街道门牌信息" />
      </div>
      <div>
        <span>邮政编码</span>
        <input type="text" placeholder="邮政编码" />
      </div>
    </section>
    <el-row>
      <el-button type="success" class="btn1">保存</el-button>
      <el-button type="danger" class="btn">从微信读取</el-button>
      <el-button type="info" plain class="btn">取消</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "newAddress",
  data() {
    return {
      sheng: [],
      shi: [],
      qu: []
    };
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
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.4rem;
  input {
    width: 4rem;
    height: 1rem;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
    padding-left: 0.5rem;
    margin-top: 0.5rem;
    // outline: none;
  }
  span {
    font-size: 0.3rem;
    margin-left: 0.3rem;
    margin-right: 0.4rem;
  }
  select {
    width: 1.3rem;
    height: 1rem;
    border-right: none;
    border-radius: 0.1rem;
    border: none;
    background: #f5f5f5;
  }
  .nbsp {
    margin-right: 0.7rem;
  }
}
.btn {
  width: 88%;
  height: 1rem;
  margin-top: 0.5rem;
}
.btn1 {
  width: 88%;
  height: 1rem;
  margin-left: 0.22rem;
  margin-top: 0.5rem;
}
</style>