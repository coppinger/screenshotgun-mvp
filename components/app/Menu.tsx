"use client";

import React from "react";
import { usePathname } from "next/navigation";

import {
    Icon,
    Camera,
    ClockCounterClockwise,
    CreditCard,
    SignOut,
} from "@phosphor-icons/react";

type MenuItems = { title: string; href: string; icon: Icon };

const menuItems: MenuItems[] = [
    { title: "capture", href: "capture", icon: Camera },
    { title: "history", href: "history", icon: ClockCounterClockwise },
    { title: "billing", href: "https://stripe.com", icon: CreditCard },
    { title: "logout", href: "logout", icon: SignOut },
];

export function AppMenu() {
    const pathname = usePathname();

    return (
        <menu className="max-w-48 w-full">
            <ul className="flex flex-col gap-8 p-8">
                {menuItems.map(({ title, href, icon: Icon }) => (
                    <li key={title}>
                        <a
                            href={href}
                            className={`flex items-center gap-4 ${
                                pathname === `/${href}` ? "font-bold" : ""
                            }`}
                        >
                            <Icon
                                weight={
                                    pathname === `/${href}` ? "bold" : "regular"
                                }
                            />
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </menu>
    );
}
