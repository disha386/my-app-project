"use client";

export default function VerticalsSection() {
  return (
    <>
      <div style={{
        width: "100%",
        background: "#f5f5f5",
        padding: "40px 0 120px 0",
        marginTop: "40px"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px"
        }}>

          {/* HEADING */}
          <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto 60px auto" }}>
            <h2 style={{
              color: "#002366",
              fontSize: "32px",
              fontWeight: "800",
              fontFamily: "Georgia, serif",
              marginBottom: "10px"
            }}>
              Our Verticals
            </h2>
            <p style={{ color: "#4a6fa5", fontSize: "22px", fontWeight: "500" }}>
              Pinnacle's 360° BIM solutions cater to complete lifecycles of large-scale infrastructure projects across continents
            </p>
          </div>

          {/* AIRPORT */}
          <div className="vertical-section">
            <div className="vertical-row">
              <div className="title" style={{
                display: "flex", flexDirection: "row", alignItems: "flex-start",
                gap: "12px", fontSize: "24px", fontWeight: "700", color: "#4a6fa5"
              }}>
                <i className="bi bi-airplane-fill" style={{ fontSize: "28px", transform: "rotate(20deg)", marginTop: "4px" }}></i>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>Airport</span>
                  <span style={{ marginTop: "6px", display: "inline-block" }} className="sub-text">
                    Clash Detection Identify and resolve <br /> conflicts between systems efficiently.
                  </span>
                </div>
              </div>
              <div className="vertical-content">
                <div style={{ width: "300px", fontSize: "16px", lineHeight: "1.6" }}></div>
                <img
                  src="https://res.cloudinary.com/dnodncslz/image/upload/v1775639362/OIP_hlipg2.jpg"
                  style={{
                    width: "360px", height: "240px", objectFit: "cover",
                    borderRadius: "12px", position: "relative",
                    left: "-140px", zIndex: 6,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                  }}
                  alt="Airport"
                />
              </div>
            </div>
            <div className="expand-icon">›</div>
          </div>

          {/* DATA CENTRE */}
          <div className="vertical-section">
            <div className="vertical-row">
              <div className="title" style={{
                display: "flex", flexDirection: "row", alignItems: "flex-start",
                gap: "12px", fontSize: "24px", fontWeight: "700", color: "#4a6fa5"
              }}>
                <i className="bi bi-database-fill" style={{ fontSize: "28px", marginTop: "4px" }}></i>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>Data Centre</span>
                  <span style={{ marginTop: "6px", display: "inline-block" }} className="sub-text">
                    Smart Infrastructure Monitoring Real-time <br /> tracking and optimization of data systems.
                  </span>
                </div>
              </div>
              <div className="vertical-content">
                <div style={{ width: "300px", fontSize: "16px", lineHeight: "1.6" }}></div>
                <img
                  src="https://res.cloudinary.com/dnodncslz/image/upload/v1775813326/OIP_1_kauxwo.jpg"
                  style={{
                    width: "360px", height: "240px", objectFit: "cover",
                    borderRadius: "12px", position: "relative",
                    left: "-140px", zIndex: 6,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                  }}
                  alt="Data Centre"
                />
              </div>
            </div>
            <div className="expand-icon">›</div>
          </div>

          {/* SEMICONDUCTOR */}
          <div className="vertical-section">
            <div className="vertical-row">
              <div className="title" style={{
                display: "flex", flexDirection: "row", alignItems: "flex-start",
                gap: "12px", fontSize: "24px", fontWeight: "700", color: "#4a6fa5"
              }}>
                <i className="bi bi-cpu-fill" style={{ fontSize: "28px", marginTop: "4px" }}></i>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>Semiconductor</span>
                  <span style={{ marginTop: "6px", display: "inline-block" }} className="sub-text">
                    Chip Design & Fabrication Precision <br /> modeling for advanced semiconductor facilities.
                  </span>
                </div>
              </div>
              <div className="vertical-content">
                <img
                  src="https://res.cloudinary.com/dnodncslz/image/upload/v1775816240/OIP_2_aedd85.jpg"
                  style={{
                    width: "360px", height: "240px", objectFit: "cover",
                    borderRadius: "12px", position: "relative",
                    left: "-140px", zIndex: 6,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                  }}
                  alt="Semiconductor"
                />
              </div>
            </div>
            <div className="expand-icon">›</div>
          </div>

          {/* STADIUM */}
          <div className="vertical-section">
            <div className="vertical-row">
              <div className="title" style={{
                display: "flex", flexDirection: "row", alignItems: "flex-start",
                gap: "12px", fontSize: "24px", fontWeight: "700", color: "#4a6fa5"
              }}>
                <i className="bi bi-record-circle" style={{ fontSize: "28px", marginTop: "4px" }}></i>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>Stadium</span>
                  <span style={{ marginTop: "6px", display: "inline-block" }} className="sub-text">
                    Crowd Flow Optimization Efficient <br /> planning for large-scale venues.
                  </span>
                </div>
              </div>
              <div className="vertical-content">
                <img
                  src="https://res.cloudinary.com/dnodncslz/image/upload/v1775816261/OIP_3_xizapr.jpg"
                  style={{
                    width: "360px", height: "240px", objectFit: "cover",
                    borderRadius: "12px", position: "relative",
                    left: "-140px", zIndex: 6,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                  }}
                  alt="Stadium"
                />
              </div>
            </div>
            <div className="expand-icon">›</div>
          </div>

          {/* INDUSTRIAL */}
          <div className="vertical-section">
            <div className="vertical-row">
              <div className="title" style={{
                display: "flex", flexDirection: "row", alignItems: "flex-start",
                gap: "12px", fontSize: "24px", fontWeight: "700", color: "#4a6fa5"
              }}>
                <i className="bi bi-building-gear" style={{ fontSize: "28px", marginTop: "4px" }}></i>
                <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                  <span style={{ fontSize: "24px", fontWeight: "700" }}>Industrial</span>
                  <span style={{ marginTop: "6px", display: "inline-block" }} className="sub-text">
                    Process Optimization Streamlining <br /> operations for industrial efficiency.
                  </span>
                </div>
              </div>
              <div className="vertical-content">
                <img
                  src="https://res.cloudinary.com/dnodncslz/image/upload/v1775816269/OIP_4_paiwph.jpg"
                  style={{
                    width: "360px", height: "240px", objectFit: "cover",
                    borderRadius: "12px", position: "relative",
                    left: "-140px", zIndex: 6,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
                  }}
                  alt="Industrial"
                />
              </div>
            </div>
            <div className="expand-icon">›</div>
          </div>

          {/* BUTTON */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button className="custom-btn">
              Explore All
              <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "30px", height: "30px", background: "white",
                borderRadius: "50%", color: "#002366", fontSize: "16px", fontWeight: "bold"
              }}>→</span>
            </button>
          </div>

        </div>
      </div>
    </>
  );
}