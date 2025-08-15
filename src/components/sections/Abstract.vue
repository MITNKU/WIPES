<template>
  <div>
    <el-divider />

    <!-- Abstract 文本部分 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <abstract />
      </el-col>
    </el-row>

    <!-- 图片横向排列部分 -->
    <el-row justify="center" style="margin-top: 20px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <div class="image-row">
          <div v-for="(image, index) in images" :key="index" class="image-container">
            <img :src="image.src" :alt="image.caption" class="image" />
            <p class="caption">{{ image.caption }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import abstract from '../mds/abstract.mdx';

const images = [
  {
    src: "./carousel/1.1_compare_with_gaussian_a_00.png",
    caption: "(a) Comparison of Gaussians and WIPES"
  },
  {
    src: "./carousel/1.1_compare_with_gaussian_b_00.png",
    caption: "(b) PSNR improvement of WIPES over Gaussian primitives"
  },
  {
    src: "./carousel/1.1_compare_with_gaussian_c_00.png",
    caption: "(c) Performance comparison of WIPES and Gaussian primitives"
  },
];
</script>

<style scoped>
.image-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.image-container {
  text-align: center;
  margin: 0 10px;
}

.image {
  max-width: 100%;
  height: auto;
  max-height: 200px; /* 统一图片高度 */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.caption {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  font-style: italic;
  line-height: 1.4;
}
</style>