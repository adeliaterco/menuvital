export interface Smoothie {
  id: string;
  name: string;
  category: 'energetico' | 'detox' | 'proteico';
  ingredients: string[];
  preparation: string[];
  benefits: string[];
  calories: number;
}

export const smoothiesEnergeticos: Smoothie[] = [
  {
    id: 'se1',
    name: 'Verde Power',
    category: 'energetico',
    ingredients: ['1 taza de espinacas', '1 plátano', '1 manzana verde', '1 cda de jengibre', '1 taza de agua de coco', 'Hielo'],
    preparation: ['Lavar bien las espinacas.', 'Cortar plátano y manzana en trozos.', 'Añadir todos los ingredientes a la licuadora.', 'Licuar hasta obtener consistencia suave.', 'Servir inmediatamente.'],
    benefits: ['Boost de energía natural', 'Rico en hierro y vitaminas', 'Mejora la concentración', 'Hidratación óptima'],
    calories: 180
  },
  {
    id: 'se2',
    name: 'Tropical Boost',
    category: 'energetico',
    ingredients: ['1 taza de piña', '1 mango', '½ taza de papaya', 'Jugo de 1 naranja', '1 cda de semillas de chía', 'Hielo'],
    preparation: ['Pelar y cortar las frutas.', 'Exprimir la naranja.', 'Licuar frutas con el jugo.', 'Añadir chía y mezclar.', 'Servir frío.'],
    benefits: ['Alto en vitamina C', 'Energía inmediata', 'Mejora digestión', 'Refuerza sistema inmune'],
    calories: 220
  },
  {
    id: 'se3',
    name: 'Energía Matinal',
    category: 'energetico',
    ingredients: ['1 taza de café frío', '1 plátano congelado', '2 cdas de avena', '1 cda de cacao', '1 taza de leche de almendras'],
    preparation: ['Preparar café y enfriar.', 'Añadir todos los ingredientes a la licuadora.', 'Licuar hasta obtener textura cremosa.', 'Servir frío.'],
    benefits: ['Cafeína natural', 'Energía sostenida', 'Rico en antioxidantes', 'Satisface el hambre'],
    calories: 250
  },
  {
    id: 'se4',
    name: 'Remolacha Express',
    category: 'energetico',
    ingredients: ['1 remolacha pequeña cocida', '1 zanahoria', '1 manzana', 'Jugo de ½ limón', '1 taza de agua', 'Jengibre al gusto'],
    preparation: ['Cortar remolacha, zanahoria y manzana.', 'Licuar con agua.', 'Añadir limón y jengibre.', 'Colar si se prefiere.', 'Servir.'],
    benefits: ['Mejora resistencia física', 'Oxigena la sangre', 'Rico en nitratos', 'Aumenta rendimiento deportivo'],
    calories: 140
  },
  {
    id: 'se5',
    name: 'Açaí Energy',
    category: 'energetico',
    ingredients: ['100g pulpa de açaí', '1 plátano', '½ taza de frutos rojos', '1 cda de miel', '1 taza de leche de coco'],
    preparation: ['Añadir açaí y frutas a la licuadora.', 'Agregar leche de coco.', 'Licuar hasta suavizar.', 'Endulzar con miel.', 'Servir en bowl o vaso.'],
    benefits: ['Superalimento antioxidante', 'Energía prolongada', 'Rico en omegas', 'Mejora concentración'],
    calories: 280
  },
  {
    id: 'se6',
    name: 'Mantequilla de Maní Power',
    category: 'energetico',
    ingredients: ['2 cdas de mantequilla de maní', '1 plátano', '1 taza de leche', '1 cda de miel', '1 cda de cacao', 'Hielo'],
    preparation: ['Añadir todos los ingredientes.', 'Licuar hasta obtener textura cremosa.', 'Ajustar dulzor al gusto.', 'Servir frío.'],
    benefits: ['Alto en proteína', 'Grasas saludables', 'Energía duradera', 'Ideal post-entreno'],
    calories: 350
  },
  {
    id: 'se7',
    name: 'Frutos Rojos Vitality',
    category: 'energetico',
    ingredients: ['1 taza de frutos rojos mixtos', '1 plátano', 'Yogur griego', '1 cda de miel', '½ taza de jugo de naranja'],
    preparation: ['Mezclar frutas con yogur.', 'Añadir jugo de naranja.', 'Licuar hasta suavizar.', 'Endulzar con miel.', 'Servir inmediatamente.'],
    benefits: ['Antioxidantes potentes', 'Vitamina C', 'Probióticos', 'Mejora inmunidad'],
    calories: 240
  },
  {
    id: 'se8',
    name: 'Golden Turmeric',
    category: 'energetico',
    ingredients: ['1 taza de leche de coco', '1 plátano', '1 cdita de cúrcuma', '½ cdita de canela', '1 cda de miel', 'Pimienta negra'],
    preparation: ['Calentar leche ligeramente.', 'Licuar con plátano y especias.', 'Añadir miel.', 'Servir tibio o frío.'],
    benefits: ['Antiinflamatorio natural', 'Mejora digestión', 'Boost inmunológico', 'Energía sostenida'],
    calories: 200
  }
];

