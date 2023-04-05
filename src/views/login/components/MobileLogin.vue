<template>
  <div>
    <div class="input-group">
      <label for="phone">手机号</label>
      <input type="text" id="phone" name="phone" placeholder="请输入用户名" required />
    </div>
    <div class="input-group">
      <label for="code">验证码</label>
      <div class="code-group">
        <input type="text" id="code" name="code" placeholder="请输入验证码" required />
        <button class="code-btn">获取验证码</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
@import './login-form.css';

.code-group {
  display: flex;
  align-items: center;
}

.code-group input {
  width: 100px;
  margin-right: 10px;
  flex: 1;
}

.code-btn {
  padding: 0.5rem;
  border: 1px solid #738e97;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 0.9rem;
}

.code-btn:hover {
  background-color: #939fa7;
  color: #ffffff;
}
</style>
