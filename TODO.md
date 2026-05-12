# QuickCart Part 3 - Implementation TODO

## Step 1: Setup routing & pages
- [x] Install `react-router-dom`

- [x] Create `src/components/HomePage.jsx`
- [x] Create `src/components/CategoryPage.jsx`
- [x] Create `src/components/CartPage.jsx`
- [x] Update `src/App.jsx` with `BrowserRouter`, `Routes`, and `Route`
- [x] Update `src/components/Header.jsx` with navigation links + search input

## Step 2: UI styling
- [ ] Update `src/styles/Header.css` for nav/search layout
- [ ] Add `src/styles/CartPage.css` and basic cart page styling

## Step 3: Context API refactor
- [x] Create `src/context/CartContext.jsx`
- [x] Wrap app with `CartProvider` in `src/main.jsx`
- [x] Refactor `Header`, `CartSidebar`, and new pages to use `useCart()`

## Step 4: localStorage persistence
- [ ] Create `src/hooks/useLocalStorage.js`
- [ ] Update `CartContext` to persist cart to localStorage

## Step 5: Search/filter + empty states polish
- [ ] Ensure Home search is case-insensitive and real-time
- [ ] Ensure Category page filters by URL param
- [ ] Verify empty states across pages

## Step 6: Testing
- [ ] Refresh persistence test
- [ ] Back/forward router test
- [ ] Cart badge updates everywhere
- [ ] Quantity updates and totals correct

## Step 7: Final prep
- [ ] Run lint/build (if available)
- [ ] Commit & push branch

