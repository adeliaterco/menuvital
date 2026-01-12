import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  UtensilsCrossed, Calculator, GlassWater, Flame, Salad,
  ListChecks, Apple, Dumbbell, Droplets, Leaf, Heart
} from 'lucide-react';

const sections = [
  { path: '/menu-flexible', title: 'Menú Flexible +170', desc: 'Opciones de comidas saludables', icon: UtensilsCrossed, color: 'bg-primary' },
  { path: '/menus-kcal', title: 'Menús por Calorías', desc: 'Planes de 1200 a 2000 kcal', icon: Calculator, color: 'bg-primary' },
  { path: '/smoothies', title: '25 Smoothies', desc: 'Energéticos, detox y proteicos', icon: GlassWater, color: 'bg-primary' },
  { path: '/metabolismo', title: 'Quema Constante', desc: 'Guía del metabolismo', icon: Flame, color: 'bg-orange-500' },
  { path: '/keto', title: 'Recetas Keto', desc: '30 recetas cetogénicas', icon: Salad, color: 'bg-primary' },
  { path: '/alimentos-keto', title: 'Lista Keto', desc: 'Alimentos permitidos', icon: ListChecks, color: 'bg-primary' },
  { path: '/detox', title: 'Detox 40 Recetas', desc: 'Jugos y tés depurativos', icon: Apple, color: 'bg-primary' },
  { path: '/cardio', title: 'Cardio Fit', desc: 'Programa de ejercicios', icon: Dumbbell, color: 'bg-blue-500' },
  { path: '/diabetes', title: 'Guía Diabetes', desc: 'Alimentación especial', icon: Droplets, color: 'bg-red-500' },
  { path: '/vegano', title: 'Guía Vegana', desc: 'Nutrición vegetal', icon: Leaf, color: 'bg-primary' },
  { path: '/masa-muscular', title: 'Masa Muscular', desc: 'Ganar músculo', icon: Dumbbell, color: 'bg-purple-500' },
  { path: '/favoritos', title: 'Mis Favoritos', desc: 'Recetas guardadas', icon: Heart, color: 'bg-red-500' },
];

const Dashboard = () => {
  const { email } = useAuth();

  return (
    <div className="p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">¡Bienvenido!</h1>
        <p className="text-muted-foreground">{email}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className="content-card p-4 hover:scale-[1.02] transition-transform"
          >
            <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-3`}>
              <section.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{section.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
