import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ActivityFeed = lazy(() => import('./pages/ActivityFeed'));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ActivityFeed />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
