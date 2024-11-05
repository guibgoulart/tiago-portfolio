<template>
  <section class="bg-red py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">*projects</h2>
      <p class="text-lg md:text-xl text-white mb-8">
        Transforming ideas into memorable experiences through UX+UI Design and strategic Branding.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          v-for="project in projects"
          :key="project.name"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex flex-col hover:shadow-lg transition-shadow"
        >
          <div class="p-6 flex-grow">
            <img :src="project.logo" :alt="`${project.name} logo`" class="w-16 h-16 mb-4">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-4">{{ project.category }}</p>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
          </div>
          <div class="flex-shrink-0">
            <img :src="project.image" :alt="`${project.name} project`" class="w-full h-full object-cover">
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import petpalsLogo from '@/assets/petpals icone.png'
import petpalsImage from '@/assets/petpals.png'
import vasLogo from '@/assets/vas icone.png'
import vasImage from '@/assets/cardvas.png'
import aueLogo from '@/assets/aue icone.png'
import aueImage from '@/assets/aue.png'

const projects = ref([
  {
    logo: petpalsLogo,
    name: 'Petpals',
    category: 'UX+UI Design',
    description: 'Case Study: 2024 Master in UX/UI Design Program at Nuclio Digital School, Barcelona.',
    image: petpalsImage,
    link: 'https://www.behance.net/gallery/208940473/Petpals'
  },
  {
    logo: vasLogo,
    name: 'Vas',
    category: 'UX+UI Design',
    description: 'Case Study: A collaborative platform that connects drivers with available parking spaces in Barcelona.',
    image: vasImage,
    link: 'https://www.behance.net/gallery/208780171/Vas'
  },
  {
    logo: aueLogo,
    name: 'Auê',
    category: 'Branding Identity and Logo Design',
    description: 'Case Study: Branding, Logo and Visual Identity Design for Associação Brasil Auê, 2023, Barcelona.',
    image: aueImage,
    link: 'https://www.behance.net/gallery/203640917/Brasil-Aue'
  }
])
</script>
