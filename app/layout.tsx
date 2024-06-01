import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "HandInk Express'",
    description:
        "Experience the convenience of turning your handwritten notes into digital documents with HandInk Express'",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
