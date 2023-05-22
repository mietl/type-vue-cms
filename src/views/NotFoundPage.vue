<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <img src="@/assets/img/1f535.png" alt="Not Found" />
    <p>抱歉，您要查找的页面不存在。</p>
    <router-link to="/" class="router-link">返回首页</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
}

h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

img {
  margin-bottom: 1rem;
  transition: transform 0.5s ease; /* 添加过渡效果 */
  animation: slide 3s infinite; /* 添加自动滑动动画效果 */
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(0);
  }
}

img:hover {
  transform: translateX(20px); /* 添加滑动效果 */
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.router-link {
  font-size: 1.2rem;
  text-decoration: none;
  color: #42b983;
}
</style>
