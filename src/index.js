var Component = require("./index.vue").default;

var modules = {};
modules.install = function(Vue) {
  Vue.component("ImageCloudinary", Component);
};

export default modules;
