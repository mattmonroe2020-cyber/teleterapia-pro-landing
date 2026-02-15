import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const founders = [
  {
    name: "Dulce Ulloa",
    role: "Psicóloga · Alquimia Centro Psicoterapéutico",
    image: "/founders/dulce-ulloa.png",
    bio: "Dulce Ulloa helps psychologists in Mexico run online therapy like a real professional—clear, organized, and secure. She built her own step-by-step system for teletherapy in Mexico (intake, informed consent, privacy notice, session setup, clinical notes/expediente, follow-ups, scheduling, and payments) and turned it into a practical e-product you can copy and use right away. You’ll get simple checklists, ready-to-use templates, and straightforward guidance so you stop guessing what to write and how to set things up.",
  },
  {
    name: "Matthew Monroe Simpson",
    role: "Matthew Simpson, LMHC",
    image: "/founders/matthew-monroe-simpson.png",
    bio: "Matt Monroe Simpson (Matthew Simpson, LMHC). I’ve spent the last several years building and refining teletherapy systems that work in the real world—not theory, not influencer tips, but repeatable operations that reduce risk, reduce chaos, and increase clinical consistency. After relocating to Mexico with my family and working with clinicians across different contexts, I noticed the same painful gap over and over: talented psychologists doing great clinical work, but running teletherapy with weak infrastructure—unclear consent processes, messy documentation habits, insecure communication defaults, and no standardized workflow for remote care. That gap creates avoidable risk, client confusion, and burnout.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border/60 bg-card/30">
        <div className="container py-12 md:py-16">
          <Link href="/">
            <Button variant="outline" className="mb-8">Volver al inicio</Button>
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Acerca de nosotros</p>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-6xl">Las personas detrás del sistema</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Teleterapia PRO México fue creado desde experiencia clínica y operativa en campo,
            no desde teoría.
          </p>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {founders.map((person) => (
            <Card key={person.name} className="overflow-hidden rounded-3xl border-border/70 p-0 shadow-sm">
              <div className="h-72 bg-gradient-to-b from-primary/10 via-accent/5 to-background p-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-contain object-bottom"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl">{person.name}</h2>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{person.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
