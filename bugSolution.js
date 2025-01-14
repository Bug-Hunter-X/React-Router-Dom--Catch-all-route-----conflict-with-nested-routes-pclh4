```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { /* ... */ }
function About() { /* ... */ }
function NotFound() {
  let location = useLocation();
  return <div>Not Found: {location.pathname}</div>;
}
export default App;
```

**Explanation:**
The issue stems from the order of routes defined and how React Router matches them. The catch-all route (`/*`) is too general and matches before any more specific route. To fix this issue, we need to ensure the catch-all route is the last route defined so that it only matches when no other routes match.

This solution is effective because the order ensures that the specific routes (`/` and `/about`) are checked before the catch-all route. By placing the catch-all route last in the routes array, the routes system correctly identifies and uses the more specific route first.  Additionally, this example provides explicit feedback by showing the exact pathname of the unmatched route, so the user is aware of what route is not found.