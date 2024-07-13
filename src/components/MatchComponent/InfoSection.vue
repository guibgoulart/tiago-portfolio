<template>
  <div class="bg-gray-800 text-white p-4 info-size">
    <!-- Location Section -->
    <div class="flex items-center mb-4">
      <span class="material-icons">location_on</span>
      <span class="ml-2 font-bold">Barcelona</span>
    </div>
    <!-- Scrollable Text Section -->
    <div class="bg-gray-900 p-4 h-32 overflow-y-scroll mb-4">
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
    <div class="mb-4">
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
    <div class="flex justify-around mb-2">
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
    </div>
    <div class="flex justify-center">
      <a href="#" class="flex items-center space-x-1">
        <span class="material-icons">camera</span>
        <span>Instagram</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSection'
}
</script>

<style scoped>
.info-size {
  width: 100%;
  max-width: 30rem;
}
</style>
