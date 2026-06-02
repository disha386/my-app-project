import Link from "next/link";



const BlogCard = ({ image, date }) => (
  <div className="img-card">

    <img
      src={image}
      alt=""
      className="blog-image"
    />

    <div className="blog-meta">

      <span className="meta-author">
        by Admin
      </span>

      <span className="meta-date">
        {date}
      </span>

      <span className="meta-category">
        Blog
      </span>

    </div>

  </div>
);


export default function BlogPage() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="blog-breadcrumb-wrapper">

        <div className="blog-breadcrumb">

          <Link href="/">
            Home
          </Link>

          <span>&gt;</span>

          <span className="active-page">
            Blog
          </span>

        </div>

      </div>

      {/* HERO */}
      <section className="blog-hero">

        <div className="blog-overlay">

          {/* LEFT */}
          <div className="blog-left">

            <h1 className="blog-title">
              Blog
            </h1>

          </div>

          {/* RIGHT */}
          <div className="blog-right">

            <img
              src="https://res.cloudinary.com/dnodncslz/image/upload/v1780057298/all-blogs_1_bts6qf.webp"
              alt="Blog"
              className="blog-hero-image"
            />

          </div>

        </div>

        {/* BOTTOM CARDS */}
 {/* BOTTOM CARDS */}
<div className="blog-bottom-cards">

 <div className="blog-card card-large">

  <input
    type="text"
    placeholder="Search Blogs..."
    className="blog-search-input"
  />

</div>

  <div className="card-group">

  <div className="blog-card card-small category-card">

  <span className="category-text">
    All Categories
  </span>

  <span className="category-arrow">
    ▼
  </span>

</div>
    <div className="yellow-card">

      <div className="filter-content">

        <span className="filter-text">
          Clear Filter
        </span>

        <span className="filter-arrow">
          →
        </span>

      </div>

    </div>

  </div>

</div>

      </section>
      <section className="events-layout">

  {/* LEFT SIDE */}
  <div className="events-left">

    {/* 7 rows */}
    <div className="image-rows">
    <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776680785/BIM-Clash-Detection-A-Detailed-Guide_uiag29.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          05 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        BIM Clash Detection: A Detailed Guide
      </h3>
      <p className="blog-description">
      Modern construction projects involve digital practices to automate
      processes and ensure consistency and control in the output. For
      building designs...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776429342/Landscape-Architecture_Definitions-Significance_1_wfviab.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          11 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Landscape Architecture: Definitions & Significance
      </h3>
      <p className="blog-description">
     Landscapes are an integral part of a construction project that form
     the outdoor spaces and surroundings of the site. These...
    </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776429076/Construction-Asset-Management-A-Complete-Guide_aeeewh.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          18 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Construction Asset Management: Complete Guide
      </h3>
      <p className="blog-description">
      For any construction project to be executed smoothly and
      resourcefully, it is important to manage every aspect of
      procedural, physical,...
    </p>

    </div>

  </div>

</div>
      

 <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776429391/IoT-in-Construction_n6pjew.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          22 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        IoT in Construction: Top Benefits, Use-Cases & Application
      </h3>

      <p className="blog-description">
        Digital innovation is redefining every facet of the construction
        industry. As well known, the construction industry is under
        increasing pressure...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776429203/GIS-BIM-Integration-Application-and-Benefits_bmifck.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          25 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        GIS BIM: Integration, Application, and Benefits
      </h3>

      <p className="blog-description">
        BIM (Building Information Modeling) and GIS (Geographic Information
        System) are two futuristic technologies that have transformed the
        way construction processes...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1776429460/Revit-Vs-AutoCAD-History-Basic-Differences-Plugins_cgfhsp.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          28 Sep, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Revit Vs AutoCAD: History, Basic Differences, Plugins, Use Cases,
        and More
      </h3>

      <p className="blog-description">
        The Architecture, Engineering, and Construction (AEC) industry has
        witnessed groundbreaking evolutions. Whether it is the Design
        phase, Planning, Construction, or post-construction...
      </p>

    </div>

  </div>

</div>

      <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780310372/Whats-the-Difference-Between-VRV-and-VRF_gwdabn.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          02 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        What is VRF HVAC? VRV vs. VRF: What Is the Difference?
      </h3>

      <p className="blog-description">
        Energy-efficient and future-ready climate control has become a
        defining prerequisite across the built environments of today's
        age. From hospitals and...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780310493/Lidar-Vs-Laser_What-is-the-difference_axgwvy.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          07 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Laser Scanning: Lidar Vs Laser – Differences
      </h3>

      <p className="blog-description">
        In the ever-evolving and complex construction landscape,
        accuracy matters everywhere. Be it precise elevation
        mapping or extraction of 2D drawings from 3D...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780310754/Get-to-know-the-best-lighting-calculation-software-DIALux_lj7o3h.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          12 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        DIALux Lighting Design Software: Features and Benefits
      </h3>

      <p className="blog-description">
        It's hard to imagine a life without adequate lighting.
        Lighting is not just about brightening up the built-up
        space. It's...
      </p>

    </div>

  </div>

</div>

      <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780310856/Bar-Bending-Schedule-in-Construction_1_bzn45z.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          16 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Bar Bending Schedule in Construction: Importance and Best Practices
      </h3>

      <p className="blog-description">
        In today’s high-pressure construction environment, project
        managers cannot compromise on vital project health indicators,
        such as precision, cost efficiency, and...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780310937/BIM-in-Civil-Engineering_A-Civil-Engineers_iqzoaf.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          21 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        BIM in Civil Engineering: A Civil Engineer’s Transition to Smarter Infrastructure
      </h3>

      <p className="blog-description">
        The landscape of infrastructure projects evolves rapidly.
        Urbanization is becoming widespread. With the concept of smart
        cities gaining traction, major...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780311052/Electrical-Design-in-Construction_Fundamentals_toe7aa.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          27 Oct, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Electrical Design in Construction: Fundamentals, Key Elements & Best Practices
      </h3>

      <p className="blog-description">
        Commercial buildings and infrastructure evolve for the better
        with the advent of new technologies. The technological
        advancements and energy compliance...
      </p>

    </div>

  </div>

