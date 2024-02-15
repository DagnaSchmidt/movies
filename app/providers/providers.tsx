"use client"
import { createContext, ReactNode, useContext, useState } from "react";

const SearchContext = createContext([]);
const UserContext = createContext({});

export default function Providers({ children }: { children: ReactNode }) {
    const [inputData, setInputData] = useState('');

    return (
        <UserContext.Provider value="">
            <SearchContext.Provider value={[inputData, setInputData]}>
                {children}
            </SearchContext.Provider>
        </UserContext.Provider>
    )
};

export function useUserContext() {
    return useContext(UserContext);
};

export function useSearchContext() {
    return useContext(SearchContext);
};
