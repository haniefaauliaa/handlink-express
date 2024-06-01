import ButtonLink from "./components/ButtonLink";
import Image from "next/image";

export default function Page() {
    return (
        <main className="relative overflow-hidden bg-blue-100">
            <div className="absolute -left-24 -top-24 z-0 size-[572px] rounded-full bg-blue-300 opacity-10"></div>
            <div className="absolute left-24 top-1/2 z-0 size-[102px] -translate-y-1/2 rounded-full bg-blue-300 opacity-15"></div>
            <div className="absolute -bottom-24 -right-48 z-0 size-[911px] rounded-full bg-blue-300 opacity-10"></div>
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] items-center justify-center p-6 md:py-24">
                <div className="h-full w-fit p-6 md:relative md:h-fit md:p-24 md:px-48">
                    <Image
                        className="absolute left-0 top-0 -scale-x-[1] transform object-cover opacity-30 grayscale filter"
                        src="/images/handwritten.png"
                        fill
                        alt="Handwritten"
                        priority
                    />
                    <div className="relative flex flex-col items-center justify-center gap-12 xl:gap-24">
                        <div className="flex max-w-[1000px] flex-col gap-12">
                            <h1 className="text-center text-2xl font-medium leading-relaxed md:text-3xl md:leading-relaxed xl:text-5xl xl:leading-relaxed">
                                Your Handwriting to Document Converter
                                Experience the Power of{" "}
                                <span className="rounded-lg bg-beige-500 px-2 py-1">
                                    OCR&nbsp;Technology
                                </span>
                            </h1>
                            <p className="text-center leading-relaxed md:text-lg md:leading-relaxed xl:text-[32px] xl:leading-relaxed">
                                Experience the convenience of turning your
                                handwritten notes into digital documents with{" "}
                                <span className="font-medium">
                                    HandInk Express&apos;
                                </span>
                            </p>
                        </div>
                        <ButtonLink href="/">Get Started Today!</ButtonLink>
                    </div>
                </div>
            </div>
        </main>
    );
}
