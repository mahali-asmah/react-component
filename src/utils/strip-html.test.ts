import { stripHtmlTags } from "./strip-html";

describe("stripHtmlTags", () => {
  it("should strip HTML tags and attributes from a string", () => {
    const html =
      '<h1>Welcome!</h1><p>This is <b>some</b> example <a href="#">HTML</a>.</p>';
    const expected = "Welcome! This is some example HTML.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should decode HTML entities in a string", () => {
    const html = "This is an example of a &lt;b&gt;bold&lt;/b&gt; text.";
    const expected = "This is an example of a bold text.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should return an empty string for an empty input", () => {
    const html = "";
    const expected = "";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should return the input string if it contains no HTML tags", () => {
    const html = "This is plain text.";
    const expected = "This is plain text.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should work with nested HTML tags", () => {
    const html =
      "<div><h1>Title</h1><p>Paragraph <em>with emphasis</em>.</p></div>";
    const expected = "Title Paragraph with emphasis.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should work with special characters in HTML entities", () => {
    const html = "<p>&#128512; This is a smiley face.</p>";
    const expected = "😀 This is a smiley face.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });

  it("should work with HTML comments", () => {
    const html = "<!-- This is a comment -->This is plain text.";
    const expected = "This is plain text.";
    const result = stripHtmlTags(html);
    expect(result).toEqual(expected);
  });
});
