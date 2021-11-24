<template>
  <div class="my_wrap">
    <div class="my_header">
      <div class="center">个人中心</div>
      <div class="right">
        <router-link to="/gouwuche">
          <img
            class="img1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDBJREFUWAnNmMtPVHcUx2eGiRlJkSkQ2wKtVuqDxppKJ2pNcOGiaVx1xa4pCW8IETasmsjOSEJiAk0IISHddWNcuPIvECijSbWxVSxiCkVEoDzkNTB+vj/v3FzC3HEwcyee5Mw5v9c53985v8f9jb+uru62z+e7CPvi8fhLxK1QKHSlt7d3SnXZpgAgZnH6wuJ8ZO36+vpIfX39J9kGI39+p9OOjo68+fn5XwD5I/W/DgwMVDvbs6HvACSH7e3t+5eXlydRQyUlJQWdnZ1r2QCS8LELkBpYVzeJ0g+oEaIUJX1nKd+gnKd2D2gJm4ME4ErQxfgj1QcCgSOIqEufTFUz1/jHGPt5ampqwg3Qv/JGx08l+/v7hxGl0r2gxsbGk7FY7A/8tQRcHExY9Ydd2jNa3dfX9wCD/8NFSQH5/f5xy+PnGfXsYoyNIxy5sD8poHA4/FRjCeFhSa9pZmamBB/74ImkgLq6upaI0ix8xGswss/6Kbf8/JUUkBqJzj9wbnNzs3aAp4SfU3KAvO8KiOg8UafNzc1sROkb+cLnPVdAipA6QWVvhKe/AhTnUncHBNoxC8IXXkJpbW09wOTl40lPT89iqgiZlNHR0witrq5G8KErbAT2uQLi2shKhMBwzgAJBHQbuAPiuviP9hUrnOrrCbE0zsswfu5IukZIjZDSVtjW1hY2pQz/AMIPfwuoV9z092T+bYBM2sizJwu7paXlBBgK4GGuj9hbASV22vb2dsYB8c11jDOuXyAgfdcbCiaUZBJAjwmpDqyjydo5xT/Y2NgIB4NBpTQf4EZKt8pGMl5b+4Ak9frI+4iy7i/ZHuL8uS5dlBIQgx6rE9IGxNdjF45rqM4HTI7auYskXInxpi0hARGD78ODxcXFPYl0qVNKQDk5OWNyhiE7ZYA5iKEQY2eoX0AuUJbU90xCSreZI2SRcYtEUrxUWVk5V1VVtUWfvREO/eR6BdYzKSuUcpcxczDFx+CipqamD7OBKCUgC8CQ5NbWVrVV9lQkfQY5PTY0NHxJ/n8nSrlE7DfabiJNCpEB2owN1skuW7SZ1UybkUzKLqtOZa1Tvqn1DjS0y0iiwSnZWd9hXGfGIWd9hvSF0tLSQnbatuylBUgdrRftJVR9bpYRMY19Y4S1hm5mj3SSsW/11Zljly1di/Quj1H7HHIOfi/0tCPEY+40Z9JlZrbGrK4xq/F3mUFtbe1FxtVgZxq+yleF/n2xKS1A+muGNfQ3o8zbHkPPuJ2Pk/c9/RHBefY1kxnFjjnhkSNM7KyNBiWdba/cX6Cv/UcDRj+bnJz8ymkoHR0739MvAUZDzjDZIufYtACxRR8yyF60GF6F95wyxvzpdI4+zV0256xzonXW79BHR0efV1RU6OF4Gp4FYCO5j+7olEYhGo0+ikQieqGWa0LY+am7u3vCOfQ1FMOqWXI8tOIAAAAASUVORK5CYII="
            alt=""
          />
        </router-link>
        <router-link to="/shouye">
          <img
            class="img2"
            src="data:image/png;base64,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"
            alt=""
          />
        </router-link>
      </div>
    </div>
    <div class="my_main">
      <span class="tp">
        <img
          src="http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png"
          alt=""
        />
      </span>
      <router-link to="/login">
        <span class="dl"> 请登录 </span>
      </router-link>
    </div>
    <div class="my_footer">
      <p>
        <span class="dingdan">我的订单</span>
        <span class="kh">
          <router-link to="/login">
            <img
              src="	https://s1.ymatou.com/myorderm/images/p_arrowright-23118a5433.png"
              alt=""
            />
          </router-link>
        </span>
      </p>
      <p>
        <span class="dingdan">我的优惠券</span>
        <span class="kh">
          <router-link to="/login">
            <img
              src="	https://s1.ymatou.com/myorderm/images/p_arrowright-23118a5433.png"
              alt=""
            />
          </router-link>
        </span>
      </p>
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
.my_wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  height: 10rem;
  .my_header {
    width: 100%;
    height: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .center {
      width: 20%;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #515151;
      font-size: 0.16rem;
      margin-left: 1.5rem;
    }
    .right {
      width: 20%;
      height: 0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img1 {
        width: 0.18rem;
        height: 0.18rem;
      }
      .img2 {
        width: 0.18rem;
        height: 0.16rem;
      }
    }
  }
  .my_main {
    width: 100%;
    height: 1.2rem;
    background: url(https://s1.ymatou.com/myorderm/images/person-bg-c26f0f5750.png)
      no-repeat;
    background-size: 100% 100%;
    position: relative;
    .tp {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      position: absolute;
      top: 0.25rem;
      left: 0.3rem;
      img {
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 50%;
      }
    }
    .dl {
      width: 1rem;
      height: 0.24rem;
      line-height: 0.24rem;
      color: #fff;
      font-size: 0.14rem;
      position: absolute;
      top: 0.47rem;
      left: 1.08rem;
    }
  }
  .my_footer {
    width: 100%;
    height: 0.81rem;
    margin-top: 0.1rem;
    background: #fff;
    p {
      width: 100%;
      height: 0.4rem;
      border-bottom: 0.01rem solid #f5f5f5;
      .dingdan {
        width: 50%;
        margin-left: 0.4rem;
        line-height: 00.4rem;
        font-size: 0.14rem;
        color: #292929;
      }
      .kh {
        float: right;
        width: 0.1rem;
        height: 0.18rem;
        line-height: 0.4rem;
        margin-right: 0.1rem;
        img {
          width: 0.1rem;
          height: 0.18rem;
        }
      }
    }
  }
}
</style>
