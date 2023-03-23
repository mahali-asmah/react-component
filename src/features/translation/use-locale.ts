import { en } from "../../i18n/en";
import { de } from "../../i18n/de";

type Locale = "en" | "de";

export function useLocale(locale: Locale) {
  const localeName = typeof locale === "string" ? locale : "en";
  const defaultLocales = { en, de } as const;
  return defaultLocales[localeName];
}
