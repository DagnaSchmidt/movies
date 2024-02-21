import "../styles/global.css";
import { merriweather } from "./fonts";

//components
import TopNav from "../components/navs/topNav/topNav";
import BottomNav from "../components/navs/bottomNav/bottomNav";
import FollowUsSection from "../components/sections/home/followUsSection";

//providers
import Providers from "./providers/providers";
import LoginModal from "../components/login/loginModal";

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
                <Providers>
                    <div className="bg-black flex flex-col items-center relative">
                        <TopNav />
                        {children}
                        <FollowUsSection />
                        <BottomNav />
                        <LoginModal />
                    </div>
                </Providers>
            </body>
        </html>
    );
};
