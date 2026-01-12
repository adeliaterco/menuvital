export interface KetoRecipe {
  id: string;
  name: string;
  category: 'desayuno' | 'principal' | 'postre';
  ingredients: string[];
  preparation: string[];
  macros: {
    protein: number;
    fat: number;
    netCarbs: number;
  };
  calories: number;
  time?: string;
}

export const ketoBreakfasts: KetoRecipe[] = [
  {
    id: 'kb1', name: 'Huevos revueltos con tocino y aguacate', category: 'desayuno',
    ingredients: ['3 huevos', '50g tocino', '½ aguacate', '1 cda mantequilla', 'Sal y pimienta'],
    preparation: ['Freír tocino hasta crujiente.', 'Revolver huevos en mantequilla.', 'Servir con aguacate.'],
    macros: { protein: 25, fat: 45, netCarbs: 3 }, calories: 520, time: '15 min'
  },
  {
    id: 'kb2', name: 'Omelette de queso y champiñones', category: 'desayuno',
    ingredients: ['3 huevos', '50g queso cheddar', 'Champiñones', 'Mantequilla', 'Cebollín'],
    preparation: ['Saltear champiñones en mantequilla.', 'Batir huevos y verter en sartén.', 'Añadir queso y doblar.'],
    macros: { protein: 24, fat: 38, netCarbs: 2 }, calories: 450, time: '12 min'
  },
  {
    id: 'kb3', name: 'Pancakes de queso crema', category: 'desayuno',
    ingredients: ['2 huevos', '60g queso crema', '1 cda harina de almendras', 'Canela', 'Eritritol'],
    preparation: ['Licuar todos los ingredientes.', 'Cocinar como pancakes normales.', 'Servir con mantequilla.'],
    macros: { protein: 14, fat: 28, netCarbs: 2 }, calories: 320, time: '15 min'
  },
  {
    id: 'kb4', name: 'Bowl de yogur griego con nueces', category: 'desayuno',
    ingredients: ['200g yogur griego entero', '30g nueces', '1 cda semillas de chía', 'Eritritol', 'Canela'],
    preparation: ['Colocar yogur en bowl.', 'Añadir nueces y chía.', 'Endulzar y añadir canela.'],
    macros: { protein: 18, fat: 32, netCarbs: 5 }, calories: 380, time: '5 min'
  },
  {
    id: 'kb5', name: 'Huevos en nube de queso', category: 'desayuno',
    ingredients: ['3 huevos', '50g queso parmesano', 'Hierbas italianas', 'Sal', 'Pimienta'],
    preparation: ['Separar claras y batir a punto nieve.', 'Incorporar queso y formar nidos.', 'Hornear con yema en centro.'],
    macros: { protein: 22, fat: 26, netCarbs: 1 }, calories: 340, time: '20 min'
  },
  {
    id: 'kb6', name: 'Aguacate relleno de huevo', category: 'desayuno',
    ingredients: ['1 aguacate', '2 huevos', 'Tocino crujiente', 'Queso rallado', 'Cebollín'],
    preparation: ['Cortar aguacate y quitar parte de la pulpa.', 'Romper huevo en cada mitad.', 'Hornear 15 min a 200°C.'],
    macros: { protein: 18, fat: 42, netCarbs: 4 }, calories: 460, time: '20 min'
  },
  {
    id: 'kb7', name: 'Smoothie keto de coco y espinacas', category: 'desayuno',
    ingredients: ['1 taza leche de coco', '1 taza espinacas', '2 cdas aceite MCT', '1 cda mantequilla de almendras', 'Hielo'],
    preparation: ['Licuar espinacas con leche de coco.', 'Añadir aceite MCT y mantequilla.', 'Servir frío.'],
    macros: { protein: 8, fat: 45, netCarbs: 4 }, calories: 450, time: '5 min'
  },
  {
    id: 'kb8', name: 'Waffles keto de queso', category: 'desayuno',
    ingredients: ['1 huevo', '50g queso mozzarella rallado', '1 cda harina de almendras', 'Sal'],
    preparation: ['Mezclar todos los ingredientes.', 'Cocinar en wafflera precalentada.', 'Servir con mantequilla.'],
    macros: { protein: 16, fat: 22, netCarbs: 1 }, calories: 270, time: '10 min'
  },
  {
    id: 'kb9', name: 'Pudín de chía keto', category: 'desayuno',
    ingredients: ['3 cdas semillas de chía', '1 taza leche de coco', 'Eritritol', 'Extracto de vainilla', 'Frutos rojos'],
    preparation: ['Mezclar chía con leche de coco.', 'Añadir endulzante y vainilla.', 'Refrigerar toda la noche.'],
    macros: { protein: 6, fat: 28, netCarbs: 4 }, calories: 300, time: '5 min + noche'
  },
  {
    id: 'kb10', name: 'Café bulletproof', category: 'desayuno',
    ingredients: ['1 taza café negro', '1 cda mantequilla sin sal', '1 cda aceite MCT', 'Canela opcional'],
    preparation: ['Preparar café caliente.', 'Añadir mantequilla y aceite MCT.', 'Licuar hasta espumoso.'],
    macros: { protein: 0, fat: 28, netCarbs: 0 }, calories: 250, time: '5 min'
  }
];

