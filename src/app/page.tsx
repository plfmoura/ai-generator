import MasonryBackground from "@/components/home/masonry-background";
import StartCTA from "@/components/home/start-cta";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between py-8 px-4">
      <MasonryBackground />
      <StartCTA />
    </main>
  );
}

export const metadata = {
  title: "Gerador de Imagens",
  description: "Crie imagens incríveis com prompts personalizados",
  openGraph: {
    title: "Gerador de Imagens",
    description: "Crie imagens incríveis com prompts personalizados",
  },
};
