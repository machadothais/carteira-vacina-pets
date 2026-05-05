export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
      <div>
        <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          Carteira de vacinação digital para pets
        </span>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Cuide da saúde do seu pet com mais organização.
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-600">
          Tenha o histórico de vacinas, lembretes importantes e informações dos
          seus pets em um só lugar, de forma simples e segura.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600">
            Começar agora
          </button>

          <button className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">
            Ver funcionalidades
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-xl">
        <div className="rounded-2xl bg-emerald-50 p-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow">
              🐶
            </div>

            <div>
              <h2 className="text-xl font-bold">Thor</h2>
              <p className="text-sm text-slate-500">Golden Retriever</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Próxima vacina
              </p>
              <p className="text-lg font-bold text-slate-900">Antirrábica</p>
              <p className="text-sm text-emerald-600">
                Vencimento em 15 dias
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">
                Status da carteira
              </p>
              <p className="text-lg font-bold text-slate-900">
                Vacinação em dia
              </p>
              <p className="text-sm text-emerald-600">
                4 vacinas registradas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}