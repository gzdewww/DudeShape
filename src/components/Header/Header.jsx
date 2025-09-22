import { BsSearch, BsTextParagraph } from "react-icons/bs";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">DudeShape</div>
      <nav className="header-nav">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Contact</a>
      </nav>
      <div className="header-controls">
        <BsSearch className="header-controls-icon" />
        <BsTextParagraph className="header-controls-icon" />
      </div>
    </header>
  );
}
