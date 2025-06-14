import { Button } from "@heroui/react";

export function NavTop() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full flex items-center justify-between px-4 py-3 bg-zinc-900 shadow-2xl">
      <div className="flex items-center gap-2">
        <span
          className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full"
          aria-label="Logo"
        />
        <span className="text-base font-medium text-white">Midjourney</span>
      </div>
      <Button
        size="sm"
        radius="full"
        color="primary"
        aria-label="Upgrade Plan"
      >
        Upgrade Plan
      </Button>
    </header>
  );
}
