import { render, screen } from "@testing-library/react";
import { ChangelogComponent } from "./changelog-component";

describe("changelog component", () => {
  it("renders with no errors", () => {
    render(<ChangelogComponent />);

    // renders a header
    expect(screen.getByRole("banner")).toBeInTheDocument();

    // renders a footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    // renders chagnelogs
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(10);
  });
});
