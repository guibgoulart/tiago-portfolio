<template>
  <div class="container bg-black flex flex-col items-center rounded-lg mx-auto">
    <div class="text-center p-6 md:pt-12 md:pb-6">
      <h1 class="text-white text-2xl md:text-4xl font-bold">First, let me introduce myself. <br> Perhaps we might be a perfect match.</h1>
    </div>
    <div class="overflow-y-scroll max-h-72 mx-64 mt-10 mb-4 pt-4 font-inter font-thin">
      <p class="text-white text-base md:text-lg mb-4">
        Olá! I’m designer from Brazil currently located in Barcelona.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        From the outset, I've been driven by my creative and ambivalent essence, a combination that allows me to explore different paths and approaches in everything I do.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        One of my most striking abilities is the capacity to bring people and groups together, creating meaningful connections that drive project success.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        Grounded in values such as empathy and communication, I consider these pillars essential to my performance in any project. With a solid experience as a graphic designer, accumulated in various companies in Brazil, I've developed a broad and versatile view of the design world.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        Recently, I completed a master's degree in UX UI Design at Nuclio Digital School, where I deepened my knowledge and mastery of the latest trends and practices in the field of user experience and user interface design.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        My professional journey also led me to an enriching four-and-a-half-year experience in Barcelona, where I worked as Customer Service on a Google project. This experience broadened my global perspective and honed my communication and customer service skills.
      </p>
      <p class="text-white text-base md:text-lg mb-4">
        In addition to my involvement in the design world, one of my great passions is music. I majored in Literature and built a solid career as a songwriter/composer and musician, bringing a unique sensitivity and diverse creative approach to all aspects of my professional life.
      </p>
    </div>
    <div class="w-full rounded-b-lg overflow-hidden">
        <img src="@/assets/foto-intro.png" alt="Profile Picture" class="w-full object-cover h-auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BioComponent',
}
</script>

<style scoped>
.bg-black {
  background-color: #000;
}
</style>
