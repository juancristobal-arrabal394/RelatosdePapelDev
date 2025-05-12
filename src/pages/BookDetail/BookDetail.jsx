import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/libros/${id}`)
      .then((res) => res.json())
      .then(setLibro);
  }, [id]);

  if (!libro) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline">← Volver</Link>
      <div className="mt-4 border rounded-lg shadow p-6 max-w-3xl mx-auto">
        <img src={libro.portada} alt={libro.título} className="w-full h-80 object-cover mb-4" style={{ width: "60px", height: "40px" }} />
        <h1 className="text-2xl font-bold">{libro.título}</h1>
        <p className="text-lg text-gray-700">{libro.autor}</p>
        <p className="text-md mt-2"><strong>Precio:</strong> {libro.precio} €</p>
        <p className="mt-2"><strong>Fecha de publicación:</strong> {libro.fecha_de_publicación}</p>
        <p className="mt-2"><strong>Editorial:</strong> {libro.editorial}</p>
        <p className="mt-2"><strong>Categoría:</strong> {libro.categoría}</p>
        <p className="mt-2"><strong>ISBN:</strong> {libro.ISBN}</p>
        <p className="mt-2"><strong>Valoración:</strong> {libro.valoración ?? "No disponible"}</p>
        <p className="mt-4"><strong>Sinopsis:</strong><br />{libro.sinopsis}</p>
        <p className="mt-2"><strong>Stock:</strong> {libro.stock ? "Disponible" : "Agotado"}</p>
        <p className="mt-2"><strong>Visible:</strong> {libro.visible ? "Sí" : "No"}</p>
      </div>
    </div>
  );
}
