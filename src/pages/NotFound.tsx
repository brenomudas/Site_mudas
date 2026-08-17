import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediate 301 client-side redirect for any legacy product or page path
    const path = location.pathname.toLowerCase();
    if (path.includes("produto") || path.includes("goiaba") || path.includes("paluma")) {
      window.location.replace("https://saofranciscomudas.com/#mudas");
    } else if (path.includes("empresa") || path.includes("sobre")) {
      window.location.replace("https://saofranciscomudas.com/#sobre");
    } else {
      window.location.replace("https://saofranciscomudas.com/#mudas");
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-4 rounded-2xl bg-card p-8 border border-border shadow-card">
        <h1 className="text-3xl font-bold font-heading text-primary">São Francisco Mudas</h1>
        <p className="text-muted-foreground text-sm">
          Redirecionando para o catálogo de mudas...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
