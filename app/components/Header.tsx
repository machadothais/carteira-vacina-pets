export function Header() {
  return (
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
  );
}