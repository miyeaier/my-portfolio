import "./topbar.scss";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Outsider.
          </a>
          <div className="itemContainer">
          <a href="https://github.com/miyeaier">Github</a>
          </div>
          <div className="itemContainer">
          <a href="https://www.linkedin.com/in/miyesier-kaerman-257494136/">Linkedin</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
