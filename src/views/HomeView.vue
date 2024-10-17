<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import NewNavbar from '@/components/Navbar/NewNavbar.vue';
import QuoteComponent from '@/components/Quote/QuoteComponent.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import FooterComponent2 from '@/components/Footer/FooterComponent2.vue';
import HeroBannerComponent from '@/components/HeroBanner/HeroBannerComponent.vue';
import WorkComponentNew from '@/components/Work/WorkComponentNew.vue';

const workComponentRef = ref(null);
const route = useRoute();

const scrollToWorkComponent = () => {
  if (workComponentRef.value) {
    workComponentRef.value.$el.scrollIntoView({ behavior: 'smooth' });
  }
};

const checkScrollToWork = () => {
  if (route.query.scrollTo === 'WorkComponentNew') {
    scrollToWorkComponent();
  }
};

onMounted(() => {
  checkScrollToWork();
});

watch(() => route.query, (newQuery) => {
  if (newQuery.scrollTo === 'WorkComponentNew') {
    scrollToWorkComponent();
  }
});
</script>

<template>
  <div>
    <NewNavbar />
    <HeroBannerComponent />
    <QuoteComponent />
    <WorkComponentNew ref="workComponentRef" />
    <FooterComponent />
    <FooterComponent2 />
  </div>
</template>