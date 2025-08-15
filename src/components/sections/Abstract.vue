<template>
  <div>
    <el-divider />

    <!-- Abstract 文本部分 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <abstract />
      </el-col>
    </el-row>

    <!-- 图片滑动展示部分 -->
    <el-row justify="center" style="margin-top: 20px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <Carousel />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import abstract from '../mds/abstract.mdx';
import Carousel from './Carousel.vue';
</script>

<style scoped>
.figure-container {
  text-align: center;
  margin-bottom: 30px;
}

.figure-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.subfigure-caption {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  font-style: italic;
  line-height: 1.4;
}
</style>