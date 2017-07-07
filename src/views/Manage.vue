<template>
  <div class="right-container">
    <div class="content-top">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-top-btn">
        <router-link to="/manage/add" class="btn-href">
          <el-button type="primary">添加</el-button>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <div class="content">
          <div class="content-search">
            <el-form :inline="true" label-position="right" :model="searchData">
              <el-form-item label="ID">
                <el-input v-model="searchData.id" placeholder="ID"></el-input>
              </el-form-item>
              <el-form-item label="名称">
                <el-input v-model="searchData.name" placeholder="名称"></el-input>
              </el-form-item>
              <el-form-item label="角色">
                <el-select v-model="searchData.role_id" placeholder="角色">
                  <el-option label="超级管理员" value="1"></el-option>
                  <el-option label="管理员" value="100"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-table :data="manage" border stripe highlight-current-row>
            <el-table-column type="expand">
              <template scope="props">
                <el-form label-position="left" inline class="table-expand">
                  <el-form-item label="ID">
                    <span style="color: #9d9d9d">{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="名称">
                    <span style="color: #9d9d9d">{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="角色">
                    <span style="color: #9d9d9d">{{ props.row.role_id }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="ID" prop="id">
            </el-table-column>
            <el-table-column label="名称" prop="name">
            </el-table-column>
            <el-table-column label="角色" prop="role_id">
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <router-link :to="'/manage/update/' + scope.row.id">
                  <el-button type="primary" size="small">编辑</el-button>
                </router-link>
                <el-button type="danger" size="small" @click="remove(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="curChange"
            :current-page.sync="curPage"
            layout="total, prev, pager, next, jumper"
            :total="total" class="pager">
          </el-pagination>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<style scoped>
  .table-expand {
    font-size: 0;
  }

  .table-expand label {
    width: 90px;
  }

  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .pager {
    margin: 1rem auto;
  }

</style>
<script>
  import topHeader from '@/components/Header';
  import sideNav from '@/components/Nav';
  export default {
    data() {
      return {
        contentHeight: '',
        searchData: {
          id: '',
          name: '',
          role_id: ''
        },
        manage: [],
        total: 0,
        curPage: 1,
        pageSize: PAGESIZE,
      }
    },
    created() {
      this.getManage(this.curPage, this.pageSize, this.searchData);
    },
    components: {
      topHeader,
      sideNav
    },
    methods: {
      getManage(curPage, pageSize, search = {}) {
        this.$http.post(BASEURL + '/getManage', {
          curPage: curPage,
          pageSize: pageSize,
          search: search
        }, {
          headers: {
            token: "12323232"
          }
        }).then((res) => {
          this.manage = res.body.result.data;
          this.total = parseInt(res.body.result.total);
        }, (err) => {

        })
      },
      search() {
        let search = {
          name: this.searchData.name,
          role_id: this.searchData.role_id
        };
        this.curPage = 1;
        this.getManage(this.curPage, this.pageSize, this.searchData);
      },
      curChange(val) {
        this.curPage = val;
        this.getManage(this.curPage, this.pageSize, this.searchData);
      },

      remove(id) {
        console.log(id);
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
