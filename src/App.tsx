import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import Home from './pages/home';
import Business from './pages/business';
import Error from "./pages/error";

// components
import BaseLayout from './components/common/BaseLayout';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="business/:id" element={<Business />} />
        </Route>

        <Route path="/404" element={<Error />} />
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
