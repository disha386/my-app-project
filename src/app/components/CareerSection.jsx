export default function CareerSection() {
  return (
    <section className="career-wrapper">

      <img
        src="https://res.cloudinary.com/dnodncslz/image/upload/v1776424759/home-career-bgimg_kz52zt.webp"
        alt="Career Background"
        className="career-bg"
      />

      <div className="career-card">

        <p className="career-small-title">
          Build Your Career
        </p>

        <h2 className="career-title">
          Grow At Pinnacle
        </h2>

        <p className="career-description">
          Join our team for meaningful career growth along with
          personal development programs.
        </p>

        <button className="career-btn">

          <span className="career-btn-text">
            View all opportunities
          </span>

          <span className="career-arrow">
            →
          </span>

        </button>

      </div>

    </section>
  );
}