"use client"
import { createContext, ReactNode, useContext, useState } from "react";

const SearchContext = createContext([]);
const UserContext = createContext({});
const ModalContext = createContext([]);

export default function Providers({ children }: { children: ReactNode }) {
    const [inputData, setInputData] = useState('');
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <UserContext.Provider value={[user, setUser]}>
            <SearchContext.Provider value={[inputData, setInputData]}>
                <ModalContext.Provider value={[isModalOpen, setIsModalOpen]}>
                    {children}
                </ModalContext.Provider>
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

export function useModalContext() {
    return useContext(ModalContext);
};
