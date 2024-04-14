import Link from 'next/link'
import { poppins } from "./fonts";
 
export default function NotFound() {
  return (
    <div>
      <h2 className='text-lg font-bold uppercase' style={poppins.style}>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}