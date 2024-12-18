// datosRecetas.js
import * as pictures from '../img/pictures';

export const recetas = [
  {
    id: 1,
    fotoSrc: pictures.imagen1,
    titulo: 'Tarta de pollo y vegetales sin gluten',
    ingredientes: ['2 tazas de harina sin gluten (puedes usar harina de almendra, harina de arroz, harina de maíz, harina de coco, entre otras).', 
    '1/2 taza de mantequilla fría, cortada en cubos.', 
    '1 huevo.' , 
    '1 cucharadita de sal.',  
    '2-3 cucharadas de agua fría, según sea necesario.', 
    '2 pechugas de pollo cocidas y desmenuzadas.',
     '1 taza de brócoli cortado en pequeños floretes.', 
     '1 zanahoria rallada.',
      '1 pimiento rojo, cortado en cubos.',
       '1 cebolla, picada.', 
       '1 taza de queso rallado sin gluten (puedes usar queso cheddar, mozzarella o tu favorito).',  
        '1 taza de leche sin gluten.', 
         '3 huevos.', 
          'Sal y pimienta al gusto.', 
           'Hierbas y especias opcionales (tomillo, orégano, albahaca, etc.).'],
    preparacion: ['Precalienta el horno a 180°C.', 
    'Para la masa, mezcla la harina sin gluten, la mantequilla fría, el huevo y la sal en un procesador de alimentos. Agrega agua fría, una cucharada a la vez, hasta que la masa se una. Forma una bola, envuélvela en film transparente y refrigérala durante al menos 30 minutos.',
    'Estira la masa en una superficie enharinada con harina sin gluten y colócala en un molde para tarta engrasado. Pincha el fondo con un tenedor. ', 
    ' Para el relleno, mezcla el pollo desmenuzado, brócoli, zanahoria, pimiento, cebolla y queso en un tazón.', 
    'En otro tazón, bate los huevos y agrega la leche. Condimenta con sal, pimienta y hierbas al gusto. ', 
    ' Vierte la mezcla líquida sobre los ingredientes del relleno y mezcla bien.', 
    'Vierte la mezcla de relleno sobre la masa en el molde para tarta. ', 
    ' Hornea en el horno precalentado durante 40-45 minutos o hasta que la tarta esté dorada y firme al tacto.',
    'Deja enfriar antes de cortar en porciones. ',
     '¡Espero que disfrutes de esta deliciosa tarta de pollo y vegetales sin gluten! '],
   
    tipo: 'Celiaco',
    
  },
    
      {
        id: 2,
        fotoSrc: pictures.imagen2,
        titulo: 'Empanada vegana',
        ingredientes: [' 2 tazas de harina de trigo',
         ' 1/2 taza de aceite vegetal', 
         '1/2 taza de agua fría ', 
         '1 cucharadita de sal ',
          '1 taza de lentejas cocidas ', 
          ' 1 cebolla, picada', 
          ' 2 dientes de ajo, picados', 
          ' 1 zanahoria, rallada',
           '1 pimiento rojo, picado ', 
           '1 taza de espinacas frescas, picadas ', 
           ' 1 tomate, picado', 
            ' 1 cucharadita de comino molido',
             ' 1 cucharadita de paprika', 
             ' Sal y pimienta al gusto',
              ' Aceite de oliva para cocinar'],
        preparacion:[' En un tazón grande, mezcla la harina con la sal.', 
        ' Agrega el aceite vegetal y mezcla hasta obtener una textura arenosa.', 
        ' Agrega el agua fría gradualmente y mezcla hasta formar una masa homogénea.', 
        ' Amasa la masa en una superficie enharinada hasta que esté suave.', 
        ' Cubre la masa con un paño húmedo y déjala reposar mientras preparas el relleno.', 
        ' Calienta un poco de aceite de oliva en una sartén a fuego medio.', 
        'Agrega la cebolla y el ajo picados y cocina hasta que estén dorados. ',
        'Agrega la zanahoria rallada, el pimiento, las espinacas y el tomate. Cocina hasta que las verduras estén tiernas. ', 
        ' Agrega las lentejas cocidas y las especias (comino, paprika, sal y pimienta). Mezcla bien y cocina durante unos minutos',
        ' Retira la mezcla del fuego y deja enfriar.', 
        'Precalienta el horno a 180°C. ', 
        'Divide la masa en pequeñas porciones y estíralas con un rodillo en círculos del tamaño deseado. ', 
        'Coloca una porción de relleno en el centro de cada círculo de masa. ', 
        ' Dobla la masa por la mitad, cubriendo el relleno, y presiona los bordes con un tenedor para sellarlas.', 
        'Coloca las empanadas en una bandeja para horno y hornéalas hasta que estén doradas, aproximadamente 20-25 minutos. ',
        '¡Y listo! Ahora tendrás deliciosas empanadas veganas para disfrutar. Puedes ajustar los ingredientes del relleno según tus preferencias personales. ¡Buen provecho!'],
        tipo: 'Vegano',
      },
      {
        id: 3,
        fotoSrc: pictures.imagen3,
        titulo: 'Tarta de queso sin lactosa estilo americano',  
        ingredientes: ['200 g de galletas sin lactosa (elige una marca sin lactosa o certificada) ', 
        '100 g de margarina sin lactosa derretida ', 
        '500 g de queso crema sin lactosa, a temperatura ambiente ',
        '200 g de azúcar ',
        '4 huevos ',
        '1 cucharadita de extracto de vainilla sin lactosa ',
        '1 cucharada de harina sin lactosa (puedes usar harina de almendra o harina de arroz) ',
        'Mermelada sin lactosa de tu elección (fresa, frutos rojos, etc.) '],
        preparacion:[' 1. Preparar la base:', 
        'Tritura las galletas sin lactosa en un procesador de alimentos hasta obtener migas finas.', 
        'Mezcla las migas de galleta con la margarina derretida. ',
        ' Presiona la mezcla de galletas en el fondo de un molde para tarta, creando una base uniforme.',
        'Refrigera la base mientras preparas el relleno. ',
        ' 2. Preparar el relleno:',
        ' Precalienta el horno a 160°C.',
        ' En un tazón grande, bate el queso crema sin lactosa hasta que esté suave.',
        ' Agrega el azúcar y sigue batiendo hasta que la mezcla esté cremosa.',
        ' Añade los huevos uno a uno, batiendo bien después de cada adición.',
        ' Agrega el extracto de vainilla y la harina sin lactosa. Mezcla hasta que estén bien incorporados.',
        '3.Hornear la tarta: ',
        'Vierte la mezcla sobre la base de galleta en el molde para tarta. ',
        'Hornea en el horno precalentado durante aproximadamente 45-50 minutos o hasta que el centro de la tarta esté casi firme. ',
        'Deja enfriar la tarta en el molde y luego refrigérala durante al menos 4 horas o toda la noche. ',
        '4. Agregar la cobertura (opcional): ',
        'Calienta ligeramente la mermelada sin lactosa en una cacerola. ',
        ' Extiende la mermelada sobre la tarta refrigerada como cobertura.',
        ' Vuelve a refrigerar por unos 30 minutos para que la cobertura se asiente.',
        ' ¡Y ahí lo tienes! Una deliciosa Tarta de Queso sin lactosa estilo americano. Puedes adaptar la receta según tus preferencias y necesidades dietéticas. ¡Disfruta!'],
        tipo: 'Sin Lactosa',
      },
      {
        id: 4,
        fotoSrc: pictures.imagen4,
        titulo: 'Boneless de coliflor en freidora de aire',        
        ingredientes:['1 cabeza de coliflor, cortada en pequeños floretes ',
        ' 1 taza de harina de almendra (o harina de todo uso si no te importan los granos)',
        '1 taza de leche de almendra (o cualquier leche no láctea) ', 
        ' 1 taza de pan rallado (puede ser pan rallado panko para una textura más crujiente)',
        ' 1 cucharadita de ajo en polvo',
        ' 1 cucharadita de cebolla en polvo',
        ' 1 cucharadita de paprika',
        ' 1/2 cucharadita de pimienta negra',
        '1/2 cucharadita de sal ',
        'Salsa de búfalo (opcional, para servir) '],
        preparacion:['1. Preparar la coliflor: ', 
        ' Lava y corta la coliflor en pequeños floretes, intentando que tengan un tamaño uniforme.', 
        ' 2. Preparar la estación de empanizado:', 
        'En tres tazones diferentes, coloca la harina de almendra en uno, la leche de almendra en otro, y el pan rallado mezclado con ajo en polvo, cebolla en polvo, paprika, pimienta negra y sal en el tercero. ', 
        '3. Empanizar la coliflor: ', 
        ' Sumerge cada florete de coliflor primero en la harina de almendra, luego en la leche de almendra y finalmente en la mezcla de pan rallado, asegurándote de cubrirlos completamente.', 
        '4. Preparar la freidora de aire: ', 
        ' Precalienta la freidora de aire a 200°C.', 
        '5. Cocinar en la freidora de aire: ', 
        ' Coloca los floretes de coliflor empanizados en la canasta de la freidora de aire en una sola capa, sin amontonar.   ', 
        'Rocía con un poco de aceite en aerosol para obtener un acabado más crujiente. ', 
        'Cocina durante 15-20 minutos, volteando los boneless a la mitad del tiempo, hasta que estén dorados y crujientes. ', 
        ' 6. Servir:', 
        ' Sirve los boneless de coliflor calientes.', 
        ' Opcional: sirve con salsa de búfalo para un toque picante.', 
        ' ¡Listo! Ahora tienes unas deliciosas y crujientes boneless de coliflor listas para disfrutar. Puedes ajustar los condimentos y salsas según tus preferencias personales.'],
        tipo: 'Vegano',
      },
      {
        id: 5,
        fotoSrc: pictures.imagen5,
        titulo: 'Tacos de nopales con salsa martajada',
        ingredientes: ['1 taza de nopales (limpios y cortados en tiras) ', 
        '1 cucharada de aceite de oliva ', 
        ' 1 diente de ajo (picado)', 
        'Sal y pimienta al gusto ', 
        ' Tortillas de maíz (para servir)', 
        ' 2 tomates medianos', 
        '1 chile serrano (ajusta según tu tolerancia al picante) ', 
        '1 diente de ajo ',  
        'Sal al gusto '],
        preparacion:['1. Preparar los Nopales: ', 
        ' Lava y corta los nopales en tiras. Puedes comprar nopales ya limpios en tiendas de alimentos mexicanos o prepararlos tú mismo.', 
        ' 2. Cocinar los Nopales:', 
        'En una sartén, calienta el aceite de oliva a fuego medio. ', 
        'Agrega el ajo picado y saltea por un minuto. ', 
        'Añade los nopales y cocina hasta que estén tiernos, aproximadamente 10 minutos. ', 
        ' Sazona con sal y pimienta al gusto.', 
        '3. Preparar las Tortillas: ', 
        ' Calienta las tortillas de maíz en una sartén o comal hasta que estén calientes y flexibles.', 
        '4. Armar los Tacos: ', 
        'Coloca una porción de nopales en cada tortilla. ', 
        ' 5. Asar los Tomates y Chile:', 
        'Asa los tomates y el chile serrano en un sartén caliente o directamente sobre la llama de la estufa hasta que la piel se queme y se dore. ',
        '6. Machacar en Molcajete: ',
        ' Coloca los tomates asados, el chile serrano, y el ajo en un molcajete.',
        ' Agrega sal al gusto.',
        ' Machaca los ingredientes hasta obtener una salsa con textura.',
        '7. Ajustar Sazón: ',
        ' Prueba la salsa y ajusta la sal según sea necesario.',
        ' 8. Armar los Tacos:',
        'Rellena las tortillas con los nopales cocidos. ',
        'Añade la salsa martajada al gusto. ',
        ' 9. Disfrutar:',
        ' Sirve tus tacos de nopales con salsa martajada y disfruta de esta deliciosa opción vegetariana.',
        '¡Y ahí lo tienes! Unos deliciosos Tacos de Nopales con Salsa Martajada listos para ser disfrutados. Puedes acompañarlos con cebolla, cilantro, limón u otros ingredientes según tus preferencias. ¡Buen provecho! '],
        tipo: 'Vegano',
      },
      {
        id: 6,
        fotoSrc: pictures.imagen6,
        titulo: 'Bizcocho de castañas sin gluten',
        ingredientes: ['1 taza de harina de almendra ', 
        ' 1/2 taza de harina de castaña (asegúrate de que sea sin gluten)', 
        ' 1/2 taza de azúcar',
        '1/2 taza de puré de castañas ',
        '1/2 taza de aceite de coco o aceite vegetal ',
        '4 huevos',
        '1 cucharadita de extracto de vainilla ',
        ' 1 cucharadita de polvo de hornear sin gluten',
        ' 1/2 cucharadita de sal',
        '1/2 cucharadita de canela (opcional) '],
        preparacion:['1. Precalienta el horno: ', 
        ' Precalienta tu horno a 180°C. Engrasa y enharina un molde para bizcochos.', 
        '2. Mezcla los ingredientes secos: ', 
        'En un tazón grande, mezcla la harina de almendra, la harina de castaña, el azúcar, el polvo de hornear, la sal y la canela. ', 
        '3. Mezcla los ingredientes húmedos:', 
        'En otro tazón, bate los huevos y luego agrega el puré de castañas, el aceite de coco (o aceite vegetal) y el extracto de vainilla. Mezcla bien. ', 
        '4. Combina las mezclas: ', 
        'Agrega los ingredientes húmedos a los ingredientes secos y mezcla hasta obtener una masa homogénea. ', 
        ' 5. Hornea:', 
        ' Vierte la masa en el molde preparado y alísala con una espátula.', 
        ' Hornea en el horno precalentado durante aproximadamente 30-35 minutos o hasta que al insertar un palillo en el centro, este salga limpio.', 
        ' 6. Enfría:', 
        'Deja enfriar el bizcocho en el molde durante unos 10 minutos y luego transfiérelo a una rejilla para que se enfríe completamente. ', 
        '7. Sirve: ', 
        'Corta en porciones y sirve. Puedes espolvorear un poco de azúcar glas o decorar con crema si lo deseas. ',  
        ' ¡Y ahí lo tienes! Un delicioso bizcocho de castañas sin gluten. Puedes disfrutarlo como postre o acompañado de tu bebida caliente favorita. '],
        tipo: ' Celiaco',
      },
      {
        id: 7,
        fotoSrc: pictures.imagen7,
        titulo: 'Pan de maíz apto para celiacos',
        ingredientes:[' 1 taza de harina de maíz (asegúrate de que sea sin gluten)', 
        '1 taza de harina sin gluten para todo uso ', 
        ' 1 taza de harina de almendra', 
        ' 1 taza de suero de leche sin lactosa o leche sin lactosa', 
        '1/2 taza de aceite de coco o aceite vegetal ', 
        '1/4 taza de azúcar ', 
        '2 cucharaditas de polvo de hornear sin gluten ', 
        '1 cucharadita de bicarbonato de sodio ', 
        '1/2 cucharadita de sal ', 
        ' 3 huevos',  
        '1 taza de maíz enlatado (escurrido) '],
        preparacion:['1. Precalienta el horno: ', 
        'Precalienta tu horno a 180°C. Engrasa y enharina un molde para pan. ',
        ' 2. Mezcla los ingredientes secos:', 
        'En un tazón grande, mezcla la harina de maíz, la harina sin gluten, la harina de almendra, el azúcar, el polvo de hornear, el bicarbonato de sodio y la sal. ', 
        '3. Mezcla los ingredientes húmedos: ', 
        'En otro tazón, bate los huevos y luego agrega el suero de leche (o leche sin lactosa) y el aceite de coco (o aceite vegetal). Mezcla bien. ', 
        '4. Combina las mezclas: ', 
        ' Agrega los ingredientes húmedos a los ingredientes secos y mezcla hasta obtener una masa homogénea.', 
        ' 5. Añade el maíz:', 
        'Agrega el maíz enlatado a la masa y mezcla suavemente. ', 
        '6. Hornea: ', 
        'Vierte la masa en el molde preparado y alísala con una espátula. ', 
        'Hornea en el horno precalentado durante aproximadamente 40-45 minutos o hasta que al insertar un palillo en el centro, este salga limpio. ',  
        ' 7. Enfría:', 
        'Deja enfriar el pan en el molde durante unos 10 minutos y luego transfiérelo a una rejilla para que se enfríe completamente. ', 
        '8. Sirve: ', 
        ' Corta en rebanadas y sirve. Puedes disfrutar este pan de maíz sin gluten con mantequilla, mermelada o cualquier otro acompañamiento que prefieras.', 
        ' ¡Ahí lo tienes! Un delicioso pan de maíz sin gluten apto para celiacos. '],
        tipo: ' Celiaco',
      },
      {
        id: 8,
        fotoSrc: pictures.imagen8,
        titulo: ' Pollo al curry con leche de coco',
        ingredientes: ['500 g de pechugas de pollo, cortadas en trozos ',
        '1 lata (400 ml) de leche de coco ',
        '1 cebolla, picada finamente ',
        ' 3 dientes de ajo, picados',
        ' 1 trozo de jengibre fresco (aproximadamente 1 pulgada), rallado',
        '2 tomates, picados ',
        '1 pimiento rojo, cortado en tiras ',
        '2 cucharadas de pasta de curry rojo o amarillo (ajusta según tu preferencia de picante) ',
        '1 cucharadita de cúrcuma ',
        ' 1 cucharadita de comino molido',
        ' 1 cucharadita de cilantro molido',
        '1 cucharadita de pimentón ',
        ' 1 cucharadita de azúcar',
        'Sal y pimienta al gusto ',
        'Aceite vegetal para cocinar ',
        'Arroz cocido para acompañar '],
        preparacion:['1. Preparar el Pollo: ', 
        ' Sazona los trozos de pollo con sal y pimienta.', 
        '2. Cocinar el Pollo: ',
        'En una sartén grande o una olla a fuego medio-alto, calienta un poco de aceite. ',
        'Agrega los trozos de pollo y cocina hasta que estén dorados por todos lados. Retira el pollo y reserva. ',
        '3. Preparar la Salsa: ',
        'En la misma sartén, agrega un poco más de aceite si es necesario. ',
        ' Añade la cebolla, el ajo y el jengibre rallado. Cocina hasta que la cebolla esté tierna y fragante.',
        ' 4. Añadir los Condimentos:',
        'Agrega la pasta de curry, cúrcuma, comino, cilantro, pimentón y azúcar. Cocina por unos minutos para liberar los sabores. ',
        '5. Incorporar los Vegetales: ',
        'Agrega los tomates y pimientos. Cocina hasta que los tomates se deshagan un poco. ',
        '6. Regresar el Pollo: ',
        ' Vuelve a colocar los trozos de pollo en la sartén y mezcla bien con la salsa.',
        '7. Agregar la Leche de Coco: ',
        'Vierte la leche de coco sobre el pollo y mezcla todo. Lleva la mezcla a ebullición. ',
        '8. Cocinar a Fuego Lento: ',
        'Reduce el fuego a bajo y cocina a fuego lento durante unos 20-25 minutos, o hasta que el pollo esté bien cocido y la salsa haya espesado. ',
        ' 9. Corregir Sazón:',
        ' Prueba y ajusta la sazón según sea necesario. Puedes agregar más sal, azúcar o pasta de curry según tus preferencias.',
        '10. Servir: ',
        'Sirve el pollo al curry sobre arroz cocido y disfruta de este delicioso plato. ',
        '¡Listo! Ahora puedes disfrutar de un delicioso Pollo al Curry con Leche de Coco. ¡Buen provecho! '],
        tipo: 'Sin Lactosa',
      },
      {
        id: 9,
        fotoSrc: pictures.imagen9,
        titulo: ' Hamburguesa de tofu y garbanzos',
        ingredientes:['200 g de tofu firme, escurrido y prensado para eliminar el exceso de agua ', 
        '1 lata (400 g) de garbanzos, escurridos y enjuagados ', 
        '1 cebolla pequeña, picada finamente ',
        '2 dientes de ajo, picados ',
        ' 1 zanahoria, rallada',
        '1 taza de avena (puedes usar avena certificada sin gluten si es necesario) ',
        ' 2 cucharadas de salsa de soja',
        '1 cucharada de mostaza ',
        ' 1 cucharadita de comino molido',
        '1 cucharadita de pimentón ahumado ',
        ' Sal y pimienta al gusto',
        'Aceite para cocinar ',
        ' Panecillos de hamburguesa y tus condimentos favoritos'],
        preparacion:['1. Preparar los Ingredientes: ', 
        ' Prensa el tofu para eliminar el exceso de agua. Puedes envolverlo en papel de cocina y colocar algo pesado encima durante unos 15-20 minutos.', 
        '2. Procesar los Ingredientes: ', 
        'En un procesador de alimentos, combina el tofu escurrido, los garbanzos, la cebolla, el ajo, la zanahoria, la avena, la salsa de soja, la mostaza, el comino, el pimentón, la sal y la pimienta. Procesa hasta obtener una mezcla uniforme. ', 
        '3. Formar las Hamburguesas: ', 
        'Divide la mezcla en porciones y forma hamburguesas con las manos. Asegúrate de que tengan el tamaño adecuado para tus panecillos. ', 
        '4. Refrigerar: ', 
        ' Coloca las hamburguesas en el refrigerador durante al menos 30 minutos para que se endurezcan y sean más fáciles de manejar.', 
        '5. Cocinar las Hamburguesas: ', 
        'Calienta un poco de aceite en una sartén grande a fuego medio. ', 
        ' Cocina las hamburguesas durante 4-5 minutos por cada lado, o hasta que estén doradas y cocidas por completo.', 
        '6. Servir:', 
        'Sirve las hamburguesas en panecillos y agrégales tus condimentos y acompañamientos favoritos. ', 
        '¡Listo! Ahora tienes unas deliciosas hamburguesas de tofu y garbanzos. Puedes disfrutarlas con ensaladas, salsas, aguacate o cualquier otro complemento que desees. ¡Disfruta de tu comida vegetariana! '],
        tipo: ' Sin Lactosa',
      },
    ];

  