export const ketoMains: KetoRecipe[] = [
  {
    id: 'km1', name: 'Pollo con salsa de crema y espinacas', category: 'principal',
    ingredients: ['200g pechuga de pollo', '100ml crema de leche', '2 tazas espinacas', 'Ajo', 'Queso parmesano'],
    preparation: ['Sellar pollo y reservar.', 'Saltear ajo y espinacas.', 'Añadir crema y queso.', 'Servir pollo con salsa.'],
    macros: { protein: 42, fat: 35, netCarbs: 4 }, calories: 520, time: '25 min'
  },
  {
    id: 'km2', name: 'Salmón con mantequilla de limón', category: 'principal',
    ingredients: ['200g filete de salmón', '50g mantequilla', 'Jugo de limón', 'Eneldo', 'Espárragos'],
    preparation: ['Hornear salmón 15 min.', 'Preparar mantequilla con limón y eneldo.', 'Servir con espárragos.'],
    macros: { protein: 38, fat: 45, netCarbs: 3 }, calories: 580, time: '20 min'
  },
  {
    id: 'km3', name: 'Costillas de cerdo con coliflor', category: 'principal',
    ingredients: ['300g costillas de cerdo', 'Coliflor', 'Mantequilla', 'Queso cheddar', 'Especias BBQ sin azúcar'],
    preparation: ['Hornear costillas 2 horas a 150°C.', 'Preparar puré de coliflor con mantequilla y queso.', 'Servir juntos.'],
    macros: { protein: 35, fat: 55, netCarbs: 6 }, calories: 680, time: '2h 30min'
  },
  {
    id: 'km4', name: 'Tacos de lechuga con carne', category: 'principal',
    ingredients: ['200g carne molida', 'Hojas de lechuga romana', 'Queso', 'Crema agria', 'Salsa sin azúcar'],
    preparation: ['Dorar carne con especias.', 'Servir en hojas de lechuga.', 'Añadir toppings.'],
    macros: { protein: 32, fat: 38, netCarbs: 3 }, calories: 480, time: '20 min'
  },
  {
    id: 'km5', name: 'Muslos de pollo al horno', category: 'principal',
    ingredients: ['4 muslos de pollo con piel', 'Mantequilla', 'Romero', 'Ajo', 'Limón'],
    preparation: ['Frotar pollo con mantequilla y hierbas.', 'Hornear 45 min a 200°C.', 'Servir con limón.'],
    macros: { protein: 45, fat: 42, netCarbs: 1 }, calories: 580, time: '50 min'
  },
  {
    id: 'km6', name: 'Camarones al ajillo', category: 'principal',
    ingredients: ['300g camarones', '4 dientes de ajo', '100g mantequilla', 'Perejil', 'Limón'],
    preparation: ['Derretir mantequilla con ajo.', 'Saltear camarones 3 min por lado.', 'Añadir perejil y limón.'],
    macros: { protein: 38, fat: 40, netCarbs: 2 }, calories: 520, time: '15 min'
  },
  {
    id: 'km7', name: 'Filete de res con mantequilla de hierbas', category: 'principal',
    ingredients: ['250g filete de res', '50g mantequilla', 'Romero', 'Tomillo', 'Ajo'],
    preparation: ['Sellar filete a fuego alto.', 'Preparar mantequilla compuesta con hierbas.', 'Servir filete con mantequilla encima.'],
    macros: { protein: 50, fat: 48, netCarbs: 0 }, calories: 650, time: '20 min'
  },
  {
    id: 'km8', name: 'Pizza de coliflor keto', category: 'principal',
    ingredients: ['Coliflor rallada', 'Queso mozzarella', 'Huevo', 'Salsa de tomate sin azúcar', 'Toppings keto'],
    preparation: ['Cocinar y escurrir coliflor.', 'Mezclar con huevo y queso para masa.', 'Hornear, añadir toppings y gratinar.'],
    macros: { protein: 28, fat: 35, netCarbs: 8 }, calories: 460, time: '40 min'
  },
  {
    id: 'km9', name: 'Chuletas de cerdo con salsa de mostaza', category: 'principal',
    ingredients: ['2 chuletas de cerdo', 'Crema de leche', 'Mostaza Dijon', 'Tomillo', 'Mantequilla'],
    preparation: ['Sellar chuletas en mantequilla.', 'Preparar salsa con crema y mostaza.', 'Servir chuletas con salsa.'],
    macros: { protein: 40, fat: 45, netCarbs: 2 }, calories: 580, time: '25 min'
  },
  {
    id: 'km10', name: 'Berenjenas a la parmesana keto', category: 'principal',
    ingredients: ['2 berenjenas', 'Queso mozzarella', 'Queso parmesano', 'Salsa marinara sin azúcar', 'Albahaca'],
    preparation: ['Cortar y salar berenjenas.', 'Capear con salsa y quesos.', 'Hornear 30 min.'],
    macros: { protein: 22, fat: 28, netCarbs: 10 }, calories: 380, time: '45 min'
  },
  {
    id: 'km11', name: 'Albóndigas en salsa cremosa', category: 'principal',
    ingredients: ['300g carne molida', 'Huevo', 'Crema de leche', 'Caldo de carne', 'Especias suecas'],
    preparation: ['Formar y dorar albóndigas.', 'Preparar salsa cremosa con caldo.', 'Cocinar albóndigas en salsa.'],
    macros: { protein: 35, fat: 42, netCarbs: 3 }, calories: 540, time: '30 min'
  },
  {
    id: 'km12', name: 'Trucha con almendras', category: 'principal',
    ingredients: ['2 filetes de trucha', 'Almendras laminadas', 'Mantequilla', 'Limón', 'Perejil'],
    preparation: ['Cocinar trucha en mantequilla.', 'Tostar almendras por separado.', 'Servir pescado con almendras y limón.'],
    macros: { protein: 38, fat: 35, netCarbs: 2 }, calories: 480, time: '20 min'
  },
  {
    id: 'km13', name: 'Pollo envuelto en tocino', category: 'principal',
    ingredients: ['2 pechugas de pollo', '6 lonjas de tocino', 'Queso crema', 'Jalapeños', 'Especias cajún'],
    preparation: ['Rellenar pollo con queso y jalapeños.', 'Envolver con tocino.', 'Hornear 35 min.'],
    macros: { protein: 48, fat: 40, netCarbs: 2 }, calories: 580, time: '45 min'
  },
  {
    id: 'km14', name: 'Zoodles con pesto y pollo', category: 'principal',
    ingredients: ['Calabacín en espirales', 'Pechuga de pollo', 'Pesto casero', 'Queso parmesano', 'Piñones'],
    preparation: ['Espiralar calabacín.', 'Grillar pollo.', 'Mezclar zoodles con pesto y servir con pollo.'],
    macros: { protein: 38, fat: 32, netCarbs: 6 }, calories: 460, time: '25 min'
  },
  {
    id: 'km15', name: 'Carne molida con queso y espinacas', category: 'principal',
    ingredients: ['250g carne molida', 'Espinacas', 'Queso crema', 'Queso cheddar', 'Ajo'],
    preparation: ['Dorar carne con ajo.', 'Añadir espinacas y quesos.', 'Cocinar hasta derretir.'],
    macros: { protein: 35, fat: 45, netCarbs: 3 }, calories: 560, time: '20 min'
  }
];

