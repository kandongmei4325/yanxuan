<template>
  <div>
    <header>
      <p>购物车</p>
    </header>
    <section>
      <div>
        <img src="/static/img/i8.png" alt />
      </div>
    </section>
    <footer>
      <h3>猜你喜欢</h3>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style  lang="scss" scoped>
header {
  width: 100%;
  height: 0.8rem;
  font-size: 0.4rem;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #ffffff;
  padding-top: 0.2rem;
}
section {
  > div {
    width: 100%;
    height: 4.5rem;
    margin-top: 1rem;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
footer {
  h3 {
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.5rem;
  }
}
</style>