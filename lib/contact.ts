export const clinicAddress = {
  line1: 'Nad Al Sheba 3',
  line2: 'Dubai, UAE',
  full: 'Nad Al Sheba 3, Dubai, UAE',
}

export const clinicPhones = [
  {
    display: '+971 56 128 0538',
    tel: 'tel:+971561280538',
    wa: 'https://wa.me/971561280538',
  },
  {
    display: '+971 58 990 0137',
    tel: 'tel:+971589900137',
    wa: 'https://wa.me/971589900137',
  },
]

export const primaryPhone = clinicPhones[0]

export const whatsappConsultationUrl =
  `${primaryPhone.wa}?text=${encodeURIComponent('Hello Dr. Fareena! I would like to book a consultation.')}`

export const mapsEmbedUrl =
  'https://maps.google.com/maps?q=Nad%20Al%20Sheba%203%2C%20Dubai%2C%20UAE&t=&z=14&ie=UTF8&iwloc=&output=embed'
