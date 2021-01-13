<template>
  <div>
    <!-- 页面布局 -->
    <el-container>
      <!-- 页头 -->
      <el-header>
        <!-- 顶端灰色导航 -->
        <el-row type="flex" justify="space-between" class="row1">
          <el-col :span="6" style="padding-left:100px">
            <ul>
              <li>GPresent欢迎您!</li>
              <li>
                <a href="#">请登录</a>
                <a href="#" class="color: red">免费注册</a>
              </li>
            </ul>
          </el-col>
          <el-col :span="8">
            <ul>
              <li><a href="#">我的订单</a></li>
              <li><a href="#">GP会员</a></li>
              <li><a href="#">企业采购</a></li>
              <li>
                <a href="#"> 客户服务<i class="el-icon-arrow-down"></i> </a>
              </li>
              <li>
                <a href="#"> 网站导航<i class="el-icon-arrow-down"></i> </a>
              </li>
            </ul>
          </el-col>
        </el-row>
        <!-- logo、搜索、购物车、意向清单 -->
        <el-row type="flex" justify="space-between" class="w">
          <el-col :span="4">
            <h1>GPresent</h1>
            <!-- 页面logo -->
            <img src="../assets/logo.png" alt="" class="logo" />
          </el-col>
          <el-col :span="12">
            <!-- 搜索框 -->
            <el-input placeholder="请输入内容" style="margin: 15px;">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <!-- 购物车 -->
            <el-button class="shopcar" type="danger" plain style="margin: 15px 10px 0 0;" round>
              <i class="el-icon-shopping-cart-full" style="margin-right: 5px;"></i>
              购物车
              <i class="el-icon-arrow-right"></i>
            </el-button>
            <!-- 意向清单 -->
            <el-button type="danger" plain style="margin-top: 15px;" round>
              <i class="el-icon-present" style="margin-right: 5px;"></i>
              意向清单
              <i class="el-icon-arrow-right"></i>
            </el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- 导航栏 -->
        <div class="nav w">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <!-- 一级菜单 -->
            <el-menu-item :index="item.cat_id + ''" v-for="item in catelist" :key="item.cat_id">
              <template>
                <!-- 文本 -->
                <span>{{ item.cat_name }}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 产品展示 -->
        <div class="goods w">
          <el-row :gutter="30">
            <!-- 第一个商品 -->
            <div :index="item.goods_id + ''" v-for="item in goodlist" :key="item.goods_id">
              <el-col :span="4" style="margin-top: 20px">
                <!-- <el-col> -->
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="../assets/img/advice1.png" class="image" />
                  <div style="padding: 14px;">
                    <span> {{item.goods_name}} </span>
                    <div class="bottom">
                      111111
                    </div>
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-row>
        </div>
        <!-- 分页区域 -->
        <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next" :total="total" style="text-align: center; margin-bottom: 30px;"> </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    // if (this.goodlist.goods_name.length() > 10) {
    //   this.goodlist.goods_name = this.goodlist.goods_name.substr(0, 10)
    // }
    return {
      // 类别的查询参数对象
      cateQueryInfo: {
        type: 1,
        pagenum: 1,
        pagesize: 15
      },
      // 产品的查询参数对象
      goodQueryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 24
      },
      // 商品分类的数据列表，默认为空
      catelist: [],
      // 商品的数据列表，默认为空
      goodlist: [],
      activeIndex: '0',
      total: 0
    }
  },
  created() {
    this.getMenuList()
    this.getGoodList()
  },
  methods: {
    async getMenuList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.cateQueryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('无法获取菜单栏')
      }
      this.catelist = res.data.result
      // console.log(this.catelist)
      this.total = res.data.total * 10
      // console.log(this.total)
      // console.log(this.catelist.[0].cat_name)
    },
    async getGoodList() {
      const { data: res } = await this.$http.get('goods', {
        params: this.goodQueryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品参数失败')
      }
      this.goodlist = res.data.goods
      console.log(this.goodlist)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleCurrentChange(newPage) {
      this.goodQueryInfo.pagenum = newPage
      this.getGoodList()
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  height: 100px !important;
  h1 {
    display: inline-block;
    margin: 20px 6px 10px 6px;
    color: rgb(228, 133, 148);
  }
  img {
    float: left;
  }
  ul {
    padding: 0px;
    li {
      display: inline-block;
      color: rgb(102, 102, 102);
      font-size: 13px;
      margin-right: 10px;
      a {
        margin-left: 2px;
        padding: 0;
      }
    }
  }
}
.row1 {
  background-color: #f1f1f1;
  height: 30px;
  padding-top: 5px;
}
.logo {
  display: block;
  float: right;
  margin: 10px auto;
  height: 50px;
  width: 50px;
}
.goods {
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 250px;
  }
}
</style>
