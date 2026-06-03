"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { createWhatsAppUrl } from "@/lib/whatsapp";

type AnswerState = {
  goal?: string;
  previous?: string;
  routine?: string;
  soon?: string;
};

const questions = [
  {
    key: "goal" as const,
    title: "¿Cuál es tu principal objetivo?",
    options: ["Acné", "Manchas", "Rejuvenecimiento", "Grasa localizada", "Cuidado facial", "No estoy seguro"]
  },
  {
    key: "previous" as const,
    title: "¿Has realizado tratamientos estéticos antes?",
    options: ["Sí", "No", "Solo una evaluación"]
  },
  {
    key: "routine" as const,
    title: "¿Tienes una rutina de cuidado actualmente?",
    options: ["Sí, diaria", "A veces", "No tengo rutina"]
  },
  {
    key: "soon" as const,
    title: "¿Qué tan pronto deseas atenderte?",
    options: ["Esta semana", "Este mes", "Estoy explorando opciones"]
  }
];

function recommendationFor(goal?: string) {
  if (!goal || goal === "No estoy seguro") {
    return "Evaluación estética personalizada";
  }

  const map: Record<string, string> = {
    Acné: "Tratamiento para acné",
    Manchas: "Tratamiento para manchas",
    Rejuvenecimiento: "Rejuvenecimiento facial",
    "Grasa localizada": "Tratamientos corporales",
    "Cuidado facial": "Limpieza facial profunda"
  };

  return map[goal] || "Evaluación estética personalizada";
}

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const isFinished = step >= questions.length;
  const currentQuestion = questions[step];
  const recommendation = useMemo(() => recommendationFor(answers.goal), [answers.goal]);
  const whatsappUrl = createWhatsAppUrl(
    `Hola, hice el quiz de Bravo Medicina Estética. Mi objetivo principal es ${answers.goal || "recibir orientación"} y quisiera una evaluación para ${recommendation}.`
  );

  function selectAnswer(value: string) {
    if (!currentQuestion) {
      return;
    }

    setAnswers((current) => ({ ...current, [currentQuestion.key]: value }));
    setTimeout(() => {
      setStep((current) => current + 1);
    }, 120);
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="premium-card overflow-hidden">
      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
        <div className="bg-coffee p-8 text-cream sm:p-10">
          <p className="eyebrow text-gold">Quiz orientativo</p>
          <h3 className="mt-4 font-display text-3xl leading-tight">
            Encuentra el tratamiento ideal para ti
          </h3>
          <p className="mt-4 text-sm leading-7 text-cream/70">
            Este recorrido ayuda a orientar tu primera conversación. No reemplaza una evaluación profesional.
          </p>
          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gold transition-all"
              style={{ width: `${Math.min((step / questions.length) * 100, 100)}%` }}
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-cream/55">
            Paso {Math.min(step + 1, questions.length)} de {questions.length}
          </p>
        </div>

        <div className="min-h-[430px] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {!isFinished && currentQuestion ? (
              <motion.div
                key={currentQuestion.key}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.28 }}
              >
                <h4 className="font-display text-3xl text-coffee">{currentQuestion.title}</h4>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectAnswer(option)}
                        className={`rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition ${
                          isSelected
                            ? "border-gold bg-gold/15 text-coffee"
                            : "border-linen bg-white text-coffee/75 hover:border-gold hover:bg-blush"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-coffee/70 transition hover:bg-linen disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </button>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-coffee/40">
                    Elegir respuesta
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="flex min-h-[360px] flex-col justify-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <CalendarCheck className="h-7 w-7" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-gold">
                  Recomendación orientativa
                </p>
                <h4 className="mt-3 font-display text-4xl text-coffee">{recommendation}</h4>
                <p className="mt-5 max-w-2xl text-base leading-8 text-coffee/70">
                  No reemplaza una evaluación profesional. Te recomendamos agendar una evaluación para recibir
                  orientación personalizada y revisar qué alternativa se ajusta mejor a tu caso.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-3 text-sm font-bold text-white transition hover:bg-coffee"
                  >
                    Continuar por WhatsApp
                  </Link>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center justify-center rounded-full border border-linen bg-white px-6 py-3 text-sm font-bold text-coffee transition hover:border-gold"
                  >
                    Repetir quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
