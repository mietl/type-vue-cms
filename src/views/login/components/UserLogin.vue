<template>
  <div class="user-login">
    <form ref="formRef">
      <div class="input-group">
        <label for="username">用户名</label>
        <input
          type="text"
          id="username"
          name="username"
          v-model="credentials.username"
          placeholder="请输入用户名"
          pattern="^[a-z0-9]{6,20}$"
          title="用户名必须是6~20个字母或数字"
          required
        />
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="credentials.password"
          placeholder="请输入密码"
          required
          pattern="^[a-z0-9]{3,}$"
          title="密码至少3位"
        />
      </div>

      <div class="guard">
        <div class="remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" v-model="rememberMe" />
          <label for="rememberMe">记住密码</label>
        </div>
        <div class="forgot-password"><el-link>忘记密码</el-link></div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { localCache } from '@/utils/storage'
import useUserStore from '@/store/user'

const userStore = useUserStore()

const formRef = ref<InstanceType<typeof HTMLFormElement>>()

const rememberMe = ref<boolean>(localCache.get('rememberMe'))

watch(rememberMe, (newValue) => {
  localCache.set('rememberMe', newValue)
})

const credentials = reactive({
  username: localCache.get('name') ?? '',
  password: localCache.get('password') ?? ''
})

function validateForm() {
  if (formRef.value?.checkValidity()) {
    const name = credentials.username
    const password = credentials.password
    // 1.登录操作
    userStore.loginAction({ name, password })
    // 2.记住密码
    if (rememberMe.value) {
      localCache.set('name', name)
      localCache.set('password', password)
      console.log('存了')
    } else {
      localCache.remove('name')
      localCache.remove('password')
    }
  } else {
    formRef.value?.reportValidity()
  }
}

defineExpose({
  validateForm
})
</script>

<style scoped>
@import './login-form.css';

.user-login {
  /* .. */
}

.user-login .guard {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.remember-me input {
  margin-right: 0.5rem;
}

/* 输入组 */
</style>
