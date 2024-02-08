import "../styles/global.css";
import { merriweather } from "./fonts";

//components
import TopNav from "../components/navs/topNav/topNav";
import BottomNav from "../components/navs/bottomNav/bottomNav";

export const metadata = {
    title: 'Movies4you',
    description: 'Website with movies database.'
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={merriweather.className}>
                <div className="bg-black flex flex-col justify-center relative">
                    <TopNav />
                    {children}
                    <BottomNav />
                </div>
            </body>
        </html>
    );
};
