export const mainCategory = [
  {
    name: "Perifericos",
    categoryId: "men",
    level: 1,
    levelTwoCategory:[
  { "name": "Mecánicos", "categoryId": "Teclados mecánicos", "parentCategoryId": "keyboards", "level": 3 },
  { "name": "Membrana", "categoryId": "Teclados de membrana", "parentCategoryId": "keyboards", "level": 3 },
  { "name": "Inalámbricos", "categoryId": "Teclados inalámbricos", "parentCategoryId": "keyboards", "level": 3 },
  { "name": "Gaming", "categoryId": "Teclados gaming", "parentCategoryId": "keyboards", "level": 3 }
    ]
  },
  {
    name: "Componentes",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
  { "name": "Procesadores", "categoryId": "processors", "parentCategoryId": "components", "level": 2 },
  { "name": "Tarjetas Gráficas", "categoryId": "graphics_cards", "parentCategoryId": "components", "level": 2 },
  { "name": "Placas Base", "categoryId": "motherboards", "parentCategoryId": "components", "level": 2 },
  { "name": "Memorias RAM", "categoryId": "ram", "parentCategoryId": "components", "level": 2 },
  { "name": "Fuentes de Poder", "categoryId": "power_supplies", "parentCategoryId": "components", "level": 2 }
    ]   
  },
  {
    name: "Almacenamiento y Unidades Externas",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      { "name": "Discos Duros", "categoryId": "hard_drives", "parentCategoryId": "storage", "level": 2 },
      { "name": "Unidades SSD", "categoryId": "ssd_drives", "parentCategoryId": "storage", "level": 2 },
      { "name": "Memorias USB", "categoryId": "usb_drives", "parentCategoryId": "storage", "level": 2 },
      { "name": "Tarjetas SD", "categoryId": "sd_cards", "parentCategoryId": "storage", "level": 2 }
    ]
  },
  
  {
    name: "Accesorios",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      { "name": "Cables", "categoryId": "cables", "parentCategoryId": "accessories", "level": 2 },
      { "name": "Adaptadores", "categoryId": "adapters", "parentCategoryId": "accessories", "level": 2 },
      { "name": "Soportes", "categoryId": "stands", "parentCategoryId": "accessories", "level": 2 },
      { "name": "Limpieza", "categoryId": "cleaning", "parentCategoryId": "accessories", "level": 2 }
    ]
  },
];
