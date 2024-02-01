import "../styles/global.css";
import { merriweather } from "./fonts";

//components
import TopNav from "../components/navs/topNav/topNav";
import BottomNav from "../components/navs/bottomNav/bottomNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                <div className="bg-black flex justify-center">
                    <TopNav />
                    {children}
                </div>
                <BottomNav />
            </body>
        </html>
    );
};
