import { ReleaseNote } from "../../utils/types";
import { ProseComponent } from "../prose/prose-component";
import "./release-note-component-styles.css";

export interface ReleaseNoteComponentProps extends ReleaseNote {}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const ReleaseNoteComponent = ({
  createdAt,
  title,
  coverImage,
  content,
}: ReleaseNoteComponentProps) => {
  return (
    <li className="rl_release_note_container">
      <p className="rl_release_note_date">{formatDate(createdAt)}</p>
      <h2 className="rl_release_note_title">{title}</h2>
      <img src={coverImage} />
      <div className="rl_release_note_content">
        <ProseComponent content={content} />
      </div>
    </li>
  );
};
