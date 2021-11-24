<template>
  <div class="wrap">
    <div class="shouye">
      <div class="shouye_left">
        <span class="sy">首页</span>
        <span class="sq">社区</span>
      </div>
      <div class="shouye_right">
        <router-link to="/gouwuche">
          <img
            class="img1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABDBJREFUWAnNmMtPVHcUx2eGiRlJkSkQ2wKtVuqDxppKJ2pNcOGiaVx1xa4pCW8IETasmsjOSEJiAk0IISHddWNcuPIvECijSbWxVSxiCkVEoDzkNTB+vj/v3FzC3HEwcyee5Mw5v9c53985v8f9jb+uru62z+e7CPvi8fhLxK1QKHSlt7d3SnXZpgAgZnH6wuJ8ZO36+vpIfX39J9kGI39+p9OOjo68+fn5XwD5I/W/DgwMVDvbs6HvACSH7e3t+5eXlydRQyUlJQWdnZ1r2QCS8LELkBpYVzeJ0g+oEaIUJX1nKd+gnKd2D2gJm4ME4ErQxfgj1QcCgSOIqEufTFUz1/jHGPt5ampqwg3Qv/JGx08l+/v7hxGl0r2gxsbGk7FY7A/8tQRcHExY9Ydd2jNa3dfX9wCD/8NFSQH5/f5xy+PnGfXsYoyNIxy5sD8poHA4/FRjCeFhSa9pZmamBB/74ImkgLq6upaI0ix8xGswss/6Kbf8/JUUkBqJzj9wbnNzs3aAp4SfU3KAvO8KiOg8UafNzc1sROkb+cLnPVdAipA6QWVvhKe/AhTnUncHBNoxC8IXXkJpbW09wOTl40lPT89iqgiZlNHR0witrq5G8KErbAT2uQLi2shKhMBwzgAJBHQbuAPiuviP9hUrnOrrCbE0zsswfu5IukZIjZDSVtjW1hY2pQz/AMIPfwuoV9z092T+bYBM2sizJwu7paXlBBgK4GGuj9hbASV22vb2dsYB8c11jDOuXyAgfdcbCiaUZBJAjwmpDqyjydo5xT/Y2NgIB4NBpTQf4EZKt8pGMl5b+4Ak9frI+4iy7i/ZHuL8uS5dlBIQgx6rE9IGxNdjF45rqM4HTI7auYskXInxpi0hARGD78ODxcXFPYl0qVNKQDk5OWNyhiE7ZYA5iKEQY2eoX0AuUJbU90xCSreZI2SRcYtEUrxUWVk5V1VVtUWfvREO/eR6BdYzKSuUcpcxczDFx+CipqamD7OBKCUgC8CQ5NbWVrVV9lQkfQY5PTY0NHxJ/n8nSrlE7DfabiJNCpEB2owN1skuW7SZ1UybkUzKLqtOZa1Tvqn1DjS0y0iiwSnZWd9hXGfGIWd9hvSF0tLSQnbatuylBUgdrRftJVR9bpYRMY19Y4S1hm5mj3SSsW/11Zljly1di/Quj1H7HHIOfi/0tCPEY+40Z9JlZrbGrK4xq/F3mUFtbe1FxtVgZxq+yleF/n2xKS1A+muGNfQ3o8zbHkPPuJ2Pk/c9/RHBefY1kxnFjjnhkSNM7KyNBiWdba/cX6Cv/UcDRj+bnJz8ymkoHR0739MvAUZDzjDZIufYtACxRR8yyF60GF6F95wyxvzpdI4+zV0256xzonXW79BHR0efV1RU6OF4Gp4FYCO5j+7olEYhGo0+ikQieqGWa0LY+am7u3vCOfQ1FMOqWXI8tOIAAAAASUVORK5CYII="
            alt=""
          />
        </router-link>
        <router-link to="/my">
          <img
            class="img1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABPVJREFUWAm9mGtoW2UYx5tLSzNa2g6dbRLsqA5UFMW6yr5YpjUqm34QVjeGitg2abvQdUhBEU39MF0N9EPtvVOng3lBmQ6lTtQP3l0rzqkfBAVrm8Q6V5i01qQXf8/hZJ5kPW9Oos0LL+/leZ7/83+f93qOrSCH1N7eXp1IJO5dWVnZYbPZrlhdXa0EZoEcof2V3W4/Tt/4yMhIIlt4WzYGwWDw0sXFxRA2LTh0qmwh9hPyx0ZHR19T6aXLLBPy+/03LS8vvwWAWwd5H6dvQuwU7d+obyAy1ejcQXuPQe8Fr9cbCIVCcd1OWVgiBJltTM8HOHfh+AyO/cPDw5+bIXd2drrm5+cPoB/SIznu8/l2NjY2LpvZJPszEgoEAp6lpaUJDCoh805ZWdl94XB4PgmgKpuamm5Ffpxcim0v03dApS8yeyYFpuBZdITM1yUlJbuskhHcsbGxDx0Ox15sV4jU/paWlhsz+VMSYqquB2i3AAL0QG9v71+ZANPlTO0J+l4k28A6mC5PbysJAbBXgMivEu7v042ttgsLC0P6oG7v6Oi4TGWXidDdYgxYVls33eHAwMCv9H3BAO0LCws70uXGtikhtqkdgC268idGoxzrGgaDu0plb0podnZ2E4YOABKsgz9UIFZkDC4qehwfVSp9U0JCRAwlzN3d3RmPB5UTkYGnneyUSypdU0L9/f0SFTldHbFYTDkqlQODzCt1CEUMfRdVTQnpxqel5GC87SLLLDuIdBLjG5VpJkJyd8mo7leBZJI1NzffgM615Hh5efm4Sl9JCMOXIfM3o2vQrwEVlqkM+6dFCNYrPT09f5oqIlAS4j0zBdhzOthLHP1ZryWiI/fXnTKwoqKiJ1RkRKYkJAqAhAA7AzEPW/Ykl+1m6beSiGo7dj267n42yi+Z7CxtZyHBJfsx4F7InSU/7na7D3N4rrmFW1tba9gIz6C/Swigf5q81coL0hIhAW1ra6vk2SpP05ulTZLn6tuUp3gfxSC8gfZm5D7K7ZQpL0r6fkC3mTvxMzE2S0pCzP9WDPfxBmqTZwcRcUYikYdx9iTZdD3hPIH8KE+PMES3gfEU2U2/RDQIqSHKNZMpIcjUA3oCkPPFxcXX9PX1nU8iCLFoNFovj3z6aoQcenKIyqH3Jbf76/qFqpl0dXWVzs3NjaC3W+soKAjxVurW6ynFmoQgcxdab5BjTqezYXBw8OcUqxwb7NIuBnFIzJnmIGtK28FGOIexIXXWypUYfUR1ipBvHxoamkrXybU9OTn5aW1t7SL2DWRfXV3dexMTEzNGvJRtT0ht8Xj8sCgwBTshk6JsNMy1zvo5BPYxfDlZX0eZ/mIjVgohQroP4S0YPEo45btqXVJFRYUfH9OQ2jI9PR0wOrmwhoQpwiiK30FGSK0aFf/vOu/1h4jQ8/iZ9Xg81fiXqfz3pJ6ZmbmHdjmsw+tNRhxXVVUdwY9cTZs4SrSnsvRfmDIED6JwltX/rgjWOxER+TQ6In4o9yT9aYRYO5fQIZ/Ax6wc70nj/1oyePmIFEL1SSyNENv8ajrkCJDtnrfEffgtsyJ/TTbKcSOONUJ0Xi4NmE5Jma/EtMlV8qP44zKukVIjRKkRcrlceSUkBAiC9kVDuVHaSUKl1M9xX/0unXlO2hcxs3RO/GqEuAwP8hBLPivyyoeF/Qj35XVsppN5dWzV2T/Y7//hq6F8rwAAAABJRU5ErkJggg=="
            alt=""
          />
        </router-link>
      </div>
    </div>

    <like />
  </div>
</template>
<script>
import like from "@/views/like.vue";
export default {
  components: {
    like,
  },
};
</script>
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
.wrap {
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 20rem;
  .shouye {
    width: 100%;
    height: 0.4rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    position: fixed;
    top: 0;
    .shouye_left {
      width: 20%;
      height: 0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .sy {
        width: 0.22rem;
        height: 0.25rem;
        line-height: 0.25rem;
        border-bottom: 0.01rem solid red;
        font-size: 0.11rem;
        color: #383838;
      }
      .sq {
        width: 0.22rem;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.11rem;
        color: #646464;
      }
    }
    .shouye_right {
      width: 20%;
      height: 0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img1 {
        width: 0.18rem;
        height: 0.18rem;
      }
    }
  }
}
</style>
