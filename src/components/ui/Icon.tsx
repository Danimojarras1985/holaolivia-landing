import { 
  ArrowLeft, 
  ArrowRight, 
  BellRing, 
  ListTodo, 
  MessageCircle, 
  FileText, 
  Smartphone,
  ChevronDown
} from "lucide-react";
import { cn } from "../../lib/utils";

const ICON_MAP = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "bell-ring": BellRing,
  "list-todo": ListTodo,
  "message-circle": MessageCircle,
  "file-text": FileText,
  "smartphone": Smartphone,
  "chevron-down": ChevronDown,
};

type IconProps = {
  icon: keyof typeof ICON_MAP;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function Icon({ icon, size = "md", className }: IconProps) {
  const IconComponent = ICON_MAP[icon];
  const sizeClass = {
    sm: "w-icon-sm h-icon-sm",
    md: "w-icon-md h-icon-md",
    lg: "w-icon-lg h-icon-lg",
  };

  if (!IconComponent) return null;

  return (
    <IconComponent
      className={cn("text-current", sizeClass[size], className)}
      aria-hidden="true"
    />
  );
}
