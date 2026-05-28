"use client";

import { useEffect } from "react";

export default function OurProjectSection() {

  useEffect(() => {

    const slider = document.getElementById("dragArea");
    if (!slider) return;

    slider.innerHTML += slider.innerHTML;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {

      isDown = true;

      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      slider.style.cursor = "grabbing";
    };

    const mouseLeave = () => {

      isDown = false;

      slider.style.cursor = "grab";
    };

    const mouseUp = () => {

      isDown = false;

      slider.style.cursor = "grab";
    };

    const mouseMove = (e) => {

      if (!isDown) return;

      e.preventDefault();

      const x = e.pageX - slider.offsetLeft;

      const walk = (x - startX) * 0.25;

      slider.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {

      const maxScroll = slider.scrollWidth / 2;

      if (slider.scrollLeft >= maxScroll) {

        slider.scrollLeft -= maxScroll;
      }

      if (slider.scrollLeft <= 0) {

        slider.scrollLeft += maxScroll;
      }
    };

    /* ================= IMAGE HOVER SLIDE ================= */

    const handleHoverMove = () => {

      slider.scrollLeft += 420;
    };

    const cards = slider.querySelectorAll(".project-card");

    cards.forEach((card) => {

      card.addEventListener("mouseenter", handleHoverMove);
    });

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);
    slider.addEventListener("scroll", handleScroll);

    return () => {

      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("scroll", handleScroll);

      cards.forEach((card) => {

        card.removeEventListener("mouseenter", handleHoverMove);
      });
    };

  }, []);

  return (
    <section className="projects-section">

      {/* HEADING */}
      <div className="projects-heading">

        <h2>Our Projects</h2>

        <p>
          Explore world-class projects that testify to our global industry expertise
          and commitment to crafting excellence.
        </p>

      </div>

      {/* SLIDER */}
      <div className="projects-wrapper" id="dragArea">

        <div className="project-card up">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171393/3d_bim_riyadh_metro_stations.jpg_bytbcb.webp" />
        </div>

        <div className="project-card down">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171445/new_orleans_international_airport-02.jpg_fy7hz4.webp" />
        </div>

        <div className="project-card up">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171484/legacy-cool-spring.jpg_jg0uab.webp" />
        </div>

        <div className="project-card down">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171521/lusail_stadium_afl_architects1.jpg_o2xuko.webp" />
        </div>

        <div className="project-card up">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171585/new-childrens-hospital.jpg_fj14hq.webp" />
        </div>

        <div className="project-card down">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171643/601-n-central_mghdva.jpg" />
        </div>

        <div className="project-card up">
          <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1776171712/facebook-datacenter3_vrhftd.webp" />
        </div>

      </div>

      {/* BUTTON */}
      <div className="middle-btn">

        <button className="know-more-btn">

          <span className="btn-text">View All Projects</span>

          <span className="arrow-circle">→</span>

        </button>

      </div>

    </section>
  );
}