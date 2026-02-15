import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Quote } from "lucide-react";
import { Link } from "wouter";

const testimonials = [
  {
    name: "María Fernanda R.",
    role: "Psicoterapeuta · CDMX",
    quote:
      "Pasé de contestar mensajes con ansiedad a tener límites claros y plantillas que cuidan la relación terapéutica. Me devolvió paz mental.",
  },
  {
    name: "Daniela V.",
    role: "Terapeuta sistémica · Guadalajara",
    quote:
      "En una semana ordené consentimiento, privacidad y notas clínicas. Por fin sentí que mi práctica online se veía tan profesional como mi consulta presencial.",
  },
  {
    name: "Sandra L.",
    role: "Psicóloga clínica · Monterrey",
    quote:
      "La guía de IA fue oro. Ahora sí ahorro tiempo sin arriesgar datos sensibles ni perder mi criterio clínico.",
  },
];

export default function Testimonios() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 bg-card/30">
        <div className="container py-12 md:py-16">
          <Link href="/">
            <Button variant="outline" className="mb-8">Volver al inicio</Button>
          </Link>
          <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-sm">
            <HeartHandshake className="h-4 w-4 text-secondary" />
            Testimonios
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Resultados reales en México</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Historias de psicoterapeutas que pasaron de la improvisación a una práctica
            online más clara, profesional y sostenible.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card
              key={item.name}
              className={`rounded-2xl border-border/70 p-6 shadow-sm ${
                index === 1 ? "bg-accent/10" : "bg-card"
              }`}
            >
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 leading-relaxed text-foreground">“{item.quote}”</p>
              <p className="mt-5 font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
