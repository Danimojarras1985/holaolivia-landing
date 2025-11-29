"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { ButtonArrow } from "@/components/ui/Button/ButtonArrow";
import { CardLanding } from "@/components/ui/landing/CardLanding/CardLanding";
import { ChipLanding } from "@/components/ui/landing/ChipLanding/ChipLanding";
import { HeaderLanding } from "@/components/ui/landing/HeaderLanding/HeaderLanding";
import { Dots } from "@/components/ui/Dots";
import { FeatureItem } from "@/components/ui/landing/FeatureItem/FeatureItem";
import { CardPreguntasFrecuentes } from "@/components/ui/landing/CardPreguntasFrecuentes/CardPreguntasFrecuentes";
import LandingHolaEmmaScreen from "@/components/screens/LandingHolaEmma";
import { ProcessAnimationContainer } from "@/components/containers/LandingHolaEmma/Process/ProcessAnimationContainer";

type ColorToken = {
  name: string;
  tailwindClass: string;
  description?: string;
};

type TokenGroup = {
  title: string;
  tokens: ColorToken[];
};

const COLOR_GROUPS: TokenGroup[] = [
  {
    title: "Brand Colors",
    tokens: [
      { name: "Primary", tailwindClass: "bg-brand-primary", description: "#29D972" },
      { name: "Primary Hover", tailwindClass: "bg-brand-primary-hover", description: "#4BEF97" },
      { name: "Primary Subtle", tailwindClass: "bg-brand-primary-subtle", description: "#163322" },
    ],
  },
  {
    title: "State Colors",
    tokens: [
      { name: "Success", tailwindClass: "bg-state-success", description: "#29D972" },
      { name: "Error", tailwindClass: "bg-state-error", description: "#F87171" },
      { name: "Warning", tailwindClass: "bg-state-warning", description: "#FACC15" },
      { name: "Info", tailwindClass: "bg-state-info", description: "#60A5FA" },
    ],
  },
  {
    title: "Border Colors",
    tokens: [
      { name: "Default", tailwindClass: "bg-border-default", description: "#2E2E2E" },
      { name: "Subtle", tailwindClass: "bg-border-subtle", description: "rgb(26 26 26 / 0.12)" },
    ],
  },
  {
    title: "Surface Colors",
    tokens: [
      { name: "Background", tailwindClass: "bg-surface-background", description: "#0B0B0B" },
      { name: "Card", tailwindClass: "bg-surface-card", description: "#1A1A1A" },
      { name: "Subtle", tailwindClass: "bg-surface-subtle", description: "#2A2A2A" },
    ],
  },
  {
    title: "Text Colors",
    tokens: [
      { name: "Primary", tailwindClass: "bg-text-primary", description: "#FFFFFF" },
      { name: "Secondary", tailwindClass: "bg-text-secondary", description: "#D1D1D6" },
      { name: "Disabled", tailwindClass: "bg-text-disabled", description: "#6E6E73" },
      { name: "Link", tailwindClass: "bg-text-link", description: "#29D972" },
      { name: "Link Hover", tailwindClass: "bg-text-link-hover", description: "#4BEF97" },
      { name: "Success", tailwindClass: "bg-text-success", description: "#29D972" },
      { name: "Error", tailwindClass: "bg-text-error", description: "#F87171" },
      { name: "Warning", tailwindClass: "bg-text-warning", description: "#FACC15" },
      { name: "Info", tailwindClass: "bg-text-info", description: "#60A5FA" },
    ],
  },
];

type SpacingToken = { name: string; value: string; tailwindClass: string };

const SPACING_TOKENS: SpacingToken[] = [
  { name: "4", value: "4px", tailwindClass: "p-4" },
  { name: "8", value: "8px", tailwindClass: "p-8" },
  { name: "12", value: "12px", tailwindClass: "p-12" },
  { name: "16", value: "16px", tailwindClass: "p-16" },
  { name: "24", value: "24px", tailwindClass: "p-24" },
  { name: "32", value: "32px", tailwindClass: "p-32" },
  { name: "36", value: "36px", tailwindClass: "p-36" },
  { name: "40", value: "40px", tailwindClass: "p-40" },
  { name: "56", value: "56px", tailwindClass: "p-56" },
  { name: "88", value: "88px", tailwindClass: "p-88" },
];

const BORDER_RADIUS_TOKENS: SpacingToken[] = [
  { name: "sm", value: "4px", tailwindClass: "rounded-sm" },
  { name: "md", value: "8px", tailwindClass: "rounded-md" },
  { name: "lg", value: "12px", tailwindClass: "rounded-lg" },
  { name: "full", value: "999px", tailwindClass: "rounded-full" },
];

const ICON_SIZE_TOKENS: SpacingToken[] = [
  { name: "icon-sm", value: "16px", tailwindClass: "w-icon-sm h-icon-sm" },
  { name: "icon-md", value: "24px", tailwindClass: "w-icon-md h-icon-md" },
  { name: "icon-lg", value: "32px", tailwindClass: "w-icon-lg h-icon-lg" },
];

