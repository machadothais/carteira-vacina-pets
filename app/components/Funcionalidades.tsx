const features = [
  {
    title: "Cadastro de pets",
    description: "Nome, espécie, raça, idade, peso e informações importantes.",
  },
  {
    title: "Registro de vacinas",
    description: "Controle de vacina aplicada, data, validade e responsável.",
  },
  {
    title: "Login de usuários",
    description: "Cada tutor poderá acessar somente os dados dos seus pets.",
  },
  {
    title: "Dashboard",
    description:
      "Visão geral das vacinas próximas do vencimento e pets cadastrados.",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Funcionalidades planejadas
          </h2>

          <p className="text-slate-600">
            Essa será a base para o sistema completo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>

              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}