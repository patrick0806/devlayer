export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Se inscreva em nossa newsletter</h4>
              <p>
                Fique por dentro das novidades em soluções online para seu
                negocio
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Insrever" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Devlayer</h3>
              <p>
                Rua Sebastião Camargo,69 <br />
                São João da Boa Vista - 13875286
                <br />
                São Paulo <br />
                <br />
                <strong>Telefone:</strong> +55 19 993912304
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Links Úteis</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Inicio</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Sobre nós</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Soluções</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links"></div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Nossas Redes sociais</h4>
              <p>
                Nos siga em nossas redes sociais e fique por dentro de nossas
                novidades
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="google-plus">
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Devlayer</span>
          </strong>
          . Todos os direitos reservados
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
