import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginSass } from "@rsbuild/plugin-sass";
import Components from "unplugin-vue-components/rspack";
import AutoImport from "unplugin-auto-import/rspack";
export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      plugins: [
        Components(),
        AutoImport({
          imports: ["vue", "vue-router", "pinia"],
        }),
        pluginSass(),
      ],
    },
  },
});
