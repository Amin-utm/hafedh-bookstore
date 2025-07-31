"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

const schema = Yup.object().shape({
  nom: Yup.string().required("Nom requis").min(5, "Minimum 5 caractères"),
  email: Yup.string().email("Email invalide").required("Email requis"),
  confirmationEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Les emails ne correspondent pas")
    .required("Confirmation requise"),
  telephone: Yup.string()
    .matches(/^\d{8}$/, "Doit contenir exactement 8 chiffres")
    .required("Téléphone requis"),
  photo: Yup.mixed()
    .test("fileType", "Format accepté: jpg/jpeg", (value) =>
      value && value[0]
        ? ["image/jpeg", "image/jpg"].includes(value[0].type)
        : false
    )
    .required("Photo requise"),
  conditions: Yup.bool().oneOf([true], "Vous devez accepter les conditions"),
});

export default function AbonnementPage() {
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
    reset();
  };

  return (
    <section className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-inter font-bold mb-6 text-center text-primaire">
        Abonnement
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Nom</label>
          <input {...register("nom")} className="input" />
          <p className="text-red-500 text-sm">{errors.nom?.message}</p>
        </div>

        <div>
          <label className="block font-semibold">Email</label>
          <input type="email" {...register("email")} className="input" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block font-semibold">Confirmation Email</label>
          <input
            type="email"
            {...register("confirmationEmail")}
            className="input"
          />
          <p className="text-red-500 text-sm">
            {errors.confirmationEmail?.message}
          </p>
        </div>

        <div>
          <label className="block font-semibold">Téléphone</label>
          <input type="text" {...register("telephone")} className="input" />
          <p className="text-red-500 text-sm">{errors.telephone?.message}</p>
        </div>

        <div>
          <label className="block font-semibold">Photo (jpg/jpeg)</label>
          <input
            type="file"
            accept="image/jpeg,image/jpg"
            {...register("photo")}
            className="input"
          />
          <p className="text-red-500 text-sm">{errors.photo?.message}</p>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("conditions")} />
          <label>J'accepte les conditions générales</label>
        </div>
        <p className="text-red-500 text-sm">{errors.conditions?.message}</p>

        <button
          type="submit"
          className="bg-secondaire text-white px-4 py-2 rounded hover:bg-primaire transition"
        >
          Envoyer
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
          <p className="font-semibold text-green-700">
            Formulaire soumis avec succès !
          </p>
        </div>
      )}
    </section>
  );
}
