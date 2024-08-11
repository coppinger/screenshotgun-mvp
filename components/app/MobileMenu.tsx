import React from "react";

export function MobileFooter() {
    return (
        <>
            <menu>
                <ul className="flex justify-between">
                    <li>
                        <a href="#">Capture</a>
                    </li>
                    <li>
                        <a href="#">History</a>
                    </li>
                    <li>
                        <a href="#">Billing</a>
                    </li>
                    <li>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </menu>
        </>
    );
}
