/* Design Philosophy: Clínica Moderna Mexicana
 * - Asymmetric layouts with generous spacing
 * - Terracotta (#C44536) + Sage Green (#4A6B5C) + Ochre (#D4A574)
 * - Instrument Serif for headlines, Inter for body, Space Grotesk for accents
 * - Thick borders, geometric elements, subtle textures
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X, FileText, MessageSquare, ClipboardList, Bot, Lock, Clock } from "lucide-react";

export default function Home() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/6HKRoBMkCN9RhiEKVbmmy6/sandbox/q86ebpPS6XkDlS7cElP3lB-img-1_1771133318000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNkhLUm9CTWtDTjlSaGlFS1ZibW15Ni9zYW5kYm94L3E4NmVicFBTNlhrRGxTN2NFbFAzbEItaW1nLTFfMTc3MTEzMzMxODAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AybSPrvBZBO29nKFfGQGW-rdXgo9IlrBdOpO7fvmCaq9S7Sp82-vrwKV5r2KKIIxwxIaunQQfRpNUsLt2wAvKW7QalaQ8N3CgjAMmg-s~0QPeEzfuB54EcVOa1e~u55Du8FwyteUZYhCRqJPMbK61hM9-sVQ-K8IJ~6cbguvTR4d9ENO5o31dmYqJNLZ2FFKFqz7bQv6Lnmq7OG70PyN29UknQpIilfeoZbZOMLKWh2d9EpD64AEfVPuHkEYQfLi8ADawIqRe0qsQvkcTcV3HdBsHxuAyjafKTQiXKHsrLBvQQ1JqIzxL1HpLkPSBfPDwTaH22ND5DN2BRkIhi96Cw__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Monta Tu Práctica de Teleterapia en México — Sin Adivinar Qué Escribir, Qué Decir o Qué Configurar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Plantillas completas + workflows paso a paso + guía de IA ética. Todo lo que necesitas para ofrecer teleterapia profesional en 14 días.
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  onClick={scrollToPricing}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-accent font-medium text-lg px-8 py-6 h-auto transition-all hover:scale-105"
                >
                  Accede Ahora — $890 MXN
                </Button>
                <p className="text-sm text-muted-foreground">
                  Precio sube a $1,390 el 1 de abril
                </p>
              </div>
              <p className="text-sm border-thick-l border-primary pl-4 py-2 text-muted-foreground">
                Material educativo creado por psicoterapeuta con experiencia en teleterapia. Validado por profesionales en México.
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/6HKRoBMkCN9RhiEKVbmmy6/sandbox/q86ebpPS6XkDlS7cElP3lB-img-2_1771133309000_na1fn_dGhlcmFweS13b3Jrc3BhY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNkhLUm9CTWtDTjlSaGlFS1ZibW15Ni9zYW5kYm94L3E4NmVicFBTNlhrRGxTN2NFbFAzbEItaW1nLTJfMTc3MTEzMzMwOTAwMF9uYTFmbl9kR2hsY21Gd2VTMTNiM0pyYzNCaFkyVS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DgrfvU94D2LNiveB2HZsBvVEfHXWtmXU0DQdyCdFLpVhuP-0IatUG5Ngg8jU-c4rnlxTlZim79i39cvutiAgPZEoogiKpPsce3dytBeLeUy-58xsMy1Ek8QvdlMvkRh0GPx6vFCXTZ62La~1sN7DRyzRFOHC2r5z1-J8kQ26OrvplYy1gnU5NDxKycAVhTg6X5k4hm4ALggr1mY~WbYsUEN0mJr~saZtsWRyxd8XoV34fHmUt0lye9EF6PvvJOhXM8kBYmy0gwus2Bs2ARV6PyQDxbX7XtN12ubSMGBPcZvyj9Dig1U3ABJyieFebwvncDzypeP3WEQpnaw5-QcagA__"
                alt="Espacio de trabajo de teleterapia profesional"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            ¿Te Suena Familiar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-thick-t border-primary bg-background hover:shadow-lg transition-shadow">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                "¿Mi Aviso de Privacidad está bien?"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Copias texto de internet. No sabes si cumple. Te preocupa meter la pata con datos de pacientes.
              </p>
            </Card>
            <Card className="p-8 border-thick-t border-secondary bg-background hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                "WhatsApp se me salió de control"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Mensajes a las 11pm. Límites difusos. No sabes cómo decir "no" sin sonar frío o poco profesional.
              </p>
            </Card>
            <Card className="p-8 border-thick-t border-accent bg-background hover:shadow-lg transition-shadow">
              <ClipboardList className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                "¿Qué debo documentar exactamente?"
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Expediente clínico confuso. NOM-004 suena complicado. Temes una auditoría o que te falte algo crítico.
              </p>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
              No debería ser así.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Teleterapia es tu práctica profesional, no un experimento improvisado. Necesitas sistemas claros — no ansiedad constante.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Todo Lo Que Necesitas Para Teleterapia Profesional — En Un Solo Lugar
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-thick-l border-primary">
              <div className="flex items-start gap-4 mb-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    Módulo 1: Documentos Cliente
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">Listos para personalizar</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Aviso de Privacidad (integral + simplificado) — lenguaje México-alineado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Consentimiento Informado Teleterapia — con límites claros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Políticas de Cancelación + Mensajería — copia/pega/personaliza</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Qué incluir: ✅ | Qué evitar: ❌</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-thick-l border-secondary">
              <div className="flex items-start gap-4 mb-4">
                <ClipboardList className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    Módulo 2: Workflow Clínico Completo
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Checklist Intake: qué preguntar antes de aceptar paciente online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Scripts Primera Sesión: qué decir exactamente para establecer encuadre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Plantillas de Notas (SOAP y DAP) — documenta en 5 minutos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Checklist Expediente Clínico (NOM-004 alineado) — sin adivinar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-thick-l border-accent">
              <div className="flex items-start gap-4 mb-4">
                <MessageSquare className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    Módulo 3: Scripts WhatsApp
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>15 mensajes pre-escritos para situaciones comunes:</span>
                    </li>
                    <li className="flex items-start gap-2 ml-6">
                      <span className="text-muted-foreground">→</span>
                      <span>"Necesito hablar contigo urgente" → cómo responder</span>
                    </li>
                    <li className="flex items-start gap-2 ml-6">
                      <span className="text-muted-foreground">→</span>
                      <span>Cancelaciones de último minuto → qué decir</span>
                    </li>
                    <li className="flex items-start gap-2 ml-6">
                      <span className="text-muted-foreground">→</span>
                      <span>Consultas entre sesiones → límites claros y amables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Plantilla de Límites de Mensajería (envías a cada paciente nuevo)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-thick-l border-primary">
              <div className="flex items-start gap-4 mb-4">
                <Bot className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    Módulo 4: IA Ética
                  </h3>
                  <p className="text-muted-foreground mb-4 italic">Úsala sin meter la pata</p>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Política de IA para Pacientes (qué decirles, qué no decirles)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Prompts Seguros: resúmenes, planes de tratamiento, tareas — SIN datos identificables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Reglas de Oro: qué NUNCA meter en ChatGPT/Claude</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-thick-l border-secondary lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <Lock className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                    Módulo 5: Setup Técnico + Seguridad
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>Configuración Zoom/Google Meet para privacidad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>SOP de Almacenamiento de Datos (qué guardar dónde)</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold">•</span>
                        <span>Checklist de Seguridad Mensual (15 min para dormir tranquilo)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-accent/10 border-2 border-accent max-w-4xl mx-auto">
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
              <FileText className="w-8 h-8 text-accent" />
              Playbook Principal (30-50 páginas)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-foreground">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Alcance y límites: quién SÍ es candidato para teleterapia (y quién NO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Sistema de evaluación de readiness</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Manejo de crisis/emergencias en teleterapia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Operación + cobros (pasarelas, facturación básica)</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* HOW IT WORKS - TIMELINE */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/6HKRoBMkCN9RhiEKVbmmy6/sandbox/q86ebpPS6XkDlS7cElP3lB-img-4_1771133314000_na1fn_YWJzdHJhY3QtcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNkhLUm9CTWtDTjlSaGlFS1ZibW15Ni9zYW5kYm94L3E4NmVicFBTNlhrRGxTN2NFbFAzbEItaW1nLTRfMTc3MTEzMzMxNDAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRjR0YwZEdWeWJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=D3oA9U~uMf~HmS8hHnOBFiteH3WN8REa-ooHVFDi99Cme32zRHyK2iTKk7OxZax8i6sPLqPWIkYniu8epuBBc838YEYtEBfaoZX~7ms71CY-wQ2IHMr2jUyteuUJrV5AdQSsLnC7y2OMkizWmF55L1MJdDKRTOA~YFn-MRkndj4ID~vXFcLnupCBDUpmadM4wrLb~qCLugjTo3FWpghNWRebk8XUzZ6zmL0ppaTqpS4cZZpeVQRE~khNiabxvfq8LxE~3Y3aRCchQmCTSW565Zyqp6uLmfGfw0n8XuOwykwWYJ4hYwDxZLp~xbXKmGWouN7skKw9vaH0zFw8BbFcLQ__')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="container relative">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            De "No Sé Por Dónde Empezar" a "Sistema Funcionando"
          </h2>
          <p className="text-center text-2xl font-display font-bold text-primary mb-16">en 14 Días</p>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-accent text-2xl font-bold">
                  1-3
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                  Días 1-3: Setup Básico
                </h3>
                <p className="text-muted-foreground mb-3 font-accent">4-6 horas</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Personaliza Aviso de Privacidad + Consentimiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Configura WhatsApp Scripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Setup Zoom/Google Meet seguro</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-accent text-2xl font-bold">
                  4-7
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                  Días 4-7: Procesos Clínicos
                </h3>
                <p className="text-muted-foreground mb-3 font-accent">6-8 horas</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Implementa Intake Checklist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Configura plantillas de notas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Establece flujo de documentación</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-accent text-2xl font-bold">
                  8-14
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                  Días 8-14: Refinamiento
                </h3>
                <p className="text-muted-foreground mb-3 font-accent">4-6 horas</p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Workflows de IA (si los usas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Auditoría de expedientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Políticas internas finalizadas</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="p-8 bg-primary text-primary-foreground border-0">
              <p className="text-xl font-display font-bold text-center">
                Resultado: Sistema completo, profesional, listo para pacientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Esto Es Para Ti Si…
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="p-8 bg-card border-thick-l border-primary">
              <h3 className="font-display text-xl font-bold mb-6 text-foreground">Para Ti Si:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ofreces (o quieres ofrecer) teleterapia en México</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Te preocupa privacidad, consentimiento, documentación</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">WhatsApp te tiene agobiado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Quieres usar IA pero sin violar ética</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">No tienes tiempo para investigar "mejores prácticas" por semanas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Quieres sistemas claros, no improvisación constante</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-thick-l border-destructive">
              <h3 className="font-display text-xl font-bold mb-6 text-foreground">No Es Para Ti Si:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Ya tienes todo funcionando perfectamente (felicidades, no necesitas esto)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Buscas "asesoría legal garantizada" (esto es material educativo, no servicios legales)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Solo quieres "tips rápidos" gratis (hay muchos blogs para eso)</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 md:py-32 bg-card">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Inversión Única — Sin Mensualidades
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Acceso completo de por vida
          </p>

          <Card className="max-w-2xl mx-auto p-10 bg-background border-4 border-primary shadow-2xl">
            <div className="text-center mb-8">
              <p className="font-accent text-sm uppercase tracking-wide text-primary mb-2 font-semibold">
                Precio de Lanzamiento
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-muted-foreground line-through">$1,390 MXN</span>
                <span className="font-display text-6xl font-bold text-primary">$890 MXN</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span className="font-accent font-medium text-sm">
                  Precio sube a $1,390 MXN el 1 de abril 2026
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Incluye:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">20-25 plantillas editables (.docx, .xlsx)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Playbook completo (PDF, 30-50 páginas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Todos los módulos (Cliente, Clínico, WhatsApp, IA, Técnico)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Actualizaciones durante 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Acceso inmediato (Google Drive)</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg mb-8">
              <p className="font-display font-bold text-foreground mb-2">Garantía de 14 Días:</p>
              <p className="text-muted-foreground">
                Si en 14 días decides que no te sirve, reembolso completo. Sin preguntas.
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-accent font-semibold text-xl py-7 h-auto transition-all hover:scale-105"
            >
              Accede Ahora — $890 MXN
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Pago único vía Stripe. Opción de 2 pagos de $490 MXN disponible en checkout.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 text-foreground">
            Preguntas Frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Esto es asesoría legal?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No. Es material educativo basado en mejores prácticas y referencias normativas (LFPDPPP, NOM-004). Siempre recomendamos revisar con abogado local si tienes dudas específicas sobre tu caso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Las plantillas ya están "listas"?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Están pre-escritas con estructura completa, pero necesitas personalizarlas (tu nombre, datos de contacto, detalles de tu práctica). Incluimos guía de qué cambiar y qué no tocar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Funciona si no uso IA?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sí. El módulo de IA es opcional. Todo lo demás (Aviso de Privacidad, Consentimiento, WhatsApp, Notas, etc.) es independiente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Qué pasa si tengo preguntas después de comprar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Incluimos email de soporte para dudas sobre cómo usar las plantillas (no asesoría legal/clínica). Respondemos en 24-48 horas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Sirve para psiquiatras/coaches/otros profesionales?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Está diseñado específicamente para psicólogos/psicoterapeutas en México. Otros profesionales pueden adaptarlo, pero algunas secciones (como NOM-004) son específicas de psicología.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Hay actualizaciones?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Sí. Si actualizamos plantillas o agregamos contenido en 2026, lo recibes sin costo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="font-display text-lg font-bold text-foreground hover:no-underline">
                ¿Ofrecen implementación personalizada?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No por ahora. Esto es producto "hágalo usted mismo" con guía completa. Si necesitas consultoría 1-a-1, contáctanos para cotización separada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/6HKRoBMkCN9RhiEKVbmmy6/sandbox/q86ebpPS6XkDlS7cElP3lB-img-3_1771133324000_na1fn_ZG9jdW1lbnRzLXRlbXBsYXRl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNkhLUm9CTWtDTjlSaGlFS1ZibW15Ni9zYW5kYm94L3E4NmVicFBTNlhrRGxTN2NFbFAzbEItaW1nLTNfMTc3MTEzMzMyNDAwMF9uYTFmbl9aRzlqZFcxbGJuUnpMWFJsYlhCc1lYUmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RgK8U5skmZGf0il~6BqLhxZqgGwDxZVw4VI-lCO4-fu0cw59L5Vo35FY5C-W3OodSh4WCPW~4XWRGL-H-INmKG43OZGcXzfnejOlIzTmqMtHjB8Hm9sP0eg-YfRp9H08tTmYbvQtJmceIPCdDRM44TXNH-CTJaoXZ4E5z4tUXvWEVqznqFFKgRSIGfNv0IsIZzn9ghZ6-3Ysn4yxVTV3GgbQXLCB4JAIsPbMxVswQGzeqBHlCPGgWCQ-mjOPiL5OxMsF1yWB1UtWBQgmtHUHPzH0U99ZAtBwiSXD92Do29nMADnOU3Vvb4~wOnBWT~rd7xD9HGu0BMLQ-~kUOg3exQ__')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="container text-center relative">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Deja de Improvisar. Empieza a Operar Profesionalmente.
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Sistema completo de teleterapia — Plantillas + Workflows + Guía ética de IA.
            <br />
            Todo lo que necesitas en un solo lugar.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToPricing}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-accent font-semibold text-2xl px-12 py-8 h-auto transition-all hover:scale-105 shadow-2xl"
          >
            Accede Ahora — $890 MXN
          </Button>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Garantía 14 días</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Precio sube el 1 de abril</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6 text-center text-sm text-muted-foreground">
            <p className="font-display font-bold text-foreground text-base">
              © 2026 Teleterapia PRO México. Todos los derechos reservados.
            </p>
            <div className="space-y-4">
              <p className="leading-relaxed">
                <strong className="text-foreground">Descargo:</strong> Este es material educativo, no asesoría legal, médica o clínica. Las plantillas son ejemplos editables que deben revisarse y personalizarse para tu contexto específico. Recomendamos consultar con abogado o asesor profesional según aplique a tu situación.
              </p>
              <p>
                <strong className="text-foreground">Privacidad:</strong> No compartimos tu información.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
