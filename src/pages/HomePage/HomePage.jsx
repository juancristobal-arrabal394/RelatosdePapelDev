import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("https://libros-ap-iweb.vercel.app/libros")
      .then((res) => res.json())
      .then((data) => {
        const librosOrdenados = data
          .sort((a, b) => (b.valoración || 0) - (a.valoración || 0))
          .slice(0, 4);
        setLibros(librosOrdenados);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Libros mejor valorados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {libros.map((libro) => (
          <div key={libro.id} className="border rounded-lg shadow p-4">
            <img src={libro.portada} alt={libro.título} className="w-full h-60 object-cover mb-2" style={{ width: "60px", height: "40px" }} />
            <h2 className="text-lg font-semibold">{libro.título}</h2>
            <p className="text-sm text-gray-600">{libro.autor}</p>
            <p className="font-medium text-blue-700 mt-2">{libro.precio} €</p>
            <Link to={`/book/${libro.id}`} className="text-indigo-600 text-sm mt-2 inline-block">
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
