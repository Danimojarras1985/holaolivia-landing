# Process Containers

Esta carpeta contiene todos los contenedores relacionados con la sección de proceso ("Cómo lo hacemos") del landing HolaEmma.

## Reglas de Implementación

### ✅ Sistema de Diseño

Todos los contenedores deben seguir estrictamente el sistema de diseño:

#### Espaciado
Usar únicamente los tokens de spacing definidos en `tailwind.config.js`:
- `gap-4`, `gap-8`, `gap-12`, `gap-16`, `gap-24`, `gap-32`, `gap-36`, `gap-40`, `gap-56`, `gap-88`
- `p-4`, `p-8`, `p-12`, `p-16`, `p-24`, `p-32`, etc.
- `m-4`, `m-8`, `m-12`, `m-16`, `m-24`, `m-32`, etc.

#### Tipografía
Usar las clases utilitarias generadas desde tokens:
- `text-12-regular`, `text-12-medium`, `text-12-bold`
- `text-14-regular`, `text-14-medium`, `text-14-bold`
- `text-16-regular`, `text-16-medium`, `text-16-bold`
- `text-18-regular`, `text-18-medium`, `text-18-bold`
- `text-20-regular`, `text-20-medium`, `text-20-bold`
- `text-24-bold`, `text-32-bold`, `text-34-bold`, `text-52-bold`

#### Colores
Usar los tokens de color de Tailwind:
- Brand: `bg-brand-primary`, `text-brand-primary`, etc.
- Text: `text-primary`, `text-secondary`, `text-disabled`, `text-link`, etc.
- Surface: `bg-surface-background`, `bg-surface-card`, `bg-surface-subtle`
- Border: `border-border-default`, `border-border-subtle`
- State: `bg-state-success`, `text-state-error`, etc.

#### Breakpoints
Usar únicamente los breakpoints definidos en `theme.screens`:
- `sm:` (640px)
- `md:` (912px)
- `lg:` (1200px)
- `xl:` (1440px)

### ❌ Prohibido

- ❌ Clases arbitrarias: `w-[200px]`, `h-[300px]`, `text-[14px]`
- ❌ Variables CSS: `var(--space-*)`, `var(--color-*)`
- ❌ Valores hexadecimales directos: `#29D972`, `#FFFFFF`
- ❌ Estilos inline: `style={{ ... }}`
- ❌ Media queries manuales
- ❌ Hardcodear textos, tamaños, colores o comportamientos

### ✅ Buenas Prácticas

- ✅ Componentes configurables por props
- ✅ Íconos con `<Icon name="..." size="sm|md|lg" />`
- ✅ Tamaños de íconos por tokens (size-icon-sm, size-icon-md, size-icon-lg)
- ✅ Íconos decorativos con `aria-hidden="true"`
- ✅ Build-safe: no depender de safelist

## Estructura Recomendada

```
Process/
├── ProcessContainer.tsx          # Contenedor principal
├── ProcessTitleContainer.tsx     # Título y subtítulo
├── ProcessStepsContainer.tsx     # Contenedor de pasos
└── README.md                     # Este archivo
```

## Ejemplo de Implementación

```tsx
export function ProcessContainer() {
  return (
    <section className="flex flex-col items-center w-full gap-16 md:gap-40">
      <ProcessTitleContainer />
      <ProcessStepsContainer />
    </section>
  );
}
```

