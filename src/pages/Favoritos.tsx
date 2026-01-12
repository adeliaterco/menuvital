import React from 'react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { allRecipes } from '@/data/menuFlexible';
import { allSmoothies } from '@/data/smoothies';
import { allKetoRecipes } from '@/data/ketoRecipes';
import { allDetoxRecipes } from '@/data/detoxRecipes';
import PrintButton from '@/components/PrintButton';
import { Heart, Flame } from 'lucide-react';

const Favoritos = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const allItems = [
    ...allRecipes.map(r => ({ id: r.id, name: r.name, calories: r.calories, type: 'receta' })),
    ...allSmoothies.map(s => ({ id: s.id, name: s.name, calories: s.calories, type: 'smoothie' })),
    ...allKetoRecipes.map(k => ({ id: k.id, name: k.name, calories: k.calories, type: 'keto' })),
    ...allDetoxRecipes.map(d => ({ id: d.id, name: d.name, calories: d.calories, type: 'detox' })),
  ];

  const favoriteItems = allItems.filter(item => favorites.includes(item.id));

  return (
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="section-header">Mis Favoritos</h1>
          <p className="text-muted-foreground">{favoriteItems.length} recetas guardadas</p>
        </div>
        <PrintButton />
      </div>

      {favoriteItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No tienes recetas favoritas aún</p>
          <p className="text-sm text-muted-foreground">Toca el corazón en cualquier receta para guardarla</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteItems.map(item => (
            <div key={item.id} className="content-card p-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs bg-secondary px-2 py-1 rounded-full capitalize">{item.type}</span>
                  <h3 className="font-semibold mt-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Flame className="w-4 h-4" /> {item.calories} kcal
                  </p>
                </div>
                <button onClick={() => toggleFavorite(item.id)} className="p-2">
                  <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;
