"use client";

const verticals = [
  {
    title: "Airport",
    icon: "bi-airplane-fill",
    image:
      "https://res.cloudinary.com/dnodncslz/image/upload/v1775639362/OIP_hlipg2.jpg",

    text: (
      <>
        Clash Detection Identify and resolve <br />
        conflicts between systems efficiently.
      </>
    ),
  },

  {
    title: "Data Centre",
    icon: "bi-database-fill",
    image:
      "https://res.cloudinary.com/dnodncslz/image/upload/v1775813326/OIP_1_kauxwo.jpg",

    text: (
      <>
        Smart Infrastructure Monitoring <br />
        Real-time tracking and optimization <br />
        of data systems.
      </>
    ),
  },

  {
    title: "Semiconductor",
    icon: "bi-cpu-fill",
    image:
      "https://res.cloudinary.com/dnodncslz/image/upload/v1775816240/OIP_2_aedd85.jpg",

    text: (
      <>
        Chip Design & Fabrication <br />
        Precision modeling for advanced <br />
        semiconductor facilities.
      </>
    ),
  },

  {
    title: "Stadium",
    icon: "bi-record-circle",
    image:
      "https://res.cloudinary.com/dnodncslz/image/upload/v1775816261/OIP_3_xizapr.jpg",

    text: (
      <>
        Crowd Flow Optimization <br />
        Efficient planning for <br />
        large-scale venues.
      </>
    ),
  },

  {
    title: "Industrial",
    icon: "bi-building-gear",
    image:
      "https://res.cloudinary.com/dnodncslz/image/upload/v1775816269/OIP_4_paiwph.jpg",

    text: (
      <>
        Process Optimization <br />
        Streamlining operations for <br />
        industrial efficiency.
      </>
    ),
  },
];


export default function VerticalsSection() {
  return (
    <section className="verticals-wrapper">

      {/* HEADING */}
      <div className="verticals-heading">

        <h2>Our Verticals</h2>

        <p>
          Pinnacle’s 360° BIM solutions cater to complete lifecycles
          of large-scale infrastructure projects across continents
        </p>

      </div>

      {/* ALL ITEMS */}
      <div className="verticals-container">

        {verticals.map((item, index) => (
          <div className="vertical-section" key={index}>

            <div className="vertical-row">

              {/* LEFT SIDE */}
              <div className="title">

                <i className={`bi ${item.icon}`}></i>

                <div className="title-text">

                  <span className="main-title">
                    {item.title}
                  </span>

                  <span className="sub-text">
                    {item.text}
                  </span>

                </div>

              </div>

              {/* IMAGE */}
              <div className="vertical-content">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

            </div>

            {/* ARROW */}
            <div className="expand-icon">
              ›
            </div>

          </div>
        ))}

      </div>

      {/* BUTTON */}
      <div className="vertical-btn-wrap">

        <button className="custom-btn">

          Explore All

          <span className="arrow-circle">
            →
          </span>

        </button>

      </div>

    </section>
  );
}