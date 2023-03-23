import type { HeaderComponentProps } from "./header-component";
import { HeaderComponent } from "./header-component";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

const createProps = ({
  title = "idle",
  onClose = vi.fn(),
}: Partial<HeaderComponentProps> = {}) => ({
  title,
  onClose,
});

describe("Header component", () => {
  it("given a props, should render a title and close icon", () => {
    const props = createProps({ title: "What's new" });

    render(<HeaderComponent {...props} />);

    expect(screen.getByRole("banner")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /what's new/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("given the close button is pressed: should trigger onClose", async () => {
    const user = userEvent.setup();

    const props = createProps();
    render(<HeaderComponent {...props} />);

    await user.click(screen.getByRole("button", { name: /close/i }));

    expect(props.onClose).toHaveBeenCalled();
  });
});