export const smoothiesDetox: Smoothie[] = [
  {
    id: 'sd1',
    name: 'Limpieza Hepática',
    category: 'detox',
    ingredients: ['1 remolacha pequeña', '1 manzana verde', '1 zanahoria', 'Jugo de 1 limón', '1 trozo de jengibre', '1 taza de agua'],
    preparation: ['Lavar y cortar vegetales.', 'Licuar con agua.', 'Añadir jugo de limón.', 'Colar opcionalmente.', 'Servir fresco.'],
    benefits: ['Desintoxica el hígado', 'Limpia la sangre', 'Mejora función biliar', 'Rico en antioxidantes'],
    calories: 120
  },
  {
    id: 'sd2',
    name: 'Antiinflamatorio Verde',
    category: 'detox',
    ingredients: ['2 tazas de espinacas', '1 pepino', '1 tallo de apio', 'Jugo de 1 limón', '1 trozo de jengibre', 'Menta fresca'],
    preparation: ['Lavar bien los vegetales.', 'Cortar en trozos.', 'Licuar con agua.', 'Añadir limón y menta.', 'Servir frío.'],
    benefits: ['Reduce inflamación', 'Hidratación profunda', 'Alcaliniza el cuerpo', 'Mejora digestión'],
    calories: 80
  },
  {
    id: 'sd3',
    name: 'Detox de Piña y Jengibre',
    category: 'detox',
    ingredients: ['1 taza de piña', '1 pepino', '2 cm de jengibre', 'Jugo de ½ limón', '1 taza de agua de coco', 'Menta'],
    preparation: ['Pelar y cortar piña y pepino.', 'Licuar con agua de coco.', 'Añadir jengibre y limón.', 'Decorar con menta.'],
    benefits: ['Digestivo natural', 'Antiinflamatorio', 'Hidratante', 'Quema grasa'],
    calories: 110
  },
  {
    id: 'sd4',
    name: 'Limpieza de Colon',
    category: 'detox',
    ingredients: ['1 manzana verde', '1 kiwi', '2 hojas de col rizada', '1 cda de linaza', 'Jugo de limón', '1 taza de agua'],
    preparation: ['Lavar y cortar frutas.', 'Licuar con col rizada y agua.', 'Añadir linaza y limón.', 'Mezclar bien.', 'Consumir en ayunas.'],
    benefits: ['Limpia intestinos', 'Rico en fibra', 'Mejora tránsito', 'Elimina toxinas'],
    calories: 130
  },
  {
    id: 'sd5',
    name: 'Purificador de Sangre',
    category: 'detox',
    ingredients: ['1 remolacha', '2 zanahorias', '1 naranja', '1 trozo de jengibre', 'Cúrcuma fresca', 'Agua'],
    preparation: ['Lavar y pelar vegetales.', 'Licuar todos los ingredientes.', 'Añadir cúrcuma.', 'Servir inmediatamente.'],
    benefits: ['Purifica la sangre', 'Rico en hierro', 'Antiinflamatorio', 'Mejora circulación'],
    calories: 140
  },
  {
    id: 'sd6',
    name: 'Verde Alcalinizante',
    category: 'detox',
    ingredients: ['Pepino', 'Apio', 'Espinacas', 'Perejil', 'Limón', 'Manzana verde'],
    preparation: ['Lavar todos los vegetales.', 'Licuar con agua.', 'Añadir jugo de limón.', 'Servir frío.'],
    benefits: ['Alcaliniza el pH', 'Hidrata células', 'Elimina ácidos', 'Energía limpia'],
    calories: 90
  },
  {
    id: 'sd7',
    name: 'Desintoxicante Tropical',
    category: 'detox',
    ingredients: ['Papaya', 'Piña', 'Jengibre', 'Lima', 'Agua de coco', 'Cilantro'],
    preparation: ['Cortar frutas en trozos.', 'Licuar con agua de coco.', 'Añadir jengibre y lima.', 'Servir fresco.'],
    benefits: ['Enzimas digestivas', 'Elimina parásitos', 'Limpia colon', 'Rehidrata'],
    calories: 120
  },
  {
    id: 'sd8',
    name: 'Clorofila Pura',
    category: 'detox',
    ingredients: ['Espinacas', 'Perejil', 'Cilantro', 'Menta', 'Limón', 'Pepino', 'Agua'],
    preparation: ['Lavar bien los verdes.', 'Licuar con agua fría.', 'Añadir limón.', 'Colar si se desea.', 'Servir.'],
    benefits: ['Oxigena sangre', 'Elimina metales', 'Alcalinizante', 'Energía celular'],
    calories: 60
  }
];

