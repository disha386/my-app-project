export default function DiscoverSection() {
  const mainImg =
    "https://res.cloudinary.com/dnodncslz/image/upload/v1778149913/discover-section-img_lubezh.webp";

  const iso1 =
    "https://res.cloudinary.com/dnodncslz/image/upload/v1778149710/iso_19650_logo_75x56_dwuc9c.svg";

  const iso2 =
    "https://res.cloudinary.com/dnodncslz/image/upload/v1778149734/iso_19650_logo_75x56_1_ohjhic.svg";

  const iso3 =
    "https://res.cloudinary.com/dnodncslz/image/upload/v1778149817/iso_27001_logo_75x56_qkyjq8.svg";

  return (
    <section className="discover-section">
      
      <div className="discover-left">
        <h2>Discover Pinnacle</h2>

        <p className="primary-text">
          Pinnacle Infotech leads the global AECO sector with Building Information Modeling (BIM), Engineering Design, and Digital Construction Solutions.
        </p>

        <p className="secondary-text">
          Our 30+ years of expertise drive excellence in the Design, Preconstruction, Construction Management, Digital Twin, and Facilities Management of your project.
        </p>
      <button className="know-more-btn">

  <span className="btn-text">Know More</span>

  <span className="arrow-circle">→</span>

</button>
        
      </div>

      <div className="discover-right">
        <img src={mainImg} className="main-img" alt="Discover" />

        <div className="iso-box">
          <img src={iso1} alt="iso1" />
          <img src={iso2} alt="iso2" />
          <img src={iso3} alt="iso3" />
        </div>
      </div>

    </section>
  );
}