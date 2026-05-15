import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { BsTwitterX } from "react-icons/bs";

export default function Footer() {

  const popularPosts = [
    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776681020/Lidar-Vs-Laser_What-is-the-difference_lbxrzt.webp",
      title: "BIM Clash Detection Guide",
    },

    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776680987/IoT-in-Construction_1_jgbehm.webp",
      title: "Construction Asset Management",
    },

    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776680769/Whats-the-Difference-Between-VRV-and-VRF_zmjs2x.webp",
      title: "GIS & BIM Integration Benefits",
    },

    {
      image:
        "https://res.cloudinary.com/dnodncslz/image/upload/v1776680825/Bar-Bending-Schedule-in-Construction_uhfsek.webp",
      title: "Smart Infrastructure Trends",
    },
  ];

  return (

    <footer className="footer-wrapper">

      <div className="footer-box">

        {/* ================= TOP SECTION ================= */}

        <div className="footer-top">

          {/* LEFT */}

          <div className="footer-brand">

            <img
              src="https://res.cloudinary.com/dnodncslz/image/upload/v1776670638/logo-white_oz7xl7.svg"
              alt=""
              className="footer-logo"
            />

             <h4>
    Construct Certainty, with BIM Technology
  </h4>

  <p>
    We are dedicated to delivering excellence on every project,
    no matter where in the world it may be.
    We look forward to working with you.
  </p>
            <img
              src="https://res.cloudinary.com/dnodncslz/image/upload/v1776681616/iso-19650_1_oe5tbv.webp"
              alt=""
              className="footer-iso"
            />

          </div>

          {/* RIGHT */}

          <div className="footer-right">

            {/* CONTACT */}

            <div className="footer-column">

              <h4>Contact</h4>

              <div className="footer-contact">
                +91 98765 43210
              </div>

              <div className="footer-contact">
                example@email.com
              </div>

              <h4 className="social-heading">
                Social Connect
              </h4>

              <div className="footer-social">

                <FaFacebookF />
                <BsTwitterX />
                <FaLinkedinIn />
                <FaYoutube />

              </div>

            </div>

            {/* NEWSLETTER */}

            <div className="footer-column">

              <h4>Join Our Newsletter</h4>

              <p className="newsletter-text">
                Get the latest updates about trending BIM news and informative
                articles on your inbox by subscribing.
              </p>

              <div className="newsletter-box">

                <input
                  type="text"
                  placeholder="Enter your email"
                />

                <button>
                  →
                </button>

              </div>

            </div>

            {/* POPULAR POST */}

            <div className="footer-column popular-post">

              <h4>Popular Post</h4>

              <div className="popular-post-list">

                {popularPosts.map((post, index) => (

                  <div className="popular-post-item" key={index}>

                    <img src={post.image} alt="" />

                    <span>{post.title}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="footer-divider"></div>

        {/* ================= LINKS GRID ================= */}

        <div className="footer-grid">

          <div>
        <h5>About</h5>

        <span>About Pinnacle</span>

        <span>Pinnacle Advantage</span>

        <span>Our Team</span>

        <span>CSR</span>

        <span>Partnerships</span>

        <span>Awards and Milestones</span>
       </div>

         <div>
        <h5>Consulting</h5>

        <span>Training</span>

        <span>Automation</span>

        <span>BIM Template & Content Creation</span>

        <span>BIM Execution Plan</span>

        <span>BIM Management</span>

        <span>ISO 19650</span>
      </div>


     <div>
     <h5>Services</h5>

     <span>BIM Services</span>

     <span>Drafting Services</span>

     <span>Engineering Design</span>

     <span>BIM/VDC Consulting</span>

     <span>Digital Construction</span>
     </div>




          <div>
        <h5>Verticals</h5>

        <span>Airport</span>

        <span>Data Centre</span>

        <span>Stadium</span>

        <span>Semiconductor</span>

        <span>Industrial</span>

        <span>Infrastructure</span>

        <span>Rail & Road</span>

        <span>Healthcare</span>

        <span>Water</span>
      </div>
          <div>
  <h5>Resources</h5>

  <span>Brochures</span>

  <span>Videos</span>

  <span>Publications</span>

  <span>Blog</span>

  <span>Events</span>
</div>
          <div>
  <h5>Markets</h5>

  <span>Canada</span>

  <span>Germany</span>

  <span>Ireland</span>

  <span>Japan</span>

  <span>Saudi Arabia</span>

  <span>Singapore</span>

  <span>UAE</span>

  <span>UK</span>

  <span>USA</span>
</div>
         <div>
  <h5>BIM Services</h5>

  <span>Architecture</span>

  <span>Concrete</span>

  <span>Plumbing</span>

  <span>Rebar/Steel</span>

  <span>Mechanical</span>

  <span>Electrical</span>

  <span>Fire Protection</span>
</div>
        </div>

 {/* ================= SECOND GRID ================= */}

{/* ================= SECOND GRID ================= */}

<div className="footer-grid second-grid">

  {/* BELOW ABOUT */}
  <div>

    <h5>Our Products</h5>

    <span>VDC</span>

    <span>Innomaint</span>

    <span>Client Desk</span>

  </div>

  {/* BELOW CONSULTING */}
  <div>

    <h5>Portfolio</h5>

    <span>Projects</span>

    <span>Case Studies</span>

    <span>Testimonials</span>

  </div>

  {/* BELOW SERVICES */}
  <div>

    <h5>Careers</h5>

    <span>Job Postings</span>

    <span>Employee Recognition</span>

    <span>Trainings</span>

    <span>Our Culture</span>

  </div>

  {/* EMPTY BELOW VERTICALS */}
  <div></div>

  {/* BELOW RESOURCES */}
  <div>

    <h5>Clients</h5>

    <span>Architects</span>

    <span>Engineers</span>

    <span>Contractors</span>

    <span>Owners</span>

  </div>

  {/* EMPTY BELOW MARKETS */}
  <div></div>

  {/* EMPTY BELOW BIM SERVICES */}
  <div></div>

</div>
        {/* ================= BOTTOM ================= */}
<div className="footer-divider bottom-divider"></div>
      <div className="footer-bottom">

  <span>
    © 2026 pinnacleinfotech.com. All rights reserved.
  </span>

  <span className="footer-separator">|</span>

  <span className="digital-partner">
    Digital Partner <strong>Indus Net Technologies</strong>
  </span>

</div>

        <div className="footer-policy">

          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookies Policy</span>
          <span>Sitemap</span>

        </div>

      </div>

    </footer>
  );
}