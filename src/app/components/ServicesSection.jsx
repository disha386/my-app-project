"use client";

export default function ServicesSection({
  title,
  description,
  image,
  features,
}) {
  return (
    <section className="service-section">

      {/* LEFT SIDE */}
      <div className="service-left">

        <h2>{title}</h2>

        <p>{description}</p>

        <button className="custom-btn">
          Know More
          <span className="arrow-circle">→</span>
        </button>

      </div>

      {/* CENTER IMAGE */}
      <div className="service-center">

        <img src={image} alt={title} />

      </div>

      {/* RIGHT FEATURES */}
      <div className="service-right">

        {features.map((item, index) => (

          <div className="feature-item" key={index}>

            <span className="feature-icon">
              <i className={`bi ${item.icon}`}></i>
            </span>

            <span
              className={`feature-text ${
                item.text.includes("2D CAD")
                  ? "cad-text"
                  : ""
              }`}
            >
              {item.text}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}