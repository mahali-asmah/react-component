import { pathOr } from "ramda";
import { useCallback, useContext } from "react";
import TranslationsContext from "./translation-context";

export function useTranslate() {
  const translations = useContext(TranslationsContext);

  return useCallback(
    (key: string, defaultMessage?: string) =>
      pathOr(defaultMessage, key.split("."), translations),
    [translations]
  );
}
