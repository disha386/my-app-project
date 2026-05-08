export default function MovingLogoBar() {

  const logos = [
    "https://res.cloudinary.com/dnodncslz/image/upload/v1774440686/ahk_u5d2h6.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1774441251/npca_vypoo6.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1774441161/buildingsmart_d7yder.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1774441027/building_mqyiow.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1774528765/stpi_fbnfw1.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778218519/bsij_logo_colour_r55h1q.svg",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778218946/smacna_bptac5.webp",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778218502/american_subcontractor_association_logo_colour_gt8fh9.svg",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778219404/cii_logo_colour_cowoew.svg",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778219419/ficci_logo_colour_kmpsmw.svg",

    "https://res.cloudinary.com/dnodncslz/image/upload/v1778219442/nfpa_logo_colour_qkcohz.svg",
  ];

  return (
    <div className="logo-bar">

      {/* TITLE */}
      <div className="logo-title">
        Industry Associations
      </div>

      {/* SCROLLING AREA */}
      <div className="logo-track">

        <div className="logo-slide">
          {[
            ...logos,
            ...logos,
            ...logos,
            ...logos
          ].map((logo, i) => (
            <img key={i} src={logo} alt="logo" />
          ))}
        </div>

      </div>

    </div>
  );
}