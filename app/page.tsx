import { IconExample } from "../src/components/ui/IconExample";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-background">
      <div className="container mx-auto p-8">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h1 className="text-52-bold text-text-primary text-center">
            Sistema de Íconos HolaEmma
          </h1>
          <div className="text-16-regular text-text-secondary text-center max-w-2xl">
            <p>Sistema centralizado de íconos usando lucide-react con tokens CSS predefinidos.</p>
            <p>Todos los íconos heredan el color por currentColor y usan tamaños tokenizados.</p>
          </div>
        </div>
        
        <IconExample />
      </div>
    </main>
  );
}