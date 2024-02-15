"use client"
import { createContext, ReactNode } from "react";

const SearchContext = createContext('');
const UserContext = createContext({});

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <UserContext.Provider value="">
            <SearchContext.Provider value="">
                {children}
            </SearchContext.Provider>
        </UserContext.Provider>

    )
};
