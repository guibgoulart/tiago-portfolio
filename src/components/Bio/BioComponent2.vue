<template>
  <div class="min-h-screen bg-super-black text-white font-inter p-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div class="w-full md:w-1/3">
          <img 
            src="@/assets/foto-intro.png" 
            alt="Tiago Goulart" 
            class="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        <div class="w-full lg:mt-24 md:mt-24 md:w-2/3">
          <h2 class="font-helvetica text-2xl md:text-3xl font-semibold mb-4 text-white">First, let me introduce myself.<br/>Perhaps we might be a perfect match.</h2>
          <p class="text-lg mb-6 leading-relaxed">
            Bridging the gap between art and technology, I bring a unique perspective to UX/UI design. 
            My background in music and literature infuses my work with creativity and depth, 
            while my technical skills ensure functional and beautiful digital experiences.
          </p>
        </div>
      </div>
      <div class="space-y-4">
        <div v-for="(section, index) in bioSections" :key="index" class="bg-soft-black bg-opacity-50 rounded-lg overflow-hidden">
          <button
            @click="toggleSection(section.title)"
            class="w-full p-4 text-left flex justify-between items-center hover:bg-black transition-colors"
          >
            <h3 class="text-xl font-semibold font-helvetica text-red">{{ section.title }}</h3>
            <svg 
              :class="{'rotate-180': expandedSection === section.title}"
              class="w-6 h-6 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-if="expandedSection === section.title" class="p-4 text-gray-300">
              <p class="leading-relaxed">{{ section.content }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expandedSection = ref(null)

const toggleSection = (title) => {
  expandedSection.value = expandedSection.value === title ? null : title
}

const bioSections = [
  {
    title: "Background",
    content: "Olá! I'm a designer from Brazil currently located in Barcelona. From the outset, I've been driven by my creative and ambivalent essence, a combination that allows me to explore different paths and approaches in everything I do."
  },
  {
    title: "Skills",
    content: "One of my most striking abilities is the capacity to bring people and groups together, creating meaningful connections that drive project success. Grounded in values such as empathy and communication, I consider these pillars essential to my performance in any project."
  },
  {
    title: "Experience",
    content: "With solid experience as a graphic designer, accumulated in various companies in Brazil, I've developed a broad and versatile view of the design world. Recently, I completed a master's degree in UX UI Design at Nuclio Digital School, where I deepened my knowledge and mastery of the latest trends and practices in the field of user experience and user interface design."
  },
  {
    title: "Professional Journey",
    content: "My professional journey also led me to an enriching four-and-a-half-year experience in Barcelona, where I worked as Customer Service on a Google project. This experience broadened my global perspective and honed my communication and customer service skills."
  },
  {
    title: "Passions",
    content: "In addition to my involvement in the design world, one of my great passions is music. I majored in Literature and built a solid career as a songwriter/composer and musician, bringing a unique sensitivity and diverse creative approach to all aspects of my professional life."
  }
]
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>