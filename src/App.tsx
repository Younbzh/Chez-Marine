import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Star, 
  Palette, 
  Paintbrush2,
  Sun,
  Moon,
  Heart,
  MapPin,
  Phone,
  Clock,
  Calendar,
  Award,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap: { [key: string]: any } = {
    sparkles: Sparkles,
    star: Star,
    palette: Palette,
    paintbrush: Paintbrush2,
    sun: Sun,
    moon: Moon,
    heart: Heart,
    graduationcap: GraduationCap
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50 text-gray-800 font-sans antialiased">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif font-bold text-rose-600">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-gray-600 italic">Loudéac • Côtes d'Armor</p>
            </div>
          </div>
          
          <a 
            href={siteConfig.booking.planity}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Prendre RDV
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-rose-200 shadow-md">
              <p className="text-rose-600 font-semibold text-sm tracking-wide">
                {siteConfig.tagline}
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Poupée
              </span>
              <br />
              <span className="text-gray-800">Nails Art</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-light italic max-w-2xl mx-auto">
              "{siteConfig.slogan}"
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={siteConfig.booking.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Réserver sur Planity
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full sm:w-auto border-2 border-rose-500 text-rose-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-gray-800">{siteConfig.rating.score}/5</span>
              <span className="text-gray-600">• {siteConfig.rating.total} avis sur {siteConfig.rating.platform}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-rose-400 transform rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-rose-100 rounded-full">
                <p className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Notre Histoire</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6 text-gray-800">
                De <span className="text-rose-600">Marseille</span> à <span className="text-pink-600">Loudéac</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>{siteConfig.owner.story}</p>
                <p className="italic text-rose-600 font-medium">"{siteConfig.owner.philosophy}"</p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200">
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-800">Pourquoi Poupée Nails Art ?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {siteConfig.about.approach}
                </p>
                <div className="space-y-2">
                  {siteConfig.about.values.map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                      <p className="text-gray-700">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-rose-200 to-pink-200 p-8 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-rose-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-800">{siteConfig.owner.name}</h3>
                    <p className="text-gray-700 font-semibold">Fondatrice • "{siteConfig.owner.nickname}"</p>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl space-y-3">
                  <p className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    <span>Originaire de {siteConfig.owner.origin}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Sparkles className="w-5 h-5 text-rose-500" />
                    <span>{siteConfig.owner.expertise}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Award className="w-5 h-5 text-rose-500" />
                    <span>Première entreprise en 2013</span>
                  </p>
                </div>
              </div>

              {/* Partnership Badge */}
              <div className="mt-6 bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-2xl border-2 border-amber-300 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-amber-600" />
                  <h4 className="font-bold text-amber-900">{siteConfig.partnership.title}</h4>
                </div>
                <p className="text-amber-800 text-sm leading-relaxed">
                  {siteConfig.partnership.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Onglerie */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full shadow-md">
              <p className="text-rose-600 font-semibold text-sm uppercase tracking-wider">Nos Services</p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-gray-800">
              <Sparkles className="inline w-10 h-10 text-rose-500 mb-2" />
              {" "}Onglerie Créative
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des mains sublimées avec des techniques professionnelles et un nail art unique
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.onglerie.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div 
                  key={idx} 
                  className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-800 group-hover:text-rose-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-rose-100 flex justify-between items-center">
                    <span className="text-rose-600 font-bold">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Maquillage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-gray-800">
              <Palette className="inline w-10 h-10 text-pink-500 mb-2" />
              {" "}Maquillage Professionnel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Du quotidien aux grandes occasions, un maquillage sur-mesure qui révèle votre beauté
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.services.maquillage.map((service, idx) => {
              const Icon = iconMap[service.icon];
              return (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-3xl border border-pink-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl shadow-md">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-pink-200 flex justify-between items-center">
                    <span className="text-pink-600 font-bold">{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4 text-gray-800">
              Ce que disent nos clientes
            </h2>
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-bold text-gray-800">{siteConfig.rating.score}/5</span>
              <span className="text-gray-600">sur {siteConfig.rating.total} avis</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-rose-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{testimonial.comment}"
                </p>
                <p className="text-gray-500 text-sm font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Hours */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8 text-gray-800">
                Prenez <span className="text-rose-600">Rendez-vous</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 bg-rose-50 p-6 rounded-2xl border border-rose-200">
                  <MapPin className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-gray-800">Adresse</p>
                    <p className="text-gray-700">{siteConfig.contact.fullAddress}</p>
                    <p className="text-sm text-gray-600 mt-2">{siteConfig.location.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-pink-50 p-6 rounded-2xl border border-pink-200">
                  <Phone className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-gray-800">Téléphone</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-pink-600 font-semibold text-lg hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" strokeWidth={2} />
                  <div>
                    <p className="font-bold text-lg mb-1 text-gray-800">Réservation en ligne</p>
                    <a 
                      href={siteConfig.booking.planity}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 font-semibold hover:underline flex items-center gap-2"
                    >
                      Planity - Disponible 24h/24
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <a 
                href={siteConfig.booking.planity}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Réserver maintenant sur Planity
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-3xl border-2 border-rose-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-rose-600" strokeWidth={2} />
                  <h3 className="text-2xl font-serif font-bold text-gray-800">Horaires d'ouverture</h3>
                </div>

                <div className="space-y-4">
                  {Object.entries(siteConfig.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center py-3 border-b border-rose-200 last:border-0">
                      <span className="font-semibold text-gray-800 capitalize">{day}</span>
                      {typeof hours === 'string' ? (
                        <span className="text-gray-600">{hours}</span>
                      ) : (
                        <span className="text-gray-600 text-right">
                          {hours.morning}
                          {hours.afternoon && <><br />{hours.afternoon}</>}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-rose-200">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8!2d${siteConfig.contact.coordinates.lng}!3d${siteConfig.contact.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzM4LjMiTiAywrA0NScxMi4yIlc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Poupée Nails Art - Localisation"
                  className="grayscale-0 hover:grayscale-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-900 to-pink-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <p className="text-2xl font-serif font-bold">{siteConfig.name}</p>
                <p className="text-sm text-rose-200">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-rose-200 mb-2">
                {siteConfig.contact.fullAddress}
              </p>
              <p className="text-white font-semibold mb-2">
                {siteConfig.contact.phone}
              </p>
              <p className="text-xs text-rose-300">
                © 2025 Poupée Nails Art. Tous droits réservés.
              </p>
              <p className="text-xs text-rose-300 mt-1">
                Site créé par <span className="font-semibold">Avalon Stratège</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;