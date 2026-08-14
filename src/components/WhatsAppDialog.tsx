import { pushToDataLayer } from "@/lib/analytics";
import { createPortal } from "react-dom";

interface WhatsAppDialogProps {
  open: boolean;
  onClose: () => void;
  whatsappUrl: string;
}

const WhatsAppDialog = ({ open, onClose, whatsappUrl }: WhatsAppDialogProps) => {
  if (!open) return null;

  const handleChoice = (choice: boolean) => {
    if (choice) {
      pushToDataLayer({
        event: "click_50pl",
        timestamp: new Date().toISOString(),
      });

      // Fecha o diálogo
      onClose();

      // Redireciona para o WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } else {
      // Apenas fecha o diálogo
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-card rounded-2xl shadow-elevated w-full max-w-md mx-auto overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Header com ícone WhatsApp */}
        <div className="bg-[hsl(var(--whatsapp))] px-6 py-5 flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-lg md:text-xl font-[Poppins]">
            Antes de continuar...
          </h3>
        </div>

        {/* Body */}
        <div className="px-6 py-6 md:py-8">
          <p className="text-foreground text-base md:text-lg font-medium text-center leading-relaxed">
            Você deseja comprar com{" "}
            <span className="text-[hsl(var(--primary))] font-bold">preço para produtor</span>?{" "}
            <span className="text-muted-foreground">(+50 plantas)</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="flex-1 bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp-hover))] text-white font-bold text-base md:text-lg py-3.5 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-cta"
          >
            ✅ Sim
          </button>
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="flex-1 border-2 border-border text-foreground font-semibold text-base md:text-lg py-3.5 px-6 rounded-xl transition-all duration-200 hover:bg-muted hover:scale-[1.02] active:scale-[0.98]"
          >
            Não
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default WhatsAppDialog;
