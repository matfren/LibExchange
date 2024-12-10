"use client"

import Link from "next/link";
import { useState, useEffect } from "react";


export default function NavBar() {

    // Styles for links. pointer-event-none disables a link from working when on the corresponding page.
    let linkDisabledStyle = "mx-32 text-gray-400 pointer-events-none";
    let linkEnabledStyle = "mx-32 active:text-orange-100 text-orange-300 hover:text-orange-200";
    let homeLinkStyle = linkEnabledStyle;
    let availableLinkStyle = linkEnabledStyle;
    let historyLinkStyle = linkEnabledStyle;
    // let accountLinkStyle = linkEnabledStyle;


    // Check the current page the user is on.
    const [path, setPath] = useState(null);
    
    useEffect(() => {
        setPath(window.location.pathname);
    }, []);

    // If the user is already on the corresponding page then disable the link.
    if (path === "/home") {
        homeLinkStyle = linkDisabledStyle;
    }
    else if (path === "/available") {
        availableLinkStyle = linkDisabledStyle;
    }
    // else if (path === "/history") {
    //     historyLinkStyle = linkDisabledStyle;
    // }
    // else if (path === "/account") {
    //     accountLinkStyle = linkDisabledStyle;
    // }
  
    return (
        <header className = "text-center mt-10 pb-3 border-b-2 border-amber-900 border-opacity-50 font-mono">
            <ul className="text-2xl flex flex-row justify-center">
                <li className={homeLinkStyle}><Link href="/home">Home</Link></li>
                <li className={availableLinkStyle}><Link href="/available">Available</Link></li>
                {/* <li className={historyLinkStyle}><Link href="/history">History</Link></li> */}
                {/* <li className={accountLinkStyle}><Link href="/account">Account</Link></li> */}
            </ul>
        </header>
    );
}
