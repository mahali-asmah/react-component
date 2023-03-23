import "./header-component-styles.css";

export type HeaderComponentProps = {
  title: string;
  onClose: () => void;
};

export function HeaderComponent({ title, onClose }: HeaderComponentProps) {
  return (
    <header className="rl_header_container">
      <h1 className="rl_header_title">{title}</h1>
      <button
        className="rl_header_icon_container"
        aria-label="close"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>
  );
}
