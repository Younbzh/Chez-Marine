export const siteConfig = {
  name: "Chez Marine",
  tagline: "Salon de Coiffure Ambulant",
  baseline: "Votre coiffeur vient à vous",
  description: "Salon de coiffure ambulant qui sillonne les routes du Trégor en caravane. Marine vous accueille dans son petit cocon aménagé comme à la maison pour des prestations de qualité en toute proximité.",
  
  contact: {
    phone: "06 61 45 06 28",
    phoneDisplay: "06 61 45 06 28",
    email: null,
    addressPlouigneau: "13 Rue Alexandre Pichodou, 29610 Plouigneau",
    coordinates: {
      lat: 48.5731,
      lng: -3.7258
    },
    bookingUrl: "https://reservationcoiffeur.fr/chez-marine-29610/prestations-plouigneau",
    bookingNote: "Réservation en ligne disponible (sauf samedi à domicile)"
  },

  social: {
    instagram: "https://www.instagram.com/chez.marine29/",
    instagramHandle: "@chez.marine29",
    facebook: "https://www.facebook.com/people/Chez-Marine/61582604506408/"
  },

  schedule: [
    {
      day: "Lundi",
      location: "Plounérin",
      postalCode: "22780",
      available: true,
      bookingEnabled: true
    },
    {
      day: "Mardi",
      location: "Plouégat-Moysan",
      postalCode: "29650",
      available: true,
      bookingEnabled: true
    },
    {
      day: "Mercredi",
      location: "Fermé",
      postalCode: null,
      available: false,
      bookingEnabled: false
    },
    {
      day: "Jeudi",
      location: "Plouigneau (nocturne)",
      postalCode: "29610",
      available: true,
      bookingEnabled: true,
      special: "Ouverture en soirée"
    },
    {
      day: "Vendredi",
      location: "Botsorhel",
      postalCode: "29650",
      available: true,
      bookingEnabled: true
    },
    {
      day: "Samedi",
      location: "À votre domicile",
      postalCode: null,
      available: true,
      bookingEnabled: false,
      special: "Déplacement caravane (à partir de 80€) - Pas de réservation en ligne"
    }
  ],

  about: {
    owner: "Marine Boumnijel",
    age: 30,
    experience: "Plus de 10 ans d'expérience dans la coiffure",
    launchDate: "8 décembre 2025",
    story: "Après plus de 10 ans d'expérience dans la coiffure, j'ai décidé de me lancer dans une aventure qui me ressemble. Ma particularité ? Vous accueillir dans ma caravane aménagée. Le confort d'un salon de coiffure dans un petit cocon comme à la maison, une ambiance simple qui me ressemble.",
    concept: "Un salon de coiffure ambulant qui sillonne les petites routes de Bretagne et réinvente le métier de coiffeuse. Marine part à la rencontre de ses clients dans les villages ruraux du Trégor, à des horaires adaptés, pour apporter la coiffure au plus près des habitants.",
    values: [
      "Proximité et service de qualité",
      "Ambiance chaleureuse et intimiste",
      "Liberté et authenticité",
      "Ancrage territorial en Bretagne"
    ]
  },

  services: {
    women: [
      { name: "Brushing court", duration: "30min", price: 19, priceRange: null },
      { name: "Brushing long", duration: "30min", price: 24, priceRange: null },
      { name: "Coupe + brushing court", duration: "30min", price: 32, priceRange: null },
      { name: "Coupe + brushing long", duration: "45min", price: 38, priceRange: null },
      { name: "Couleur + coupe brush court", duration: "1h30", price: 61, priceRange: null, note: "Cheveux au dessus des épaules" },
      { name: "Couleur + coupe brush long", duration: "1h45", price: 73, priceRange: null, note: "Cheveux en dessous des épaules" },
      { name: "Mèches cheveux court", duration: "2h", price: null, priceRange: "à partir de 82€", note: "Soin offert - Cheveux au dessus des épaules" },
      { name: "Mèches cheveux carré", duration: "3h", price: null, priceRange: "à partir de 102€", note: "Soin offert - Cheveux à hauteur des épaules" },
      { name: "Mèches cheveux long", duration: "3h15", price: null, priceRange: "à partir de 128€", note: "Soin offert - Cheveux en dessous des épaules" }
    ],
    men: [
      { name: "Coupe classique", duration: "30min", price: 19 },
      { name: "Coup de tondeuse", duration: "30min", price: 15 },
      { name: "Coupe entretien 2 semaines", duration: "30min", price: 15 },
      { name: "Barbe rapide (tondeuse)", duration: "15min", price: null, priceRange: "5-10€" }
    ],
    children: [
      { name: "Moins de 3 ans", duration: "30min", price: 10 },
      { name: "4-12 ans (mixte)", duration: "30min", price: 15 },
      { name: "13-18 ans garçons", duration: "30min", price: 17 },
      { name: "13-18 ans filles", duration: "30min", price: 22 }
    ],
    special: [
      { name: "Attache", duration: "30min", price: 25 },
      { name: "Chignon simple", duration: "1h", price: 40 },
      { name: "Chignon sophistiqué", duration: "1h", price: 60 },
      { name: "Forfait mariée", duration: "1h30", price: 120, note: "Jour J + essai" }
    ],
    events: {
      available: true,
      description: "Déplacement possible sur domaines ou salles des fêtes pour mariages, anniversaires et événements privés",
      homeMobileFrom: 80,
      note: "Intervention à domicile avec déplacement de la caravane à partir de 80€"
    }
  },

  features: [
    {
      title: "Salon sur roues",
      description: "Une caravane entièrement aménagée en salon de coiffure professionnel"
    },
    {
      title: "Service de proximité",
      description: "Je viens à vous dans votre village, plus besoin de vous déplacer"
    },
    {
      title: "Ambiance intimiste",
      description: "Un client à la fois dans un espace chaleureux et privatisé"
    },
    {
      title: "Planning fixe",
      description: "Circuit hebdomadaire régulier dans 4 communes du Trégor"
    }
  ],

  location: {
    region: "Bretagne",
    department: "Finistère / Côtes-d'Armor",
    area: "Pays de Morlaix / Trégor",
    mainCities: ["Morlaix", "Plouigneau", "Plounérin", "Plouégat-Moysan", "Botsorhel"]
  },

  press: [
    {
      title: "Le salon de coiffure ambulant sillonne le Trégor",
      description: "Marine Boumnijel accueille sa clientèle dans sa caravane aménagée selon un planning fixe du lundi au samedi.",
      source: "Presse locale"
    }
  ],

  seo: {
    keywords: [
      "salon de coiffure ambulant",
      "coiffeur itinérant Bretagne",
      "coiffure à domicile Finistère",
      "Chez Marine coiffure",
      "coiffeur Plouigneau",
      "coiffeur Plounérin",
      "coiffeur Plouégat-Moysan",
      "coiffeur Botsorhel",
      "coiffure caravane",
      "salon mobile Morlaix",
      "coiffeur Trégor",
      "coiffure proximité campagne"
    ],
    title: "Chez Marine - Salon de Coiffure Ambulant | Trégor, Bretagne",
    metaDescription: "Salon de coiffure ambulant en caravane. Marine vous accueille du lundi au samedi dans les villages du Trégor. Service de proximité, ambiance cosy, prestations pro.",
    og: {
      title: "Chez Marine - Votre salon de coiffure itinérant en Bretagne",
      description: "Un salon de coiffure qui vient à vous ! Caravane aménagée, circuit hebdomadaire dans le Trégor. Réservez votre rendez-vous.",
      image: "/og-image-chez-marine.jpg",
      type: "website"
    }
  },

  branding: {
    primaryColor: "#D97941", // Orange terracotta (from logo)
    secondaryColor: "#F5EFE6", // Cream beige
    accentColor: "#8B4513", // Darker brown for contrast
    backgroundColor: "#FFFAF5", // Warm white
    textColor: "#2C1810", // Dark brown
    logoStyle: "Ornamental vintage script with floral decorations"
  }
};