<template>
  <div class="bg-white text-gray-900 py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="text-right font-inter pr-8">
          <h2 class="text-6xl font-black text-red mb-8">CONTACT<br />ME</h2>
          <p class="mb-4 font-light">
            If you have any questions or<br/>
            comments, please contact me via<br/>
            email or phone, or send me a<br/>
            message using the contact form.
          </p>
          <p class="mb-2">Email</p>
          <a href="mailto:osrubens@gmail.com" class="text-black underline mb-4 block">osrubens@gmail.com</a>
          <p class="mb-2">Mobile</p>
          <p class="mb-8">(+34) 680 175 200</p>
          <div id="contact" class="flex justify-end space-x-4">
            <a v-for="(icon, index) in socialIcons" 
               :key="index" 
               :href="icon.link" 
               class="bg-[#FF6B6B] p-2 rounded-full hover:bg-[#FF5252] transition-colors duration-300">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path :d="icon.path" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div v-for="field in formFields" :key="field.id">
              <label :for="field.id" class="block mb-2">{{ field.label }}</label>
              <input
                v-if="field.type !== 'textarea'"
                :id="field.id"
                v-model="form[field.id]"
                :type="field.type"
                :required="field.required"
                class="w-full p-2 bg-white border border-gray-300"
              />
              <textarea
                v-else
                :id="field.id"
                v-model="form[field.id]"
                rows="4"
                :required="field.required"
                class="w-full p-2 bg-white border border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              class="px-4 py-2 bg-[#FF6B6B] text-white hover:bg-[#FF5252] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const socialIcons = [
  { 
    path: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z M14 15H8v-2h6v2z M14 11H8V9h6v2z",
    link: 'https://docs.google.com/document/d/18k4KWLUMiHyqHgBTk6UlZxCTfa83Fc-m3r3y946AFuc/edit?usp=drive_link'
  },
  { 
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    link: 'https://www.linkedin.com/in/tiagorubensgoulart/'
  },
  { 
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    link: 'https://www.instagram.com/otiagorubens/'
  },
  { 
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
    link: 'https://open.spotify.com/intl-pt/artist/5sCebujHOIPwB3bx0zzKz9?si=Qp1BRYtST4eU6bF9MafhUQ'
  },
];

const formFields = [
  { id: 'name', label: 'Name', type: 'text', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'phone', label: 'Phone', type: 'tel', required: false },
  { id: 'message', label: 'Message', type: 'textarea', required: true },
];

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const submitForm = () => {
  const mailtoLink = `mailto:osrubens@gmail.com?subject=Contact from ${form.value.name}&body=Name: ${form.value.name}%0AEmail: ${form.value.email}%0APhone: ${form.value.phone}%0AMessage: ${form.value.message}`;
  window.location.href = mailtoLink;
};
</script>