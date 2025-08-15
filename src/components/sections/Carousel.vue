<template>
  <el-row justify="center">
    <el-col :span="24">
      <swiper
        :loop="true"
        :slidesPerView="1"
        :modules="modules"
        :navigation="{ hideOnClick:true }"
        :pagination="{ hideOnClick:true, clickable:true, type:'bullets' }"
        :autoplay="{ delay:5000, disableOnInteraction:false, pauseOnMouseEnter:true }"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <div class="figure-container">
            <el-image :src="image.src" class="figure-image" fit="contain"/>
            <p class="subfigure-caption">{{ image.caption }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

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
      images: [
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
      ],
    }
  }
}
</script>

<style>
.swiper {
  --swiper-theme-color: white;
}

.figure-container {
  text-align: center;
}

.figure-image {
  width: 100%;
  height: auto;
  max-height: 400px; /* 统一图片高度 */
  object-fit: contain; /* 确保图片完整显示 */
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