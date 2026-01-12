export interface DayMenu {
  day: string;
  breakfast: { name: string; calories: number };
  snackAm: { name: string; calories: number };
  lunch: { name: string; calories: number };
  snackPm: { name: string; calories: number };
  dinner: { name: string; calories: number };
  totalCalories: number;
}

export interface CaloriePlan {
  calories: number;
  description: string;
  days: DayMenu[];
}

export const caloriePlans: CaloriePlan[] = [
  {
    calories: 1200,
    description: 'Plan ideal para pérdida de peso rápida bajo supervisión médica',
    days: [
      {
        day: 'Lunes',
        breakfast: { name: 'Yogur griego con frutos rojos', calories: 180 },
        snackAm: { name: 'Manzana pequeña', calories: 60 },
        lunch: { name: 'Ensalada de pollo a la plancha con verduras', calories: 350 },
        snackPm: { name: 'Palitos de zanahoria con hummus', calories: 80 },
        dinner: { name: 'Pescado al vapor con brócoli', calories: 280 },
        totalCalories: 950
      },
      {
        day: 'Martes',
        breakfast: { name: 'Tostada integral con aguacate', calories: 200 },
        snackAm: { name: 'Yogur natural', calories: 80 },
        lunch: { name: 'Crema de calabaza con pollo desmenuzado', calories: 320 },
        snackPm: { name: 'Pepino con limón', calories: 30 },
        dinner: { name: 'Tortilla de claras con espinacas', calories: 200 },
        totalCalories: 830
      },
      {
        day: 'Miércoles',
        breakfast: { name: 'Batido verde con proteína', calories: 180 },
        snackAm: { name: 'Almendras (10 unidades)', calories: 70 },
        lunch: { name: 'Wrap de atún con vegetales', calories: 340 },
        snackPm: { name: 'Tomates cherry', calories: 40 },
        dinner: { name: 'Sopa de verduras con huevo pochado', calories: 220 },
        totalCalories: 850
      },
      {
        day: 'Jueves',
        breakfast: { name: 'Avena con canela y manzana', calories: 220 },
        snackAm: { name: 'Kiwi', calories: 50 },
        lunch: { name: 'Pechuga de pavo con ensalada mediterránea', calories: 330 },
        snackPm: { name: 'Apio con queso cottage', calories: 60 },
        dinner: { name: 'Calabacín relleno de verduras', calories: 250 },
        totalCalories: 910
      },
      {
        day: 'Viernes',
        breakfast: { name: 'Huevos revueltos con tomate', calories: 200 },
        snackAm: { name: 'Naranja', calories: 60 },
        lunch: { name: 'Bowl de quinoa con verduras asadas', calories: 350 },
        snackPm: { name: 'Edamame', calories: 80 },
        dinner: { name: 'Merluza al horno con espárragos', calories: 260 },
        totalCalories: 950
      }
    ]
  },
  {
    calories: 1500,
    description: 'Plan equilibrado para pérdida de peso gradual y sostenible',
    days: [
      {
        day: 'Lunes',
        breakfast: { name: 'Avena con plátano y nueces', calories: 320 },
        snackAm: { name: 'Yogur griego con miel', calories: 120 },
        lunch: { name: 'Pollo a la plancha con arroz integral y verduras', calories: 450 },
        snackPm: { name: 'Manzana con mantequilla de almendras', calories: 180 },
        dinner: { name: 'Salmón al horno con ensalada verde', calories: 380 },
        totalCalories: 1450
      },
      {
        day: 'Martes',
        breakfast: { name: 'Tostadas con huevo y aguacate', calories: 350 },
        snackAm: { name: 'Mix de frutos secos', calories: 150 },
        lunch: { name: 'Ensalada César con pollo', calories: 420 },
        snackPm: { name: 'Yogur con frutos rojos', calories: 130 },
        dinner: { name: 'Pechuga de pavo con verduras salteadas', calories: 350 },
        totalCalories: 1400
      },
      {
        day: 'Miércoles',
        breakfast: { name: 'Smoothie bowl de açaí', calories: 350 },
        snackAm: { name: 'Huevo duro', calories: 80 },
        lunch: { name: 'Pasta integral con verduras y pollo', calories: 450 },
        snackPm: { name: 'Hummus con vegetales', calories: 120 },
        dinner: { name: 'Pescado al vapor con patatas', calories: 350 },
        totalCalories: 1350
      },
      {
        day: 'Jueves',
        breakfast: { name: 'Panqueques proteicos con fruta', calories: 380 },
        snackAm: { name: 'Plátano', calories: 100 },
        lunch: { name: 'Bowl de quinoa con garbanzos y vegetales', calories: 420 },
        snackPm: { name: 'Cottage con piña', calories: 130 },
        dinner: { name: 'Omelette de vegetales con ensalada', calories: 320 },
        totalCalories: 1350
      },
      {
        day: 'Viernes',
        breakfast: { name: 'Yogur con granola y frutas', calories: 300 },
        snackAm: { name: 'Almendras y pasas', calories: 150 },
        lunch: { name: 'Salmón con arroz y brócoli', calories: 480 },
        snackPm: { name: 'Tostada con aguacate', calories: 150 },
        dinner: { name: 'Sopa de lentejas con pan integral', calories: 350 },
        totalCalories: 1430
      }
    ]
  },
  {
    calories: 1800,
    description: 'Plan de mantenimiento para estilo de vida activo',
    days: [
      {
        day: 'Lunes',
        breakfast: { name: 'Omelette completo con tostadas', calories: 420 },
        snackAm: { name: 'Batido de proteína con plátano', calories: 200 },
        lunch: { name: 'Pollo teriyaki con arroz y vegetales', calories: 520 },
        snackPm: { name: 'Mix de frutos secos y chocolate negro', calories: 200 },
        dinner: { name: 'Salmón con ensalada César', calories: 450 },
        totalCalories: 1790
      },
      {
        day: 'Martes',
        breakfast: { name: 'Pancakes integrales con frutas', calories: 400 },
        snackAm: { name: 'Yogur griego con granola', calories: 220 },
        lunch: { name: 'Bowl mexicano con pollo', calories: 550 },
        snackPm: { name: 'Tostada con aguacate y huevo', calories: 250 },
        dinner: { name: 'Pasta integral con salsa de tomate y atún', calories: 420 },
        totalCalories: 1840
      },
      {
        day: 'Miércoles',
        breakfast: { name: 'Burrito de desayuno saludable', calories: 450 },
        snackAm: { name: 'Smoothie verde energético', calories: 180 },
        lunch: { name: 'Arroz con pollo y verduras', calories: 520 },
        snackPm: { name: 'Cottage con frutas', calories: 150 },
        dinner: { name: 'Poke bowl de salmón', calories: 480 },
        totalCalories: 1780
      },
      {
        day: 'Jueves',
        breakfast: { name: 'Avena con mantequilla de maní y plátano', calories: 420 },
        snackAm: { name: 'Muffin de avena casero', calories: 180 },
        lunch: { name: 'Hamburguesa de pavo con ensalada', calories: 500 },
        snackPm: { name: 'Guacamole con totopos', calories: 200 },
        dinner: { name: 'Pollo al horno con patatas', calories: 480 },
        totalCalories: 1780
      },
      {
        day: 'Viernes',
        breakfast: { name: 'Huevos benedictinos light', calories: 380 },
        snackAm: { name: 'Batido proteico', calories: 180 },
        lunch: { name: 'Paella de mariscos', calories: 520 },
        snackPm: { name: 'Fruta con yogur', calories: 150 },
        dinner: { name: 'Tacos de pescado saludables', calories: 420 },
        totalCalories: 1650
      }
    ]
  },
  {
    calories: 2000,
    description: 'Plan para mantenimiento y actividad física moderada-alta',
    days: [
      {
        day: 'Lunes',
        breakfast: { name: 'Bowl energético con quinoa y huevo', calories: 450 },
        snackAm: { name: 'Batido de proteína con avena', calories: 280 },
        lunch: { name: 'Pollo al curry con arroz basmati', calories: 580 },
        snackPm: { name: 'Tostadas con aguacate y salmón', calories: 280 },
        dinner: { name: 'Filete de res con vegetales asados', calories: 480 },
        totalCalories: 2070
      },
      {
        day: 'Martes',
        breakfast: { name: 'Waffles integrales con frutas y miel', calories: 450 },
        snackAm: { name: 'Yogur griego con granola y nueces', calories: 280 },
        lunch: { name: 'Buddha bowl completo', calories: 550 },
        snackPm: { name: 'Smoothie de plátano y mantequilla de maní', calories: 280 },
        dinner: { name: 'Salmón teriyaki con verduras', calories: 480 },
        totalCalories: 2040
      },
      {
        day: 'Miércoles',
        breakfast: { name: 'Tortilla española con pan', calories: 420 },
        snackAm: { name: 'Mix energético de frutos secos', calories: 250 },
        lunch: { name: 'Risotto de champiñones con pollo', calories: 580 },
        snackPm: { name: 'Batido de frutas con proteína', calories: 220 },
        dinner: { name: 'Fajitas de res con guacamole', calories: 520 },
        totalCalories: 1990
      },
      {
        day: 'Jueves',
        breakfast: { name: 'Pancakes proteicos con bacon de pavo', calories: 480 },
        snackAm: { name: 'Parfait de frutas', calories: 200 },
        lunch: { name: 'Arroz frito con camarones', calories: 550 },
        snackPm: { name: 'Hummus con pan pita integral', calories: 250 },
        dinner: { name: 'Pechuga rellena con ensalada', calories: 450 },
        totalCalories: 1930
      },
      {
        day: 'Viernes',
        breakfast: { name: 'Shakshuka con pan integral', calories: 400 },
        snackAm: { name: 'Smoothie bowl de açaí', calories: 320 },
        lunch: { name: 'Tacos de pollo con todos los toppings', calories: 580 },
        snackPm: { name: 'Galletas de avena caseras', calories: 180 },
        dinner: { name: 'Ceviche con tostadas y aguacate', calories: 420 },
        totalCalories: 1900
      }
    ]
  }
];
