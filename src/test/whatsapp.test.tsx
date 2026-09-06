import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhatsAppButton, getWhatsAppLink } from "@/components/WhatsAppButton";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

describe("WhatsApp Integration Tests", () => {
  it("getWhatsAppLink generates wa.me links with recipient number and encoded message", () => {
    const link = getWhatsAppLink("Teste");
    expect(link).toContain("https://wa.me/5587996494036");
    expect(link).toContain("text=Teste");
  });

  it("renders default WhatsAppButton with id='whatsapp-normal' and wa.me href", () => {
    render(<WhatsAppButton>Falar Conosco</WhatsAppButton>);
    const button = screen.getByRole("link", { name: /Falar Conosco/i });
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("id")).toBe("whatsapp-normal");
    expect(button.getAttribute("href")).toContain("https://wa.me/5587996494036");
  });

  it("renders FloatingWhatsApp button with id='whatsapp-flutuante' and wa.me href", () => {
    render(<FloatingWhatsApp />);
    const button = screen.getByRole("link", { name: /WhatsApp/i });
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("id")).toBe("whatsapp-flutuante");
    expect(button.getAttribute("href")).toContain("https://wa.me/5587996494036");
  });

  it("renders Footer WhatsApp link with id='whatsapp-normal' and wa.me href", () => {
    render(<Footer />);
    const link = document.getElementById("whatsapp-normal");
    expect(link).not.toBeNull();
    expect(link?.getAttribute("href")).toContain("https://wa.me/5587996494036");
  });
});
