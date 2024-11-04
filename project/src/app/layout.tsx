import React from "react";
import "./globals.css";
import { Header } from "@/components/ui/header";

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return(
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout