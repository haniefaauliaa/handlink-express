import Link from "next/link";
import { ReactNode } from "react";

interface ButtonLinkProps {
    className?: string;
    href: string;
    children: ReactNode;
}

export default function ButtonLink({
    className,
    href,
    children,
}: ButtonLinkProps) {
    return (
        <Link href={href} type="button" passHref>
            <button
                type="button"
                className={`inline-block rounded-2xl bg-blue-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-blue-600 active:scale-[.98] lg:text-lg xl:text-3xl ${className}`}
            >
                {children}
            </button>
        </Link>
    );
}
