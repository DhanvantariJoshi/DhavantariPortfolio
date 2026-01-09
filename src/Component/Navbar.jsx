import React, { useState, useEffect } from "react";
import "../CssComponent/Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scrollspy logic (same as before)
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false); // Close mobile menu
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">Portfolio</div>
        
        {/* Desktop Links */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Mobile Hamburger */}
        <button className="navbar-hamburger" onClick={toggleMobile}>
          ☰
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      <nav className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
