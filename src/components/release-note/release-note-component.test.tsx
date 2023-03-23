import { render } from "@testing-library/react";
import {
  ReleaseNoteComponent,
  ReleaseNoteComponentProps,
} from "./release-note-component";

const createProps = ({
  publishedAt = "2022-03-10T12:34:56Z",
  title = "Example Changelog",
  coverImage = "https://example.com/changelog.jpg",
  content = "<p>This is an example changelog.</p>",
  isArchived = false,
  url = "https://example.com/changelog",
  authorId = "123",
  projectId = "456",
  createdAt = "2022-03-10T12:34:56Z",
  updatedAt = "2022-03-10T12:34:56Z",
  id = "789",
  status = "published",
}: Partial<ReleaseNoteComponentProps> = {}) => ({
  publishedAt,
  title,
  coverImage,
  content,
  isArchived,
  url,
  authorId,
  projectId,
  createdAt,
  updatedAt,
  id,
  status,
});

describe("ReleaseNoteComponent", () => {
  const props = createProps({
    publishedAt: "2022-03-10T12:34:56Z",
    title: "Example Changelog",
    coverImage: "https://example.com/changelog.jpg",
    content: "<p>This is an example changelog.</p>",
  });

  it("renders the publishedAt date", () => {
    const { getByText } = render(<ReleaseNoteComponent {...props} />);
    const publishedAtElement = getByText(props.publishedAt as string);
    expect(publishedAtElement).toBeInTheDocument();
  });

  it("renders the title", () => {
    const { getByText } = render(<ReleaseNoteComponent {...props} />);
    const titleElement = getByText(props.title);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the cover image", () => {
    const { getByRole } = render(<ReleaseNoteComponent {...props} />);
    const coverImageElement = getByRole("img");
    expect(coverImageElement).toBeInTheDocument();
    expect(coverImageElement).toHaveAttribute("src", props.coverImage);
  });

  it("renders the ProseComponent with the provided content", () => {
    const { getByText } = render(<ReleaseNoteComponent {...props} />);
    const contentElement = getByText("This is an example changelog.");
    expect(contentElement).toBeInTheDocument();
  });
});
