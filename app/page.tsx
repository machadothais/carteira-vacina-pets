export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-xl">
            🐾
          </div>

          <span className="text-xl font-bold">PetVacina</span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#beneficios" className="hover:text-emerald-600">
            Benefícios
          </a>
          <a href="#funcionalidades" className="hover:text-emerald-600">
            Funcionalidades
          </a>
          <a href="#contato" className="hover:text-emerald-600">
            Contato
          </a>
        </nav>

        <button className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600">
          Entrar
        </button>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Carteira de vacinação digital para pets
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Cuide da saúde do seu pet com mais organização.
          </h1>

          <p className="mb-8 text-lg leading-8 text-slate-600">
            Tenha o histórico de vacinas, lembretes importantes e informações
            dos seus pets em um só lugar, de forma simples e segura.
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
                <p className="text-lg font-bold text-slate-900">
                  Antirrábica
                </p>
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
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">📅</div>
            <h3 className="mb-2 text-xl font-bold">Lembretes</h3>
            <p className="text-slate-600">
              Receba avisos sobre próximas vacinas e datas importantes.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">💉</div>
            <h3 className="mb-2 text-xl font-bold">Histórico completo</h3>
            <p className="text-slate-600">
              Cadastre vacinas, datas, clínicas e observações do seu pet.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 text-3xl">🐕</div>
            <h3 className="mb-2 text-xl font-bold">Vários pets</h3>
            <p className="text-slate-600">
              Organize a carteira de vacinação de todos os seus animais.
            </p>
          </div>
        </div>
      </section>

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
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 text-xl font-bold">Cadastro de pets</h3>
              <p className="text-slate-600">
                Nome, espécie, raça, idade, peso e informações importantes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 text-xl font-bold">Registro de vacinas</h3>
              <p className="text-slate-600">
                Controle de vacina aplicada, data, validade e responsável.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 text-xl font-bold">Login de usuários</h3>
              <p className="text-slate-600">
                Cada tutor poderá acessar somente os dados dos seus pets.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-2 text-xl font-bold">Dashboard</h3>
              <p className="text-slate-600">
                Visão geral das vacinas próximas do vencimento e pets cadastrados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Pronta para organizar a saúde do seu pet?
        </h2>

        <p className="mb-8 text-slate-600">
          Esse projeto pode virar um sistema completo para seu portfólio,
          usando front-end, back-end, banco de dados e autenticação.
        </p>

        <button className="rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition hover:bg-emerald-600">
          Quero começar
        </button>
      </section>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 PetVacina. Projeto de estudos desenvolvido com Next.js.
      </footer>
    </main>
  );
}