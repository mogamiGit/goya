import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamigit.github.io/goya',
  base: '/goya',
  integrations: [tailwind(), relativeLinks(), react(), icon()]
});