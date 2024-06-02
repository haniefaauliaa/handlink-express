"use client";
import { Montserrat } from "next/font/google";
import Navlink from "./Navlink";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonNavbar from "./ButtonNavbar";
import { MenuAltRight } from "./svgs";
import { X } from "./svgs";
import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat", 
});

export default function Navbar() {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    useEffect(() => {
        if (active) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [active]);

    return (
        <>
            <header
                className={`sticky top-0 z-[51] ${montserrat.className} border-b-4 bg-white font-medium text-black`}
            >
                <nav className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-6 p-6 md:flex-row md:px-12">
                    <div className="flex flex-1 justify-between gap-6">
                        <div className="flex items-center">
                            <Link href={"/"}>
                                <Image
                                    src="/handlink-express.svg"
                                    alt="Handlink Express' Logo"
                                    width={256}
                                    height={60}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-4">
                                <Navlink href="/">Home</Navlink>
                                <Navlink href="/service">Service</Navlink>
                                <Navlink href="/about">About</Navlink>
                                <Navlink href="/contact">Contact</Navlink>
                            </div>
                        </div>
                        <div className="flex items-center md:hidden">
                            <ButtonNavbar onClick={toggleActive}>
                                {active ? <X /> : <MenuAltRight />}
                            </ButtonNavbar>
                        </div>
                    </div>
                </nav>
            </header>
            <div
                className={`${
                    montserrat.className
                } fixed left-0 right-0 z-50 transform overflow-x-hidden overflow-y-scroll transition-transform duration-300 ease-in-out ${
                    active
                        ? "top-[92px] translate-y-0"
                        : "top-0 -translate-y-full"
                } md:hidden`}
            >
                <div className="flex h-[calc(100vh-92px)] w-screen max-w-screen-lg flex-1 flex-col bg-white p-4">
                    <Navlink href="/" onClick={toggleActive}>
                        Home
                    </Navlink>
                    <Navlink href="/service" onClick={toggleActive}>
                        Service
                    </Navlink>
                    <Navlink href="/about" onClick={toggleActive}>
                        About
                    </Navlink>
                    <Navlink href="/contact" onClick={toggleActive}>
                        Contact
                    </Navlink>
                </div>
            </div>
        </>
    );
}
