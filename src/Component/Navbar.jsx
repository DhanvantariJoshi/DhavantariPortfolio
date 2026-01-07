import React, { useState, useEffect } from "react";
import "../CssComponent/Navbar.css";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 110; // navbar height offset
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">My Portloflio</div>
      <nav className="navbar-links">
        {sections.map((id) => (
          <button
            key={id}
            className={`nav-link ${active === id ? "active" : ""}`}
            onClick={() => handleClick(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
