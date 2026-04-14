# 🍎 La Feria de Limache - E-commerce Frontend

¡Bienvenido a **La Feria de Limache**! Este es un proyecto de tienda virtual desarrollado para el módulo de Frontend M2. La aplicación permite a los usuarios navegar por un catálogo de frutas frescas, agregarlas a una canasta y visualizar un resumen detallado de su compra con cálculos de impuestos en tiempo real.

---

## 🚀 Características (Features)

* **Catálogo Dinámico:** Renderizado de productos (frutas) generado mediante JavaScript a partir de un arreglo de objetos.
* **Carrito de Compras:** Sistema funcional que permite añadir productos y actualizar un contador dinámico en la barra de navegación.
* **Resumen de Compra (Modal):** Ventana emergente de Bootstrap que muestra el desglose de productos, subtotal, cálculo de **IVA (19%)** y total final.
* **Persistencia de Datos:** Uso de `localStorage` para que los productos no se borren de la canasta al recargar la página.
* **Diseño Responsive:** Interfaz optimizada para dispositivos móviles (≤ 420px) y escritorio (≥ 1024px) utilizando el sistema de grillas de Bootstrap.
* **Efectos Visuales:** Animaciones CSS para interactividad en las tarjetas de productos (efecto hover y elevación).

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica (header, nav, main, section, footer).
* **CSS3:** Estilos personalizados y efectos de transición.
* **Bootstrap 5.3:** Framework para el diseño responsive y componentes (Navbar, Cards, Modals, Buttons, Badges).
* **JavaScript (ES6+):** * Manipulación del DOM.
    * Manejo de eventos (click).
    * Uso de `localStorage`.
    * Métodos de arreglos (`forEach`, `find`).
* **Git/GitHub:** Control de versiones y despliegue.

---

## 📁 Estructura del Proyecto

```text
ecommerce-frontend-m2/
├── index.html          # Estructura principal de la página
├── img/                # Recursos visuales (logo.png)
└── assets/
    ├── css/
    │   └── app.css     # Estilos personalizados y responsive
    └── js/
        └── app.js      # Lógica del negocio y manejo del DOM
