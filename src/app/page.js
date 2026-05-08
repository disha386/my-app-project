import DiscoverSection from "./components/DiscoverSection";
import MovingLogoBar from "./components/MovingLogoBar";

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
            preload="auto"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="hero-video"
          >
            <source
              src="https://res.cloudinary.com/dnodncslz/video/upload/v1774435343/pinnacle-infotech-latest_h3qbk3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* DISCOVER SECTION */}
      <DiscoverSection />

      {/* 👇 MOVING LOGO BAR (ADDED HERE) */}
      <MovingLogoBar />

    </div>
  );
}