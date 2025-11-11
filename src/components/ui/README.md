# Sistema de Íconos HolaEmma

Sistema centralizado de íconos usando `lucide-react` con tokens Tailwind CSS v3.

## Instalación

El sistema ya está instalado y configurado. Las dependencias incluyen:
- `lucide-react` - Librería de íconos
- `clsx` y `tailwind-merge` - Para combinar clases CSS
- `tailwindcss` v3.4.17 - Framework CSS

## Uso

```tsx
import { Camera } from "lucide-react";
import { Icon } from "@/src/components/ui/Icon";

// Uso básico
<Icon icon={Camera} />

// Con tamaño específico
<Icon icon={Camera} size="sm" />
<Icon icon={Camera} size="md" />
<Icon icon={Camera} size="lg" />

// Con color personalizado
<Icon icon={Camera} size="md" className="text-brand-primary" />
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | - | Componente de ícono de lucide-react |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamaño del ícono |
| `className` | `string` | - | Clases CSS adicionales (principalmente para color) |

## Tamaños

Los tamaños están definidos en `tailwind.config.js` y son la única fuente de verdad:

```js
spacing: {
  "icon-sm": "16px",  // 16px
  "icon-md": "24px",  // 24px
  "icon-lg": "32px",  // 32px
}
```

Las utilidades generadas en `app/globals.css`:

```css
.w-icon-sm { width: 16px; }
.h-icon-sm { height: 16px; }
.size-icon-sm { width: 16px; height: 16px; }

.w-icon-md { width: 24px; }
.h-icon-md { height: 24px; }
.size-icon-md { width: 24px; height: 24px; }

.w-icon-lg { width: 32px; }
.h-icon-lg { height: 32px; }
.size-icon-lg { width: 32px; height: 32px; }
```

## Características

- ✅ **Tokenizado**: Todos los tamaños usan tokens de Tailwind
- ✅ **Color heredado**: Los íconos usan `currentColor` por defecto
- ✅ **Accesibilidad**: Incluye `aria-hidden="true"` automáticamente
- ✅ **Flexible**: Acepta cualquier ícono de lucide-react
- ✅ **Consistente**: Sigue el sistema de diseño del proyecto
- ✅ **Build-safe**: No depende de safelist, usa clases estándar de Tailwind

## Ejemplos

### Diferentes tamaños
```tsx
<Icon icon={Camera} size="sm" />
<Icon icon={Camera} size="md" />
<Icon icon={Camera} size="lg" />
```

### Diferentes colores
```tsx
<Icon icon={Heart} className="text-text-primary" />
<Icon icon={Heart} className="text-text-error" />
<Icon icon={Heart} className="text-brand-primary" />
```

### En contexto
```tsx
<button className="flex items-center gap-2">
  <Icon icon={Camera} size="sm" />
  <span>Tomar foto</span>
</button>
```

## Arquitectura del Design System

### Fuente de verdad: `tailwind.config.js`

Todos los tokens (colores, spacing, typography, border-radius, breakpoints) están definidos en `tailwind.config.js` como única fuente de verdad:

```js
theme: {
  extend: {
    colors: { brand, state, border, surface, text },
    spacing: { 4, 8, 12, 16, 24, 32, 36, 40, 56, 88, icon-sm, icon-md, icon-lg },
    borderRadius: { sm, md, lg, full },
    fontSize: { 12-52 con line-height },
    screens: { sm: 640px, md: 912px, lg: 1200px, xl: 1440px }
  }
}
```

### Uso en componentes

✅ **Correcto** - Usar clases de Tailwind:
```tsx
<div className="bg-surface-card p-24 gap-16 rounded-lg">
```

❌ **Incorrecto** - No usar var(--*) ni valores arbitrarios:
```tsx
<div className="bg-[var(--color-surface-card)] p-[24px]">
```

### Utilidades personalizadas

Solo la tipografía usa utilidades custom en `@layer utilities` de `globals.css`:

```css
.text-14-bold { font-size: 14px; line-height: 20px; font-weight: 700; }
```

Todo lo demás son clases estándar de Tailwind generadas desde `tailwind.config.js`.
