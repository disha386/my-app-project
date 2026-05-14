export default function GlobalPresence() {

  const offices = [
    {
      address:
        "3250 Bloor Street West, East Tower, Unit 600, Toronto, Ontario, M8X2X9",
      name: "Mr. Subhojit Sarkar",
      email: "ssarkar@pinnacleinfotech.com",
      phone: "+1 437 782 0030, +1 680 210 9909",
    },

    {
      address:
        "6065 Roswell Rd NE #625, Atlanta, GA 30328",
      name: "Mr. Samrat Mallick",
      email: "samratm@pinnacleinfotech.com",
      phone: "+1 832 818 1253",
    },

    {
      address:
        "6065 Roswell Rd NE #625, Atlanta, GA 30328",
      name: "Mr. Samrat Mallick",
      email: "samratm@pinnacleinfotech.com",
      phone: "+1 832 818 1253",
    },

    {
      address:
        "25 N 14th Street, Suite #670, San Jose, CA – 95112",
      name: "Mr. Nikhil Varandani",
      email: "nvarandani@pinnacleinfotech.com",
      phone: "+1 (832) 874-2798",
    },

    {
      address:
        "50 Sugar Creek Center Blvd, Suite #350, Sugar Land, TX 77478",
      name: "Mr. B. Todi",
      email: "btodi@pinnacleinfotech.com",
      phone: "+1 713 780 2135, +1 437 782 0030",
    },
  ];

  return (
    <section className="global-wrapper">

      {/* TITLE */}
      <h2 className="global-title">
        Global Presence
      </h2>

      {/* GRAY SECTION */}
      <div className="global-bar">

        <div className="global-container">

          {/* LEFT */}
          <div className="global-left">

            {offices.map((office, index) => (
              <div className="office-block" key={index}>

                <div className="office-heading">

                  <div className="office-line"></div>

                  <div className="office-title">
                    Pinnacle Infotech
                  </div>

                </div>

                <div className="office-text">
                  {office.address}
                  <br /><br />

                  {office.name}
                  <br /><br />

                  {office.email}
                  <br /><br />

                  {office.phone}
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT IMAGE */}
          <div className="global-right">

            <img
              src="https://res.cloudinary.com/dnodncslz/image/upload/v1776670560/download_1_o23tg1.png"
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
  );
}