const TYPOGRAPHY_TOKENS = [
  { name: "text-12-regular", example: "12px / 400" },
  { name: "text-12-medium", example: "12px / 500" },
  { name: "text-12-bold", example: "12px / 700" },
  { name: "text-14-regular", example: "14px / 400" },
  { name: "text-14-medium", example: "14px / 500" },
  { name: "text-14-bold", example: "14px / 700" },
  { name: "text-16-regular", example: "16px / 400" },
  { name: "text-16-medium", example: "16px / 500" },
  { name: "text-16-bold", example: "16px / 700" },
  { name: "text-18-regular", example: "18px / 400" },
  { name: "text-18-medium", example: "18px / 500" },
  { name: "text-18-bold", example: "18px / 700" },
  { name: "text-20-regular", example: "20px / 400" },
  { name: "text-20-medium", example: "20px / 500" },
  { name: "text-20-bold", example: "20px / 700" },
  { name: "text-34-bold", example: "34px / 700" },
  { name: "text-52-bold", example: "52px / 700" },
];

function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border-default bg-surface-card">
      <div className={`h-24 ${token.tailwindClass}`} aria-label={token.name} />
      <div className="p-12 text-14-regular flex flex-col gap-4">
        <span className="text-16-medium text-text-primary">{token.name}</span>
        <code className="text-12-regular text-text-secondary">{token.tailwindClass}</code>
        {token.description && (
          <code className="text-12-regular text-text-disabled">{token.description}</code>
        )}
      </div>
    </div>
  );
}

function SpacingDemo({ token }: { token: SpacingToken }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface-card p-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <span className="text-14-medium text-text-primary">{token.name}</span>
          <code className="text-12-regular text-text-disabled">{token.value}</code>
        </div>
        <div className="bg-surface-subtle rounded-sm">
          <div className={`${token.tailwindClass} bg-brand-primary rounded-sm`}>
            <div className="h-24" />
          </div>
        </div>
        <code className="text-12-regular text-text-secondary">{token.tailwindClass}</code>
      </div>
    </div>
  );
}

function BorderRadiusDemo({ token }: { token: SpacingToken }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface-card p-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <span className="text-14-medium text-text-primary">{token.name}</span>
          <code className="text-12-regular text-text-disabled">{token.value}</code>
        </div>
        <div className={`${token.tailwindClass} bg-brand-primary h-56 w-full`} />
        <code className="text-12-regular text-text-secondary">{token.tailwindClass}</code>
      </div>
    </div>
  );
}

function IconSizeDemo({ token }: { token: SpacingToken }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface-card p-12">
      <div className="flex flex-col items-center gap-8">
        <span className="text-14-medium text-text-primary">{token.name}</span>
        <div className={`${token.tailwindClass} bg-brand-primary rounded-sm`} />
        <div className="flex flex-col items-center gap-4">
          <code className="text-12-regular text-text-secondary">{token.tailwindClass}</code>
          <code className="text-12-regular text-text-disabled">{token.value}</code>
        </div>
      </div>
    </div>
  );
}

