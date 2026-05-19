"use client";

import { useRef } from "react";

export default function SayHello() {
  const boxRef = useRef(null);
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const btn = btnRef.current;

    const rect = box.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    const halfW = btnRect.width / 2;
    const halfH = btnRect.height / 2;

    const padding = 20;

    x = Math.max(
      halfW + padding,
      Math.min(x, rect.width - halfW - padding)
    );

    y = Math.max(
      halfH + padding,
      Math.min(y, rect.height - halfH - padding)
    );

  btn.style.left = `${x}px`;
btn.style.top = `${y}px`;

btn.style.background = "#ca8a04";
btn.style.color = "black";
  };

 const handleMouseLeave = () => {
  const btn = btnRef.current;

  btn.style.left = "50%";
  btn.style.top = "calc(100% - 90px)";

  btn.style.background = "white";
  btn.style.color = "#0A2A66";
};


  return (
    <section className="cta-wrapper">
      <div
        className="cta-box"
        ref={boxRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* TITLE */}
        <div className="cta-title">Say Hello</div>

        {/* SUBTITLE */}
        <div className="cta-subtitle">
          We’d love to hear from you and help you build something amazing
        </div>

        {/* BUTTON */}
        <button className="cta-btn" ref={btnRef}>
          <span>Reach Out Today</span>

          <div className="cta-arrow-circle">
            →
          </div>
        </button>

      </div>
    </section>
  );
}