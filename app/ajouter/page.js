"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AjouterPage() {
  const { register, handleSubmit, reset } = useForm();
  const [livreAjoute, setLivreAjoute] = useState(null);

  const onSubmit = (data) => {
    setLivreAjoute(data);
    reset();
  };

  return (
    <section className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-inter font-bold text-center text-primaire mb-6">
        Ajouter un Livre
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Titre</label>
          <input {...register("titre")} className="input" />
        </div>

        <div>
          <label className="block font-semibold">Auteur</label>
          <input {...register("auteur")} className="input" />
        </div>

        <div>
          <label className="block font-semibold">Genre</label>
          <input {...register("genre")} className="input" />
        </div>

        <div>
          <label className="block font-semibold">Résumé</label>
          <textarea
            {...register("résumé")}
            className="input"
            rows={3}
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold">Image (URL)</label>
          <input {...register("image")} className="input" />
        </div>

        <div>
          <label className="block font-semibold">Prix (€)</label>
          <input
            type="number"
            step="0.01"
            {...register("prix")}
            className="input"
          />
        </div>

        <button
          type="submit"
          className="bg-primaire text-white px-4 py-2 rounded hover:bg-secondaire transition"
        >
          Ajouter
        </button>
      </form>

      {livreAjoute && (
        <div className="mt-6 p-4 border rounded bg-green-50 text-sm text-green-700">
          <p>
            <strong>Livre ajouté :</strong>
          </p>
          <pre>{JSON.stringify(livreAjoute, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}
