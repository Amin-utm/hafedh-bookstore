# 📚 hafedh-bookstore

Projet réalisé avec **Next.js 14**, **JavaScript**, **TailwindCSS**, et **App Router**.

---

## 🚀 Fonctionnalités principales

- 🌐 Site vitrine d'une bibliothèque numérique
- 📚 Catalogue avec filtres dynamiques par **titre**, **auteur**, **genre**
- 🎠 Carousel d’images de livres (Slick Carousel)
- 🔍 Page détails dynamique pour chaque livre
- 📩 Formulaire d’abonnement validé avec **React Hook Form** + **Yup**
- ➕ Page d'ajout de livre (sans back-end)
- 🧱 Composants réutilisables : NavBar, Footer, Carousel, Cards, etc.

---

## 🛠️ Technologies utilisées

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Slick](https://react-slick.neostack.com/)

---

## 🎨 Design et thème

- **Fonts Google** :
  - `Inter` : titres
  - `Open Sans` : menus
  - `Roboto` : texte
- **Couleurs personnalisées** :
  - Primaire : `#dc2626`
  - Secondaire : `#7c3aed`

---

## 📂 Structure du projet

Hafedh-bookstore/
├── app/
│ ├── page.js (Accueil)
│ ├── catalogue/
│ │ └── page.js
│ │ └── [id]/page.js
│ ├── abonnement/page.js
│ └── ajouter/page.js
├── components/
│ ├── NavBar.js
│ ├── Footer.js
│ ├── BookCard.js
│ ├── BookList.js
│ ├── BookCarousel.js
│ ├── BoutonNewsletter.js
│ └── BookDetailsCard.js
├── data/
│ └── books.js
├── public/
├── styles/
│ └── globals.css
├── tailwind.config.js
├── package.json
└── README.md