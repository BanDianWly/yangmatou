<template>
  <div class="login">
    <div class="login_header">
      <router-link to="/my">
        <p class="header_left"></p>
      </router-link>
      <p class="header_right">登录</p>
    </div>
    <div class="login_main">
      <input
        type="text"
        class="input1"
        placeholder="输入用户名/邮箱/手机号码"
      />
      <input type="text" class="input2" placeholder="输入登录密码" />
      <div class="mfdl">
        <input type="radio" />
        两周内免登录
      </div>
      <p class="dl">
        <button>登录</button>
      </p>
      <div class="zc">
        <span class="zc_left">快速注册</span>
        <span class="zc_right">下载app找回密码</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.login {
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 10rem;
  .login_header {
    width: 100%;
    height: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    position: relative;
    .header_left {
      width: 0.08rem;
      height: 0.08rem;
      border-width: 0.02rem;
      border-style: solid;
      border-color: #9b9b9b #9b9b9b transparent transparent;
      transform: translate(0, -50%) rotate(-135deg);
      position: absolute;
      top: 0.2rem;
      left: 0.1rem;
    }
    .header_right {
      width: 0.3rem;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.145rem;
      color: #646464;
      margin-right: 1.2rem;
    }
  }
  .login_main {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .input1 {
      border: 0;
      width: 75%;
      height: 0.4rem;
      background: #fff;
      margin-top: 0.3rem;
      font-size: 0.13rem;
      outline: 0;
      padding-left: 0.2rem;
    }
    .input2 {
      border: 0;
      width: 75%;
      height: 0.4rem;
      background: #fff;
      margin-top: 0.1rem;
      font-size: 0.13rem;
      outline: 0;
      padding-left: 0.2rem;
    }
    .mfdl {
      width: 75%;
      height: 0.18rem;
      margin-top: 0.1rem;
      font-size: 0.1rem;
      color: #646464;
      line-height: 0.18rem;
      input {
        border: 0;
        background: #fff;
        width: 0.15rem;
        height: 0.15rem;
      }
    }
    .dl {
      width: 75%;
      height: 0.38rem;
      margin-top: 0.4rem;
      button {
        width: 100%;
        height: 0.38rem;
        border: 0;
        border-radius: 0.05rem;
        background: #c33;
        color: #fff;
        line-height: 0.38rem;
        text-align: center;
      }
    }
    .zc {
      width: 75%;
      height: 0.15rem;
      margin-top: 0.1rem;
      display: flex;
      justify-content: space-between;
      .zc_left {
        width: 0.45rem;
        height: 0.15rem;
        line-height: 0.15rem;
        color: #9b9b9b;
        border-bottom: 0.01rem solid #9b9b9b;
        font-size: 0.11rem;
      }
      .zc_right {
        width: 0.9rem;
        height: 0.15rem;
        line-height: 0.15rem;
        color: #9b9b9b;
        border-bottom: 0.01rem solid #9b9b9b;
        font-size: 0.11rem;
      }
    }
  }
}
</style>
