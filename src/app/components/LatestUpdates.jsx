"use client";

import { useState } from "react";

export default function LatestUpdates() {

  const imageSets = {

    live: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429100/BIM-Clash-Detection-A-Detailed-Guide_crxhje.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429076/Construction-Asset-Management-A-Complete-Guide_aeeewh.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429203/GIS-BIM-Integration-Application-and-Benefits_bmifck.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429342/Landscape-Architecture_Definitions-Significance_1_wfviab.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429391/IoT-in-Construction_n6pjew.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776429460/Revit-Vs-AutoCAD-History-Basic-Differences-Plugins_cgfhsp.webp"
    ],

    insights: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769564/business-value-bim-mechanical-hvac-construction_cbn6xa.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769595/business-value-bim-water-projects_eyra7b.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769625/no-img_noixhe.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769664/latest_news_pinnacle_on_autodesk_madurai_campus_vzlyoe.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769703/no-img_xi4gnp.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776769703/no-img_xi4gnp.webp"
    ],

    updates: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770103/pinnacle-bim-series-pop-up.png_vu0ydd.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770265/Pinnacle-Infotech-at-New-York-Build-Expo-2024-2048x1583_xdq3og.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770056/Pinnacle-at-AU-2024_y0ekie.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770095/pinnacle-global-customer-event-cover-image_dbkpwf.png",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770220/Big-5-Saudi_2025-1_lmn8eh.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770146/Japan-Build-Tokyo_uh8x4b.webp"
    ],

    case: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776767493/bimal_patwari_cnbs_tv18_interview_2024_gyiyq1.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776767482/bimal_patwari_journey_continues_2021_big_cjb2kb.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770095/pinnacle-global-customer-event-cover-image_dbkpwf.png"
    ],

    tutorials: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776770757/stats-img-01_a9ufd4.webp"
    ]

  };

  const [active, setActive] = useState("live");

  const images = imageSets[active];

  return (

    <section className="latest-wrapper">

      {/* ================= HEADING ================= */}

      <div className="latest-heading">

        <h2>
          Latest Updates
        </h2>

        <p>
          Your go-to hub for sharp industry insights, key event updates, and more.
        </p>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="latest-container">

        {/* LEFT SIDE */}

        <div className="latest-left">

          <h3 className="latest-left-title">
            Blogs & Articles
          </h3>

          <div className="latest-menu">

            <div
              className="latest-item"
              onClick={() => setActive("live")}
            >
              Live Events
            </div>

            <div className="latest-line"></div>

            <div
              className="latest-item"
              onClick={() => setActive("insights")}
            >
              Industry Insights
            </div>

            <div className="latest-line"></div>

            <div
              className="latest-item"
              onClick={() => setActive("updates")}
            >
              Product Updates
            </div>

            <div className="latest-line"></div>

            <div
              className="latest-item"
              onClick={() => setActive("case")}
            >
              Case Studies
            </div>

            <div className="latest-line"></div>

            <div
              className="latest-item"
              onClick={() => setActive("tutorials")}
            >
              Tutorials
            </div>

          </div>

          {/* BUTTON */}

          <button className="latest-btn">

            <span>
              Know More
            </span>

            <span className="latest-arrow">
              →
            </span>

          </button>

        </div>

        {/* ================= RIGHT IMAGES ================= */}

        <div className="latest-right">

          {active === "tutorials" ? (

            <img
              src={images[0]}
              alt=""
              className="latest-single-img"
            />

          ) : (

            <>
              <div className="latest-row">

                {images[0] && (
                  <img src={images[0]} alt="" className="img-tall" />
                )}

                {images[1] && (
                  <img src={images[1]} alt="" className="img-small" />
                )}

                {images[2] && (
                  <img src={images[2]} alt="" className="img-tall" />
                )}

              </div>

              <div className="latest-row second-row">

                {images[3] && (
                  <img src={images[3]} alt="" className="img-small" />
                )}

                {images[4] && (
                  <img src={images[4]} alt="" className="img-tall move-up" />
                )}

                {images[5] && (
                  <img src={images[5]} alt="" className="img-small" />
                )}

              </div>
            </>
          )}

        </div>

      </div>

    </section>
  );
}