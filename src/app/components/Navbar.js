"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Navbar() {

  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [expertiseContent, setExpertiseContent] = useState("bim");

  const expertiseMenu = [
  "bim",
  "engineering",
  "digital",
  "twin",
  "cad",
  "verticals",
];


  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50">

      {/* NAVBAR ROW */}
      <div className="flex justify-center py-6 px-10 relative z-50">

        {/* CENTER MENU */}
        <div className="flex gap-4 text-[15px] text-black items-center relative z-50">

          {/* ABOUT */}
          <div className="relative z-50">

            <div
              onClick={() =>
                setOpenMenu(openMenu === "about" ? null : "about")
              }
              className="cursor-pointer flex items-center gap-1"
            >
              <span className="hover:text-blue-900">About</span>

              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {openMenu === "about" && (
              <div className="absolute top-8 left-0 flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">

                <span className="text-black py-1 hover:text-blue-900">Company</span>
                <span className="text-black py-1 hover:text-blue-900">Team</span>
                <span className="text-black py-1 hover:text-blue-900">Mission</span>
                <span className="text-black py-1 hover:text-blue-900">Vision</span>
                <span className="text-black py-1 hover:text-blue-900">Careers</span>

              </div>
            )}

          </div>
{/* OUR EXPERTISE */}
<div className="relative z-50">

  <div
    onClick={() =>
      setOpenMenu(openMenu === "expertise" ? null : "expertise")
    }
    className="cursor-pointer flex items-center gap-1"
  >
    <span className="hover:text-blue-900">Our Expertise</span>

    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>

  {openMenu === "expertise" && (
    <div className="fixed left-0 top-[72px] w-full z-40 bg-white">

      <div className="shadow-lg w-full overflow-hidden rounded-b-3xl">

        {/* MAIN ROW (NO px-4 = fixes edge gap issue) */}
        <div className="w-full flex min-h-[380px] overflow-hidden">

          {/* LEFT BLUE SIDE */}
 <div className="bg-blue-900 text-white p-10 w-[20%] font-sans">

  <h2 className="text-2xl font-semibold mb-6">
    Our Expertise
  </h2>

  <div className="space-y-3">

    {/* BIM */}
    <div
      onClick={() => setExpertiseContent("bim")}
      className="cursor-pointer"
    >
      <p className={`px-2 py-1 relative transition ${
        expertiseContent === "bim"
          ? "text-black bg-white rounded"
          : "text-white"
      }`}>

        BIM Services

        {expertiseContent === "bim" && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
        )}

      </p>
    </div>

    {/* ENGINEERING */}
    <div
      onClick={() => setExpertiseContent("engineering")}
      className="cursor-pointer"
    >
      <p className={`px-2 py-1 relative transition ${
        expertiseContent === "engineering"
          ? "text-black bg-white rounded"
          : "text-white"
      }`}>

        Engineering Design

        {expertiseContent === "engineering" && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
        )}

      </p>
    </div>

    {/* DIGITAL */}
    <div
      onClick={() => setExpertiseContent("digital")}
      className="cursor-pointer"
    >
      <p className={`px-2 py-1 relative transition ${
        expertiseContent === "digital"
          ? "text-black bg-white rounded"
          : "text-white"
      }`}>

        Digital Construction

        {expertiseContent === "digital" && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
        )}

      </p>
    </div>

    {/* TWIN */}
    <div
      onClick={() => setExpertiseContent("twin")}
      className="cursor-pointer"
    >
      <p className={`px-2 py-1 relative transition ${
        expertiseContent === "twin"
          ? "text-black bg-white rounded"
          : "text-white"
      }`}>

        Digital Twin

        {expertiseContent === "twin" && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
        )}

      </p>
    </div>

    {/* CAD */}
   {/* CAD */}
{/* CAD (LEFT MENU ONLY - like Verticals) */}
<div
  onClick={() => setExpertiseContent("cad")}
  className="cursor-pointer"
>
  <div
    className={`px-3 py-2 rounded transition ${
      expertiseContent === "cad"
        ? "bg-white text-black font-semibold"
        : "text-white hover:bg-blue-800"
    }`}
  >
    2D CAD & Drafting
  </div>
</div> 
      

    {/* VERTICALS */}
    <div
      onClick={() => setExpertiseContent("verticals")}
      className="cursor-pointer"
    >
      <p className={`px-2 py-1 relative transition ${
        expertiseContent === "verticals"
          ? "text-black bg-white rounded"
          : "text-white"
      }`}>

        Verticals
   
       

      </p>
    </div>

  </div>
