<template>
  <div class="bg-red h-screen flex flex-col items-center justify-start pt-10">
    <div class="text-center text-black font-helvetica font-bold mt-8 mb-4">
      <p class="text-4xl">First, let me introduce myself.</p>
      <p class="text-4xl">Perhaps we might be a perfect match.</p>
    </div>
    <div class="relative mt-8">
      <img src="@/assets/iphone.png" alt="iPhone Mockup" class="iphone-mockup" />
      <div
        class="absolute font-inter top-14 left-0 w-full h-full flex flex-col justify-between items-center text-white pt-6">
        <div class="w-full flex justify-between items-center px-8">
          <div class="flex items-center name-age">
            <span class="font-semibold">Tiago Goulart</span>
            <span class="ml-4">43</span>
            <span class="text-blue-500 text-lg ml-3">✔</span>
          </div>
        </div>
        <!-- Carousel Component -->
        <Carousel :items-to-show="1" class="top-4 carousel-size h-full">
          <Slide v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="`Image ${index + 1}`" class="w-full h-full object-cover" />
          </Slide>
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
      <!-- Status Bar Icons (Simulated) -->
      <div
        class="absolute font-inter status-ui-text top-8 left-14 right-14 flex justify-between items-center text-white text-sm px-4">
        <span>16:20</span>
        <div class="flex items-center space-x-1">
          <span>📶</span>
          <span>📱</span>
          <span>🔋</span>
        </div>
      </div>
      <!-- New Content Sections -->
      <div class="absolute bottom-0 left-0 w-full bg-gray-800 text-white p-4">
        <!-- Location Section -->
        <div class="flex items-center mb-2">
          <span class="material-icons">location_on</span>
          <span class="ml-2 font-bold">Barcelona</span>
        </div>
        <!-- Scrollable Text Section -->
        <div class="bg-gray-900 p-4 h-32 overflow-y-scroll">
          <p>
            Olá! I’m a designer from Brazil currently located in Barcelona.
            <br><br>
            From the outset, I've been driven by my creative and ambivalent essence, a combination that allows me to
            explore
            different paths and approaches in everything I do.
            <br><br>
            One of my most striking abilities is the capacity to bring people and groups together, creating meaningful
            connections that drive project success.
            <br><br>
            Grounded in values such as empathy and communication, I consider these pillars essential to my performance
            in any
            project. With a solid experience as a graphic designer, accumulated in various companies in Brazil, I've
            developed
            a broad and versatile view of the design world.
            <br><br>
            Recently, I completed a master's degree in UX UI Design at Nuclio Digital School, where I deepened my
            knowledge
            and mastery of the latest trends and practices in the field of user experience and user interface design.
            <br><br>
            My professional journey also led me to an enriching four-and-a-half-year experience in Barcelona, where I
            worked
            as Customer Service on a Google project. This experience broadened my global perspective and honed my
            communication and customer service skills.
            <br><br>
            In addition to my involvement in the design world, one of my great passions is music. I majored in
            Literature and
            built a solid career as a songwriter/composer and musician, bringing a unique sensitivity and diverse
            creative
            approach to all aspects of my professional life.
          </p>
        </div>
        <!-- Basics Section -->
        <div class="mt-4">
          <div class="flex items-center mb-2">
            <span class="material-icons">tag</span>
            <span class="ml-2">Basics</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="material-icons">star</span>
            <span class="ml-2">Gemini</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="material-icons">school</span>
            <span class="ml-2">Master UX/UI design at Nuclio Digital School</span>
          </div>
        </div>
        <!-- Links Section -->
        <div class="flex justify-around mt-4">
          <a href="#" class="flex items-center space-x-1">
            <span class="material-icons">description</span>
            <span>Resume</span>
          </a>
          <a href="#" class="flex items-center space-x-1">
            <span class="material-icons">linkedin</span>
            <span>Linkedin</span>
          </a>
          <a href="#" class="flex items-center space-x-1">
            <span class="material-icons">music_note</span>
            <span>Spotify</span>
          </a>
          <a href="#" class="flex items-center space-x-1">
            <span class="material-icons">camera</span>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import foto1 from '@/assets/foto1.png'
import foto2 from '@/assets/foto2.png'
import foto3 from '@/assets/foto3.png'
import foto4 from '@/assets/foto4.png'
import foto5 from '@/assets/foto5.png'

export default defineComponent({
  name: 'MatchComponent',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [foto1, foto2, foto3, foto4, foto5]
    }
  }
})
</script>

<style scoped>
.iphone-mockup {
  max-width: 80vw;
  /* Adjust to fit within viewport width */
  width: 30rem;
  /* Adjust to your desired width */
}

.status-ui-text {
  font-size: 1.050rem;
}

.name-age {
  font-size: 1.75rem;
}

.carousel-size {
  width: 450px;
}
</style>
