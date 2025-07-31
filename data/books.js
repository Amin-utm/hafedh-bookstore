// data/books.js

export const books = [
  {
    id: 1,
    titre: "Le Petit Prince",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    résumé:
      "L'histoire poétique d'un petit prince qui voyage de planète en planète.",
    auteur: "Antoine de Saint-Exupéry",
    prix: 12.99,
    genre: "Classique",
  },
  {
    id: 2,
    titre: "1984",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    résumé:
      "Dans une société totalitaire où Big Brother surveille chaque geste...",
    auteur: "George Orwell",
    prix: 15.5,
    genre: "Science-Fiction",
  },
  {
    id: 3,
    titre: "Pride and Prejudice",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    résumé:
      "Elizabeth Bennet et Mr. Darcy vont apprendre à s'aimer malgré leurs préjugés.",
    auteur: "Jane Austen",
    prix: 13.75,
    genre: "Romance",
  },
  {
    id: 4,
    titre: "Dune",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    résumé:
      "Paul Atreides découvre son destin sur la planète désertique Arrakis.",
    auteur: "Frank Herbert",
    prix: 18.99,
    genre: "Science-Fiction",
  },
  {
    id: 5,
    titre: "The Girl with the Dragon Tattoo",
    image:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=300&h=400&fit=crop",
    résumé:
      "Un thriller captivant entre enquête policière et critique sociale.",
    auteur: "Stieg Larsson",
    prix: 16.25,
    genre: "Thriller",
  },
  {
    id: 6,
    titre: "To Kill a Mockingbird",
    image:
      "https://images.unsplash.com/photo-1515924381402-6b2a2bbc49a7?w=300&h=400&fit=crop",
    résumé:
      "Scout Finch raconte l'histoire de son père avocat défendant un homme noir accusé à tort.",
    auteur: "Harper Lee",
    prix: 14.5,
    genre: "Classique",
  },
  {
    id: 7,
    titre: "The Alchemist",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    résumé:
      "Santiago, un jeune berger, part à la recherche d'un trésor en Égypte.",
    auteur: "Paulo Coelho",
    prix: 11.99,
    genre: "Développement Personnel",
  },
  {
    id: 8,
    titre: "Gone Girl",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    résumé: "Amy disparaît le jour de son cinquième anniversaire de mariage...",
    auteur: "Gillian Flynn",
    prix: 17.8,
    genre: "Thriller",
  },
  {
    id: 9,
    titre: "Sapiens",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    résumé: "L'évolution d'Homo sapiens et son impact sur la planète.",
    auteur: "Yuval Noah Harari",
    prix: 22.5,
    genre: "Histoire",
  },
  {
    id: 10,
    titre: "The Handmaid's Tale",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    résumé:
      "Dans une société où la fertilité est rare, Offred est une servante.",
    auteur: "Margaret Atwood",
    prix: 15.99,
    genre: "Science-Fiction",
  },
];

// Utilitaire : genres uniques
export const uniqueGenres = [...new Set(books.map((b) => b.genre))];

// Utilitaire : auteurs uniques
export const uniqueAuteurs = [...new Set(books.map((b) => b.auteur))];
