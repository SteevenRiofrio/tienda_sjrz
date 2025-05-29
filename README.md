# Tienda SJRZ

## Instalación y Uso
```bash
npm install
npm run dev
```
La API estará disponible en `http://localhost:3000`

---

## 📂 ENDPOINTS - CATEGORÍAS

### GET /api/categorias
**Descripción:** Obtiene todas las categorías  
**Método:** GET  
**URL:** `http://localhost:3000/api/categorias`  
**Respuesta:**
```json
[
  {
    "Id": 1,
    "Nombre": "Electrónica"
  },
  {
    "Id": 2,
    "Nombre": "Hogar"
  }
]
```

### GET /api/categorias/:id
**Descripción:** Obtiene una categoría específica por ID  
**Método:** GET  
**URL:** `http://localhost:3000/api/categorias/1`  
**Respuesta:**
```json
{
  "Id": 1,
  "Nombre": "Electrónica"
}
```

### POST /api/categorias
**Descripción:** Crea una nueva categoría  
**Método:** POST  
**URL:** `http://localhost:3000/api/categorias`  
**Body:**
```json
{
  "Nombre": "Ropa"
}
```
**Respuesta:**
```json
{
  "message": "Categoría creada",
  "id": 4
}
```

### PUT /api/categorias/:id
**Descripción:** Actualiza una categoría existente  
**Método:** PUT  
**URL:** `http://localhost:3000/api/categorias/1`  
**Body:**
```json
{
  "Nombre": "Electronics"
}
```
**Respuesta:**
```json
{
  "message": "Categoría actualizada"
}
```

### DELETE /api/categorias/:id
**Descripción:** Elimina una categoría  
**Método:** DELETE  
**URL:** `http://localhost:3000/api/categorias/4`  
**Respuesta:**
```json
{
  "message": "Categoría eliminada"
}
```

---

## 📂 ENDPOINTS - SUBCATEGORÍAS

### GET /api/subcategorias
**Descripción:** Obtiene todas las subcategorías con información de su categoría padre  
**Método:** GET  
**URL:** `http://localhost:3000/api/subcategorias`  
**Respuesta:**
```json
[
  {
    "Id": 1,
    "Nombre": "Celulares",
    "CategoriaId": 1,
    "CategoriaNombre": "Electrónica"
  }
]
```

### GET /api/subcategorias/:id
**Descripción:** Obtiene una subcategoría específica por ID  
**Método:** GET  
**URL:** `http://localhost:3000/api/subcategorias/1`  
**Respuesta:**
```json
{
  "Id": 1,
  "Nombre": "Celulares",
  "CategoriaId": 1,
  "CategoriaNombre": "Electrónica"
}
```

### POST /api/subcategorias
**Descripción:** Crea una nueva subcategoría  
**Método:** POST  
**URL:** `http://localhost:3000/api/subcategorias`  
**Body:**
```json
{
  "Nombre": "Tablets",
  "CategoriaId": 1
}
```
**Respuesta:**
```json
{
  "message": "Subcategoría creada",
  "id": 7
}
```

### PUT /api/subcategorias/:id
**Descripción:** Actualiza una subcategoría existente  
**Método:** PUT  
**URL:** `http://localhost:3000/api/subcategorias/1`  
**Body:**
```json
{
  "Nombre": "Smartphones",
  "CategoriaId": 1
}
```
**Respuesta:**
```json
{
  "message": "Subcategoría actualizada"
}
```

### DELETE /api/subcategorias/:id
**Descripción:** Elimina una subcategoría  
**Método:** DELETE  
**URL:** `http://localhost:3000/api/subcategorias/7`  
**Respuesta:**
```json
{
  "message": "Subcategoría eliminada"
}
```

---

## 📂 ENDPOINTS - PRODUCTOS

