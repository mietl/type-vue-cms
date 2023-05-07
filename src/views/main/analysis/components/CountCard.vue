<template>
  <div class="count-card">
    <div class="header">
      <span class="title">{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <ep-info-filled></ep-info-filled>
      </el-tooltip>
    </div>
    <div class="content">
      <TCountUp :number="number1" :options="counterOption"></TCountUp>
    </div>
    <div class="footer">
      <span style="subtile">{{ subtitle }}</span>
      <TCountUp :number="number2" :options="counterOption"></TCountUp>
    </div>
  </div>
</template>

<script setup lang="ts">
import TCountUp from '@/components/count-up/TCountUp.vue'

interface IProps {
  amount: string
  title: string
  tips: string
  subtitle: string
  number1: number
  number2: number
}

const props = withDefaults(defineProps<IProps>(), {
  title: '商品统计',
  tips: '商品统计',
  subtitle: '所有的商品总销量',
  number1: 0,
  number2: 0
})

const counterOption = {
  decimalPlaces: 0, // 保留两位
  prefix: props.amount == 'saleroom' ? '￥' : '' // 单位
}
</script>

<style lang="less" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    height: 38px;
    font-size: 14px;
    // color: rgba(0, 0, 0,0.45);
  }

  .content {
    flex: 1;
    font-size: 26px;
    margin-left: 0;
    color: rgba(0, 0, 0, 0.485);
    display: flex;
    align-items: center;
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    border-top: 1px solid #f0f0f0;

    .subtile {
      margin-right: 5px;
    }
  }
}
</style>
