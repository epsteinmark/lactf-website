import googlecloud from "../public/images/google_cloud.png";
import latticework from "../public/images/latticework.png";
import ottersec from "../public/images/ottersec.png";
import sandia from "../public/images/sandia_national_laboratories.svg";
import trailofbits from "../public/images/trail-of-bits.png";
import affiliateFlag from "../public/images/affiliateFlag.svg";
import infraFlag from "../public/images/infraFlag.svg";
import lockheedmartin from "../public/images/lockheed_martin.svg";
import tryhackme from "../public/images/tryhackme.png"

// const data = {
//   sponsors: [
//     {
//       name: "Sandia National Laboratories",
//       url: "https://www.sandia.gov/",
//       image: sandia,
//       flag: {
//         image: affiliateFlag,
//         blurb: "Affiliate",
//       },
//       // Taken from https://www.sandia.gov/missions/
//       blurb:
//         "Sandia strives to become the laboratory that the U.S. turns to first for technology solutions to the most challenging problems that threaten peace and freedom for our nation and the globe.",
//     },
//     {
//       name: "Google Cloud",
//       url: "https://goo.gle/ctfsponsorship",
//       image: googlecloud,
//       blurb:
//         "Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.",
//       flag: {
//         image: infraFlag,
//         blurb: "Infra sponsored by goo.gle/ctfsponsorship",
//       },
//     },
//     {
//       name: "Trail of Bits",
//       url: "https://www.trailofbits.com/",
//       image: trailofbits,
//       blurb:
//         "Trail of Bits helps secure the world's most targeted organizations and products. We combine high-end security research with a real-world attacker mentality to reduce risk and fortify code.",
//     },
//     {
//       name: "OtterSec",
//       url: "https://osec.io/",
//       image: ottersec,
//       blurb:
//         "OtterSec is the leading blockchain security audit team, working closely with various Layer 1s and the protocols built on them.",
//     },
//     {
//       name: "Amber by LatticeWork",
//       url: "https://www.myamberlife.com/",
//       image: latticework,
//       blurb:
//         "Store your data locally and access it from anywhere without subscription fees! UCLA students, open a ticket in the LA CTF discord for a 25% discount.",
//     },
//   ],
// };
const data = {
  sponsors: [
    {
      name: "Sandia National Laboratories",
      url: "https://www.sandia.gov/",
      image: sandia,
      flag: {
        image: affiliateFlag,
        blurb: "Affiliate",
      },
      // Taken from https://www.sandia.gov/missions/
      blurb:
        "Sandia strives to become the laboratory that the U.S. turns to first for technology solutions to the most challenging problems that threaten peace and freedom for our nation and the globe.",
    },
    {
      name: "OtterSec",
      url: "https://osec.io/",
      image: ottersec,
      blurb:
        "OtterSec is the leading blockchain security audit team, working closely with various Layer 1s and the protocols built on them.",
    },
    {
      name: "Amber by LatticeWork",
      url: "https://www.myamberlife.com/",
      image: latticework,
      blurb:
        "Store your data locally and access it from anywhere without subscription fees! UCLA students, open a ticket in the LA CTF discord for a 30% discount.",
    },
    {
      name: "Google Cloud",
      url: "https://goo.gle/ctfsponsorship",
      image: googlecloud,
      blurb:
        "Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML.",
      flag: {
      image: infraFlag,
      blurb: "Infra sponsored by goo.gle/ctfsponsorship",
      },
    },
    {
      name: "Lockheed Martin",
      url: "https://lockheedmartin.com/en-us",
      image: lockheedmartin,
      //Taken from lockheed martin meta description with the typo fixed
      //It's still weird grammar so may need to be reconsidered
      blurb:
        "Lockheed Martin is a leading global security and aerospace company, ensuring those we serve always stay ahead and ready in the defense industry.",
      flag: {
        image: affiliateFlag,
        blurb: "Affiliate",
      }
    },
    {
      name: "TryHackMe",
      url: "https://tryhackme.com/",
      image: tryhackme,
      //Taken from try hack me meta description
      blurb:
      "TryHackMe is a free online platform for learning cyber security, using hands-on exercises and labs, all through your browser!"
    },
    {
      name: "Trail of Bits",
      url: "https://www.trailofbits.com/",
      image: trailofbits,
      blurb:
        "Trail of Bits helps secure the world's most targeted organizations and products. We combine high-end security research with a real-world attacker mentality to reduce risk and fortify code.",
    },
  ]
}

export default data;
