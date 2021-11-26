<template>
  <div class="gwc">
    <div class="gwc_header">
      <div class="gwc_left">购物车</div>
      <div class="gwc_right">
        <router-link to="/shouye">
          <img
            class="img2"
            src="data:image/png;base64,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"
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
    <ul class="gwc_main">
      <li>
        <div class="info_top">
          <div class="info_left">
            <input type="radio" />
            <span>
              <img
                src="http://img.ymatou.com/portal/images/default.png"
                alt=""
              />
            </span>
          </div>
          <div class="info_right">
            <p class="right_top">
              <span>暹罗海淘 ></span>
            </p>
            <p class="right_bottom">
              <span>
                <img
                  src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                  alt=""
                />
                泰国
              </span>
            </p>
          </div>
        </div>
        <div class="info_bottom">
          <div class="list_left">
            <input type="radio" />
            <img
              src="	https://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_center">
            <p class="center_top">
              <span class="red_text">包邮包税</span>
              <span class="text"
                >泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修</span
              >
            </p>
            <p class="center_bottom">规格分类:樱幻玫瑰护发精华30粒/盒</p>
          </div>
          <div class="list_right">
            <p class="list_price">￥39.9</p>
            <p class="list_jia">
              <button>-</button>
              <input type="text" placeholder="1" />
              <button>+</button>
            </p>
            <p class="list_sc">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC"
                alt=""
              />
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="info_top">
          <div class="info_left">
            <input type="radio" />
            <span>
              <img
                src="http://pic1.ymatou.com/G02/M07/E5/74/CgvUBVo2i0SAPBSaAAASBM1T9_Q119_1_1_m.jpg"
                alt=""
              />
            </span>
          </div>
          <div class="info_right">
            <p class="right_top">
              <span>琪琪家韩妆正品 ></span>
            </p>
            <p class="right_bottom">
              <span>
                <img
                  src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                  alt=""
                />
                韩国
              </span>
            </p>
          </div>
        </div>
        <div class="info_bottom">
          <div class="list_left">
            <input type="radio" />
            <img
              src="	https://pic1.ymatou.com/G03/shangou/M04/F8/A2/CgzUIF_hp7uAaEDPAAetl-PGxJA110_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_center">
            <p class="center_top">
              <span class="red_text">包邮包税</span>
              <span class="text"
                >Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推</span
              >
            </p>
            <p class="center_bottom">规格分类:橙色-亮白</p>
          </div>
          <div class="list_right">
            <p class="list_price">￥29</p>
            <p class="list_jia">
              <button>-</button>
              <input type="text" placeholder="1" />
              <button>+</button>
            </p>
            <p class="list_sc">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC"
                alt=""
              />
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="info_top">
          <div class="info_left">
            <input type="radio" />
            <span>
              <img
                src="http://pic2.ymatou.com/2021/08/24/16/0e00aa25-86dd-47f9-b67c-bf93e9a5e882_1_1_m.jpg"
                alt=""
              />
            </span>
          </div>
          <div class="info_right">
            <p class="right_top">
              <span>首尔免税馆 ></span>
            </p>
            <p class="right_bottom">
              <span>
                <img
                  src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                  alt=""
                />
                韩国
              </span>
            </p>
          </div>
        </div>
        <div class="info_bottom">
          <div class="list_left">
            <input type="radio" />
            <img
              src="	https://pic2.ymatou.com/2021/09/17/12/2ce7264a-d822-4e65-abf4-f40a03b02bc9_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_center">
            <p class="center_top">
              <span class="red_text">包邮包税</span>
              <span class="text"
                >DHC唇膏 1.5g 蝶翠诗防干裂护唇无色橄榄保湿滋润润</span
              >
            </p>
            <p class="center_bottom">规格分类:一支</p>
          </div>
          <div class="list_right">
            <p class="list_price">￥39.9</p>
            <p class="list_jia">
              <button>-</button>
              <input type="text" placeholder="1" />
              <button>+</button>
            </p>
            <p class="list_sc">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAAAXNSR0IArs4c6QAAArpJREFUSA3dlj1oU1EUx33JI2kWBXEwCFKSgjhI28Wl4KJ2CEVbHLRQMMlLJgcHK1QRXEX8GHTLpyCICgaXKOoiOkgHh6pdNFBFDUVcOkgLyYu/W7yX++4LaMlLBi/cnHPP/d/zP+fcjxdr219apVIZarfbFzqdzinLsvYiLX0JNkydL9ju2bZ9JZPJrOvzpm6bBnPcarUeYpuiuzj+Kgh0zJ8ARrBdBjuGnNbnTV1FKxZWq9URFm2XoFAodMB13QokP7A5YL7LOV2C2wOuhG0X+mn0D3KerNfS6fQnGegmYaFQyGC4hsOdEhikxPdP/J3L5XJ3rFKpNENEjzBsMPEM0rUgyfC1g36UHg2Hw9M2BAuCgFIccRzntdCDbsVi8RA8Lzl8Cxbl/CUIyO560ESGv3nGbZvMLlLSm0RwyQD0Y3jWTiQStxuNxjcyHIb4Kixv0G8ExDZPIgfxdx5/n5PJZE1dC+o8zuRbJh7k8/mTQRCyXeIwztBH8bkkfIbEj96IxtXHQes+QrL0vCRBE3Z72lSG5XJ5in29xf2Z5I38KMkp1X1RCS7yrLRxn/cR61P6GcpXl3ZT+jLUS8riCfow90e8kaqBmWQgumoENiawGCaUsYviIwSjMuyC79nkI9Qz7Nl7Fwc+Qkrzn2dIFQabISetr/fQt4cDPzQDL2m/M/Q9bca1WCSAVbb1vXGlXmHzHC6ev3esXeX7umhgPUMfoZ4hfzlqoEX3NN7QYx4Dg2w2u4zYbdrNsTo0RLh5OiEM7JTiS31vJbEixLAiyCjLuJzsRVJy4Xu/8BmLxVakL08EfPVfADwM6C6yhtyQwK1I1g2xfpZ+Av05W6C+LOYeOgCeAJyDYA65FR6FlevwtRyJRHJqAsWToZio1+vRZrN5nNKOcuKiOvhfdQjXIVuKx+OPU6mUp0q/AcxRJUgmF2YrAAAAAElFTkSuQmCC"
                alt=""
              />
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="footer_top">
        <img
          src="http://s1.ymatou.com/homem/images/tag_heart-dc2c84d296.png"
          alt=""
        />
        <span>猜你喜欢</span>
      </div>
      <ul>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/09/18/18/62f00c41-a9dd-4d0b-872a-96e91e2ba6ee_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            泰国INWA樱幻玫瑰护发精油30粒/盒 免洗护发烫染修复改善干枯毛燥
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 39.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic2.ymatou.com/2021/10/25/12/2ba282ef-deab-4a1d-97a2-fb6bee8ae066_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【8粒】韩国进口原料发膜修护干枯改善毛躁补水柔顺 顺滑独立包装
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 35.00</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M02/D1/1C/CgzUIV-uNzCAN3MEAAM6HK58aGY761_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【2盒】韩国JMsolutian新款水母鱼子酱蜗牛面膜 JM补水保湿紧致
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 69.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M09/B6/03/CgzUH1_2s56AWTx1AAXX1IQX8Sw070_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            Vivlas唯兰颂面膜茶秘水润亮白 范冰冰 林允 秋瓷炫推荐 5片/盒
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/Korea.png"
                alt=""
              />韩国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M08/02/A4/CgzUIF6_msmAGCoiAAcGL9at1_4976_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            【3瓶装】Vaseline凡士林润唇膏唇膜保湿去死皮防干裂口红打底
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 29.90</span>
            <span class="list_gj">
              <img
                src="https://img.ymatou.com/app/flag/circle/Thailand.png"
                alt=""
              />泰国
            </span>
          </div>
        </li>
        <li>
          <div class="list_img">
            <img
              src="http://pic1.ymatou.com/G03/shangou/M04/3D/21/CgzUH18pAYOAKNBIAAL7aMPxKsY298_1_1_n_w_lb.jpg"
              alt=""
            />
          </div>
          <div class="list_text">
            CHANEL香奈儿黑色粒面压纹小牛皮做旧链条黑银BOYWOC单肩包现货
          </div>
          <div class="list_by">包邮包税</div>
          <div class="list_price">
            <span class="price">¥ 20600.00</span>
            <span class="list_gj">
              <img
                src="	https://img.ymatou.com/app/flag/circle/France.png"
                alt=""
              />法国
            </span>
          </div>
        </li>
      </ul>
      <div class="gd">加载更多</div>
      <div class="khd">
        <p class="khd_top">客户端 | 关于洋码头 | 媒体报道</p>
        <p class="khd_bottom">上海洋码头网络技术有限公司 版权所有</p>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_left">
        <input type="radio" />
        全选
      </div>
      <div class="bottom_right">
        <div class="zj">
          <p class="price">
            <span class="jq">总价:</span>
            <span class="ll">￥0</span>
          </p>
          <p class="yf">（不含运费）</p>
        </div>
        <div class="js">
          <button>去结算</button>
        </div>
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
.gwc {
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 20rem;
  .gwc_header {
    width: 100%;
    height: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .gwc_left {
      width: 30%;
      height: 0.4rem;
      line-height: 0.4rem;
      color: #515151;
      font-size: 0.17rem;
      margin-left: 1.5rem;
    }
    .gwc_right {
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
  .gwc_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
      height: 1.65rem;
      background: #fff;
      display: flex;
      flex-direction: column;
      margin-top: 0.2rem;
      .info_top {
        width: 100%;
        height: 0.5rem;
        border-bottom: 0.01rem solid #dedede;
        display: flex;
        .info_left {
          width: 24%;
          height: 0.5rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          input {
            background: #fff;
            width: 0.23rem;
            height: 0.23rem;
          }
          span {
            width: 0.45rem;
            height: 0.45rem;
            display: flex;
            align-items: center;
            img {
              width: 0.4rem;
              height: 0.4rem;
              border-radius: 50%;
            }
          }
        }
        .info_right {
          width: 76%;
          height: 0.5rem;
          display: flex;
          flex-direction: column;
          .right_top {
            width: 100%;
            height: 0.2rem;
            line-height: 0.2rem;
            color: #646464;
            font-size: 0.12rem;
            margin-top: 0.1rem;
          }
          .right_bottom {
            width: 100%;
            height: 0.2rem;
            line-height: 0.2rem;
            color: #646464;
            font-size: 0.12rem;

            img {
              width: 0.13rem;
              height: 0.13rem;
            }
          }
        }
      }
      .info_bottom {
        width: 100%;
        height: 1.14rem;
        display: flex;
        justify-content: space-between;
        .list_left {
          width: 30%;
          height: 1.09rem;
          display: flex;
          justify-content: space-around;
          input {
            background: #fff;
            width: 0.23rem;
            height: 0.23rem;
            margin-top: 0.23rem;
          }
          img {
            width: 0.68rem;
            height: 0.68rem;
            margin-top: 0.13rem;
          }
        }
        .list_center {
          width: 46%;
          height: 1.09rem;
          display: flex;
          flex-direction: column;
          .center_top {
            width: 100%;
            height: 0.3rem;
            margin-top: 0.1rem;
            line-height: 0.15rem;
            .red_text {
              width: 0.5rem;
              height: 0.15rem;
              border: 0.01rem solid #c33;
              font-size: 0.11rem;
              color: #c33;
              line-height: 0.15rem;
              text-align: center;
              border-radius: 0.02rem;
            }
            .text {
              font-size: 0.12rem;
              line-height: 0.15rem;
              color: #383838;
              padding-left: 0.05rem;
              width: 100%;
              height: 0.3rem;
            }
          }
          .center_bottom {
            width: 100%;
            color: #9b9b9b;
            font-size: 0.12rem;
            line-height: 0.15rem;
            margin-top: 0.1rem;
          }
        }
        .list_right {
          width: 20%;
          height: 1.14rem;
          display: flex;
          flex-direction: column;
          .list_price {
            width: 50%;
            height: 0.2rem;
            color: #c33;
            font-size: 0.13rem;
            line-height: 0.2rem;
            margin-left: 0.25rem;
            margin-top: 0.15rem;
          }
          .list_jia {
            width: 100%;
            height: 0.2rem;
            display: flex;
            margin-top: 0.08rem;
            button {
              width: 0.2rem;
              height: 0.2rem;
              color: #9b9b9b;
              background: #fff;
              border: 0;
              border: 0.01rem solid #cecece;
            }
            input {
              width: 0.3rem;
              height: 0.18rem;
              border: 0;
              border: 0.01rem solid #cecece;
              text-align: center;
            }
          }
          .list_sc {
            width: 0.14rem;
            height: 0.15rem;
            margin-left: 0.5rem;
            margin-top: 0.1rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    .footer_top {
      width: 100%;
      height: 0.63rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.21rem;
        height: 0.17rem;
      }
      span {
        width: 0.8rem;
        height: 0.22rem;
        color: #646464;
        font-size: 0.14rem;
        margin-left: 0.08rem;
        line-height: 0.22rem;
      }
    }
    ul {
      width: 91%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 49%;
        height: 3rem;
        background: #fff;
        margin-top: 0.1rem;
        display: flex;
        flex-direction: column;
        .list_img {
          width: 1.67rem;
          height: 1.9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list_text {
          width: 93%;
          height: 0.35rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          line-height: 0.17rem;
          font-size: 0.1rem;
          color: #383838;
          margin: 0 auto;
          margin-top: 0.1rem;
        }
        .list_by {
          width: 0.45rem;
          height: 0.16rem;
          color: #c33;
          border: 0.01rem solid #c33;
          font-size: 0.06rem;
          line-height: 0.16rem;
          text-align: center;
          border-radius: 0.04rem;
          margin-top: 0.1rem;
          margin-left: 0.08rem;
        }
        .list_price {
          width: 90%;
          height: 0.16rem;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          margin-top: 0.1rem;
          line-height: 0.16rem;
          .price {
            color: #c33;
            line-height: 0.16rem;
            font-size: 0.13rem;
          }
          .list_gj {
            width: 0.45rem;
            height: 0.16rem;
            line-height: 0.16rem;
            color: #646464;
            font-size: 0.1rem;
            img {
              width: 0.1rem;
              height: 0.1rem;
              margin-right: 0.05rem;
            }
          }
        }
      }
    }
    .gd {
      width: 91%;
      height: 0.3rem;
      margin: 0 auto;
      margin-top: 0.2rem;
      background: #fff;
      color: #9b9b9b;
      font-size: 0.12rem;
      line-height: 0.3rem;
      text-align: center;
    }
    .khd {
      width: 52%;
      height: 0.55rem;
      margin: 0.2rem auto;
      display: flex;
      flex-direction: column;
      .khd_top {
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.14rem;
        color: #646464;
      }
      .khd_bottom {
        width: 100%;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.11rem;
        color: #9b9b9b;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 0.5rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    .bottom_left {
      width: 19%;
      height: 0.5rem;
      display: flex;
      justify-content: space-around;
      line-height: 0.5rem;
      color: #646464;
      font-size: 0.16rem;
      input {
        background: #fff;
        width: 0.23rem;
        height: 0.23rem;
        margin-top: 0.13rem;
      }
    }
    .bottom_right {
      width: 52%;
      height: 0.5rem;
      display: flex;
      justify-content: space-between;
      .zj {
        width: 42%;
        height: 0.5rem;
        display: flex;
        flex-direction: column;
        .price {
          width: 100%;
          height: 0.2rem;
          display: flex;
          justify-content: space-around;
          margin-top: 0.1rem;
          .jq {
            font-size: 0.16rem;
            line-height: 0.2rem;
            color: #383838;
          }
          .ll {
            font-size: 0.15rem;
            line-height: 0.2rem;
            color: #c33;
            margin-right: 0.06rem;
          }
        }
        .yf {
          width: 90%;
          height: 0.15rem;
          line-height: 0.15rem;
          font-size: 0.1rem;
          color: #646464;
          margin-left: 0.12rem;
        }
      }
      .js {
        width: 58%;
        height: 0.5rem;
        button {
          width: 100%;
          height: 0.5rem;
          color: #fff;
          background: #9b9b9b;
          border: 0;
          text-align: center;
          line-height: 0.5rem;
          font-size: 0.16rem;
        }
      }
    }
  }
}
</style>
