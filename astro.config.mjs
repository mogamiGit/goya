import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://mogamigit.github.io/goya',
  base: './',
  integrations: [tailwind(), relativeLinks(), react()]
});