</div>

      <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780315786/Do-Digital-Twins-and-Generative-AI_h8fhg1.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          02 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Do Digital Twins and Generative AI make the Perfect Duo?
      </h3>

      <p className="blog-description">
        Digital Twin is another remarkable emerging technology in the
        construction industry. Reports from MarketsandMarkets show that
        its market continues to hold...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780315839/Fire-Protection-Design-System-Five-Steps-to-Project-Success_vpansm.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          08 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Fire Protection Design System: Five Steps to Project Success
      </h3>

      <p className="blog-description">
        In any construction project safety is among the most crucial
        aspects of building architecture and design engineering.
        Since always, there...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780315903/Unlocking-the-Power-of-ETABS_qbaylx.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          14 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        ETABS Software: Benefits, Features & Why it is Best for Structural Design and Analysis
      </h3>

      <p className="blog-description">
        The world of design and construction continues to take leaps in
        advancements, leveraging technology. Pre-construction processes
        become much streamlined with the...
      </p>

    </div>

  </div>

</div>

      <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780316178/Electrical-Design-Construction-Elements-Best-Practices_1_ac3wfa.png"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          20 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Revit MEP: Benefits & Role with BIM in Transforming Construction Workflows
      </h3>

      <p className="blog-description">
        Building designs have witnessed a significant transformation in
        recent years with technology and automation reshaping project
        workflows. This change is...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780316358/What-is-the-Asset-Information-Model-AIM-in-BIM_g5vb7c.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          25 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        What is the Asset Information Model (AIM) in BIM?
      </h3>

      <p className="blog-description">
        The Asset Information Model (abbreviated as AIM) is the unique
        set of necessary information brought together from different
        sources and...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780316460/Revit-Vs-Tekla-Structures-Overview-Features-and-Integration_qrivxx.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          30 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Revit Vs Tekla Structures: Overview, Features, and Integration
      </h3>

      <p className="blog-description">
        Autodesk Revit and Trimble Tekla Structures are widely accepted
        and used digital construction tools. Both the tools are highly
        associated...
      </p>

    </div>

  </div>

</div>

      <div className="img-row">

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780317265/What-is-LiDARLiDAR-Systems-For-Building_xsm2wp.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          22 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        What is LiDAR? LiDAR Systems For Building Information Modelling Services
      </h3>

      <p className="blog-description">
        Light Detection and Ranging (LiDAR) systems revolutionize the way
        we visualize and manage the built facilities. In essence, what is...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780317379/Implementing-BIM-Workflow_Challenges-Tools_pchlid.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          27 Nov, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        Implementing BIM Workflow: Challenges, Tools, and a Walkthrough of the Process
      </h3>

      <p className="blog-description">
        Building Information Modeling (BIM) continues to drive innovation
        in the modern built environment. As the technology evolves, it
        digitizes construction processes...
      </p>

    </div>

  </div>

  <div className="blog-item">

    <img
      src="https://res.cloudinary.com/dnodncslz/image/upload/v1780317483/The-Integral-Role-of-MEP-Engineering-in-Modern-Construction_lb1a11.webp"
      alt=""
    />

    <div className="blog-info">

      <div className="blog-meta">

        <span className="blog-admin">
          By Admin
        </span>

        <span className="blog-date">
          03 Dec, 2025
        </span>

        <span className="blog-tag">
          Blog
        </span>

      </div>

      <h3 className="blog-heading">
        The Integral Role of MEP Engineering in Modern Construction
      </h3>

      <p className="blog-description">
        If you break the construction process into core systems that
        contribute to the key value dynamics of a project, it...
      </p>

    </div>

  </div>

</div>
    </div>

  </div>

  {/* RIGHT SIDE EMPTY */}
<div className="events-right">

  <div className="about-box">

    <div className="about-title-row">

      <h2 className="about-title">
        About Us
      </h2>

      <div className="about-line"></div>

    </div>

    <p className="about-text">
      We are the global leader in providing BIM solutions to the international market.
      Our team has successfully executed BIM projects in 43+ countries spread across 6 continents.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin mauris in leo pulvinar commodo.
      Donec eget metus ut sem blandit dictum. Etiam fermentum sed nunc ut ullamcorper.
      Praesent leo orci, fringilla ac ante nec, ultrices tempor ex. Mauris placerat,
      nunc eu molestie ultricies, justo massa finibus nisi, et vehicula velit libero a est.
    </p>
   {/* 🔵 BLUE LINE (ADD HERE) */}
    <div className="about-blue-line"></div>
      {/* 🖼️ IMAGE ONLY (NO HEADING) */}
    <div className="about-image-card">
      <img
        src="https://res.cloudinary.com/dnodncslz/image/upload/v1780398885/d-img-01_ymevf1.webp"
        alt="About"
      />
    </div>

  {/* 🔵 BLUE LINE (AFTER IMAGE) */}
  <div className="about-blue-line"></div>
{/* 📦 TABS */}
<div className="about-tabs">
  <div className="about-tab">Latest Post</div>
  <div className="about-tab">Popular Post</div>
</div>
  </div>

</div>
</section>
    </>
  );
}