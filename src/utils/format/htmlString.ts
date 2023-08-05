import { replaceAllString } from "./string";

export const addMarginOnList = (string: string) =>
  replaceAllString(
    replaceAllString(
      replaceAllString(string, "<ul>", "<ul style='padding-left:18px'>"),
      "<ol>",
      "<ol style='padding-left:20px'>"
    ),
    "<p>",
    "<p style='word-break: break-word'>"
  );
