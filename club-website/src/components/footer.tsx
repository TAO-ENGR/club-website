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

export default function Footer()
{
    return (
        <main className="items-start justify-between grid grid-cols-2 md:grid-cols-5 p-8 ps-12 pe-12 md:p-24 md:ps-32 md:pe-32 gap-12">
            <div className="md:row-span-2 col-span-2" id="logo_address">
                <img id="logo" src="lightLogo.png"/>
                <p>
                    ZACH 420 - 125 Spence St, College Station, TX 77843, United States<br/>
                    <br/>
                    2023 © ENGR TA Organization
                </p>
            </div>

            <div id="about">
                    <p>
                    <b><Link href="/about" className="hover:text-maroon">About</Link></b><br/>
                    <Link href="/about/#impact" className="hover:text-maroon">Impact</Link><br/>
                    <Link href="/about/#officers" className="hover:text-maroon">Officers</Link><br/>
                    -
                    </p>
            </div>

            <div className="md:row-start-2 md:col-start-3" id="resources">
                <p>
                    <b><Link href="/" className="hover:text-maroon">Resources</Link></b><br/>
                    {/* <Link href="/">ENGR 102</Link><br/> */}
                    <Link href="/" className="hover:text-maroon">ENGR 216</Link><br/>
                    <Link href="/" className="hover:text-maroon">Miscellaneous</Link><br/>
                    -
                </p>
            </div>

            <div id="landing">
                <p>
                <b><Link href="/home" className="hover:text-maroon">Landing</Link></b><br/>
                <Link href="/announcements" className="hover:text-maroon">Announcements</Link><br/>
                <Link href="/announcements/#upcoming" className="hover:text-maroon">Upcoming</Link><br/>
                <Link href="/calendar" className="hover:text-maroon">Calendar</Link><br/>
                -
                </p>
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
