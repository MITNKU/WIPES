<script setup>
import abstract from '../mds/abstract.mdx';
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center" style="margin-bottom: 24px;">
      <el-col :xs="24" :sm="22" :md="20" :lg="18" :xl="16">
        <el-row :gutter="20">
          <!-- 左半部分：三图拼接 -->
          <el-col :xs="24" :sm="12">
            <div class="figure-group">
              <div class="figure-row">
                <img src="/pdf/1.1_compare_with_gaussian_a_00.png" class="subfig" alt="(a)">
                <img src="/pdf/1.1_compare_with_gaussian_b_00.png" class="subfig" alt="(b)">
                <img src="/pdf/1.1_compare_with_gaussian_c_00.png" class="subfig" alt="(c)">
              </div>
              <div class="figure-caption">
                <span class="subfig-label">(a)</span>
                <span class="subfig-label">(b)</span>
                <span class="subfig-label">(c)</span>
              </div>
              <div class="figure-footnote">
                Figure 1: Comparison with Gaussian-based methods. (a) Ours, (b) Gaussian, (c) Ground Truth.
              </div>
            </div>
          </el-col>
          <!-- 右半部分：单图 -->
          <el-col :xs="24" :sm="12">
            <div class="figure-group">
              <img src="/pdf/4.3_toy_exp_00.png" class="singlefig" alt="Toy Experiment">
              <div class="figure-footnote">
                Figure 2: Toy experiment result.
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <abstract />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.figure-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
}
.figure-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6px;
}
.subfig {
  width: 70px;
  height: auto;
  margin: 0 2px;
  border: 1px solid #eee;
  background: #fff;
}
.singlefig {
  width: 100%;
  max-width: 220px;
  height: auto;
  border: 1px solid #eee;
  background: #fff;
  display: block;
  margin: 0 auto;
}
.figure-caption {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 60px;
  margin-top: 2px;
  font-size: 13px;
  color: #666;
}
.subfig-label {
  min-width: 70px;
  text-align: center;
}
.figure-footnote {
  margin-top: 6px;
  font-size: 12px;
  color: #888;
  text-align: center;
  line-height: 1.4;
}
</style>