import Image from "next/image";
import notebook from "/public/images/notebook.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-white">
            <div className="container mx-auto flex min-h-[calc(100vh-92px)] flex-col gap-6 p-6 md:gap-24 md:px-12 md:py-24">
                <div className="flex justify-center">
                    <div className="flex max-w-screen-md flex-col items-center gap-6">
                        <h1 className="mx-auto rounded-2xl bg-blue-600 px-6 py-2 text-center text-xl font-bold leading-relaxed text-white sm:text-2xl md:text-3xl md:leading-relaxed">
                            ABOUT US
                        </h1>
                        <p className="text-center leading-relaxed md:text-lg md:leading-relaxed">
                            Welcome to HandInk Express, where we bring together
                            the power of handwritten expression and cutting-edge
                            technology.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-24">
                    <div className="relative w-full flex-1 overflow-hidden rounded-xl">
                        <Image
                            className="opacity-80 grayscale-[0.6] filter"
                            src={notebook}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            alt="Laptop"
                            priority
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 lg:gap-6">
                        <h1 className="text-xl font-bold md:text-3xl">
                            What We Offer
                        </h1>
                        <p className="leading-relaxed md:text-lg md:leading-relaxed">
                            <b>HandInk Express</b> integrates advanced OCR
                            (Optical Character Recognition) technology into its
                            platform, enabling users to convert handwritten text
                            from images or URLs into editable documents
                            effortlessly. Whether you&apos;re a student taking
                            notes, a professional capturing ideas, or an artist
                            showcasing your work, HandInk Express provides the
                            tools you need to digitize and enhance your
                            handwritten content.
                        </p>
                        <div className="group relative flex w-fit flex-col">
                            <div className="absolute bottom-0 left-0 right-0 top-0 flex-1 origin-bottom scale-x-95 scale-y-[.1] bg-blue-500 transition-all ease-out group-hover:scale-x-100 group-hover:scale-y-100 group-active:scale-95"></div>
                            <Link
                                className="text-md relative font-bold transition-all ease-out group-hover:px-4 group-hover:text-white md:text-lg"
                                href={"#"}
                            >
                                Learn More!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
