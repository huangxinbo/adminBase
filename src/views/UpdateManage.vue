<template>
  <div class="right-container">
    <div class="content-top">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>编辑</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="content-top-btn">
        <router-link to="/manage">
          <el-button type="primary">返回</el-button>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <div class="content">
          <el-row style="margin-top: 20px;">
            <el-col :span="12" :offset="6">
              <el-form label-position="left" label-width="4rem" :rules="rules" :model="postData" ref="postDataRef">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="postData.name"></el-input>
                </el-form-item>
                <el-form-item label="角色" prop="role_id">
                  <el-select v-model="postData.role_id" placeholder="角色">
                    <el-option label="超级管理员" value="1"></el-option>
                    <el-option label="管理员" value="100"></el-option>
                  </el-select>
                </el-form-item>
                <el-input type="hidden" v-model="postData.id"></el-input>
                <el-form-item>
                  <el-button type="primary" @click="update('postDataRef')">编辑</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<style scoped>

</style>
<script>
  import topHeader from '@/components/Header';
  import sideNav from '@/components/Nav';
  export default {
    data() {
      return {
        id: 0,
        postData: {
          id: 0,
          name: '',
          role_id: '1'
        },
        rules: {
          id: [
            {required: true, message: 'ID不能为空', trigger: 'blur'},
            {type: 'number', message: 'ID必须是数字'}
          ],
          name: [
            {required: true, message: '请输入名称', trigger: 'blur'},
          ],
        }
      }
    },
    created() {
      this.postData.id = this.$route.params.id;
    },
    components: {
      topHeader,
      sideNav
    },
    methods: {
      update(postData) {
        this.$refs[postData].validate((valid) => {
          if (valid) {
            //js验证成功

            this.$notify({
              title: '成功',
              message: '编辑成功',
              type: 'success'
            });
          } else {
            this.$notify.error({
              title: '错误',
              message: '请检查输入是否正确',
              offset: 100
            });
            return false;
          }
        });
      }
    }
  }
</script>
