import { Button } from "@heroui/react";
import React from "react";

export default function StartCTA() {
  return (
    <div className="w-full absolute bottom-0 flex flex-col items-center gap-6 mt-8 mb-10 bg-gradient-to-b to-black from-transparent p-6 pt-24 rounded-lg shadow-lg">
      <h1 className="text-white text-2xl font-bold text-center leading-tight">
        Let your
        <br />
        creativity shine
      </h1>
      <Button
        className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold "
        tabIndex={0}
        aria-label="Começar"
        as="a"
        href="/generator"
        size="lg"
        radius="lg"
      >
        Get Started
      </Button>
    </div>
  );
}
