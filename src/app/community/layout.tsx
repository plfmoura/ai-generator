import "../globals.css";
import { Inter } from "next/font/google";
import { NavTop } from "@/components/layout/nav-top";
import { NavBottom } from "@/components/layout/nav-bottom";

const inter = Inter({ subsets: ["latin"] });

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <NavTop />
        <div className="bg-black">{children}</div>
        <NavBottom />
      </body>
    </html>
  );
}
