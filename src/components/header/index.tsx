import { selectHtmlElements } from "@/utils";
import { onScroll } from "@/utils/onScroll";
import { useEffect, useState } from "react";

export function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    (selectHtmlElements("#navbar") as any)?.classList?.toggle("navbar-mobile");
  }, [showMobileMenu]);

  useEffect(() => {
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = selectHtmlElements("#header") as Element;
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader?.classList.add("header-scrolled");
        } else {
          selectHeader?.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onScroll(document, headerScrolled);
    }
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Devlayer</a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Sobre nós
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portifolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Time
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contato
              </a>
            </li>
          </ul>
          {!showMobileMenu && (
            <i
              className="bi bi-list mobile-nav-toggle"
              onClick={() => setShowMobileMenu(true)}
            ></i>
          )}
          {showMobileMenu && (
            <i
              className="bi bi-x mobile-nav-toggle"
              onClick={() => setShowMobileMenu(false)}
            ></i>
          )}
        </nav>
      </div>
    </header>
  );
}
