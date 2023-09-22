import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Navbar />
      <div className="lg:min-h-[calc(100vh-121px)]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default App;