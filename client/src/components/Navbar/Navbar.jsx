import "./Navbar.css";

function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav>
      <h2>Anurag Mandal</h2>

      <ul>
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;