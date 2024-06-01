import Image from "next/image";
import Link from "next/link";
import laptop from "/public/images/laptop.png";
import ButtonEmail from "../components/ButtonEmail";

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-white">
            <div className="flex min-h-[calc(100vh-92px)] flex-col justify-between">
                <div>
                    <div className="container mx-auto flex flex-col gap-6 p-6 md:px-12 md:py-24">
                        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-24">
                            <div className="order-2 flex flex-1 flex-col gap-4 lg:order-1 lg:gap-6">
                                <h1 className="text-xl font-bold md:text-3xl">
                                    Our Mission
                                </h1>
                                <p className="leading-relaxed md:text-lg md:leading-relaxed">
                                    At <b>HandInk Express</b>, we&apos;re
                                    passionate about bridging the gap between
                                    the traditional art of handwriting and the
                                    digital world. Our mission is to make
                                    handwritten content more accessible,
                                    editable, and interactive, empowering
                                    individuals and businesses to unleash their
                                    creativity without limitations.
                                </p>
                            </div>
                            <div className="relative order-1 w-full flex-1 overflow-hidden rounded-xl">
                                <Image
                                    className="opacity-80 grayscale-[0.6] filter"
                                    src={laptop}
                                    sizes="100vw"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    alt="Laptop"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end lg:gap-24">
                            <p className="text-md flex-1 font-bold leading-relaxed text-blue-500 md:text-xl md:leading-relaxed">
                                Thank you for choosing HandInk Express where
                                handwriting meets innovation.
                            </p>
                            <div className="flex flex-1 justify-end">
                                <div className="group relative flex w-fit flex-col">
                                    <div className="absolute bottom-0 left-0 right-0 top-0 flex-1 origin-bottom scale-x-95 scale-y-[.1] bg-blue-500 transition-all ease-out group-hover:scale-x-100 group-hover:scale-y-100 group-active:scale-95"></div>
                                    <Link
                                        className="text-md relative font-bold transition-all ease-out group-hover:px-4 group-hover:text-white md:text-lg"
                                        href={"#"}
                                    >
                                        Let&apos;s Convert!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-600">
                        <div className="container mx-auto flex flex-col gap-4 p-6 text-white md:gap-6 md:p-12">
                            <p className="text-md leading-relaxed md:text-xl">
                                Have questions or feedback? We&apos;d love to
                                hear from you! Reach out to our team at contact
                                for assistance.
                            </p>
                            <ButtonEmail
                                href="#"
                                email="handink.xpress@gmail.com"
                            />
                        </div>
                    </div>
                </div>
                <footer className="border-t-2 bg-white text-gray-500">
                    <div className="mx-auto flex max-w-screen-2xl flex-col justify-between gap-4 px-6 py-4 text-center md:flex-row md:text-start">
                        <div className="gap flex flex-col items-center gap-4 md:flex-row">
                            <Link
                                className="transition-all ease-out hover:text-blue-500"
                                href={"#"}
                            >
                                Term & Condition
                            </Link>
                            <span className="hidden md:block">|</span>
                            <Link
                                className="transition-all ease-out hover:text-blue-500"
                                href={"#"}
                            >
                                Privacy Policy
                            </Link>
                            <span className="hidden md:block">|</span>
                            <Link
                                className="transition-all ease-out hover:text-blue-500"
                                href={"#"}
                            >
                                Policies
                            </Link>
                        </div>
                        <p className="md:text-end">
                            ©{new Date().getFullYear()} HandInk Express All
                            Rights reserved
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
