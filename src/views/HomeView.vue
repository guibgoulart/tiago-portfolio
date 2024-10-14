<!-- <script setup>
import NavbarComponent2 from '@/components/Navbar/NavbarComponent2.vue';
import QuoteComponent from '@/components/Quote/QuoteComponent.vue';
import BioComponent2 from '@/components/Bio/BioComponent2.vue';
import WorkComponent from '@/components/Work/WorkComponent.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';
</script>

<template>
    <div>
        <NavbarComponent2 />
        <BioComponent2 />
        <QuoteComponent />
        <WorkComponent />
        <FooterComponent />
    </div>
</template> -->

<script setup>
import NewNavbar from '@/components/Navbar/NewNavbar.vue';
import QuoteComponent from '@/components/Quote/QuoteComponent.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';
import FooterComponent2 from '@/components/Footer/FooterComponent2.vue';
import HeroBannerComponent from '@/components/HeroBanner/HeroBannerComponent.vue';
import WorkComponentNew from '@/components/Work/WorkComponentNew.vue';
</script>

<template>
    <div>
        <NewNavbar />
        <HeroBannerComponent />
        <QuoteComponent />
        <WorkComponentNew />
        <FooterComponent />
        <FooterComponent2 />
    </div>
</template>