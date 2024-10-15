<template>
  <div class="bg-white text-gray-900 py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-6xl font-bold text-red mb-8">CONTACT<br />ME</h2>
          <p class="mb-4">
            If you have any questions or comments, please contact me via
            email or phone, or send me a message using the contact form.
          </p>
          <p class="mb-2">Email</p>
          <a href="mailto:osrubens@gmail.com" class="text-red mb-4 block">osrubens@gmail.com</a>
          <p class="mb-2">Mobile</p>
          <p class="mb-8">(+34) 680 175 200</p>
          <div class="flex space-x-4">
            <a v-for="(icon, index) in socialIcons" :key="index" :href="icon.link" class="bg-red p-2 rounded-full hover:bg-red transition-colors duration-300">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path :d="icon.path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
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
                class="w-full p-2 bg-white border border-gray-300 rounded"
              />
              <textarea
                v-else
                :id="field.id"
                v-model="form[field.id]"
                rows="4"
                :required="field.required"
                class="w-full p-2 bg-white border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              class="px-4 py-2 bg-red text-white rounded hover:bg-red transition-colors duration-300"
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
  { path: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-5-4h4M7 16h4M7 12h10M7 8h4", link: '#' }, // Document
  { path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z", link: '#' }, // LinkedIn
  { path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm5-8a5 5 0 1 1-5-5 5 5 0 0 1 5 5z M17.34 6.66a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z", link: '#' }, // Instagram
  { path: "M9 18V5l12-2v13 M9 9c-5 0-7 2-7 7s2 7 7 7 7-2 7-7-2-7-7-7z", link: '#' }, // Music
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
  // Handle form submission here
  console.log('Form submitted:', form.value);
  // You can add your form submission logic here, such as sending data to a server
};
</script>