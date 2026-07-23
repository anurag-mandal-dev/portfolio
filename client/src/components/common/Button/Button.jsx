import "./Button.css";

function Button({
  text,
  variant = "primary",
  href,
  download = false,
}) {
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`btn ${variant}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={`btn ${variant}`}>
      {text}
    </button>
  );
}

export default Button;