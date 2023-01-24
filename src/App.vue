<template>
  <div id="app">
    <MainComponent />
    <AdvertisingComponent />
    <PricingComponent />
    <FormComponent />
    <FooterComponent />
  </div>
</template>

<script>
import MainComponent from "./components/MainComponent.vue";
import AdvertisingComponent from "./components/AdvertisingComponent.vue";
import PricingComponent from "./components/PricingComponent.vue";
import FormComponent from "./components/FormComponent.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    MainComponent,
    AdvertisingComponent,
    PricingComponent,
    FormComponent,
    FooterComponent,
  },
};
</script>

<style>
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}

#app {
  font-family: "Spectral";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
