<template>
  <div class="bg-red flex flex-col items-center justify-start pt-10 px-4 md:px-0">
    <!-- Added px-4 for padding -->
    <div class="text-center text-black font-helvetica font-bold mt-8 mb-4">
      <p class="text-2xl md:text-4xl">First, let me introduce myself.</p>
      <p class="text-2xl md:text-4xl">Perhaps we might be a perfect match.</p>
    </div>
    <div class="relative mt-8 iphone-container max-w-full md:max-w-2xl">
      <img src="@/assets/iphone.png" alt="iPhone Mockup" class="iphone-mockup" />
      <div class="absolute top-0 left-0 w-full p-4 iphone-content">
        <IphoneHeader />
        <div class="flex-1 overflow-hidden mt-4">
          <CarouselComponent :images="images" />
        </div>
        <div class="mt-4">
          <InfoSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import IphoneHeader from './IphoneHeader.vue'
import CarouselComponent from './CarouselComponent.vue'
import InfoSection from './InfoSection.vue'
import foto1 from '@/assets/foto1.png'
import foto2 from '@/assets/foto2.png'
import foto3 from '@/assets/foto3.png'
import foto4 from '@/assets/foto4.png'
import foto5 from '@/assets/foto5.png'

export default defineComponent({
  name: 'MainComponent',
  components: {
    IphoneHeader,
    CarouselComponent,
    InfoSection
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
  width: 100%;
  max-width: 80vw;
  max-width: 30rem;
}

.iphone-container {
  position: relative;
  width: 100%;
  max-width: 30rem;
  overflow: hidden;
  /* Prevent content overflow */
}

.iphone-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  box-sizing: border-box;
}
</style>