import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // If user accesses any legacy route, auto-redirect to #mudas or home
    if (location.pathname.includes("produto")) {
      window.location.href = "https://saofranciscomudas.com/#mudas";
    } else {
      const timer = setTimeout(() => {
        window.location.href = "https://saofranciscomudas.com/#mudas";
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-4 rounded-2xl bg-card p-8 border border-border shadow-card">
        <h1 className="text-3xl font-bold font-heading text-primary">São Francisco Mudas</h1>
        <p className="text-muted-foreground text-sm">
          Redirecionando você para o nosso catálogo de mudas...
        </p>
        <a 
          href="/#mudas" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
        >
          Ver Mudas de Goiaba e Mangueiras
        </a>
      </div>
    </div>
  );
};

export default NotFound;
