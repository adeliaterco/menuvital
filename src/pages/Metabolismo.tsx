import React from 'react';
import PrintButton from '@/components/PrintButton';
import { Flame, Clock, Utensils, AlertTriangle, CheckCircle } from 'lucide-react';

const Metabolismo = () => {
  const alimentos = [
    { name: 'Té verde', benefit: 'Aumenta metabolismo 4-5%' },
    { name: 'Proteína magra', benefit: 'Efecto térmico alto' },
    { name: 'Chiles picantes', benefit: 'Capsaicina termogénica' },
    { name: 'Café', benefit: 'Aumenta quema 3-11%' },
    { name: 'Jengibre', benefit: 'Activa termogénesis' },
    { name: 'Canela', benefit: 'Regula azúcar en sangre' },
    { name: 'Agua fría', benefit: 'Gasta energía calentándola' },
    { name: 'Vinagre de manzana', benefit: 'Mejora sensibilidad insulina' },
    { name: 'Legumbres', benefit: 'Alto efecto térmico' },
    { name: 'Aceite de coco', benefit: 'Grasas MCT termogénicas' },
  ];

  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="section-header">El Mapa de la Quema Constante</h1>
          <p className="text-muted-foreground">Guía completa sobre metabolismo</p>
        </div>
        <PrintButton />
      </div>

      <div className="space-y-6">
        <div className="content-card p-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Flame className="text-primary" /> ¿Qué es el metabolismo?</h2>
          <p className="text-muted-foreground">El metabolismo es el conjunto de procesos químicos que ocurren en tu cuerpo para convertir los alimentos en energía. Un metabolismo activo quema más calorías incluso en reposo.</p>
        </div>

        <div className="content-card p-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Utensils className="text-primary" /> 10 Alimentos Aceleradores</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {alimentos.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <span className="font-bold text-primary">{i + 1}</span>
                <div><p className="font-medium">{a.name}</p><p className="text-xs text-muted-foreground">{a.benefit}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-card p-6">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Clock className="text-primary" /> Horarios Óptimos</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-3 bg-secondary/50 rounded-lg"><span className="font-medium">Desayuno</span><span>7:00 - 9:00 AM</span></div>
            <div className="flex justify-between p-3 bg-secondary/50 rounded-lg"><span className="font-medium">Snack</span><span>10:30 AM</span></div>
            <div className="flex justify-between p-3 bg-secondary/50 rounded-lg"><span className="font-medium">Almuerzo</span><span>12:00 - 2:00 PM</span></div>
            <div className="flex justify-between p-3 bg-secondary/50 rounded-lg"><span className="font-medium">Snack</span><span>4:00 PM</span></div>
            <div className="flex justify-between p-3 bg-secondary/50 rounded-lg"><span className="font-medium">Cena</span><span>6:00 - 8:00 PM</span></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="content-card p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-destructive"><AlertTriangle /> Errores que Frenan</h2>
            <ul className="space-y-2 text-sm">
              <li>• Saltarse el desayuno</li>
              <li>• Dietas muy restrictivas</li>
              <li>• No dormir suficiente</li>
              <li>• Poco consumo de agua</li>
              <li>• Vida sedentaria</li>
            </ul>
          </div>
          <div className="content-card p-6">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-primary"><CheckCircle /> Hábitos que Activan</h2>
            <ul className="space-y-2 text-sm">
              <li>• Entrenar en ayunas</li>
              <li>• Consumir proteína en cada comida</li>
              <li>• Dormir 7-8 horas</li>
              <li>• Beber 2L de agua</li>
              <li>• HIIT 3 veces por semana</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metabolismo;
