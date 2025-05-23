


кнопка с пропасами и особености передачи стилей. часть в прототипе часть каждой отдельной кнопке 
// src/pages/HomePage/HomePage.jsx:31



"@mui/material/Select"
src\components\Products\ProductsSearch\ProductsSearch.jsx

src\components\Cart\CartCheckout\CartCheckout.jsx

Логування повного URL з параметрами для перевырки який запит іде на бек енд 
src\api\categories-api.js

-------------------
Ти передаєш getCategorieById(id, params)
а requestDecorator передає тільки один аргумент — payload.
src\api\requestDecorator.js

getCategorieById(id, filters) // → 2 аргументи
↓
requestFunction(payload) // → тільки перший передається (id)
requestDecorator, щоб він підтримував кілька аргументів:
------------------------

меморизацыя
src\components\Cart\CartItem\CartItem.jsx
-----------------------------
store c  persisterom  для сохранения корзини после перезагрузки.
src\redux\store.js
------------------------
обрезала строку чтобы помещалось все красиво относительно картинок
src\components\OneProductView\OneProductView.jsx:37

------
искала возможность как подключить 
src\redux\store.js