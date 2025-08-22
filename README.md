**Why this project matters**

**Problem.** Educational e-commerce demos are often static: filtering breaks on page reload, state can’t be shared via link, and the UI doesn’t scale well.

**Solution.** Pet Shop is a fully functional storefront frontend: reliable filtering with backend requests, search parameters stored in the URL (shareable links), a shopping cart, and checkout with modal confirmation.

**Result.** Fast product selection in just 2–3 clicks, easy sharing of filtered results, and an architecture designed for future growth (new filters/categories, alternative data sources).

## 🧱 Architecture

src/
api/ # HTTP client, API requests, decorators
components/ # Reusable UI components
features/ # Redux slices: products/, categories/, cart/
hooks/ # Custom hooks: useFetch, usePagination, etc.
pages/ # Main pages: Catalog, Product, Cart, Checkout
styles/ # CSS Modules and MUI overrides
utils/ # Helpers: URL/query handling, data formatting


### Principles
- Clear separation of concerns (**UI ↔ state ↔ data layer**)  
- Reusable components and hooks for scalability  
- URL-based state for filters (**shareable, SEO-friendly**)  
- Performance optimization with memoization (`React.memo`, `useMemo`, `useCallback`)
