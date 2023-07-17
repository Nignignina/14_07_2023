import "@/styles/globals.css";
import DefaultLayout from "@/Layouts/defaultlayout";
import { createContext } from "react";

export const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          name: "Gino",
          age: 33,
          id: 1,
        },
        cartlist: [
          { id: 1, nproducts: 23 },
          { id: 2, nproducts: 44 },
        ],
      }}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthContext.Provider>
  );
}
