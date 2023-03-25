export function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Sobre Nós</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Apaixonados por implementar soluções que geram resultados!
              Contamos com uma equipe qualificada, experiente e apta para ajudar
              você alavancar seus projetos!!
            </p>
            <ul>
              <li>
                <i className="bi bi-check-all"></i> Identificarmos oportunidades
                e riscos, direcionando as estratégias para a otimização dos
                resultados.
              </li>
              <li>
                <i className="bi bi-check-all"></i> Profissionais capacitados
                para melhor entender você e sua equipe com soluções Sob Medida.
              </li>
              <li>
                <i className="bi bi-check-all"></i> Sempre mostramos as opções
                mas adequadas para o momento atual do seu negocio
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Iniciamos nossas atividades em 2023 com o objetivo de ajudarmos
              você a tornar suas ideias reais e alcançar seus objetivos, se você
              pode sonhar a gente pode construir.
            </p>
            {/*<a href="#" className="btn-learn-more">Learn More</a>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
