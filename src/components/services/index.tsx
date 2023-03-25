export function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Soluções</h2>
          <p>
            Soluções sob medida para sua empres ou projeto, com qualidade e foco
            nos resultados
          </p>
        </div>

        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-globe"></i>
              </div>
              <h4>
                <a href="">Criação de Websites</a>
              </h4>
              <p>
                Ter um website institucional é garantir que a sua empresa seja
                vista 24h por dia, aumentando a visibilidade dos seus produtos e
                serviços
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-cart-check"></i>
              </div>
              <h4>
                <a href="">Criação de Ecommerce</a>
              </h4>
              <p>
                Vender online é garantir que você pode ter clientes de todos os
                lugares do mundo, expanda seus negócios
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-wordpress"></i>
              </div>
              <h4>
                <a href="">Especialistas em Wordpress</a>
              </h4>
              <p>
                Tem um site antigo em wordpress e precisa de suporte ou
                atualizações, temos especialistas nisso
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-layers"></i>
              </div>
              <h4>
                <a href="">Alguma outra solução aqui</a>
              </h4>
              <p>Texto pra ver no futuro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
