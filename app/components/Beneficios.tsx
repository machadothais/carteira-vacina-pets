const benefits = [
  {
    icon: "📅",
    title: "Lembretes",
    description: "Receba avisos sobre próximas vacinas e datas importantes.",
  },
  {
    icon: "💉",
    title: "Histórico completo",
    description: "Cadastre vacinas, datas, clínicas e observações do seu pet.",
  },
  {
    icon: "🐕",
    title: "Vários pets",
    description: "Organize a carteira de vacinação de todos os seus animais.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Por que usar uma carteira digital?
        </h2>

        <p className="text-slate-600">
          Menos papel, menos esquecimento e mais cuidado com seu pet.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="mb-4 text-3xl">{benefit.icon}</div>

            <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>

            <p className="text-slate-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}