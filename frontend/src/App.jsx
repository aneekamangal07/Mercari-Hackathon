import { Routes, Route, useLocation } from 'react-router-dom';
import { PageHeader } from './layouts';
import { PageFooter, PageNavigation } from './layouts';
import { Categories } from './components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WomenPage from './pages/WomenPage';
import WomenSpecificPage from './pages/WomenSpecificPage';
import MomToBe from './pages/MomToBe';
import DescriptionPage from './pages/DescriptionPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  return (
    <div>
      <main className="container mx-auto max-w-screen-xl">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                  <Categories />
                </div>
                <HomePage />
              </>
            }
          />
          <Route
            path="/women-fashion"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                </div>
                <WomenSpecificPage />
              </>
            }
          />
          <Route
            path="/women-style"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                </div>
                <WomenPage />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/moms"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                </div>
                <MomToBe />
              </>
            }
          />
          <Route
            path="/item/:id"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                </div>
                <DescriptionPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div className="sticky top-0 z-10 bg-white">
                  <PageHeader />
                </div>
                <AboutPage />
              </>
            }
          />
        </Routes>
      </main>
      <PageFooter />
      <PageNavigation />
    </div>
  );
}
