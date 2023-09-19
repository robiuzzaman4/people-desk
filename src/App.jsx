import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50">
      <Navbar />
      <Outlet />
      <Toaster/>
    </main>
  );
};

export default App;