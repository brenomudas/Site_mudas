import { WhatsAppButton } from "./WhatsAppButton";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppButton 
        size="lg"
        className="rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-elevated"
        message="Olá! Preciso de ajuda com as mudas de goiabeira."
        showIcon={true}
        iconClassName="w-8 h-8"
      >
        <span className="sr-only">WhatsApp</span>
      </WhatsAppButton>
    </div>
  );
};

export default FloatingWhatsApp;
