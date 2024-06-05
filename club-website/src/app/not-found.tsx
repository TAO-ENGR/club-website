import Link from 'next/link'
import { poppins } from "./fonts";
 
export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 gap-12'>
      <h2 className='text-lg font-bold uppercase' style={poppins.style}>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}