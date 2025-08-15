<script>
import { defineAsyncComponent } from 'vue'
import Title from './sections/Title.vue'
import Abstract from './sections/Abstract.vue'
import Markdown from './sections/Markdown.vue'
import BibTeX from './sections/BibTeX.vue'

export default {
  components: {
    Title,
    Abstract,
    Markdown,
    BibTeX,
    Comment: defineAsyncComponent(() => import('./sections/Comment.vue')),
    // The following components are heavy and are loaded asynchronously
    // to improve initial page load performance.
    Carousel: defineAsyncComponent(() => import('./sections/Carousel.vue')),
    Video: defineAsyncComponent(() => import('./sections/Video.vue')),
    ImageSlider: defineAsyncComponent(() => import('./sections/ImageSlider.vue')),
    ImageSliderInner: defineAsyncComponent(() => import('./sections/ImageSliderInner.vue')),
    ImageSelector: defineAsyncComponent(() => import('./sections/ImageSelector.vue')),
    Echart: defineAsyncComponent(() => import('./sections/Echart.vue')),
    Table: defineAsyncComponent(() => import('./sections/Table.vue')),
    Collapse: defineAsyncComponent(() => import('./sections/Collapse.vue')),
    SeletionForComparison: defineAsyncComponent(() => import('./sections/SeletionForComparison.vue')),
    Latex: defineAsyncComponent(() => import('./sections/Latex.vue')),
    Model3D: defineAsyncComponent(() => import('./sections/Model3D.vue')),
    GaussianSplats3D: defineAsyncComponent(() => import('./sections/GaussianSplats3D.vue')),
  }
}
</script>

<template>
  <Title/>
  <!-- <Carousel/> -->
  <!-- <Video/> -->
  <Abstract/>
  <Markdown/>
  <!-- <Latex/> -->
  <!-- <Table/> -->
  <!-- <Collapse/> -->
  <!-- <Echart/> -->
  <!-- <Model3D/>
  <GaussianSplats3D/>
  <SeletionForComparison/>
  <ImageSliderInner/>
  <ImageSlider/>
  <ImageSelector/> -->
  <BibTeX/>
  <!-- <Comment/> -->
</template>