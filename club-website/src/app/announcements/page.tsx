import { poppins } from "../fonts";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin } from "react-icons/im";
import { FaDiscord, FaGlobe } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 gap-12">
      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold uppercase" style={poppins.style}>
          ANNOUNCEMENT
        </h1>
        <div className="">
          <div className=" bg-[#ededed] p-8 rounded-lg flex flex-col gap-4">
            <p className="text-xl font-bold">📢 Howdy everyone!</p>
            <p>
              Hope y&apos;alls first week went well and the second is off to a
              good start!
            </p>
            <hr className="bg-gray-400 h-[2px] my-6" />
            <h4>
              <span className="text-[#ba372a]">
                <strong>
                  This announcement is your formal invitation to join the TA⚙️
                  ENGR 102 Discord server!
                </strong>
              </span>
            </h4>
            <p>
              The <strong>ENGR 102 Discord</strong> is a server made by the ENGR
              TA Organization in collaboration with the Engineering Department,
              your profs and course coordinators for ENGR 102, upperclassmen
              engineering VIPs (volunteer PTs), as well as nearly all of your
              Peer Teachers for the course. This server acts as a
              <strong>
                {" "}
                centralized hub for all communication with your Peer Teachers
                and Profs
              </strong>{" "}
              replacing the need for individual section GroupMe&apos;s, etc.
              with a more robust resource that contains helpful{" "}
              <strong>
                reminders and announcements related to the course
              </strong>{" "}
              (deadlines, DI Sat, Announcements),{" "}
              <strong>access to all PTs and many profs</strong>,
              <strong> Discord Office Hours</strong>,{" "}
              <strong>exclusive review material</strong>, and a{" "}
              <strong>place to collaborate </strong>and meet other engineers in
              your cohort!
            </p>
            <hr className="bg-gray-400 h-[2px] my-6" />
            <p>
              <span className="text-lg">
                <strong className="flex gap-2 items-center">
                  <Image
                    src={"/announcements/anya-this.png"}
                    width={50}
                    height={50}
                    alt={"emoji of anya pointing"}
                    className="inline"
                  />
                  Join Here:{" "}
                  <a
                    title="Link"
                    href="http://tx.ag/taoserver"
                    target="_blank"
                    rel="noopener"
                    className="text-maroon underline"
                  >
                    tx.ag/taoserver
                  </a>
                </strong>
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                To <span className="text-[#ba372a]">current 102 students</span>,
                please read the following to get your ENGR102 and prof-specific
                role:
              </strong>
            </p>
            <p>
              Join the server, follow onboarding, and navigate to{" "}
              <Image
                src={"/announcements/select-roles.png"}
                width={175}
                height={40}
                alt={
                  "screenshot of the select-roles channel on the TAO discord server"
                }
                className="inline mx-2 -translate-y-1 rounded-md"
              />
              !
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>
                To <span className="text-[#ba372a]">current Peer Teachers</span>
                , please read the following to get your PT role:
              </strong>
            </p>
            <p>
              <span> Please verify your identity by sending an email to </span>
              <a
                href="mailto:taoengr@gmail.com"
                target="_blank"
                rel="noopener"
                className="text-maroon underline"
              >
                taoengr@gmail.com
              </a>
              <span>. This email must come from the </span>
              <strong>
                <span>
                  same email you used to register for your PT time slots
                </span>
              </strong>
              <span>. This email must also contain the following:</span>
            </p>
            <ul className="-translate-y-2 ml-6 list-disc">
              <li>
                <span>
                  A picture of your student ID (the UIN does not need to show)
                </span>
              </li>
              <li>
                <span>
                  Your exact Discord name (not your nickname in server, your
                  actual username)
                </span>
              </li>
              <li>
                <span>The course(s) that you work for</span>
              </li>
            </ul>
            <p>
              <span>You will get the following roles after verification:</span>
            </p>
            <ul className="-translate-y-2 ml-2">
              <li className="mb-2">
                <Badge className="bg-red-950 -translate-y-[0.5px]">
                  A general PT role
                </Badge>
              </li>
              <li className="flex gap-2">
                <Badge className="bg-sky-500 -translate-y-[0.5px]">
                  PT roles for the class(es) you help teach
                </Badge>{" "}
              </li>
            </ul>
            <p>&nbsp;</p>
            <p>
              <strong>
                To our <span className="text-[#ba372a]">Professors</span>,
                please read the following to get your Prof role:
              </strong>
            </p>
            <p>
              <em>
                All profs are welcome to join, currently Dr. Ritchey, Dr.
                Cahill, Dr. Spears, and more all have presences on our server!{" "}
              </em>
            </p>
            <p>
              Please DM{" "}
              <Badge className="bg-maroon -translate-y-[0.5px]">@ryankbr</Badge>{" "}
              on Discord, or send an email to{" "}
              <a
                href="mailto:taoengr@gmail.com"
                target="_blank"
                rel="noopener"
                className="text-maroon underline"
              >
                taoengr@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:snritchey@tamu.edu"
                target="_blank"
                rel="noopener"
                className="text-maroon underline"
              >
                snritchey@tamu.edu
              </a>{" "}
              with your Discord Handle!
            </p>
            <p>You will get the following role after verification:</p>
            <ul className="-translate-y-2 ml-2">
              <li className="mb-2">
                <Badge className="bg-ashyBlue -translate-y-[0.5px]">
                  Professor role
                </Badge>
              </li>
              <li className="flex gap-2">
                <div>
                  <Badge className="bg-blue-400 whitespace-nowrap -translate-y-[0.5px]">
                    Staff role
                  </Badge>
                </div>{" "}
                (if applicable, this is for lab coordinators)
              </li>
            </ul>
            <p>&nbsp;</p>
            <h3>
              🆕<strong> </strong>
              <span>
                <strong>If you&apos;re new to Discord</strong> check out this{" "}
                <a
                  href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
                  target="_blank"
                  rel="noopener"
                >
                  link
                </a>{" "}
                or navigate to our{" "}
                <Image
                  src={"/announcements/new-to-discord.png"}
                  width={175}
                  height={40}
                  alt={
                    "screenshot of the new-to-discord channel on the TAO discord server"
                  }
                  className="inline mx-2 -translate-y-1 rounded-md"
                />
                channel on our{" "}
                <a href="http://tx.ag/taoserver" target="_blank" rel="noopener">
                  server
                </a>
                !
              </span>
            </h3>
            <hr className="bg-gray-400 h-[2px] my-6" />
            <p>
              Formally, this server his hosted by TAO, the{" "}
              <strong>
                <a
                  href="http://bento.me/engrtao"
                  target="_blank"
                  rel="noopener"
                >
                  Engineering TA Organization
                </a>
              </strong>
              , which is the student organization that coordinates the reviews,
              review material, discord server, ETAM essay reviews, and much more
              for all of ENGR 102 and ENGR/PHYS 216, and 217.
            </p>
            <p>
              <span className="text-[#ba372a] text-lg">
                <strong>Learn more about TAO below!</strong>
              </span>
              <strong></strong>
            </p>
            <p>
              <strong className="flex gap-2 items-center">
                <FaGlobe className="text-sky-400" />
                Website:{" "}
                <a href="http://engrtao.tech/" target="_blank" rel="noopener">
                  engrtao.tech
                </a>
              </strong>
            </p>
            <p>
              <em>
                TAO&apos;s website with links to review materials and so on.
              </em>
            </p>
            <p>
              <strong className="flex gap-2 items-center">
                <FaDiscord className="text-indigo-600" />
                Discord:{" "}
                <a
                  className="text-gray-600"
                  href="http://tx.ag/taoserver"
                  target="_blank"
                  rel="noopener"
                >
                  tx.ag/taoserver
                </a>
              </strong>
            </p>
            <p>
              <em>
                This is our main hub of communication and operations whether it
                is during the school year or after, join us! We use Discord
                because it is the most popular platform for communication within
                Texas A&amp;M for engineering courses and organizations. (Trust
                me, you will eventually need Discord!)
              </em>
            </p>
            <p>
              <strong className="flex gap-2 items-center">
                <ImLinkedin className="text-blue-600" />
                Discord:{" "}
                <a
                  className="text-gray-600"
                  title="Link"
                  href="https://www.linkedin.com/company/engr-tao/"
                  target="_blank"
                  rel="noopener"
                >
                  linkedin.com/company/engr-tao
                </a>
              </strong>
            </p>
            <p>
              <em>
                Feel free to connect with the TAO leadership and engage with our
                posts. If you are a TAO Head PT, VIP, or member (in our server),
                feel free to add this position to your organization section or
                experience section and request endorsements!
              </em>
            </p>
            <p>
              <strong className="flex gap-2 items-center">
                <RiInstagramFill className="text-purple-800" />
                Instagram:{" "}
                <a
                  className="text-gray-600"
                  href="https://www.instagram.com/tamutao/"
                  target="_blank"
                  rel="noopener"
                >
                  @tamutao
                </a>
              </strong>
            </p>
            <p>
              <em>
                We post flyers and highlights throughout the year with helpful
                reminders for ENGR courses and TAO events.
              </em>
            </p>
            <p>
              <strong className="flex gap-2 items-center">
                <BsYoutube className="text-red-700" />
                YouTube:{" "}
                <a
                  className="text-gray-600"
                  title="Link"
                  href="https://www.youtube.com/@engrtao"
                  target="_blank"
                  rel="noopener"
                >
                  youtube.com/@engrtao
                </a>
              </strong>
            </p>
            <p>
              <em>
                We will be posting topic and exam review recordings on YouTube
                for students to view.
              </em>
            </p>
            <p>&nbsp;</p>
            <p>
              <em>- President Ryan &amp; Your TAO Team</em>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
