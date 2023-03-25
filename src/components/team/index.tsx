export function Team() {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Time</h2>
          <p>Nosso time.... isso vai ficar ?</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="img/team/team-1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>
                  Explicabo voluptatem mollitia et repellat qui dolorum quasi
                </p>
                <div className="social">
                  {/* <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a> */}
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="member d-flex align-items-start">
              <div className="pic">
                <img src="img/team/team-2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>
                  Aut maiores voluptates amet et quis praesentium qui senda para
                </p>
                <div className="social">
                  {/* <a href="">
                    <i className="ri-twitter-fill"></i>
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill"></i>
                  </a> */}
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
