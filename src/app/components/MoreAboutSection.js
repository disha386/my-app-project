"use client";

import { useState } from "react";

export default function MoreAboutSection() {
  const [activeTab, setActiveTab] = useState("products");

  const tabs = {
    products: {
      title: "Our Products",
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776344032/our_products_2_g6lnrn.webp",
      text: `Our extensive efforts in R&D and commitment to innovation drive us to build products that make life easier for construction professionals. PiVDC is an exclusive innovation engineered to automate BIM workflows, saving time and enhancing project quality. With it comes InnoMaint, our newly acquired asset that fuels our capabilities to redefine Facility Management across industries. Pinnnacle also delivers tools tailored to your unique workflows. Explore them below!`,

      cards: [
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776839659/vdc-logo_bth6y1.webp",
          desc: "Integrate PiVDC, an innovation of Pinnacle, into your workflow to automate repetitive tasks.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776840965/innomaint-logo_3_tia3bq.webp",
          desc: "A product of Pinnacle, InnoMaint integrates with Digital Twins for top-tier solutions.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776841013/cd-logo_1_xkfxsy.webp",
          desc: "Need a customized plugin? Share requirements and kickstart development.",
        },
      ],
    },

    solutions: {
      title: "Our Specialized Solutions",
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776411327/our_specilized_solutions_hv8egs.webp",
      text: `Beyond our core services, Pinnacle is a proud Autodesk Learning and Reselling partner and also delivers exclusive CAD support to HP. Being an Authorized Training Centre (ATC), our sessions comply with Autodesk’s training benchmarks. As a valued partner of HP, Pinnacle’s expertise in accurately converting 2D CAD files or 3D models into 2D DXF files powers HP SitePrint’s core operations.`,

      cards: [
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776849531/atc-logo_odfqvi.webp",
          desc: "Industry-grade training from certified instructors on Autodesk software.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776849531/atc-logo_odfqvi.webp",
          desc: "Authorized Autodesk partner offering genuine software licenses.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776849613/hp-site-print-service_ur2rst.webp",
          desc: "Exclusive CAD support services in partnership with HP.",
        },
      ],
    },

    software: {
      title: "Software We Use",
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776411367/software_we_use_2_rjrfyh.webp",
      text: `The workforce at Pinnacle is proficient in software platforms spanning the entire construction lifecycle. They include software for design, 3D modeling/rendering, BIM modeling/fabrication, CAD drafting, and Common Data Environment. Using these software tools, we implement advanced workflows that streamline interdisciplinary coordination, facilitate proactive clash resolution, and help clients achieve the best-in-class outputs.`,

      cards: [
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776849531/atc-logo_odfqvi.webp",
          desc: "Top-tier Autodesk solutions for project excellence.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776851269/bentley-logo_zn61i4.webp",
          desc: "Using Bentley offerings for design, modeling, and drafting.",
        },
        {
          img: "https://res.cloudinary.com/dnodncslz/image/upload/v1776851319/tekla-logo_uv6fde.webp",
          desc: "Leveraging Tekla for accurate fabrication-ready BIM models.",
        },
      ],
    },
  };

  return (
    <section className="more-about-wrapper">
      <div className="more-about-container">

        {/* HEADING */}
        <h3 className="section-small-title">More About Pinnacle</h3>

        {/* TAB BUTTONS */}
        <div className="tabs-row">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              className={`tab-btn ${activeTab === key ? "active-tab" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="content-row">

          {/* LEFT */}
          <div className="left-content">

            <div className="top-text">
              {tabs[activeTab].text}
            </div>

            <div className="cards-row">
              {tabs[activeTab].cards.map((card, index) => (
                <div className="grey-card" key={index}>

                  <img src={card.img} alt="" />

                  <div className="desc">
                    {card.desc}
                  </div>

                  <button className="card-btn">
                    <span>Know More</span>

                    <span className="circle">
                      <span>→</span>
                    </span>
                  </button>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="right-image">
            <img
              src={tabs[activeTab].image}
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
}