var Component = require("./index.vue").default;
var Method = require("./cloudinary_setting.js");

var modules = {};
modules.install = function(Vue) {
  Vue.component("ImageCloudinary", Component);
  Vue.prototype.$ImageCloudinary = Method;
};

export default modules;
