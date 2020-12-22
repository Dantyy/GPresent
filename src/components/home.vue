<template>
  <div>
    <!-- 全页布局 -->
    <el-container>
      <!-- 页头 -->
      <el-header>
        <el-row type="flex" justify="space-between" class="row1">
          <el-col :span="6" style="padding-left: 95px">
            <ul>
              <li>GPresent欢迎您!</li>
              <li>
                <a href="#">请登录</a>
                <a href="#" class="style-red">免费注册</a>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <ul>
              <li><a href="#">我的订单</a></li>
              <li class="spacer"></li>
              <li><a href="#">GP会员</a></li>
              <li class="spacer"></li>
              <li><a href="#">企业采购</a></li>
              <li class="spacer"></li>
              <li>
                <a href="#"> 客户服务<i class="el-icon-arrow-down"></i> </a>
              </li>
              <li class="spacer"></li>
              <li>
                <a href="#"> 网站导航<i class="el-icon-arrow-down"></i> </a>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col :span="4">
            <h1>GPresent</h1>
            <!-- 页面logo -->
            <img src="../assets/logo.png" alt="" class="logo" />
          </el-col>
          <el-col :span="10">
            <el-input placeholder="请输入内容">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button class="shopcar" type="danger" plain>
              <i class="el-icon-shopping-cart-full"></i>
              我的购物车
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <!-- 页面主体 -->
      <el-main>
        <div class="hero">
          <div class="hero-text">
            <h1>在GPresent给朋友一份礼物吧</h1>
            <ul>
              <li><i class="el-icon-present"></i>轻松添加项目，现金资金和体验</li>
              <li><i class="el-icon-refresh"></i>在一个地方同步，更新和共享注册表</li>
              <li><i class="el-icon-notebook-2"></i>跟踪客人的购买并保持井井有条</li>
              <li><i class="el-icon-money"></i>所有操作完全免费</li>
            </ul>
            <div class="hero-buttons">
              <el-button type="danger" style="margin-right: 20px">注册一个新账号</el-button>
              <el-button type="danger" plain>寻找朋友</el-button>
              <ul>
                <li style="margin-top: -20px">已经是我们网站的会员？ <a href="#">登录</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="goods w" style="margin-bottom: 30px;">
          <div class="goods-header">
            <h2>
              猜你喜欢
              <a href="#" style="font-size: 18px; color: #2b72bf">
                查看更多产品
                <i class="el-icon-right"></i>
              </a>
            </h2>
          </div>
          <el-row type="flex" justify="space-around">
            <el-col :span="1">
              <el-button round type="danger" plain style="margin-top: 138px; padding: 20px; border-radius: 30px;">
                <i class="el-icon-arrow-left"></i>
              </el-button>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="4">
              <el-card shadow="hover" :body-style="{ padding: '0px' }">
                <img src="../assets/img/advice1.png" alt="" class="goods-img" />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="1">
              <el-button round type="danger" plain style="margin-top: 138px; padding: 20px; border-radius: 30px;">
                <i class="el-icon-arrow-right"></i>
              </el-button>
            </el-col>
          </el-row>
        </div>
        <div class="advice w" style="margin-bottom: 50px;">
          <div class="advice-header">
            <h2>
              需要注册建议吗？
              <a href="#" style="font-size: 18px; color: #2b72bf">
                阅读更多
                <i class="el-icon-right"></i>
              </a>
            </h2>
          </div>
          <el-row :gutter="20">
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice1.png" alt="" />
                每个价格范围的50个最佳婚礼注册创意
              </a>
            </el-col>
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice2.png" alt="" />
                最终注册表清单
              </a>
            </el-col>
            <el-col :span="8">
              <a href="#">
                <img src="../assets/img/advice3.png" alt="" />
                这是要求现金礼物的方法
              </a>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <!-- 页脚 -->
      <el-footer>
        <el-row>
          <el-col :span="10" style="float: left; padding: 40px 0 0 100px;">
            <h2>心动不如行动，赶紧来</h2>
            <el-button type="danger" plain>开始你的注册表</el-button>
            <h3>
              已经是会员？
              <a href="#" style="text-decoration:underline;">登录</a>
            </h3>
          </el-col>
          <el-col :span="14" style="float: right; height: 267px">
            <img src="../assets/img/footer.png" alt="" />
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.w {
  margin: 0 100px 0 100px;
}
.row1 {
  background-color: #f1f1f1;
  height: 30px;
  padding-top: 5px;
}
.spacer {
  width: 1px;
  height: 13px;
  background-color: #666;
  margin: 2px 8px 0;
}
.style-red {
  color: red;
}
.logo {
  display: block;
  float: right;
  margin: 10px auto;
  height: 50px;
  width: 50px;
}
el-header {
  h1 {
    display: block;
    float: right;
    margin: 20px 6px 10px 6px;
    color: rgb(228, 133, 148);
  }
  li {
    float: left;
    color: rgb(102, 102, 102);
    font-size: 13px;
    margin: 0 2px 0 0;
    a {
      margin: 0 0 0 2px;
    }
  }
}

.el-input {
  margin: 15px;
}
.shopcar {
  margin-top: 15px;
}
.el-icon-shopping-cart-full {
  margin-right: 5px;
}
.hero {
  margin: -20px 0 30px 0;
  height: 520px;
  width: 1440px;
  background: url(../assets/img/hero.png) no-repeat;
  .hero-text {
    position: relative;
    left: 100px;
    top: 80px;
    ul {
      margin: 30px 0 30px 0;
      li {
        font-size: 16px;
        line-height: 30px;
        i {
          margin: 0 15px 0 0;
          font-size: 20px;
        }
      }
    }
  }
}
.goods {
  .goods-img {
    width: 100;
    height: 250px;
  }
}
.advice {
  img {
    width: 400px;
    height: 250px;
    border-radius: 5px;
  }
  a {
    color: rgb(6, 25, 41);
    font-size: 18px;
    margin-top: 10px;
  }
}
el-footer {
  h2,
  h3,
  a {
    color: #fff;
  }
  a {
    text-decoration: underline;
  }
  .el-row {
    background-color: #d83d2e;
  }
  img {
    width: 840px;
    height: 267px;
  }
}
</style>