export const ketoDesserts: KetoRecipe[] = [
  {
    id: 'kd1', name: 'Mousse de chocolate keto', category: 'postre',
    ingredients: ['200ml crema de leche', '50g chocolate 85%', 'Eritritol', 'Extracto de vainilla'],
    preparation: ['Derretir chocolate.', 'Batir crema hasta espesar.', 'Incorporar chocolate y endulzante.'],
    macros: { protein: 4, fat: 35, netCarbs: 5 }, calories: 350, time: '15 min + refrigerar'
  },
  {
    id: 'kd2', name: 'Cheesecake keto sin hornear', category: 'postre',
    ingredients: ['250g queso crema', '100ml crema de leche', 'Eritritol', 'Vainilla', 'Base de almendras'],
    preparation: ['Batir queso crema con endulzante.', 'Añadir crema batida.', 'Verter sobre base y refrigerar.'],
    macros: { protein: 8, fat: 40, netCarbs: 4 }, calories: 400, time: '20 min + refrigerar'
  },
  {
    id: 'kd3', name: 'Brownies de aguacate', category: 'postre',
    ingredients: ['2 aguacates', '100g cacao en polvo', '3 huevos', 'Eritritol', 'Nueces'],
    preparation: ['Licuar aguacate hasta cremoso.', 'Añadir cacao, huevos y endulzante.', 'Hornear 25 min.'],
    macros: { protein: 6, fat: 22, netCarbs: 6 }, calories: 250, time: '35 min'
  },
  {
    id: 'kd4', name: 'Helado keto de vainilla', category: 'postre',
    ingredients: ['400ml crema de leche', 'Eritritol', 'Extracto de vainilla', 'Yemas de huevo'],
    preparation: ['Calentar crema con endulzante.', 'Temperar yemas.', 'Enfriar y procesar en heladera.'],
    macros: { protein: 4, fat: 35, netCarbs: 3 }, calories: 340, time: '30 min + congelar'
  },
  {
    id: 'kd5', name: 'Fat bombs de mantequilla de maní', category: 'postre',
    ingredients: ['100g mantequilla de maní', '50g aceite de coco', '30g chocolate 85%', 'Eritritol'],
    preparation: ['Mezclar mantequilla con aceite de coco.', 'Formar bolitas.', 'Bañar en chocolate y congelar.'],
    macros: { protein: 4, fat: 18, netCarbs: 2 }, calories: 180, time: '15 min + congelar'
  }
];

export const allKetoRecipes = [...ketoBreakfasts, ...ketoMains, ...ketoDesserts];
