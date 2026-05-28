export default function CsrSection() {
  return (
    <section className="csr-wrapper">

      <div className="csr-container">

        {/* LEFT TITLE */}
        <div className="csr-title">
          Our CSR
        </div>

        {/* RIGHT CARDS */}
        <div className="csr-cards">

          {/* CARD 1 */}
          <div className="csr-card">

            <div className="csr-logo-box">
              <img
                src="https://res.cloudinary.com/dnodncslz/image/upload/v1776418591/swabhimaan-logo_l1u6ef.webp"
                alt=""
              />
            </div>

            <div className="csr-text">
              Through Swaviman we support <br />the education and well <br />being of overlooked community.
            </div>
              {/* BLUE CIRCLE */}
            <div className="csr-arrow-circle">
               →
            </div>


          </div>

          {/* CARD 2 */}
<div className="csr-card">

  <div className="csr-logo-box">
    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776418654/ankuran-logo_xeut4l.webp"
      alt=""
    />
  </div>

  <div className="csr-text">
    Nurturing the young minds to<br/> become
    innovators through <br/> experiential science 
    learning and innovation.
  </div>

  <div className="csr-arrow-circle">
    ⟶
  </div>

</div>

        </div>

      </div>

    </section>
  );
}