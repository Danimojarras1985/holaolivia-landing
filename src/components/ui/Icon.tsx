"use client";

import type { LucideIcon, LucideProps } from "lucide-react";

import {
  ArrowLeft, ArrowRight, BellRing, ListTodo, MessageCircle, FileText,
  Smartphone, ChevronDown,
  // íconos usados por IconExample
  Camera, Heart, Star, Settings, User, Mail, Phone, MapPin
} from "lucide-react";
import { cn } from "../../lib/utils";

// Registro nominal para permitir strings
const ICON_MAP = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "bell-ring": BellRing,
  "list-todo": ListTodo,
  "message-circle": MessageCircle,
  "file-text": FileText,
  "smartphone": Smartphone,
  "chevron-down": ChevronDown,
  // usados en IconExample
  "camera": Camera,
  "heart": Heart,
  "star": Star,
  "settings": Settings,
  "user": User,
  "mail": Mail,
  "phone": Phone,
  "map-pin": MapPin,
} as const;

export type IconName = keyof typeof ICON_MAP;

type IconProps = {
  /** Nombre del ícono registrado o un componente Lucide directo */
  icon: IconName | string | LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
} & Omit<LucideProps, "className" | "width" | "height">;

export function Icon({ icon, size = "md", className, ...rest }: IconProps) {
  // Acepta string (nombre) o componente Lucide directo
  const Comp: LucideIcon = 
    typeof icon === "string" 
      ? ICON_MAP[icon as IconName] 
      : (icon as unknown as LucideIcon);

  if (!Comp) return null;

  const sizeClass =
    size === "sm" ? "w-icon-sm h-icon-sm" :
    size === "lg" ? "w-icon-lg h-icon-lg" :
    "w-icon-md h-icon-md";

  return (
    <Comp
      className={cn(sizeClass, className)}
      width="1em"
      height="1em"
      stroke="currentColor"
      aria-hidden="true"
      {...rest}
    />
  );
}
