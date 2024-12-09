"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {


    let linkDisabledStyle = "text-gray-400";
    let linkEnabledStyle = "mx-32 active:text-orange-100 text-orange-300 hover:text-orange-200";
    let homeLinkStyle = linkEnabledStyle;
    let availableLinkStyle = linkEnabledStyle;
    let historyLinkStyle = linkEnabledStyle;
    let accountLinkStyle = linkEnabledStyle;

    // console.log(window.location.pathname);

    useEffect(() => {
        console.log("Pathname", window.location.pathname);
        if (window.location.pathname = "/home") {
            homeLinkStyle = linkDisabledStyle;
        }
        else if (window.location.pathname = "/available") {
            availableLinkStyle = linkDisabledStyle;
        }
        else if (window.location.pathname = "/history") {
            historyLinkStyle = linkDisabledStyle;
        }
        else if (window.location.pathname = "/account") {
            accountLinkStyle = linkDisabledStyle;
        }
      }, []);

    return (
        <header className = "text-center mt-10">
            <ul className="text-2xl flex flex-row justify-center">
                <li className={availableLinkStyle}><Link href="/available">Available</Link></li>
                <li className={historyLinkStyle}><Link href="/history">History</Link></li>
                <li className={accountLinkStyle}><Link href="/account">Account</Link></li>
            </ul>
        </header>
    );
}
