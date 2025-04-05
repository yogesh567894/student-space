// src/app/layout.tsx
import localFont from 'next/font/local';
import "./globals.css";
import Link from "next/link";


{/*const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});*/}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
         <ul>
            <li><Link href="/">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/student">Student</Link></li>
            <li><Link href="/teacher">Teacher</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/super-admin">Super Admin</Link></li>
            <li><Link href="/student-dash">Dashboard</Link></li>

          </ul>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