export const smoothiesProteicos: Smoothie[] = [
  {
    id: 'sp1',
    name: 'Post-Entreno Recovery',
    category: 'proteico',
    ingredients: ['1 scoop proteína de suero', '1 plátano', '1 cda mantequilla de almendras', '1 taza de leche', 'Hielo'],
    preparation: ['Añadir proteína y leche.', 'Agregar plátano y mantequilla.', 'Licuar hasta suavizar.', 'Servir inmediatamente.'],
    benefits: ['Recuperación muscular', 'Repone glucógeno', 'Proteína de alta calidad', '25g proteína'],
    calories: 350
  },
  {
    id: 'sp2',
    name: 'Ganancia Muscular',
    category: 'proteico',
    ingredients: ['1 scoop proteína', '1 taza de avena', '2 cdas mantequilla de maní', '1 plátano', '1.5 tazas de leche', 'Miel'],
    preparation: ['Remojar avena 5 minutos.', 'Añadir todos los ingredientes.', 'Licuar bien.', 'Servir.'],
    benefits: ['Alto en calorías', 'Carbohidratos complejos', 'Grasas saludables', '35g proteína'],
    calories: 550
  },
  {
    id: 'sp3',
    name: 'Chocolate Proteico',
    category: 'proteico',
    ingredients: ['1 scoop proteína chocolate', '1 plátano congelado', '2 cdas de cacao', '1 taza de leche de almendras', 'Hielo'],
    preparation: ['Combinar todos los ingredientes.', 'Licuar hasta obtener textura suave.', 'Añadir más hielo si se desea.', 'Servir frío.'],
    benefits: ['Antioxidantes del cacao', 'Satisface antojos', 'Bajo en azúcar', '28g proteína'],
    calories: 300
  },
  {
    id: 'sp4',
    name: 'Vainilla Dream',
    category: 'proteico',
    ingredients: ['1 scoop proteína vainilla', 'Yogur griego', '½ taza de fresas', '1 cda de miel', 'Leche de almendras'],
    preparation: ['Mezclar proteína con yogur.', 'Añadir fresas y leche.', 'Licuar hasta suavizar.', 'Endulzar con miel.'],
    benefits: ['Probióticos', 'Proteína completa', 'Vitamina C', '32g proteína'],
    calories: 320
  },
  {
    id: 'sp5',
    name: 'Green Protein',
    category: 'proteico',
    ingredients: ['1 scoop proteína vegana', '1 taza de espinacas', '1 plátano', 'Mantequilla de almendras', 'Leche de coco'],
    preparation: ['Licuar espinacas con leche.', 'Añadir proteína y plátano.', 'Agregar mantequilla.', 'Servir frío.'],
    benefits: ['Proteína vegetal', 'Hierro y minerales', 'Sin lácteos', '25g proteína'],
    calories: 340
  },
  {
    id: 'sp6',
    name: 'Café Proteico',
    category: 'proteico',
    ingredients: ['1 scoop proteína', '1 shot de espresso frío', '1 plátano', 'Leche de almendras', 'Hielo', 'Canela'],
    preparation: ['Preparar café y enfriar.', 'Licuar con proteína y plátano.', 'Añadir leche y hielo.', 'Decorar con canela.'],
    benefits: ['Cafeína + proteína', 'Pre-entreno ideal', 'Energía + fuerza', '26g proteína'],
    calories: 280
  },
  {
    id: 'sp7',
    name: 'Berry Blast Protein',
    category: 'proteico',
    ingredients: ['1 scoop proteína', '1 taza frutos rojos', 'Yogur griego', 'Semillas de chía', 'Agua de coco'],
    preparation: ['Combinar proteína con yogur.', 'Añadir frutos rojos.', 'Licuar con agua de coco.', 'Añadir chía.'],
    benefits: ['Antioxidantes', 'Omega-3', 'Probióticos', '30g proteína'],
    calories: 310
  },
  {
    id: 'sp8',
    name: 'Tropical Protein',
    category: 'proteico',
    ingredients: ['1 scoop proteína vainilla', 'Piña', 'Mango', 'Leche de coco', 'Coco rallado'],
    preparation: ['Licuar frutas con leche de coco.', 'Añadir proteína.', 'Mezclar bien.', 'Decorar con coco.'],
    benefits: ['Vitaminas tropicales', 'Grasas MCT', 'Refrescante', '25g proteína'],
    calories: 330
  },
  {
    id: 'sp9',
    name: 'Oat Muscle Builder',
    category: 'proteico',
    ingredients: ['1 scoop proteína', '½ taza de avena', 'Plátano', 'Mantequilla de maní', 'Leche', 'Canela'],
    preparation: ['Remojar avena brevemente.', 'Licuar con demás ingredientes.', 'Añadir canela.', 'Servir.'],
    benefits: ['Carbohidratos lentos', 'Saciante', 'Ideal volumen', '35g proteína'],
    calories: 480
  }
];

export const allSmoothies = [...smoothiesEnergeticos, ...smoothiesDetox, ...smoothiesProteicos];
