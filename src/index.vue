<template>
  <img :src="image">
</template>

<script>
export default {
  name: "ImageCloudinary",
  props: {
    src: {
      type: String,
      default: "empty"
    },
    width: Number,
    height: Number
  },
  computed: {
    image() {
      if (
        this.src.includes(
          "https://res.cloudinary.com/komercia-store/image/upload"
        )
      ) {
        let urlFirst =
          "https://res.cloudinary.com/komercia-store/image/upload/";
        let urlLast = this.src.replace(
          "https://res.cloudinary.com/komercia-store/image/upload",
          ""
        );
        let w = "";
        let h = "";
        if (this.width) {
          w = `,w_${this.width}`;
        }
        if (this.height) {
          h = `,h_${this.height}`;
        }
        return `${urlFirst}q_auto,c_scale,f_auto${w}${h}${urlLast}`;
      } else if (
        this.src.includes("https://res.cloudinary.com/komercia/image/upload")
      ) {
        let urlFirst = "https://res.cloudinary.com/komercia/image/upload/";
        let urlLast = this.src.replace(
          "https://res.cloudinary.com/komercia/image/upload",
          ""
        );
        let w = "";
        let h = "";
        if (this.width) {
          w = `,w_${this.width}`;
        }
        if (this.height) {
          h = `,h_${this.height}`;
        }
        return `${urlFirst}q_auto,c_scale,f_auto${w}${h}${urlLast}`;
      } else {
        return this.src;
      }
    }
  }
};
</script>