### GET /api/productos
**Descripción:** Obtiene todos los productos con información de subcategoría y categoría  
**Método:** GET  
**URL:** `http://localhost:3000/api/productos`  
**Respuesta:**
```json
[
  {
    "Id": 1,
    "Nombre": "iPhone 14",
    "Precio": 999.99,
    "Stock": 10,
    "SubcategoriaId": 1,
    "FechaIngreso": "2024-01-15T10:30:00.000Z",
    "SubcategoriaNombre": "Celulares",
    "CategoriaNombre": "Electrónica"
  }
]
```

### GET /api/productos/:id
**Descripción:** Obtiene un producto específico por ID  
**Método:** GET  
**URL:** `http://localhost:3000/api/productos/1`  
**Respuesta:**
```json
{
  "Id": 1,
  "Nombre": "iPhone 14",
  "Precio": 999.99,
  "Stock": 10,
  "SubcategoriaId": 1,
  "FechaIngreso": "2024-01-15T10:30:00.000Z",
  "SubcategoriaNombre": "Celulares",
  "CategoriaNombre": "Electrónica"
}
```

### POST /api/productos
**Descripción:** Crea un nuevo producto  
**Método:** POST  
**URL:** `http://localhost:3000/api/productos`  
**Body:**
```json
{
  "Nombre": "Samsung Galaxy S24",
  "Precio": 899.99,
  "Stock": 25,
  "SubcategoriaId": 1
}
```
**Respuesta:**
```json
{
  "message": "Producto creado",
  "id": 7
}
```

### PUT /api/productos/:id
**Descripción:** Actualiza un producto existente  
**Método:** PUT  
**URL:** `http://localhost:3000/api/productos/1`  
**Body:**
```json
{
  "Nombre": "iPhone 15 Pro",
  "Precio": 1199.99,
  "Stock": 8,
  "SubcategoriaId": 1
}
```
**Respuesta:**
```json
{
  "message": "Producto actualizado"
}
```

### DELETE /api/productos/:id
**Descripción:** Elimina un producto  
**Método:** DELETE  
**URL:** `http://localhost:3000/api/productos/7`  
**Respuesta:**
```json
{
  "message": "Producto eliminado"
}
```

---

## 🎯 ENDPOINT COMPLEJO OBLIGATORIO

### GET /api/productos/detallado
**Descripción:** Obtiene información detallada de todos los productos incluyendo: nombre del producto, precio, stock, subcategoría, categoría y años desde su ingreso al inventario.  
**Método:** GET  
**URL:** `http://localhost:3000/api/productos/detallado`  

**Respuesta:**
```json
[
  {
    "Producto": "iPhone 14",
    "Precio": 999.99,
    "Stock": 10,
    "Subcategoria": "Celulares",
    "Categoria": "Electrónica",
    "AniosEnInventario": 1
  },
  {
    "Producto": "Laptop Dell",
    "Precio": 799.50,
    "Stock": 5,
    "Subcategoria": "Computadoras",
    "Categoria": "Electrónica",
    "AniosEnInventario": 1
  },
  {
    "Producto": "Licuadora Oster",
    "Precio": 69.90,
    "Stock": 20,
    "Subcategoria": "Cocina",
    "Categoria": "Hogar",
    "AniosEnInventario": 1
  }
]
```

**Campos devueltos:**
- **Producto:** Nombre del producto
- **Precio:** Precio del producto
- **Stock:** Cantidad disponible
- **Subcategoria:** Nombre de la subcategoría
- **Categoria:** Nombre de la categoría padre
- **AniosEnInventario:** Años transcurridos desde la fecha de ingreso

---

## 🗄️ Base de Datos
La API utiliza MySQL con las siguientes tablas:
- **Categorias:** Almacena las categorías principales
- **Subcategorias:** Almacena subcategorías vinculadas a categorías
- **Productos:** Almacena productos vinculados a subcategorías

## 🛠️ Tecnologías
- Node.js
- Express.js
- MySQL2
- JavaScript

## 📝 Notas
- Todos los endpoints manejan errores HTTP apropiados (404, 500)
- Las respuestas son en formato JSON
- La API incluye validaciones básicas para campos requeridos