# React Router Dom: Catch-all Route Conflict with Nested Routes

This repository demonstrates a subtle bug in React Router Dom v6 related to catch-all routes (`/*`) when used within nested router setups. The catch-all route unexpectedly intercepts navigation even when a more specific route exists higher in the route hierarchy. 

The `bug.js` file showcases the problematic code.  The solution in `bugSolution.js` addresses this issue and explains how to correctly handle this scenario.