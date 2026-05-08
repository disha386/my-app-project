import { db } from "../src/lib/db.js";

db.prepare(`
  INSERT INTO homepage (hero_text, video_url)
  VALUES (?, ?)
`).run(
  "Constructing Certainty with BIM Technology",
  "https://res.cloudinary.com/dnodncslz/video/upload/v1774435343/pinnacle-infotech-latest_h3qbk3.mp4"
);

console.log("Inserted successfully");