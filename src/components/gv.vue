<template>
  <div>
    <el-container>
      <el-header>
        <div>
          <img src="../assets/logo.png" alt="" class="logo"/>
        </div>
      </el-header>
      <el-main>
        <!-- 产品展示 -->
        <div class="goods w">
          <el-row :gutter="20">
            <div :index="item.goods_id + ''" v-for="item in wishlist" :key="item.goods_id">
              <el-col :span="4" style="margin-top: 20px">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                  <img src="../assets/img/advice1.png" class="image" />
                  <div style="padding: 14px;">
                    <div class="goods-name" v-if="item.goods_name !== undefined && item.goods_name.length > 17">{{ item.goods_name.substr(0, 17) }}...</div>
                    <div class="goods-name" v-else>{{ item.goods_name }}</div>
                    <div style="text-align:right; margin-bottom: 5px">¥ {{ item.goods_price }}</div>
                      <el-button size="mini" type="danger" style="float: right; margin-bottom: 14px">
                        购买
                      </el-button>
                  </div>
                </el-card>
              </el-col>
            </div>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 产品的查询参数对象
      goodQueryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 24
      },
      wishlistQueryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      goodlist: [],
      wishlist: []
    }
  },
  created() {
    this.getWishlist()
  },
  methods: {
    async getWishlist() {
      const { data: res } = await this.$http.get('goods', {
        params: this.goodQueryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品参数失败')
      };
      this.goodlist = res.data.goods

      for (var item in this.goodlist) {
        if (this.goodlist.[item].goods_state === 1) {
          this.wishlist.push(this.goodlist.[item])
          this.total = this.wishlist.length
        }
      }
      console.log(this.wishlist)
    }
  }
}
</script>

<style lang="less" scoped>
header {
  .logo {
    display: block;
    margin: 5px 35px;
    height: 50px;
    width: 50px;
  }
  border-bottom-color: rgb(202, 204, 208);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.goods {
  margin-bottom: 30px;
  img {
    width: 100%;
    height: 250px;
  }
  .goods-name {
    height: 44px;
    width: 150px;
    margin-bottom: 10px;
  }
}
</style>
