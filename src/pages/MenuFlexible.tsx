import React, { useState } from 'react';
import { breakfasts, lunches, dinners, snacks, Recipe } from '@/data/menuFlexible';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import PrintButton from '@/components/PrintButton';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Heart, Flame, Clock } from 'lucide-react';

const MenuFlexible = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Recipe | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const filterRecipes = (recipes: Recipe[]) =>
    recipes.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some(i => i.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="section-header">Menú Flexible +170 Opciones</h1>
          <p className="text-muted-foreground">Recetas saludables organizadas por momento del día</p>
        </div>
        <div className="flex gap-2">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar recetas..." />
          <PrintButton />
        </div>
      </div>

      <Tabs defaultValue="desayunos" className="no-print">
        <TabsList className="mb-4">
          <TabsTrigger value="desayunos">Desayunos ({breakfasts.length})</TabsTrigger>
          <TabsTrigger value="almuerzos">Almuerzos ({lunches.length})</TabsTrigger>
          <TabsTrigger value="cenas">Cenas ({dinners.length})</TabsTrigger>
          <TabsTrigger value="snacks">Snacks ({snacks.length})</TabsTrigger>
        </TabsList>

        {[
          { key: 'desayunos', data: filterRecipes(breakfasts) },
          { key: 'almuerzos', data: filterRecipes(lunches) },
          { key: 'cenas', data: filterRecipes(dinners) },
          { key: 'snacks', data: filterRecipes(snacks) },
        ].map(({ key, data }) => (
          <TabsContent key={key} value={key}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.name}
                  calories={recipe.calories}
                  time={recipe.time}
                  category={recipe.category}
                  onClick={() => setSelected(recipe)}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  <span>{selected.name}</span>
                  <button onClick={() => toggleFavorite(selected.id)} className="p-2">
                    <Heart className={`w-5 h-5 ${isFavorite(selected.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  </button>
                </DialogTitle>
              </DialogHeader>
              <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><Flame className="w-4 h-4" /> {selected.calories} kcal</span>
                {selected.time && <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {selected.time}</span>}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Ingredientes</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {selected.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Preparación</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1">
                    {selected.preparation.map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenuFlexible;
