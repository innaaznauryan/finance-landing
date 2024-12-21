
import en from "./locales/en.json";
import hy from "./locales/hy.json";
import ru from "./locales/ru.json";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./locales",
  messages: { "en": en, "hy": hy, "ru": ru },
  baseUrl: import.meta.env.VITE_BASE_URL,
  locales: [
    {
      code: "en",
      iso: "en",
      isCatchallLocale: true,
    },
    {
      code: "hy",
      iso: "hy",
    },
    {
      code: "ru",
      iso: "ru",
    },
  ],
}));
