import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-5xl font-black">Mis Proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">
        Maneja y administra mis proyectos
      </p>

      <nav className="my-5">
        <Link
          className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white font-bold cursor-pointer text-xl transition-colors"
          href="/projects/create"
        >
          Nuevo Proyecto
        </Link>
      </nav>
    </>
  );
}
