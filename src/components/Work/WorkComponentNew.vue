<template>
  <section class="bg-red py-16 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">*projects</h2>
      <p class="text-lg md:text-xl text-white mb-8">
        Transforming ideas into memorable experiences through UX+UI Design and strategic Branding.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.name" class="bg-white rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black flex flex-col">
          <div class="p-6 flex-grow">
            <img :src="project.logo" :alt="`${project.name} logo`" class="w-16 h-16 mb-4">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 mb-4">{{ project.category }}</p>
            <p class="text-gray-700 mb-4">{{ project.description }}</p>
            <a href="#" class="text-blue-600 hover:underline">
              Read case study →
            </a>
          </div>
          <div class="h-64 relative">
            <img :src="project.image" :alt="`${project.name} project`" class="absolute inset-0 w-full h-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import petpalsLogo from '@/assets/petpals icone.png'
import petpalsImage from '@/assets/petpals.png'
import vasLogo from '@/assets/vas icone.png'
import vasImage from '@/assets/vas.png'
import aueLogo from '@/assets/aue icone.png'
import aueImage from '@/assets/aue.png'

export default {
  name: 'WorkComponentNew',
  data() {
    return {
      projects: [
        {
          logo: petpalsLogo,
          name: 'Petpals',
          category: 'UX+UI Design',
          description: 'Case Study: 2024 Master in UX/UI Design Program at Nuclio Digital School, Barcelona.',
          image: petpalsImage
        },
        {
          logo: vasLogo,
          name: 'Vas',
          category: 'UX+UI Design',
          description: 'Case Study: A collaborative platform that connects drivers with available parking spaces in Barcelona.',
          image: vasImage
        },
        {
          logo: aueLogo,
          name: 'Auê',
          category: 'Branding Identity and Logo Design',
          description: 'Case Study: Branding, Logo and Visual Identity Design for Associação Brasil Auê, 2023, Barcelona.',
          image: aueImage
        }
      ]
    }
  }
}
</script>