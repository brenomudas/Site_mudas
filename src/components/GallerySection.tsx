import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  { src: "/gallery/foto-01.jpg", alt: "Plantas matrizes oriundas da EMBRAPA" },
  { src: "/gallery/foto-02.jpg", alt: "Plantação de goiabeiras no campo" },
  { src: "/gallery/foto-03.jpg", alt: "Vista panorâmica da plantação" },
  { src: "/gallery/foto-04.jpg", alt: "Sistema de irrigação no viveiro" },
  { src: "/gallery/foto-05.jpg", alt: "Goiabeiras em desenvolvimento" },
  { src: "/gallery/foto-06.jpg", alt: "Mudas prontas para envio" },
  { src: "/gallery/foto-07.jpg", alt: "Mudas em caixas de madeira" },
  { src: "/gallery/foto-08.jpg", alt: "Mudas no caminhão de transporte" },
  { src: "/gallery/foto-09.jpg", alt: "Vista aérea do viveiro São Francisco Mudas" },
  { src: "/gallery/foto-10.jpg", alt: "Mudas organizadas em caixas plásticas" },
  { src: "/gallery/foto-11.jpg", alt: "Mudas no caminhão coberto" },
  { src: "/gallery/foto-12.jpg", alt: "Mudas em caixas azuis - Fazenda Beira Rio" },
  { src: "/gallery/foto-13.jpg", alt: "Mudas em caixas de isopor para transporte" },
  { src: "/gallery/foto-14.jpg", alt: "Interior do viveiro com irrigação" },
  { src: "/gallery/foto-15.jpg", alt: "Estrutura do viveiro com mudas" },
  { src: "/gallery/foto-16.jpg", alt: "Viveiro com múltiplos canteiros" },
  { src: "/gallery/foto-17.jpg", alt: "Mudas jovens no viveiro" },
  { src: "/gallery/foto-18.jpg", alt: "Mudas em caixas plásticas pretas" },
  { src: "/gallery/foto-19.jpg", alt: "Lote de mudas preparadas" },
  { src: "/gallery/foto-20.jpg", alt: "Mudas organizadas para expedição" },
  { src: "/gallery/foto-21.jpg", alt: "Planta com 1 ano - floração" },
  { src: "/gallery/foto-22.jpg", alt: "Goiabeira com 1 ano em produção" },
  { src: "/gallery/foto-23.jpg", alt: "Planta adulta com 1 ano" },
  { src: "/gallery/foto-24.jpg", alt: "Goiabeira desenvolvida no campo" },
  { src: "/gallery/foto-25.jpg", alt: "Muda individual de goiabeira" },
  { src: "/gallery/foto-26.jpg", alt: "Mudas embaladas em caixas" },
  { src: "/gallery/foto-27.jpg", alt: "Mudas organizadas lado a lado" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="galeria" className="section-padding bg-muted/30">
      <div className="container-landing">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa estrutura e o processo de produção das mudas de goiabeira
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>


        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-50 text-white hover:text-white/80 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {selectedImage !== null && (
              <div className="relative flex items-center justify-center min-h-[60vh]">
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 z-50 text-white hover:text-white/80 transition-colors p-2"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>

                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-h-[80vh] max-w-full object-contain"
                />

                <button
                  onClick={goToNext}
                  className="absolute right-4 z-50 text-white hover:text-white/80 transition-colors p-2"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
