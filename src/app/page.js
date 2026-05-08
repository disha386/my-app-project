import DiscoverSection from "./components/DiscoverSection";
import MovingLogoBar from "./components/MovingLogoBar";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="hero-section">

      {/* LOGO */}
      <div className="navbar-logo">
        <img src="https://res.cloudinary.com/dnodncslz/image/upload/v1774502957/header-logo_rdttb2.webp" />
      </div>

      {/* HERO TEXT */}
      <div className="hero-title text-animate">
        Constructing Certainty with BIM Technology
      </div>

    {/* VIDEO */}
<div className="video-wrapper video-animate">
  <div className="video-mask">

    <video
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
      controls={false}
      className="hero-video"
    >
      <source
        src="https://res.cloudinary.com/dnodncslz/video/upload/v1774435343/pinnacle-infotech-latest_h3qbk3.mp4"
        type="video/mp4"
      />
    </video>

  </div>
</div>

      {/* DISCOVER */}
      <DiscoverSection />

      {/* LOGO BAR */}
      <MovingLogoBar />

      {/* ================= BIM SERVICES ================= */}
      <ServicesSection
        title="BIM Services"
        description="We provide intelligent BIM solutions that improve coordination, reduce risks, and enhance overall project efficiency."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1774604187/bim_services_pinnacle_infotech_2_zrp9oc.webp"
        features={[
          { icon: "bi-diagram-3", text: "Coordination & Collaboration" },
          { icon: "bi-exclamation-triangle", text: "Risk Reduction" },
          { icon: "bi-clock", text: "Time Efficiency" },
          { icon: "bi-cpu", text: "Smart Modeling" },
          { icon: "bi-bar-chart", text: "Better Project Outcomes" },
        ]}
      />

      {/* ================= ENGINEERING DESIGN ================= */}
      <ServicesSection
        title="Engineering Design"
        description="We deliver innovative engineering design solutions with precision, ensuring efficiency and sustainability across all projects."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1774604330/engineering_design_pinnacle_infotech_lbnhpf.webp"
        features={[
          { icon: "bi-rulers", text: "Precision Engineering" },
          { icon: "bi-lightbulb-fill", text: "Innovative Solutions" },
          { icon: "bi-speedometer2", text: "High Performance" },
          { icon: "bi-globe", text: "Sustainable Design" },
          { icon: "bi-gear-fill", text: "Advanced Tools" },
        ]}
      />

      {/* ================= DIGITAL CONSTRUCTION ================= */}
      <ServicesSection
        title="Digital Construction"
        description="Our digital construction approach enhances visualization, planning, and execution through advanced technologies and smart workflows."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1774604275/digital_construction_pinnacle_infotech_mxz5kc.webp"
        features={[
          { icon: "bi-box-fill", text: "3D Modelling" },
          { icon: "bi-building", text: "Architectural" },
          { icon: "bi-megaphone-fill", text: "Marketing / BID Presentation" },
          { icon: "bi-map-fill", text: "GIS" },
          { icon: "bi-file-earmark-text-fill", text: "Documentation" },
        ]}
      />

    <ServicesSection
  title="Digital Twin"
  description="Our Digital Twin solutions create real-time virtual replicas of physical assets, enabling better monitoring, analysis, and decision-making throughout the project lifecycle."
  image="https://res.cloudinary.com/dnodncslz/image/upload/v1775560726/bim-vdc_consulting_pinnacle_infotech_xovez5.webp"
  features={[
    {
      icon: "bi-cpu-fill",
      text: "Real-Time Monitoring",
    },
    {
      icon: "bi-diagram-3-fill",
      text: "Data Integration",
    },
    {
      icon: "bi-graph-up-arrow",
      text: "Performance Analysis",
    },
    {
      icon: "bi-tools",
      text: "Predictive Maintenance",
    },
    {
      icon: "bi-eye-fill",
      text: "Enhanced Visualization",
    },
  ]}
/>

    </div>
  );
}