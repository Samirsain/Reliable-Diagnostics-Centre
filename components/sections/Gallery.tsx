import Image from 'next/image'
import { IMAGES } from '@/constants/images'

export default function Gallery() {
  const images = [
    { src: IMAGES.stock1, alt: 'Diagnostic Testing', span: true },
    { src: IMAGES.stock2, alt: 'Laboratory Analysis' },
    { src: IMAGES.stock3, alt: 'Advanced Equipment' },
    { src: IMAGES.stock4, alt: 'Expert Reporting' },
    { src: IMAGES.real1, alt: 'Reliable Facility' },
  ]

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
      <div className="space-y-4 mb-10">
        <p className="text-primary font-bold uppercase tracking-widest text-sm">Our Facility</p>
        <h2 className="text-4xl font-black text-slate-900 uppercase">A Glimpse into Excellence</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="aspect-square relative overflow-hidden rounded-[2.5rem] shadow-xl group"
          >
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
