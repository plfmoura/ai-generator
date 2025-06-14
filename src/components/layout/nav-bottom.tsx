"use client";

import { usePathname, useRouter } from "next/navigation";
import ChatForm from "../shared/chat-form";
import { Button } from "@heroui/react";

const navItems = [
  {
    route: "/generator",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
        <path d="M3 14l4-4 8 8" stroke="currentColor" />
        <path d="M13 12l4-4 4 4" stroke="currentColor" />
        <circle cx="16" cy="7" r="1.5" stroke="currentColor" />
      </svg>
    ),
    label: "Gerador",
  },
  {
    route: "/community",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <path
          d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"
          stroke="currentColor"
        />
      </svg>
    ),
    label: "Comunidade",
  },
  {
    route: "/profile",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="8" r="4" stroke="currentColor" />
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="currentColor" />
      </svg>
    ),
    label: "Perfil",
  },
];

export function NavBottom() {
  const pathname = usePathname();
  const router = useRouter();
  const isGenerator = pathname === "/generator";

  function handleNav(route: string) {
    if (route !== pathname) router.push(route);
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full z-10 bg-zinc-900 rounded-t-2xl shadow-2xl flex flex-col items-center py-2 px-4">
      {isGenerator && <ChatForm />}
      <div className="flex justify-around items-center w-full max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname.includes(item.route);
          return (
            <Button
              key={item.route}
              onPress={() => handleNav(item.route)}
              className={`flex flex-col items-center justify-center transition-colors ${
                isActive
                  ? "text-indigo-400"
                  : "text-zinc-400 hover:text-indigo-300"
              }`}
              variant="light"
              radius="full"
              aria-label={item.label}
              isIconOnly
            >
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isActive ? "bg-zinc-800" : ""
                }`}
              >
                {item.icon}
              </span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
