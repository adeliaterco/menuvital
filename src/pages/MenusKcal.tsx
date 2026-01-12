import React, { useState } from 'react';
import { caloriePlans } from '@/data/menusKcal';
import PrintButton from '@/components/PrintButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame } from 'lucide-react';

const MenusKcal = () => {
  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="section-header">Menús por Calorías</h1>
          <p className="text-muted-foreground">Planes completos de 5 días según tus objetivos</p>
        </div>
        <PrintButton />
      </div>

      <Tabs defaultValue="1200">
        <TabsList className="mb-6 no-print">
          {caloriePlans.map(plan => (
            <TabsTrigger key={plan.calories} value={String(plan.calories)}>
              {plan.calories} kcal
            </TabsTrigger>
          ))}
        </TabsList>

        {caloriePlans.map(plan => (
          <TabsContent key={plan.calories} value={String(plan.calories)}>
            <div className="content-card p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Plan de {plan.calories} kcal/día</h2>
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>

            <div className="space-y-4">
              {plan.days.map((day, idx) => (
                <div key={idx} className="content-card p-4">
                  <h3 className="font-bold text-lg mb-3 text-primary">{day.day}</h3>
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between"><span className="font-medium">Desayuno:</span><span>{day.breakfast.name} ({day.breakfast.calories} kcal)</span></div>
                    <div className="flex justify-between"><span className="font-medium">Snack AM:</span><span>{day.snackAm.name} ({day.snackAm.calories} kcal)</span></div>
                    <div className="flex justify-between"><span className="font-medium">Almuerzo:</span><span>{day.lunch.name} ({day.lunch.calories} kcal)</span></div>
                    <div className="flex justify-between"><span className="font-medium">Snack PM:</span><span>{day.snackPm.name} ({day.snackPm.calories} kcal)</span></div>
                    <div className="flex justify-between"><span className="font-medium">Cena:</span><span>{day.dinner.name} ({day.dinner.calories} kcal)</span></div>
                    <div className="flex justify-between border-t pt-2 mt-2 font-bold"><span>Total:</span><span className="text-primary">{day.totalCalories} kcal</span></div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MenusKcal;
