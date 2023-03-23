import type { ProseComponentProps } from "./prose-component";
import { ProseComponent } from "./prose-component";
import { render, screen } from "@testing-library/react";

const createProps = ({ content = "" }: Partial<ProseComponentProps> = {}) => ({
  content,
});

describe("Prose component", () => {
  it("given an html content, should render correctly", () => {
    const props = createProps({
      content:
        "<div><h1>Why releaselog</h1><p>releaselog is the best <a href='https://releaselog.io'>changelog tool</a></p></div>",
    });

    render(<ProseComponent {...props} />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Why releaselog" })
    ).toBeInTheDocument();

    expect(screen.getByText("releaselog is the best")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "changelog tool" })
    ).toHaveAttribute("href", "https://releaselog.io");
  });

  it("given text content, should render correctly", () => {
    const props = createProps({
      content: "Welcome to the best changelog tool",
    });

    render(<ProseComponent {...props} />);

    expect(screen.getByText(props.content)).toBeInTheDocument();
  });
});
