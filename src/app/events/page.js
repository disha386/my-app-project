"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("all");

  // 🔵 ALL IMAGES
  const allImages = [
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770103/pinnacle-bim-series-pop-up.png_vu0ydd.webp",
      title: "Pinnacle BIM Series - 5",
      date: "Sep 6–6, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770095/pinnacle-global-customer-event-cover-image_dbkpwf.png",
      title: "Global Customer Event",
      date: "Oct 12–14, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770265/Pinnacle-Infotech-at-New-York-Build-Expo-2024-2048x1583_xdq3og.webp",
      title: "New York Build Expo",
      date: "Nov 2–5, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770043/Big-5-Saudi_2025-1_qoddkq.webp",
      title: "Big 5 Saudi",
      date: "Dec 10–12, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770056/Pinnacle-at-AU-2024_y0ekie.webp",
      title: "AU 2024",
      date: "Jan 14–16, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711248/Japan-Build-Tokyo_rvfri6.webp",
      title: "Japan Build Tokyo",
      date: "Feb 18–20, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711387/Precast-Perfection-with-Digital-Construction-Solutions-Take-Your-Game-to-the-Next-Level-at-The-Precast-Show-2025_gtbe1j.png",
      title: "Precast Show",
      date: "Mar 5–7, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711936/Pinnacle-Infotech-at-UK-Construction-Week-2024-2048x1583_dnzi7i.webp",
      title: "UK Construction Week",
      date: "Apr 9–11, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779712113/Pinnacle-Infotech-at-AHR-Expo-2024-2048x1583_nnlgc7.webp",
      title: "AHR Expo",
      date: "May 15–17, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779712407/Pinnacle-Infotech-at-digitalBAU-2024-2048x1583_flczul.webp",
      title: "digitalBAU",
      date: "Jun 8–10, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779712687/Pinnacle-Infotech-at-Canadian-Concrete-Expo-2048x1583_1_v1u04l.webp",
      title: "Canadian Concrete Expo",
      date: "Jul 12–14, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770103/pinnacle-bim-series-pop-up.png_vu0ydd.webp",
      title: "Pinnacle BIM Event",
      date: "Aug 20–22, 2026",
    },
  ];

  // 🔵 EVENTS IMAGES
  const eventImages = [
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770103/pinnacle-bim-series-pop-up.png_vu0ydd.webp",
      title: "Pinnacle BIM Series",
      date: "Sep 6–6, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770095/pinnacle-global-customer-event-cover-image_dbkpwf.png",
      title: "Customer Event",
      date: "Oct 10–12, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770265/Pinnacle-Infotech-at-New-York-Build-Expo-2024-2048x1583_xdq3og.webp",
      title: "New York Expo",
      date: "Nov 2–4, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770043/Big-5-Saudi_2025-1_qoddkq.webp",
      title: "Saudi Event",
      date: "Dec 5–7, 2025",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770056/Pinnacle-at-AU-2024_y0ekie.webp",
      title: "AU Event",
      date: "Jan 12–14, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711248/Japan-Build-Tokyo_rvfri6.webp",
      title: "Japan Build",
      date: "Feb 1–3, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711387/Precast-Perfection-with-Digital-Construction-Solutions-Take-Your-Game-to-the-Next-Level-at-The-Precast-Show-2025_gtbe1j.png",
      title: "Precast Event",
      date: "Mar 4–6, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779711936/Pinnacle-Infotech-at-UK-Construction-Week-2024-2048x1583_dnzi7i.webp",
      title: "UK Week",
      date: "Apr 8–10, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779712113/Pinnacle-Infotech-at-AHR-Expo-2024-2048x1583_nnlgc7.webp",
      title: "AHR Event",
      date: "May 11–13, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779768840/pinnacle-infotech-au-2023-banner_1_wkciti.png",
      title: "AU Banner",
      date: "Jun 9–11, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779768993/pinnacle-infotech-auf-intergeo-expo-2023_r2llsx.png",
      title: "Intergeo Expo",
      date: "Jul 5–7, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779768921/pinnacle-infotech-au-2023-banner_ubmgbe.png",
      title: "AU Showcase",
      date: "Aug 15–17, 2026",
    },
  ];

  // 🔵 INHOUSE IMAGES
  const inhouseImages = [
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770056/Pinnacle-at-AU-2024_y0ekie.webp",
      title: "Inhouse Meeting",
      date: "Jan 10, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770043/Big-5-Saudi_2025-1_qoddkq.webp",
      title: "Internal Event",
      date: "Feb 18, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779770497/pinnacles-4th-global-bim-summit-banner_cqpgru.jpg",
      title: "Global BIM Summit",
      date: "Mar 12, 2026",
    },
  ];

  // 🔵 TRADESHOW IMAGES
  const tradeImages = [
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776767520/Big-5-Saudi_2025-1_edxy14.webp",
      title: "Big 5 Saudi",
      date: "Apr 10–12, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776770146/Japan-Build-Tokyo_uh8x4b.webp",
      title: "Japan Build",
      date: "May 5–7, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771238/pietps2023-show.jpg_yi5cdp.webp",
      title: "PIETPS Show",
      date: "Jun 2–4, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771283/thebig5-saudi.jpg_x7sfh1.webp",
      title: "The Big 5",
      date: "Jul 11–13, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771414/canadian-expo.jpg_1_p8hnx1.webp",
      title: "Canadian Expo",
      date: "Aug 14–16, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771483/the-ahr-expo-2023.jpg_vlo5p1.webp",
      title: "AHR Expo",
      date: "Sep 20–22, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771543/2022-the-building-show.jpg_edp0wj.webp",
      title: "Building Show",
      date: "Oct 8–10, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771579/no-img_1_kjga4g.webp",
      title: "Trade Expo",
      date: "Nov 15–17, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771618/neca_2022_austin_pinnacle_infotech.jpg_dwwedf.webp",
      title: "NECA Austin",
      date: "Dec 1–3, 2026",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771664/aspe_convention_2022_pinnacle_infotech.jpg_vhhmbr.webp",
      title: "ASPE Convention",
      date: "Jan 7–9, 2027",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779771879/smacna_2022_pinnacle_infotech.jpg_vn0d1l.webp",
      title: "SMACNA 2022",
      date: "Feb 12–14, 2027",
    },
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1779772045/shk_essen_2022_pinnacle_infotech.jpg_kaq6a0.webp",
      title: "SHK Essen",
      date: "Mar 18–20, 2027",
    },
  ];

  const renderCards = (images, imageHeight) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-17">

        {images.map((item, i) => (

          <div key={i} className="flex flex-col">

            <img
              src={item.image}
              className={`${imageHeight} w-full object-cover rounded-[24px]`}
              alt=""
            />

            {/* TEXT AREA */}
            <div className="pt-6 px-2 min-h-[140px]">

              <h3 className="text-[#0A2A66] text-[28px] font-bold font-serif leading-tight">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 mt-4 text-gray-500 text-[16px]">

                <CalendarDays
                  size={18}
                  className="text-yellow-400"
                />

                <span>{item.date}</span>

              </div>

            </div>

          </div>

        ))}

      </div>
    );
  };

  return (
    <div className="mt-[-40px]">

      {/* BREADCRUMB */}
      <div className="px-10 py-6 text-gray-500 text-sm flex gap-2">

        <Link href="/" className="hover:text-blue-900 transition">
          Home
        </Link>

        <span>&gt;</span>

        <span className="text-black">Events</span>

      </div>

      {/* HERO */}
      <div className="px-6">

        <section className="w-full bg-[#0A2A66] text-white px-10 py-64 rounded-[40px] relative overflow-hidden">

          <div className="max-w-[1400px] mx-auto flex items-center justify-between">

            <h1 className="text-4xl font-black font-serif tracking-tight">
              Events & TradeShows
            </h1>

            <div className="absolute right-[-10px] bottom-[-10px]">

              <img
                src="https://res.cloudinary.com/dnodncslz/image/upload/v1779687517/event__tradeshow_header_e27a3z.webp"
                className="w-[850px] object-contain opacity-90"
                alt="Events"
              />

            </div>

          </div>

        </section>

      </div>

      {/* TABS */}
      <div className="w-full flex justify-center mt-10">

        <div className="flex gap-6 text-[16px] font-medium">

          {["all", "events", "inhouse", "tradeshow"].map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full transition ${
                activeTab === tab
                  ? "bg-blue-200 text-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              {tab === "inhouse"
                ? "In House"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>

          ))}

        </div>

      </div>
{/* IMAGE SECTION */}
<div className="px-14 lg:px-24 mt-16 max-w-[1800px] mx-auto">

  {activeTab === "all" &&
    renderCards(allImages, "h-[300px]")}

  {activeTab === "events" &&
    renderCards(eventImages, "h-[300px]")}

  {activeTab === "inhouse" &&
    renderCards(inhouseImages, "h-[300px]")}

  {activeTab === "tradeshow" &&
    renderCards(tradeImages, "h-[300px]")}

</div>

{/* BLUE BAR */}
<div className="px-20 lg:px-32 mt-20">
  <div className="bg-[#0A2A66] h-[220px] rounded-[24px]"></div>
</div>

</div>
  );
}