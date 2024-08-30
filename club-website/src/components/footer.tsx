import Image from "next/image";
import {
  RiDriveLine,
  RiDiscordLine,
  RiMailLine,
  RiLinkedinBoxLine,
  RiYoutubeLine,
  RiGithubLine,
  RiInstagramLine,
} from "react-icons/ri";
import Link from "next/link";

const LINKS = [
  {
    link: "https://tx.ag/taoserver",
    icon: <RiDiscordLine />,
  },
  {
    link: "https://www.linkedin.com/company/engr-tao/",
    icon: <RiLinkedinBoxLine />,
  },
  {
    link: "https://drive.google.com/drive/folders/128TePaIK-zwts9vzNhZfj3_mJ3IH_L9d?usp=sharing",
    icon: <RiDriveLine />,
  },
  {
    link: "mailto:taoengr@gmail.com",
    icon: <RiMailLine />,
  },
  {
    link: "https://www.youtube.com/@ENGRTAO",
    icon: <RiYoutubeLine />,
  },
  {
    link: "https://github.com/TAO-ENGR",
    icon: <RiGithubLine />,
  },
  {
    link: "https://www.instagram.com/tamutao/",
    icon: <RiInstagramLine />,
  },
];

export default function Footer() {
  return (
    <main className="items-start justify-between lg:text-base md:text-md text-sm grid grid-rows-3 md:grid-cols-5 grid-cols-2 gap-8 lg:p-24 lg:ps-32 lg:pe-32 md:p-16 md:ps-16 md:pe-16 p-8 ps-12 pe-12">
      <div
        className="row-start-3 md:row-start-1 col-start-1 col-span-2"
        id="logo"
      >
        <Image
          id="logo"
          src="/lightLogo.png"
          width={604}
          height={234}
          alt="glorious TAO logo :D"
        />
      </div>

      <div
        className="row-start-4 md:row-start-2 col-start-1 col-span-2 ps-2"
        id="address"
      >
        <p>
          ZACH 420 - 125 Spence St, College Station, TX 77843, United States
          <br />
          <br />
          2024 © ENGR TA Organization
        </p>
      </div>

      <div id="about">
        <p>
          <b>
            <Link href="/about" className="hover:text-maroon">
              About
            </Link>
          </b>
          <br />
          <Link href="/about/#impact" className="hover:text-maroon">
            Impact
          </Link>
          <br />
          <Link href="/about/#officers" className="hover:text-maroon">
            Officers
          </Link>
          <br />-
        </p>
      </div>

      <div className="md:row-start-2 md:col-start-3" id="resources">
        <p>
          <b>
            <Link href="/" className="hover:text-maroon">
              Resources
            </Link>
          </b>
          <br />
          {/* <Link href="/">ENGR 102</Link><br/> */}
          <Link href="/" className="hover:text-maroon">
            ENGR 216
          </Link>
          <br />
          <Link href="/" className="hover:text-maroon">
            Miscellaneous
          </Link>
          <br />-
        </p>
      </div>

      <div id="landing">
        <p>
          <b>
            <Link href="/home" className="hover:text-maroon">
              Landing
            </Link>
          </b>
          <br />
          <Link href="/announcements" className="hover:text-maroon">
            Announcements
          </Link>
          <br />
          <Link href="/announcements/#upcoming" className="hover:text-maroon">
            Upcoming
          </Link>
          <br />
          <Link href="/calendar" className="hover:text-maroon">
            Calendar
          </Link>
          <br />-
        </p>
      </div>

      <div id="contact" className="flex flex-col">
        <p>
          <b>Contact</b>
          <br />
        </p>
        <a
          href="mailto:taoengr@gmail.com"
          target="_blank"
          className="hover:text-maroon"
        >
          <div className="flex gap-2 items-center">
            <RiMailLine className="shrink-0" />
            taoengr@gmail.com
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/engr-tao/"
          target="_blank"
          className="hover:text-maroon"
        >
          <div className="flex gap-2 items-center">
            <RiLinkedinBoxLine className="shrink-0" />
            engr-ta-org
          </div>
        </a>
        <a
          href="https://www.youtube.com/@ENGRTAO"
          target="_blank"
          className="hover:text-maroon"
        >
          <div className="flex gap-2 items-center">
            <RiYoutubeLine className="shrink-0" />
            YouTube
          </div>
        </a>
        <a
          href="https://github.com/TAO-ENGR"
          target="_blank"
          className="hover:text-maroon"
        >
          <div className="flex gap-2 items-center">
            <RiGithubLine className="shrink-0" />
            TAO-ENGR
          </div>
        </a>
        <p>-</p>
      </div>
    </main>
  );
}
