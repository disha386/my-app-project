"use client";
import { useEffect, useRef, useState } from "react";

function Globe({ size = 420 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = size, R = size / 2 - 10;
    const cx = W / 2, cy = W / 2;

    let rotation = 0;
    let dragging = false;
    let lastX = 0;
    let vel = 0;
    let animId;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "https://res.cloudinary.com/dnodncslz/image/upload/v1776670560/download_1_o23tg1.png";

    const offices = [
      { name: "Toronto",    lon: -79.38, lat: 43.65 },
      { name: "Atlanta",    lon: -84.39, lat: 33.75 },
      { name: "San Jose",   lon: -121.89, lat: 37.34 },
      { name: "Sugar Land", lon: -95.63, lat: 29.60 },
    ];

    function lonLatToXY(lon, lat, rot) {
      const adjustedLon = lon + rot;
      const lonRad = (adjustedLon * Math.PI) / 180;
      const latRad = (lat * Math.PI) / 180;
      const cosLon = Math.cos(lonRad);
      if (cosLon < 0) return null;
      const x = cx + R * Math.cos(latRad) * Math.sin(lonRad);
      const y = cy - R * Math.sin(latRad);
      const depth = cosLon;
      return { x, y, depth };
    }

    function draw() {
      ctx.clearRect(0, 0, W, W);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      if (img.complete && img.naturalWidth > 0) {
        const offsetX = ((rotation % 360) / 360) * W * 2;
        ctx.drawImage(img, -offsetX, cy - R, W * 2, R * 2);
        ctx.drawImage(img, W * 2 - offsetX, cy - R, W * 2, R * 2);
      } else {
        ctx.fillStyle = "#1a3a6e";
        ctx.fillRect(0, 0, W, W);
      }
      ctx.restore();

      // edge vignette
      const edgeGrad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R);
      edgeGrad.addColorStop(0, "rgba(0,0,0,0)");
      edgeGrad.addColorStop(1, "rgba(0,0,0,0.45)");
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = edgeGrad;
      ctx.fill();
      ctx.restore();

      // light highlight
      const lightGrad = ctx.createRadialGradient(cx - 60, cy - 60, 0, cx, cy, R);
      lightGrad.addColorStop(0, "rgba(255,255,255,0.12)");
      lightGrad.addColorStop(0.5, "rgba(255,255,255,0)");
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = lightGrad;
      ctx.fill();
      ctx.restore();

      // border ring
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(100,160,255,0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // pins
      offices.forEach((o) => {
        const pos = lonLatToXY(o.lon, o.lat, rotation);
        if (!pos || pos.depth < 0.1) return;
        const { x, y, depth } = pos;
        const alpha = Math.min(1, depth * 1.5);

        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,200,50,${alpha * 0.2})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,200,50,${alpha})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.font = `500 11px sans-serif`;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.textAlign = "left";
        ctx.fillText(o.name, x + 9, y + 4);
      });
    }

    function animate() {
      if (!dragging && Math.abs(vel) > 0.01) {
        rotation += vel;
        vel *= 0.94;
      }
      draw();
      animId = requestAnimationFrame(animate);
    }

    img.onload = () => draw();
    animate();

    const onDown = (e) => {
      dragging = true;
      lastX = e.clientX;
      vel = 0;
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      vel = dx * 0.5;
      rotation += dx * 0.5;
      lastX = e.clientX;
    };
    const onUp = () => {
      dragging = false;
      canvas.style.cursor = "grab";
    };
    const onTouchStart = (e) => {
      dragging = true;
      lastX = e.touches[0].clientX;
      vel = 0;
    };
    const onTouchMove = (e) => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - lastX;
      vel = dx * 0.5;
      rotation += dx * 0.5;
      lastX = e.touches[0].clientX;
    };
    const onTouchEnd = () => { dragging = false; };

    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("touchstart", onTouchStart);
    canvas.addEventListener("touchmove", onTouchMove);
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: "50%", display: "block", cursor: "grab" }}
    />
  );
}

const offices = [
  {
    address: "3250 Bloor Street West, East Tower, Unit 600, Toronto, Ontario, M8X2X9",
    name: "Mr. Subhojit Sarkar",
    email: "ssarkar@pinnacleinfotech.com",
    phone: "+1 437 782 0030, +1 680 210 9909",
  },
  {
    address: "6065 Roswell Rd NE #625, Atlanta, GA 30328",
    name: "Mr. Samrat Mallick",
    email: "samratm@pinnacleinfotech.com",
    phone: "+1 832 818 1253",
  },
  {
    address: "6065 Roswell Rd NE #625, Atlanta, GA 30328",
    name: "Mr. Samrat Mallick",
    email: "samratm@pinnacleinfotech.com",
    phone: "+1 832 818 1253",
  },
  {
    address: "25 N 14th Street, Suite #670, San Jose, CA – 95112",
    name: "Mr. Nikhil Varandani",
    email: "nvarandani@pinnacleinfotech.com",
    phone: "+1 (832) 874-2798",
  },
  {
    address: "50 Sugar Creek Center Blvd, Suite #350, Sugar Land, TX 77478",
    name: "Mr. B. Todi",
    email: "btodi@pinnacleinfotech.com",
    phone: "+1 713 780 2135, +1 437 782 0030",
  },
];

export default function GlobalPresence() {
  const [globeSize, setGlobeSize] = useState(420);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      if (w <= 480) setGlobeSize(260);
      else if (w <= 768) setGlobeSize(300);
      else if (w <= 1024) setGlobeSize(340);
      else setGlobeSize(420);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="global-wrapper">
      <h2 className="global-title">Global Presence</h2>

      <div className="global-bar">
        <div className="global-container">

          <div className="global-left">
            {offices.map((office, index) => (
              <div className="office-block" key={index}>
                <div className="office-heading">
                  <div className="office-line"></div>
                  <div className="office-title">Pinnacle Infotech</div>
                </div>
                <div className="office-text">
                  {office.address}<br /><br />
                  {office.name}<br /><br />
                  {office.email}<br /><br />
                  {office.phone}
                </div>
              </div>
            ))}
          </div>

          <div className="global-right">
            <div className="global-right">
         <img
         src="https://res.cloudinary.com/dnodncslz/image/upload/v1776670560/download_1_o23tg1.png"
         alt="Global Presence"
         className="global-image"
        />
        </div>
          </div>

        </div>
      </div>
    </section>
  );
}