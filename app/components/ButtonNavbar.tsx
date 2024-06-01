import { ReactNode } from "react";

interface ButtonNavbarProps {
    className?: string;
    onClick: () => void;
    children: ReactNode;
}

export default function ButtonNavbar({
    className,
    onClick,
    children,
}: ButtonNavbarProps) {
    return (
        <button
            type="button"
            className={`inline-block rounded-2xl bg-blue-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-blue-600 lg:text-lg xl:text-3xl ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
