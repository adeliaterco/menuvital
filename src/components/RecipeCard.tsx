import React from 'react';
import { Heart, Clock, Flame } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  id: string;
  title: string;
  calories: number;
  time?: string;
  category?: string;
  onClick?: () => void;
}

const RecipeCard = ({ id, title, calories, time, category, onClick }: RecipeCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          {category && (
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {category}
            </span>
          )}
          <h3 className="font-semibold text-foreground mt-2 line-clamp-2">{title}</h3>
        </div>
        <button
          onClick={handleFavoriteClick}
          className={cn('favorite-button', favorite && 'favorite-active')}
        >
          <Heart className={cn('w-5 h-5', favorite && 'fill-current')} />
        </button>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Flame className="w-4 h-4 text-primary" />
          <span>{calories} kcal</span>
        </div>
        {time && (
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
