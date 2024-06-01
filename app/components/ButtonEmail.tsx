import Link from "next/link";

interface ButtonEmailProps {
    className?: string;
    href: string;
    email: string;
}

export default function ButtonEmail({
    className,
    href,
    email,
}: ButtonEmailProps) {
    return (
        <Link href={href} type="button" passHref>
            <button
                type="button"
                className={`inline-block w-full text-wrap break-words rounded-lg bg-blue-400 px-4 py-2 font-bold text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-800 active:scale-[.98] sm:w-fit lg:text-lg xl:text-3xl ${className}`}
            >
                <p>{email}</p>
            </button>
        </Link>
    );
}