function TypographyDemo({ name, example }: { name: string; example: string }) {
  return (
    <div className="rounded-lg border border-border-default bg-surface-card p-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <code className="text-12-regular text-text-secondary">{name}</code>
          <code className="text-12-regular text-text-disabled">{example}</code>
        </div>
        <p className={name}>The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
}

export default function TokensColorsPage() {
  return (
    <main className="min-h-screen p-24 space-y-40 bg-surface-background">
      <header className="space-y-8">
        <h1 className="text-34-bold text-text-primary">/dev/tokens — Design System</h1>
        <p className="text-16-regular text-text-secondary">
          Tokens definidos en <code className="text-14-medium text-brand-primary">tailwind.config.js</code> como fuente única de verdad.
        </p>
        <Link 
          href="/dev/tokens/landingholaemma"
          className="text-16-medium text-text-link hover:text-text-link-hover underline block"
        >
          Ver Landing HolaEmma →
        </Link>
      </header>

      {/* Colors */}
      {COLOR_GROUPS.map((group) => (
        <section key={group.title} className="space-y-16">
          <h2 className="text-20-bold text-text-primary">{group.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {group.tokens.map((token) => (
              <ColorSwatch key={token.name} token={token} />
            ))}
          </div>
        </section>
      ))}

      {/* Spacing */}
      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Spacing Tokens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {SPACING_TOKENS.map((token) => (
            <SpacingDemo key={token.name} token={token} />
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Border Radius</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {BORDER_RADIUS_TOKENS.map((token) => (
            <BorderRadiusDemo key={token.name} token={token} />
          ))}
        </div>
      </section>

      {/* Icon Sizes */}
      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Icon Sizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          {ICON_SIZE_TOKENS.map((token) => (
            <IconSizeDemo key={token.name} token={token} />
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Typography</h2>
        <div className="grid grid-cols-1 gap-16">
          {TYPOGRAPHY_TOKENS.map((token) => (
            <TypographyDemo key={token.name} name={token.name} example={token.example} />
          ))}
        </div>
      </section>

      {/* Components */}
      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Button</h2>
        <div className="flex flex-wrap items-start gap-16">
          <Button text="Texto botón" />
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">ButtonArrow</h2>
        <div className="flex flex-wrap items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <span className="text-12-medium text-text-secondary">Left</span>
            <ButtonArrow direction="left" />
          </div>
          <div className="flex flex-col items-center gap-8">
            <span className="text-12-medium text-text-secondary">Right</span>
            <ButtonArrow direction="right" />
          </div>
        </div>
        <p className="text-14-regular text-text-secondary">
          Hover automático con bg-brand-primary-hover
        </p>
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">CardLanding</h2>
        <CardLanding
          title="Asesoría Financiera"
          description="Te acompañamos en todo el proceso para que tus clientes tomen las mejores decisiones de crédito."
        />
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">ChipLanding</h2>
        <ChipLanding label="Asesoría" />
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">HeaderLanding</h2>
        <HeaderLanding />
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">Dots - Indicador de Navegación</h2>
        <div className="flex flex-col gap-24 p-24 bg-surface-card rounded-lg">
          <div className="flex flex-col gap-8">
            <span className="text-14-medium text-text-secondary">3 dots, índice 0 seleccionado</span>
            <Dots total={3} selectedIndex={0} />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-14-medium text-text-secondary">3 dots, índice 1 seleccionado</span>
            <Dots total={3} selectedIndex={1} />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-14-medium text-text-secondary">3 dots, índice 2 seleccionado</span>
            <Dots total={3} selectedIndex={2} />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-14-medium text-text-secondary">5 dots, índice 2 seleccionado</span>
            <Dots total={5} selectedIndex={2} />
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-14-medium text-text-secondary">7 dots, índice 4 seleccionado</span>
            <Dots total={7} selectedIndex={4} />
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">FeatureItem</h2>
        <div className="flex flex-col gap-24 bg-surface-card p-24 rounded-lg">
          <FeatureItem
            icon="bell-ring"
            title="Alertas automáticas"
            description="Si el cliente no envía un documento o hay un bloqueo, te avisamos al instante."
          />
          <FeatureItem
            icon="list-todo"
            title="Resumen por cliente"
            description="Recibes un resumen claro de cada conversación que tuvo el asistente AI con tu cliente."
          />
          <FeatureItem
            icon="message-circle"
            title="Todo por WhatsApp"
            description="Solo WhatsApp. Te mantenemos informado como si tuvieras un asistente personal. Sin portales. Sin llamadas. Solo mensajes que importan."
          />
          <FeatureItem
            icon="file-text"
            title="Documentación validada"
            description="El asistente revisa que los documentos estén completos y legibles antes de enviarlos al banco."
          />
          <FeatureItem
            icon="smartphone"
            title="Seguimiento en tiempo real"
            description="Cada requisito adicional del banco llega como un mensaje claro y se mantiene el flujo en WhatsApp."
          />
        </div>
      </section>

      <section className="space-y-16">
        <h2 className="text-20-bold text-text-primary">CardPreguntasFrecuentes</h2>
        <div className="flex flex-col gap-16 bg-surface-background p-24 rounded-lg">
          {/* State=Default (isOpen=false) */}
          <CardPreguntasFrecuentes
            question="¿Qué es HolaEmma?"
            answer="HolaEmma es un asistente de asesoría financiera que acompaña a tus clientes en el proceso de solicitud de crédito hipotecario."
            isOpen={false}
          />
          
          {/* State=Active (isOpen=true) */}
          <CardPreguntasFrecuentes
            question="¿Cómo funciona el asistente de asesoría financiera?"
            answer="El asistente se conecta directamente con tu cliente por WhatsApp. Le guía paso a paso, solicita documentos, valida que estén completos y te mantiene informado en cada etapa del proceso."
            isOpen={true}
          />
          
          {/* State=Default (isOpen=false) */}
          <CardPreguntasFrecuentes
            question="¿Cuánto tiempo toma el proceso de crédito?"
            answer="El tiempo depende del banco y de qué tan rápido tu cliente envíe los documentos. Con HolaEmma, el proceso es más ágil porque el asistente valida todo antes de enviar al banco."
            isOpen={false}
          />
        </div>
      </section>

      <hr className="my-[var(--space-40)]" />
      <h2 className="text-24-bold text-text-primary mb-[var(--space-24)]">
        Landing HolaEmma
      </h2>
      <div className="border border-surface-border rounded-lg overflow-hidden">
        <LandingHolaEmmaScreen />
      </div>

      <h2 className="text-24-bold text-text-primary mt-[var(--space-56)]">
        Animación Lottie — Paso 1
      </h2>
      <ProcessAnimationContainer stepIndex={0} />
    </main>
  );
}
