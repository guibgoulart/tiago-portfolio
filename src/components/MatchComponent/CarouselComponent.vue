<template>
  <Carousel :items-to-show="1" class="carousel-size">
    <Slide v-for="(image, index) in images" :key="index">
      <img :src="image" :alt="`Image ${index + 1}`" class="w-full h-full object-cover" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CarouselComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
})
</script>

<style scoped>
.carousel-size {
  width: 100%;
  height: 40vw; /* Adjust height based on the viewport width for responsiveness */
  max-height: 300px; /* Set a maximum height */
}
</style>