</div>
          {/* MIDDLE WHITE SIDE */}
          <div className="bg-white p-16 text-black w-[54%]">

       {expertiseContent === "bim" && (
    <div className="grid grid-cols-2 gap-y-6 gap-x-12">

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-box text-xl"></i>
        <span>3D Modelling</span>
      </div>

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-currency-exchange text-xl"></i>
        <span>Value Engineering</span>
      </div>

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-building text-xl"></i>
        <span>Digital Prefabrication</span>
      </div>

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-file-earmark-text text-xl"></i>
        <span>Construction Documentation</span>
      </div>

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-diagram-3 text-xl"></i>
        <span>Constructability Review</span>
      </div>

      <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
        <i className="bi bi-intersect text-xl"></i>
        <span>Clash Coordination</span>
      </div>

    </div>
  )}

 {expertiseContent === "engineering" && (
  <div className="grid grid-cols-2 gap-y-6 gap-x-12">

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-building text-xl"></i>
      <span>Architectural</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-bricks text-xl"></i>
      <span>Structural</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-gear text-xl"></i>
      <span>Mechanical Engineering Design</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-lightning-charge text-xl"></i>
      <span>Electrical</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-fire text-xl"></i>
      <span>Fire Protection</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-thermometer-sun text-xl"></i>
      <span>Building Energy</span>
    </div>

  </div>
)}

 {expertiseContent === "digital" && (
  <div className="grid grid-cols-2 gap-y-6 gap-x-12">

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-megaphone text-xl"></i>
      <span>Marketing / BID Presentations</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-film text-xl"></i>
      <span>4D & 5D Construction Simulation</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-calculator text-xl"></i>
      <span>Quantity Surveying</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-geo-alt text-xl"></i>
      <span>GIS</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-cash-stack text-xl"></i>
      <span>Pre-bid Estimation</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-rulers text-xl"></i>
      <span>Laser Scanning</span>
    </div>

  </div>
)}
 {expertiseContent === "twin" && (
  <div className="grid grid-cols-2 gap-y-6 gap-x-12">

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-gear-wide-connected text-xl"></i>
      <span>Implementation</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-database text-xl"></i>
      <span>Data Management</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-activity text-xl"></i>
      <span>Asset Monitoring</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-leaf text-xl"></i>
      <span>Sustainability Applications</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-card-list text-xl"></i>
      <span>COBie and Asset Register</span>
    </div>

    <div className="flex items-center gap-3 hover:text-blue-900 cursor-pointer">
      <i className="bi bi-camera-reels text-xl"></i>
      <span>Scan to BIM</span>
    </div>

  </div>
)}

</div>

          {/* RIGHT GREY SIDE */}
          <div className="bg-gray-200 p-10 w-[38%]">

            <h3 className="text-lg font-semibold text-black">
              Insights
            </h3>

            <p className="mt-4 text-sm text-gray-700 hover:text-black cursor-pointer">
              Latest Trends
            </p>

            <p className="mt-3 text-sm text-gray-700 hover:text-black cursor-pointer">
              Case Studies
            </p>

            <p className="mt-3 text-sm text-gray-700 hover:text-black cursor-pointer">
              Whitepapers
            </p>

          </div>

        </div>

      </div>

    </div>
  )}

</div>

          {/* PORTFOLIO */}
          <div className="relative z-50">

            <div
              onClick={() =>
                setOpenMenu(openMenu === "portfolio" ? null : "portfolio")
              }
              className="cursor-pointer flex items-center gap-1"
            >
              <span className="hover:text-blue-900">Portfolio</span>

              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {openMenu === "portfolio" && (
              <div className="absolute top-8 left-0 flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">

                <span className="text-black py-1 hover:text-blue-900">Projects</span>
                <span className="text-black py-1 hover:text-blue-900">Case Studies</span>
                <span className="text-black py-1 hover:text-blue-900">Clients</span>

              </div>
            )}

          </div>

          {/* RESOURCES */}
          <div className="relative z-50">

            <div
              onClick={() =>
                setOpenMenu(openMenu === "resources" ? null : "resources")
              }
              className="cursor-pointer flex items-center gap-1"
            >
              <span className="hover:text-blue-900">Resources</span>

              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {openMenu === "resources" && (
              <div className="absolute top-8 left-0 flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">

                <span className="text-black py-1 hover:text-blue-900">Blogs</span>
                <span className="text-black py-1 hover:text-blue-900">Guides</span>
                <span className="text-black py-1 hover:text-blue-900">Downloads</span>

              </div>
            )}

          </div>

          {/* EVENTS */}
          <Link href="/events">
            <div className={`cursor-pointer transition ${
              pathname === "/events"
                ? "text-yellow-400"
                : "hover:text-blue-900"
            }`}>
              <span>Events & TradeShows</span>
            </div>
          </Link>

          {/* CAREER */}
          <div className="relative z-50">

            <div
              onClick={() =>
                setOpenMenu(openMenu === "career" ? null : "career")
              }
              className="cursor-pointer flex items-center gap-1"
            >
              <span className="hover:text-blue-900">Career</span>

              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {openMenu === "career" && (
              <div className="absolute top-8 left-0 flex flex-col bg-gray-100 shadow-lg rounded-lg p-4 w-48 z-50">

                <span className="text-black py-1 hover:text-blue-900">Open Positions</span>
                <span className="text-black py-1 hover:text-blue-900">Life at Company</span>
                <span className="text-black py-1 hover:text-blue-900">Internships</span>
                <span className="text-black py-1 hover:text-blue-900">Hiring Process</span>
                <span className="text-black py-1 hover:text-blue-900">Apply Now</span>

              </div>
            )}

          </div>

          {/* BLOG */}
          <Link href="/blog">
            <div className={`cursor-pointer transition ${
              pathname === "/blog"
                ? "text-yellow-400"
                : "hover:text-blue-900"
            }`}>
              <span>Blog</span>
            </div>
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="absolute right-10 flex items-center gap-4 z-50">

          <i className="bi bi-search text-[20px] cursor-pointer hover:text-blue-900"></i>

          <span className="font-semibold cursor-pointer hover:text-blue-900">
            Login
          </span>

          <button className="bg-orange-500 text-black px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Get in Touch
          </button>

        </div>

      </div>
    </div>
  );
}