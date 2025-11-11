import { Camera, Heart, Star, Settings, User, Mail, Phone, MapPin } from "lucide-react";
import { Icon } from "./Icon";

export function IconExample() {
  return (
    <div className="flex flex-col gap-8 p-6">
      <h2 className="text-24-bold text-text-primary">Ejemplos de Uso del Sistema de Íconos</h2>
      
      {/* Diferentes tamaños */}
      <section className="flex flex-col gap-4">
        <h3 className="text-18-semibold text-text-primary">Tamaños</h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Camera} size="sm" className="text-text-primary" />
            <span className="text-12-regular text-text-secondary">sm (16px)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Camera} size="md" className="text-text-primary" />
            <span className="text-12-regular text-text-secondary">md (24px)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Icon icon={Camera} size="lg" className="text-text-primary" />
            <span className="text-12-regular text-text-secondary">lg (32px)</span>
          </div>
        </div>
      </section>

      {/* Diferentes colores */}
      <section className="flex flex-col gap-4">
        <h3 className="text-18-semibold text-text-primary">Colores</h3>
        <div className="flex items-center gap-4">
          <Icon icon={Heart} className="text-text-primary" />
          <Icon icon={Heart} className="text-text-secondary" />
          <Icon icon={Heart} className="text-text-error" />
          <Icon icon={Heart} className="text-text-warning" />
          <Icon icon={Heart} className="text-text-info" />
          <Icon icon={Heart} className="text-brand-primary" />
        </div>
      </section>

      {/* Uso en contexto */}
      <section className="flex flex-col gap-4">
        <h3 className="text-18-semibold text-text-primary">Uso en Contexto</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 p-3 bg-surface-card rounded-lg">
            <Icon icon={User} size="sm" className="text-text-secondary" />
            <span className="text-14-regular text-text-primary">Perfil de usuario</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-card rounded-lg">
            <Icon icon={Mail} size="sm" className="text-text-secondary" />
            <span className="text-14-regular text-text-primary">Contacto por email</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-card rounded-lg">
            <Icon icon={Phone} size="sm" className="text-text-secondary" />
            <span className="text-14-regular text-text-primary">Llamada telefónica</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-card rounded-lg">
            <Icon icon={MapPin} size="sm" className="text-text-secondary" />
            <span className="text-14-regular text-text-primary">Ubicación</span>
          </div>
        </div>
      </section>

      {/* Botones con íconos */}
      <section className="flex flex-col gap-4">
        <h3 className="text-18-semibold text-text-primary">Botones con Íconos</h3>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-text-primary rounded-lg hover:bg-brand-primary-hover transition-colors">
            <Icon icon={Camera} size="sm" />
            <span className="text-14-medium">Tomar Foto</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-subtle text-text-primary rounded-lg hover:bg-surface-card transition-colors">
            <Icon icon={Settings} size="sm" />
            <span className="text-14-medium">Configuración</span>
          </button>
        </div>
      </section>
    </div>
  );
}
