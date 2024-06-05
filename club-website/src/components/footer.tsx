import Image from 'next/image'
import { RiDriveLine, RiDiscordLine, RiMailLine, RiLinkedinBoxLine, RiYoutubeLine, RiGithubLine, RiInstagramLine} from "react-icons/ri"
import Link from "next/link"

const LINKS = [

    {
        link: 'https://tx.ag/taoserver',
        icon: <RiDiscordLine/>
    },
    {
        link: 'https://www.linkedin.com/company/engr-tao/',
        icon: <RiLinkedinBoxLine/>
    },
    {
        link: 'https://drive.google.com/drive/folders/128TePaIK-zwts9vzNhZfj3_mJ3IH_L9d?usp=sharing',
        icon: <RiDriveLine/>
    },
    {
        link: 'mailto:taoengr@gmail.com',
        icon: <RiMailLine/>
    },
    {
        link: 'https://www.youtube.com/@ENGRTAO',
        icon: <RiYoutubeLine/>
    },
    {
        link: 'https://github.com/TAO-ENGR',
        icon: <RiGithubLine/>
    },
    {
        link: 'https://www.instagram.com/tamutao/',
        icon: <RiInstagramLine/>
    },
]

// Frontend Details
//  Colors (Tailwind)
//      maroon: "#731b1d"
//      darkMaroon: "#4d0000"
//      weirdGray: "#272a29"
//      ashyBlue: "#3c4c68"
//      lightBlue: "#4d8f9f"
//  Page Layout
//      24 pixel padding around whole page with 12 pixel gap between sections
/*
        import Image from "next/image";

        export default function Example() {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">

            </main>
        );
        }
*/
//  Fonts
//      Headers are Poppins XL Bold All-Caps
//      <h2 className='text-xl font-bold uppercase' style={poppins.style}>Example</h2>
//      Body text is Inter

export default function Footer()
{
    return (
        <main className="flex flex-row items-start justify-between p-24 ps-32 pe-32 gap-12">
            <div id="logo_address">
                <Image id="logo" src="/lightLogo.png" alt="" className="w-1/2 h-1/2" width="300" height="300"></Image>
                <p>
                    &nbsp;&nbsp;ZACH 420 - 125 Spence St, College<br/>
                    &nbsp;&nbsp;Station, TX 77843, United States<br/>
                    <br/>
                    &nbsp;&nbsp;2024 © ENGR TA Organization
                </p>
            </div>

            <div id="about_resources" className='flex flex-col'>
                <Link href="/about" className="hover:text-maroon font-bold">About</Link>
                <Link href="/about/#impact" className="hover:text-maroon">Impact</Link>
                <Link href="/about/#officers" className="hover:text-maroon">Officers</Link>
                <p>-</p>
                <Link href="/resources" className="hover:text-maroon font-bold">Resources</Link>
                {/* <Link href="/">ENGR 102</Link><br/> */}
                <Link href="/" className="hover:text-maroon">ENGR 216</Link>
                <Link href="/" className="hover:text-maroon">Miscellaneous</Link>
                <p>-</p>
            </div>

            <div id="landing" className='flex flex-col'>
                <Link href="/home" className="hover:text-maroon font-bold">Landing</Link>
                <Link href="/announcements" className="hover:text-maroon">Announcements</Link>
                <Link href="/announcements" className="hover:text-maroon">Upcoming</Link>
                <Link href="/calendar" className="hover:text-maroon">Calendar</Link>
                <p>-</p>
            </div>

            <div id="contact" className='flex flex-col'>
                <p><b>Contact</b><br/></p>
                <a href="mailto:taoengr@gmail.com" target="_blank" className="hover:text-maroon"><div className="flex gap-2 items-center"><RiMailLine/>taoengr@gmail.com</div></a>
                <a href="https://www.linkedin.com/company/engr-tao/" target="_blank" className="hover:text-maroon"><div className="flex gap-2 items-center"><RiLinkedinBoxLine/>engr-ta-org</div></a>
                <a href="https://www.youtube.com/@ENGRTAO" target="_blank" className="hover:text-maroon"><div className="flex gap-2 items-center"><RiYoutubeLine/>YouTube</div></a>
                <a href="https://github.com/TAO-ENGR" target="_blank" className="hover:text-maroon"><div className="flex gap-2 items-center"><RiGithubLine/>TAO-ENGR</div></a>
                <p>-</p>
            </div>
        </main>
    )
}
