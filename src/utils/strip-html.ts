import { stripHtml } from "string-strip-html";

export function stripHtmlTags(html: string): string {
  return stripHtml(html).result;
}
