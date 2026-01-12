import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Home,
  UtensilsCrossed,
  Calculator,
  GlassWater,
  Flame,
  Salad,
  ListChecks,
  Apple,
  Heart as HeartIcon,
  Dumbbell,
  Droplets,
  BookOpen,
  Search,
  LogOut,
  Leaf,
  Menu,
  X,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/dashboard', label: 'Inicio', icon: Home },
  { path: '/menu-flexible', label: 'Menú +170', icon: UtensilsCrossed },
  { path: '/menus-kcal', label: 'Por Calorías', icon: Calculator },
  { path: '/smoothies', label: 'Smoothies', icon: GlassWater },
  { path: '/metabolismo', label: 'Metabolismo', icon: Flame },
  { path: '/keto', label: 'Recetas Keto', icon: Salad },
  { path: '/alimentos-keto', label: 'Lista Keto', icon: ListChecks },
  { path: '/detox', label: 'Detox', icon: Apple },
  { path: '/cardio', label: 'Cardio Fit', icon: Dumbbell },
  { path: '/diabetes', label: 'Guía Diabetes', icon: Droplets },
  { path: '/vegano', label: 'Guía Vegana', icon: Leaf },
  { path: '/masa-muscular', label: 'Masa Muscular', icon: Dumbbell },
  { path: '/favoritos', label: 'Favoritos', icon: Heart },
];

const Layout = () => {
  const { email, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-sidebar fixed h-full no-print">
        <div className="p-4 border-b border-sidebar-border">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground">Menú Flexible</h1>
              <p className="text-xs text-muted-foreground truncate max-w-[140px]">{email}</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'nav-item',
                isActive(item.path) && 'nav-item-active'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Button variant="ghost" onClick={logout} className="w-full justify-start text-muted-foreground hover:text-destructive">
            <LogOut className="w-5 h-5 mr-3" />
            Cerrar sesión
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border no-print">
        <div className="flex items-center justify-between p-4">
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-foreground">Menú Flexible</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border max-h-[70vh] overflow-y-auto animate-fade-in">
            <nav className="p-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'nav-item',
                    isActive(item.path) && 'nav-item-active'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="p-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2 px-4">{email}</p>
              <Button variant="ghost" onClick={logout} className="w-full justify-start text-muted-foreground hover:text-destructive">
                <LogOut className="w-5 h-5 mr-3" />
                Cerrar sesión
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 pb-20 lg:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 no-print">
        <div className="flex justify-around items-center py-2">
          {[navItems[0], navItems[1], navItems[2], navItems[12]].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center p-2 rounded-lg transition-colors',
                isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
