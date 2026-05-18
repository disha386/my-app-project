"use client";

import DiscoverSection from "./components/DiscoverSection";
import MovingLogoBar from "./components/MovingLogoBar";
import ServicesSection from "./components/ServicesSection";
import VerticalsSection from "./components/VerticalsSection";
import OurProjectSection from "./components/OurProjectSection";
import PeopleSection from "./components/PeopleSection";
import SayHello from "./components/SayHello";
import MoreAboutSection from "./components/MoreAboutSection";
import CsrSection from "./components/CsrSection";
import GlobalPresence from "./components/GlobalPresence";
import CareerSection from "./components/CareerSection";
import LatestUpdates from "./components/LatestUpdates";



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
          {
            icon: "bi-diagram-3",
            text: "Coordination & Collaboration",
          },
          {
            icon: "bi-exclamation-triangle",
            text: "Risk Reduction",
          },
          {
            icon: "bi-clock",
            text: "Time Efficiency",
          },
          {
            icon: "bi-cpu",
            text: "Smart Modeling",
          },
          {
            icon: "bi-bar-chart",
            text: "Better Project Outcomes",
          },
        ]}
      />

      {/* ================= ENGINEERING DESIGN ================= */}
      <ServicesSection
        title="Engineering Design"
        description="We deliver innovative engineering design solutions with precision, ensuring efficiency and sustainability across all projects."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1774604330/engineering_design_pinnacle_infotech_lbnhpf.webp"
        features={[
          {
            icon: "bi-rulers",
            text: "Precision Engineering",
          },
          {
            icon: "bi-lightbulb",
            text: "Innovative Solutions",
          },
          {
            icon: "bi-speedometer2",
            text: "High Performance",
          },
          {
            icon: "bi-globe",
            text: "Sustainable Design",
          },
          {
            icon: "bi-gear",
            text: "Advanced Tools",
          },
        ]}
      />

      {/* ================= DIGITAL CONSTRUCTION ================= */}
      <ServicesSection
        title="Digital Construction"
        description="Our digital construction approach enhances visualization, planning, and execution through advanced technologies and smart workflows."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1774604275/digital_construction_pinnacle_infotech_mxz5kc.webp"
        features={[
          {
            icon: "bi-box",
            text: "3D Modelling",
          },
          {
            icon: "bi-building",
            text: "Architectural",
          },
          {
            icon: "bi-megaphone",
            text: "Marketing / BID Presentation",
          },
          {
            icon: "bi-map",
            text: "GIS",
          },
          {
            icon: "bi-file-earmark-text",
            text: "Documentation",
          },
        ]}
      />

      {/* ================= DIGITAL TWIN ================= */}
      <ServicesSection
        title="Digital Twin"
        description="Our Digital Twin solutions create real-time virtual replicas of physical assets, enabling better monitoring, analysis, and decision-making throughout the project lifecycle."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1775560726/bim-vdc_consulting_pinnacle_infotech_xovez5.webp"
        features={[
          {
            icon: "bi-cpu",
            text: "Real-Time Monitoring",
          },
          {
            icon: "bi-diagram-3",
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
            icon: "bi-eye",
            text: "Enhanced Visualization",
          },
        ]}
      />

      {/* ================= 2D CAD & DRAFTING ================= */}
      <ServicesSection
        title="2D CAD & Drafting"
        description="Turn conceptual designs into precise & actionable construction plans that comply with international codes and standards."
        image="https://res.cloudinary.com/dnodncslz/image/upload/v1778241880/2d-drafting-services_goyyne.webp"
        features={[
          {
            icon: "bi-pencil-square",
            text: "PDF to CAD Conversion",
          },
          {
            icon: "bi-building",
            text: "Architectural Drafting",
          },
          {
            icon: "bi-grid-1x2",
            text: "Floor Plan Drafting",
          },
          {
            icon: "bi-rulers",
            text: "Construction Documentation",
          },
          {
            icon: "bi-file-earmark-text",
            text: "Technical Drawing Services",
          },
        ]}
      />

      {/* ================= OUR VERTICALS ================= */}
      <VerticalsSection />

      {/* ================= OUR PROJECTS ================= */}
      <OurProjectSection />


      <PeopleSection />

       {/* ================= SAY HELLO CTA ================= */}
      <SayHello />
      {/* ================= MORE ABOUT PINNACLE ================= */}
      <MoreAboutSection />
      {/* ================= CSR ================= */}
      <CsrSection />
      {/* ================= GLOBAL PRESENCE ================= */}
      <GlobalPresence />
        {/* ================= CAREER SECTION ================= */}
      <CareerSection />
      {/* ================= LATEST UPDATES ================= */}
      <LatestUpdates />
       
    </div>

  );
}