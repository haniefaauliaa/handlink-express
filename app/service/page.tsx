import Image from "next/image";
import minitutor from "/public/images/mini-tutor.png";
import Link from "next/link";

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-white">
            <div className="container mx-auto flex min-h-[calc(100vh-92px)] flex-col items-center gap-6 p-6 md:gap-12 md:py-24 lg:flex-row lg:gap-24">
                <div className="relative h-fit w-full overflow-hidden md:flex-1">
                    <Image
                        src={minitutor} 
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        alt="Laptop"
                        priority
                    />
                </div>
                <div className="flex flex-1 flex-col gap-6 lg:gap-10">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-bold leading-relaxed md:text-3xl md:leading-relaxed">
                            Easily convert handwritten text into digital
                            documents with{" "}
                            <span className="rounded-lg bg-blue-600 px-2 py-1 text-white">
                                HandInk&nbsp;Express
                            </span>
                        </h1>
                        <p className="leading-relaxed md:text-lg md:leading-relaxed">
                            our platform transforms your handwritten notes,
                            sketches, or diagrams into editable text files
                            effortlessly.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="rounded-full bg-beige-500 px-2 font-semibold md:text-lg">
                            Seamless Conversion
                        </div>
                        <div className="rounded-full bg-beige-500 px-2 font-semibold md:text-lg">
                            Secure and Reliable
                        </div>
                        <div className="rounded-full bg-beige-500 px-2 font-semibold md:text-lg">
                            Intuitive Interface
                        </div>
                    </div>
                    <div className="group relative flex w-fit flex-col">
                        <div className="absolute bottom-0 left-0 right-0 top-0 flex-1 origin-bottom scale-x-95 scale-y-[.1] bg-blue-500 transition-all ease-out group-hover:scale-x-100 group-hover:scale-y-100 group-active:scale-95"></div>
                        <Link
                            className="text-md relative font-bold transition-all ease-out group-hover:px-4 group-hover:text-white md:text-lg"
                            href={"/upload"}
                        >
                            Convert Now!
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
