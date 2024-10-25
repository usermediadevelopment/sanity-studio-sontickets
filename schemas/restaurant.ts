import {defineType, defineField} from 'sanity'

export const restaurantSchema = defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'dietaryPreferences',
      title: 'Dietary Preferences',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Vegetariano', value: 'vegetarian'},
          {title: 'Vegano', value: 'vegan'},
          {title: 'Sin gluten', value: 'glutenFree'},
          {title: 'Keto', value: 'keto'},
          {title: 'Sin lactosa', value: 'lactoseFree'},
          {title: 'Orgánico', value: 'organic'},
          {title: 'Halal', value: 'halal'},
          {title: 'Kosher', value: 'kosher'},
          {title: 'Paleo', value: 'paleo'},
          {title: 'Sin azúcar', value: 'sugarFree'},
          // Añadir más preferencias si es necesario
        ],
      },
    }),

    defineField({
      name: 'ambiance',
      title: 'Ambiance and Experience',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Al aire libre', value: 'outdoor'},
          {title: 'Terraza', value: 'terrace'},
          {title: 'Vista panorámica', value: 'scenicView'},
          {title: 'Decoración temática', value: 'thematicDecoration'},
          {title: 'Ambiente familiar', value: 'familyFriendly'},
          {title: 'Para citas románticas', value: 'romantic'},
          {title: 'Zona de baile', value: 'danceArea'},
          {title: 'Pet-friendly', value: 'petFriendly'},
          {title: 'Se permite fumar', value: 'smokingAllowed'},
        ],
      },
    }),
    defineField({
      name: 'facilities',
      title: 'Facilities and Services',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Wi-Fi gratuito', value: 'freeWifi'},
          {title: 'Reservación en línea', value: 'onlineReservation'},
          {title: 'Servicio de bar completo', value: 'fullBarService'},
          {title: 'Carta de vinos', value: 'wineList'},
          {title: 'Carta de cocteles', value: 'cocktailMenu'},
          {title: 'Menú infantil', value: 'kidsMenu'},
          {title: 'Acceso para discapacitados', value: 'accessible'},
          {title: 'Aparcamiento gratuito', value: 'freeParking'},
          {title: 'Entrega a domicilio', value: 'homeDelivery'},
          {title: 'Para llevar', value: 'takeaway'},
          // Añadir más facilidades si es necesario
        ],
      },
    }),
    defineField({
      name: 'entertainment',
      title: 'Entertainment and Events',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Música en vivo', value: 'liveMusic'},
          {title: 'Música de DJ', value: 'djMusic'},
          {title: 'Happy hour', value: 'happyHour'},
          {title: 'Eventos temáticos', value: 'themedEvents'},
          {title: 'Proyección de deportes en vivo', value: 'liveSports'},
          {title: 'Karaoke', value: 'karaoke'},
          {title: 'Shows de comedia', value: 'comedyShows'},
          {title: 'Noches de trivia', value: 'triviaNights'},
          // Añadir más eventos si es necesario
        ],
      },
    }),

    defineField({
      name: 'locationFeatures',
      title: 'Location and Environment',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cerca de puntos turísticos', value: 'nearTouristSpots'},
          {title: 'Ubicación céntrica', value: 'centralLocation'},
          {title: 'Ambiente rural', value: 'ruralSetting'},
          {title: 'Cerca de la playa', value: 'nearBeach'},
          {title: 'En hoteles', value: 'inHotels'},
          {title: 'Fácil acceso al transporte público', value: 'easyTransportAccess'},
          {title: 'En el casco histórico', value: 'historicalArea'},
          {title: 'En centros comerciales', value: 'shoppingCenter'},
          // Añadir más opciones de ubicación si es necesario
        ],
      },
    }),
    defineField({
      name: 'paymentOptions',
      title: 'Payment and Reservation Options',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Acepta pagos con tarjeta', value: 'creditCardAccepted'},
          {title: 'Pago móvil (Apple Pay, Google Pay)', value: 'mobilePayment'},
          {title: 'Acepta vales de comida', value: 'mealVouchersAccepted'},
          {title: 'Reservación telefónica', value: 'phoneReservation'},
          {title: 'Política de cancelación flexible', value: 'flexibleCancellation'},
          {title: 'División de cuentas', value: 'billSplitting'},
          {title: 'Descuentos para miembros', value: 'memberDiscounts'},
          {title: 'Programa de fidelización', value: 'loyaltyProgram'},
          // Añadir más opciones de pago si es necesario
        ],
      },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [{type: 'socialMedia'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
})
