<template>
  <div id="app">
    <image-cloudinary
      src="https://res.cloudinary.com/komercia/image/upload/v1551112577/ojfhmzqu8nlbrzkzdocp.png"
    />
    <img
      src="https://res.cloudinary.com/komercia/image/upload/v1551112577/ojfhmzqu8nlbrzkzdocp.png"
    >
  </div>
</template>

<script>
import imageCloudinary from "./index.vue";

export default {
  name: "app",
  components: {
    imageCloudinary
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 50%;
}
</style>
