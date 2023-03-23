import { FooterComponent } from "../../components/footer/footer-component";
import { HeaderComponent } from "../../components/header/header-component";
import { ReleaseNoteComponent } from "../../components/release-note/release-note-component";
import { ReleaseNote } from "../../utils/types";
import { createMultiplePopulatedNotes } from "./changelog-factory";
import "./changelog-component-styles.css";
import { createPortal } from "react-dom";

const populatedNotes = createMultiplePopulatedNotes(10);

export const ChangelogComponent = ({
  notes = populatedNotes,
}: {
  notes?: ReleaseNote[];
}) => {
  return createPortal(
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.2)",
        width: "100%",
        position: "fixed",
      }}
    >
      <div className="rl_changelog_container">
        <div className="rl_changelog_top">
          <HeaderComponent title="What's new?" onClose={() => {}} />
        </div>
        <div className="rl_changelog_bottom">
          <FooterComponent />
        </div>
        <div className="rl_changelog_content">
          <ul className="rl_changelog_list">
            {notes.map((note) => (
              <ReleaseNoteComponent key={note.id} {...note} />
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
};
