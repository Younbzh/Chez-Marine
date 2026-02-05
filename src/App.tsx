import React, { useState } from 'react';
import { Phone, MapPin, Instagram, Facebook, Calendar, Clock, Sparkles, Heart, Star, Navigation } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400"></div>
      
      {/* Hero Section - Vintage Road Trip Aesthetic */}
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-cream-100 py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Ornamental Logo */}
          <div className="text-center mb-8 animate-fadeIn">
            <div className="inline-block">
              {/* Top ornament */}
              <div className="text-orange-600 text-4xl mb-2">
                ❧
              </div>
              
              <h1 className="text-7xl md:text-8xl font-bold text-orange-600 mb-2" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Chez Marine
              </h1>
              
              <div className="text-orange-700 text-sm tracking-[0.4em] uppercase font-semibold mb-2">
                Salon de Coiffure Ambulant
              </div>
              
              {/* Bottom ornament */}
              <div className="text-orange-600 text-4xl mt-2">
                ❧
              </div>
            </div>
            
            <p className="text-2xl md:text-3xl text-amber-800 mt-8 font-light italic">
              {siteConfig.baseline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              {siteConfig.contact.phoneDisplay}
            </a>
            
            <a 
              href={siteConfig.contact.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-orange-300 hover:border-orange-400"
            >
              Réserver en ligne
            </a>
          </div>

          {/* Decorative ribbon */}
          <div className="mt-12 text-center text-amber-700 text-sm italic opacity-75">
            ✿ Depuis décembre 2025 ✿
          </div>
        </div>
      </header>

      {/* Concept Section - The Caravan Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="text-orange-500 text-3xl mb-3">✦</div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-700 mb-4" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Ma Caravane, Votre Salon
              </h2>
              <div className="text-orange-500 text-3xl mt-3">✦</div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-200">
            <div className="prose prose-lg max-w-none text-amber-900">
              <p className="text-xl leading-relaxed mb-6 italic text-center font-light">
                "{siteConfig.about.story}"
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
                  <div className="text-orange-600 mb-3">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-3" style={{ fontFamily: "'Pacifico', cursive" }}>
                    Le Concept
                  </h3>
                  <p className="text-amber-800 leading-relaxed">
                    {siteConfig.about.concept}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
                  <div className="text-orange-600 mb-3">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-3" style={{ fontFamily: "'Pacifico', cursive" }}>
                    Mes Valeurs
                  </h3>
                  <ul className="space-y-2 text-amber-800">
                    {siteConfig.about.values.map((value, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-500 mt-1">✿</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {siteConfig.features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-orange-500 text-4xl mb-3">✦</div>
                <h4 className="font-bold text-orange-700 mb-2 text-lg">
                  {feature.title}
                </h4>
                <p className="text-sm text-amber-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Circuit Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 via-amber-100 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="text-orange-600 text-3xl mb-3">❦</div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-700 mb-4" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Mon Circuit Hebdomadaire
              </h2>
              <div className="text-orange-600 text-3xl mt-3">❦</div>
            </div>
            <p className="text-xl text-amber-800 mt-6 font-light italic">
              Retrouvez-moi chaque semaine dans votre village
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.schedule.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDay(index === selectedDay ? null : index)}
                className={`
                  relative overflow-hidden rounded-3xl p-8 cursor-pointer
                  transform transition-all duration-500 hover:scale-105
                  ${day.available 
                    ? 'bg-gradient-to-br from-white to-orange-50 border-4 border-orange-300 shadow-xl hover:shadow-2xl' 
                    : 'bg-gray-100 border-4 border-gray-300 opacity-60'
                  }
                  ${selectedDay === index ? 'scale-105 ring-4 ring-orange-400' : ''}
                `}
              >
                {/* Decorative corner ornament */}
                {day.available && (
                  <div className="absolute top-2 right-2 text-orange-400 text-2xl opacity-30">
                    ❀
                  </div>
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg mb-4 shadow-lg">
                    {day.day.substring(0, 3)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-orange-700 mb-2" style={{ fontFamily: "'Pacifico', cursive" }}>
                    {day.day}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-amber-800 mb-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold">{day.location}</span>
                  </div>

                  {day.postalCode && (
                    <div className="text-sm text-amber-600">
                      {day.postalCode}
                    </div>
                  )}

                  {day.special && (
                    <div className="mt-4 bg-orange-100 text-orange-700 text-xs px-3 py-2 rounded-full inline-block border border-orange-300">
                      {day.special}
                    </div>
                  )}

                  {day.bookingEnabled && (
                    <div className="mt-4">
                      <a
                        href={siteConfig.contact.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                      >
                        <Calendar className="w-4 h-4" />
                        Réserver
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Booking note */}
          <div className="mt-12 text-center bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
            <p className="text-amber-800 font-medium">
              📍 {siteConfig.contact.bookingNote}
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="text-orange-500 text-3xl mb-3">✿</div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-700 mb-4" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Mes Prestations
              </h2>
              <div className="text-orange-500 text-3xl mt-3">✿</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Women Services */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <h3 className="text-3xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
                ✿ Femmes ✿
              </h3>
              <div className="space-y-4">
                {siteConfig.services.women.map((service, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-orange-200 last:border-0">
                    <div className="flex-1">
                      <div className="font-semibold text-amber-900">{service.name}</div>
                      <div className="text-sm text-amber-600 flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      {service.note && (
                        <div className="text-xs text-amber-600 italic mt-1">{service.note}</div>
                      )}
                    </div>
                    <div className="font-bold text-orange-600 text-lg whitespace-nowrap">
                      {service.price ? `${service.price}€` : service.priceRange}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Men & Children Services */}
            <div className="space-y-8">
              {/* Men */}
              <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-xl border-4 border-orange-200">
                <h3 className="text-3xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
                  ✦ Hommes ✦
                </h3>
                <div className="space-y-4">
                  {siteConfig.services.men.map((service, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-orange-200 last:border-0">
                      <div className="flex-1">
                        <div className="font-semibold text-amber-900">{service.name}</div>
                        <div className="text-sm text-amber-600 flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                      <div className="font-bold text-orange-600 text-lg whitespace-nowrap">
                        {service.price ? `${service.price}€` : service.priceRange}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Children */}
              <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-xl border-4 border-orange-200">
                <h3 className="text-3xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
                  ❀ Enfants ❀
                </h3>
                <div className="space-y-4">
                  {siteConfig.services.children.map((service, index) => (
                    <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-orange-200 last:border-0">
                      <div className="flex-1">
                        <div className="font-semibold text-amber-900">{service.name}</div>
                        <div className="text-sm text-amber-600 flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </div>
                      </div>
                      <div className="font-bold text-orange-600 text-lg whitespace-nowrap">
                        {service.price}€
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Special Events */}
          <div className="mt-8 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8 shadow-xl border-4 border-orange-300">
            <h3 className="text-3xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
              ✿ Coiffures & Événements ✿
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {siteConfig.services.special.map((service, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-orange-300 last:border-0">
                    <div className="flex-1">
                      <div className="font-semibold text-amber-900">{service.name}</div>
                      <div className="text-sm text-amber-700 flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      {service.note && (
                        <div className="text-xs text-amber-700 italic mt-1">{service.note}</div>
                      )}
                    </div>
                    <div className="font-bold text-orange-700 text-lg whitespace-nowrap">
                      {service.price}€
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-300">
                <h4 className="font-bold text-orange-700 mb-3 text-lg">Déplacements sur événements</h4>
                <p className="text-amber-800 mb-4 text-sm leading-relaxed">
                  {siteConfig.services.events.description}
                </p>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                  <p className="text-sm text-amber-700 font-medium">
                    {siteConfig.services.events.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Marine Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-orange-200">
            <div className="text-center mb-8">
              <div className="text-orange-500 text-3xl mb-3">❦</div>
              <h2 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Marine, Coiffeuse Itinérante
              </h2>
              <div className="text-orange-500 text-3xl mt-3">❦</div>
            </div>

            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full border-2 border-orange-300">
                <Star className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-amber-900">
                  {siteConfig.about.experience}
                </span>
              </div>

              <p className="text-lg text-amber-800 leading-relaxed italic">
                "Moi c'est Marine, avec maintenant plus de 10 ans d'expérience dans la coiffure j'ai décidé de me lancer. 
                Ma particularité ? Vous accueillir dans ma caravane. Le confort d'un salon de coiffure dans un petit cocon 
                comme à la maison, une ambiance simple qui me ressemble."
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200">
                  <div className="text-4xl mb-3">🎨</div>
                  <div className="font-bold text-orange-700 text-lg mb-2">Expertise</div>
                  <div className="text-sm text-amber-700">Coupes, colorations, mèches, coiffures événementielles</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200">
                  <div className="text-4xl mb-3">🚐</div>
                  <div className="font-bold text-orange-700 text-lg mb-2">Mobilité</div>
                  <div className="text-sm text-amber-700">Circuit fixe + déplacements à domicile possibles</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200">
                  <div className="text-4xl mb-3">💚</div>
                  <div className="font-bold text-orange-700 text-lg mb-2">Proximité</div>
                  <div className="text-sm text-amber-700">Service personnalisé dans une ambiance chaleureuse</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="text-orange-500 text-3xl mb-3">✿</div>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-700 mb-4" 
                  style={{ fontFamily: "'Pacifico', cursive" }}>
                Me Contacter
              </h2>
              <div className="text-orange-500 text-3xl mt-3">✿</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
                Réservations
              </h3>
              
              <div className="space-y-6">
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 group"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-medium">Téléphone</div>
                    <div className="text-lg font-bold text-orange-700">{siteConfig.contact.phoneDisplay}</div>
                  </div>
                </a>

                <a 
                  href={siteConfig.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-orange-200 hover:border-orange-400 group"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-medium">Réservation en ligne</div>
                    <div className="text-lg font-bold text-orange-700">Prendre RDV</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 border-orange-200">
                  <div className="bg-gradient-to-br from-orange-400 to-amber-400 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-amber-600 font-medium">Adresse de référence</div>
                    <div className="text-sm font-semibold text-amber-800">{siteConfig.contact.addressPlouigneau}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border-4 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
                Suivez-moi
              </h3>
              
              <div className="space-y-4">
                <a 
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-pink-200 hover:border-pink-400 group"
                >
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-purple-600 font-medium">Instagram</div>
                    <div className="text-xl font-bold text-purple-700">{siteConfig.social.instagramHandle}</div>
                  </div>
                </a>

                <a 
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-indigo-600 font-medium">Facebook</div>
                    <div className="text-xl font-bold text-indigo-700">Chez Marine</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <p className="text-amber-700 text-sm italic leading-relaxed">
                  Découvrez mes réalisations, mes déplacements et toute l'actualité de votre salon ambulant !
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border-4 border-orange-200">
            <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center" style={{ fontFamily: "'Pacifico', cursive" }}>
              📍 Secteur d'Activité
            </h3>
            <div className="aspect-video rounded-2xl overflow-hidden border-4 border-orange-100">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42544.32!2d-3.7258!3d48.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4813f3e0c0c0c0c0%3A0x0!2sPlouigneau!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du secteur d'activité Chez Marine"
              ></iframe>
            </div>
            <p className="text-center text-amber-700 mt-4 text-sm">
              Circuit : {siteConfig.location.area} • {siteConfig.location.department}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-orange-800 via-orange-700 to-amber-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
              Chez Marine
            </h3>
            <p className="text-orange-200 mb-6 italic">
              Salon de Coiffure Ambulant • {siteConfig.location.area}
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a 
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>

            <div className="border-t border-orange-600 pt-6">
              <p className="text-orange-200 text-sm">
                © {new Date().getFullYear()} Chez Marine - Tous droits réservés
              </p>
              <p className="text-orange-300 text-xs mt-2">
                Site créé par <a href="https://avalon-stratege.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Avalon Stratège</a>
              </p>
            </div>

            {/* Decorative bottom ornament */}
            <div className="text-orange-400 text-3xl mt-6">
              ❧
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;