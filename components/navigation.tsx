"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = decodeURIComponent(usePathname());
    // console.log(path);
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home {path === "/" ? "🔥" : ""}</Link>
                </li>
                <li>
                    <Link href="/about-us">AboutUs {path === "/about-us" ? "🔥" : ""}</Link>
                </li>
            </ul>
        </nav>
    )
}