"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavlinkProps {
    className?: string;
    href: string;
    onClick?: () => void;
    children: ReactNode;
}

export default function Navlink({
    className,
    href,
    onClick,
    children,
}: NavlinkProps) {
    const pathname = usePathname();

    return (
        <Link
            className={`inline-block px-4 py-2 transition-all duration-300 ease-out md:rounded-lg ${pathname === href ? "text-blue-500" : ""} hover:bg-slate-200 ${className}`}
            href={href}
            onClick={onClick}
        >
            {children}
        </Link>
    );
}
