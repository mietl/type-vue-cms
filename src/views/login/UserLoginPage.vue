<template>
  <div class="login-container">
    <div class="login-form">
      <h1>欢迎登录</h1>
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="用户名登录" name="user">
          <user-login ref="userRef" />
        </el-tab-pane>
        <el-tab-pane label="手机号登录" name="phone">
          <mobile-login ref="mobileRef" />
        </el-tab-pane>
        <button type="submit" class="submit-btn" @click="loginAction">登录</button>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import MobileLogin from './components/MobileLogin.vue'
import UserLogin from './components/AccountLogin.vue'

let activeName = ref('user')

let userRef = ref<InstanceType<typeof UserLogin>>()

let loginAction = () => {
  userRef.value?.validateForm()
}
</script>

<style scoped>
.login-container {
  font-family: 'Arial', sans-serif;
  background-color: #f2f3f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* 登录表单 */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
  animation: slide-up 0.5s ease-in-out;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.login-form h1 {
  margin-bottom: 2rem;
  color: #333;
}

.el-tabs {
  width: 233px;
}
/* 
.el-tabs :v-deep(.el-tabs__item) {
  --el-color-primary: red !important;
  color: red !important;
} */

/* 提交按钮 */
.submit-btn {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}

@keyframes slide-up {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
