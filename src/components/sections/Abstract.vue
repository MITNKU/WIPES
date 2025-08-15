<script setup>
import abstract from '../mds/abstract.mdx';
</script>

<template>
  <div>
    <el-divider />

    <!-- Abstract 文本部分 -->
    <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
            <abstract />
        </el-col>
    </el-row>

    <!-- 图片展示部分 -->
    <el-row justify="center" style="margin-top: 40px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="20" :xl="18">
        <el-row :gutter="20">
          <!-- 左半部分：三个子图组成的大图 -->
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="figure-container">
              <h3 class="figure-title">Figure 1: Comparison of Gaussians and WIPES</h3>
              
              <!-- 子图 (a) -->
              <div class="subfigure">
                <img 
                  src="/pdf/1.1_compare_with_gaussian_a_00.png" 
                  alt="Comparison of Gaussians and WIPES - Spatial and Frequency Domain"
                  class="figure-image"
                />
                <p class="subfigure-caption">(a) Comparison of Gaussians and WIPES</p>
              </div>

              <!-- 子图 (b) -->
              <div class="subfigure" style="margin-top: 20px;">
                <img 
                  src="/pdf/1.1_compare_with_gaussian_b_00.png" 
                  alt="PSNR improvement of WIPES over Gaussian primitives"
                  class="figure-image"
                />
                <p class="subfigure-caption">(b) PSNR improvement of WIPES over Gaussian primitives</p>
              </div>

              <!-- 子图 (c) -->
              <div class="subfigure" style="margin-top: 20px;">
                <img 
                  src="/pdf/1.1_compare_with_gaussian_c_00.png" 
                  alt="Performance comparison of WIPES and Gaussian primitives"
                  class="figure-image"
                />
                <p class="subfigure-caption">(c) Performance comparison of WIPES and Gaussian primitives</p>
              </div>
            </div>
          </el-col>

          <!-- 右半部分：单独的图片 -->
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="figure-container">
              <h3 class="figure-title">Figure 2: Toy Experiment Results</h3>
              <div class="subfigure">
                <img 
                  src="/pdf/4.3_toy_exp_00.png" 
                  alt="Toy Experiment Results"
                  class="figure-image"
                />
                <p class="subfigure-caption">Experimental results demonstrating WIPES performance</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>
.figure-container {
  text-align: center;
  margin-bottom: 30px;
}

.figure-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.subfigure {
  margin-bottom: 15px;
}

.figure-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.figure-image:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.subfigure-caption {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  font-style: italic;
  line-height: 1.4;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .figure-title {
    font-size: 14px;
  }
  
  .subfigure-caption {
    font-size: 12px;
  }
}
</style>