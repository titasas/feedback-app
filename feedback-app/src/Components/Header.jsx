import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link
          to={{
            pathname: "/",
          }}
        >
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textcolor: PropTypes.string,
};
