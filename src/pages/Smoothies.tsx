import React, { useState } from 'react';
import { allSmoothies, Smoothie } from '@/data/smoothies';
import PrintButton from '@/components/PrintButton';
import SearchBar from '@/components/SearchBar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Heart, Flame, Zap, Droplets, Dumbbell } from 'lucide-react';

const Smoothies = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Smoothie | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const filter = (cat: string) => allSmoothies
    .filter(s => s.category === cat)
    .filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  const catIcon = { energetico: Zap, detox: Droplets, proteico: Dumbbell };

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="section-header">25 Recetas de Smoothies</h1>
          <p className="text-muted-foreground">Energéticos, detox y proteicos</p>
        </div>
        <div className="flex gap-2">
          <SearchBar value={search} onChange={setSearch} />
          <PrintButton />
        </div>
      </div>

      <Tabs defaultValue="energetico">
        <TabsList className="mb-4 no-print">
          <TabsTrigger value="energetico">Energéticos (8)</TabsTrigger>
          <TabsTrigger value="detox">Detox (8)</TabsTrigger>
          <TabsTrigger value="proteico">Proteicos (9)</TabsTrigger>
        </TabsList>

        {['energetico', 'detox', 'proteico'].map(cat => (
          <TabsContent key={cat} value={cat}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filter(cat).map(s => {
                const Icon = catIcon[s.category as keyof typeof catIcon];
                return (
                  <div key={s.id} className="recipe-card" onClick={() => setSelected(s)}>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full capitalize">{cat}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(s.id); }} className="p-1">
                        <Heart className={`w-5 h-5 ${isFavorite(s.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                      </button>
                    </div>
                    <h3 className="font-semibold">{s.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-2">
                      <Flame className="w-4 h-4" /> {s.calories} kcal
                    </p>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.name}</DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mb-4">{selected.calories} kcal</p>
              <div className="space-y-4 text-sm">
                <div><h4 className="font-semibold mb-2">Ingredientes</h4><ul className="list-disc list-inside">{selected.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul></div>
                <div><h4 className="font-semibold mb-2">Preparación</h4><ol className="list-decimal list-inside">{selected.preparation.map((s, idx) => <li key={idx}>{s}</li>)}</ol></div>
                <div><h4 className="font-semibold mb-2">Beneficios</h4><ul className="list-disc list-inside">{selected.benefits.map((b, idx) => <li key={idx}>{b}</li>)}</ul></div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Smoothies;
