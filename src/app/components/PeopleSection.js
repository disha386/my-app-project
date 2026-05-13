"use client";

import { useState, useEffect } from "react";

const data = [
  {
    text: `Jessica Resta
My company was delighted with Pinnacle's performance on this project. Their project team was very helpful, got us everything we needed on time, and maintained a schedule. I will be utilizing their BIM Services again in the future.`,
    images: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323491/Jessica-Resta_axwvxz.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323505/Leonidas-Tzevelekas_y97z40.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323520/Keith-Rodriguez_kjr8gn.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323532/Garnette-Rouse_mnlcxq.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323545/stewart_bohrer_xmhl1t.webp",
    ],
  },

  {
    text: `Leonidas Tzevelekas
The Pinnacle team can thoroughly review and analyze the drawing set and quickly respond with succinct questions needed to complete the task.`,
    images: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323505/Leonidas-Tzevelekas_y97z40.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323520/Keith-Rodriguez_kjr8gn.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323532/Garnette-Rouse_mnlcxq.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323545/stewart_bohrer_xmhl1t.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323491/Jessica-Resta_axwvxz.webp",
    ],
  },

  {
    text: `Keith Rodriguez
This was a very large project with aggressive schedules and tight coordination requirements.`,
    images: [
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323520/Keith-Rodriguez_kjr8gn.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323532/Garnette-Rouse_mnlcxq.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323545/stewart_bohrer_xmhl1t.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323491/Jessica-Resta_axwvxz.webp",
      "https://res.cloudinary.com/dnodncslz/image/upload/v1776323505/Leonidas-Tzevelekas_y97z40.webp",
    ],
  },
];

export default function PeopleSection() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const t = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(t);
  }, [index]);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="people-section">

      <div className="people-wrapper">

        {/* LEFT SIDE */}
        <div className="people-text-box">

          <img
            src="https://res.cloudinary.com/dnodncslz/image/upload/v1776763634/top-double-invited-comma_yptu3r.svg"
            className="quote-icon"
            alt="quote"
          />

          <h3>What people are Saying</h3>

          <p className={`people-text ${animate ? "animate" : ""}`}>
            {data[index].text}
          </p>

          <div className="people-controls">
            <button className="people-btn" onClick={prev}>
              ‹
            </button>
            <button className="people-btn" onClick={next}>
              ›
            </button>
          </div>

        </div>

        {/* RIGHT STACK */}
        <div className="people-deck">

          {data[index].images.map((img, i) => (
            <div className={`people-card card-${i + 1}`} key={i}>
              <img src={img} alt="person" />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}