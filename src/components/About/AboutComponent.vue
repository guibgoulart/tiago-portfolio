<template>
  <div class="flex flex-col md:flex-row bg-gray-900 text-white">
    <!-- Coluna da imagem -->
    <div class="w-full md:w-[45%] flex justify-center md:justify-start p-0">
      <img 
        src="@/assets/Who_am_i.png" 
        alt="Portrait of Tiago" 
        class="w-full md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%] h-auto object-contain"
      />
    </div>

    <!-- Coluna do texto -->
    <div class="md:w-[55%] px-6 md:px-8 lg:px-12 xl:px-16 flex items-center">
      <div class="py-8 md:py-12 lg:py-16 space-y-8 md:space-y-12 text-sm md:text-base lg:text-lg xl:text-xl font-inter font-extralight my-auto max-w-3xl">
        <p>
          I'm Tiago, a creative designer from Brazil currently located in Barcelona.
        </p>
        
        <p>
          From the outset, I've been driven by my creative and ambivalent essence, a combination that allows me to explore different paths and approaches in everything I do.
        </p>
        
        <p>
          One of my most striking abilities is the capacity to bring people and groups
          together, creating meaningful connections that drive project success.
        </p>
        
        <p>
          Grounded in values such as empathy and communication, I consider these
          pillars essential to my performance in any project. With a solid experience as
          a graphic designer, accumulated in various companies in Brazil, I've
          developed a broad and versatile view of the design world.
        </p>
        
        <p>
          Recently, I completed a master's degree in UX UI Design at Nuclio Digital
          School, where I deepened my knowledge and mastery of the latest trends
          and practices in the field of user experience and user interface design.
        </p>
        
        <p>
          My professional journey also led me to an enriching four-and-a-half-year
          experience in Barcelona, where I worked as Customer Service on a Google
          project. This experience broadened my global perspective and honed my
          communication and customer service skills.
        </p>
        
        <p>
          In addition to my involvement in the design world, one of my great passions
          is music. I majored in Literature and built a solid career as a songwriter/
          composer and musician, bringing a unique sensitivity and diverse creative
          approach to all aspects of my professional life.
        </p>
        
        <p>
          I will help you develop your digital product based on a better user
          experience.
        </p>

        <a href="https://docs.google.com/document/d/18k4KWLUMiHyqHgBTk6UlZxCTfa83Fc-m3r3y946AFuc/edit?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block w-32 md:w-40 lg:w-44 text-center text-white bg-transparent px-4 py-2 md:py-4 text-sm md:text-base lg:text-lg font-bold border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:bg-opacity-20 transition-colors duration-300">
          View my CV
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
@media (min-width: 1280px) {
  .image-resize {
    width: 85%;
  }
}

@media (min-width: 1536px) {
  .image-resize {
    width: 25%;
  }
}
</style>