<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination,
    Autoplay,
  },
  data() {
    return {
      modules: [
        Navigation,
        Pagination,
        Autoplay,
      ],
      // 更新为你的子图路径和图注
      images: [
        {
          src: "/pdf/1.1_compare_with_gaussian_a_00.png",
          caption: "(a) Comparison of Gaussians and WIPES"
        },
        {
          src: "/pdf/1.1_compare_with_gaussian_b_00.png",
          caption: "(b) PSNR improvement of WIPES over Gaussian primitives"
        },
        {
          src: "/pdf/1.1_compare_with_gaussian_c_00.png",
          caption: "(c) Performance comparison of WIPES and Gaussian primitives"
        },
      ],
    }
  }
}
</script>

<template>
  <el-row justify="center">
    <el-col :span="24">
      <!-- 设置轮播图：循环播放、首张图序号、响应式、导航和分页、自动播放 -->
      <swiper
        :loop="true"
        :slidesPerView="1"
        :breakpoints="{
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
        }"
        :modules="modules"
        :navigation="{ 
          hideOnClick:true,
        }"
        :pagination="{ 
          hideOnClick:true,
          clickable:true, 
          type:'bullets' 
        }"
        :autoplay="{ 
          delay:5000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
        }"
        >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div class="figure-container">
            <el-image :src="image.src" class="figure-image"/>
            <p class="subfigure-caption">{{ image.caption }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

<style>
/* 设置Swiper风格 */
.swiper {
  --swiper-theme-color: white;
}

.figure-container {
  text-align: center;
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