import { FooterComponent } from "./footer-component";
import { render, screen } from "@testing-library/react";

describe("footer component", () => {
  it("renders with no errors", () => {
    render(<FooterComponent />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    expect(screen.getByText(/powered by/i)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /releaselog/i })).toHaveAttribute(
      "href",
      "https://releaselog.io"
    );
  });
});
