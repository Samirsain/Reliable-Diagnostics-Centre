"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const REVIEWS = [
  { img: 'https://i.pravatar.cc/150?u=12', name: 'Samir Sain', quote: "Very accurate reports and quick service. Staff was polite and helpful. Highly recommended for diagnostic tests." },
  { img: 'https://i.pravatar.cc/150?u=34', name: 'Kashish Modi', quote: "Good service, staff was very good, cleanliness was well maintained and the reports were received in short period of time." },
  { img: 'https://i.pravatar.cc/150?u=45', name: 'Ischit Jain', quote: "Top level quality test. Best and technologically most advanced lab in the area — highly recommended." },
  { img: 'https://i.pravatar.cc/150?u=56', name: 'Rahul Verma', quote: "Very good service and management. Reports were prompt, accurate, and the entire process was smooth." },
  { img: 'https://i.pravatar.cc/150?u=67', name: 'Priya Bishnoi', quote: "Came for a full body checkup. Technician was skilled and gentle. Reports shared on WhatsApp within hours." },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#F8FAFC] py-20 overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 uppercase font-display tracking-tight">
            Loved by Patients <span className="text-[#38BDF8]">💙</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base font-medium">
            Real feedback from our trusted patients
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 lg:p-10 mb-16 border border-slate-50">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-5xl lg:text-6xl font-bold text-[#2563EB] mb-2 leading-none">4.9</p>
            <p className="text-amber-400 text-xl lg:text-2xl mb-2 tracking-widest">★★★★★</p>
            <div className="flex items-center gap-2 justify-center md:justify-start text-slate-500 text-sm font-semibold">
              <span className="material-symbols-outlined text-[#2563EB]">verified</span>
              <span>Based on 120+ reviews</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-2.5">
            {[
              { label: '5★', percent: 92 },
              { label: '4★', percent: 6 },
              { label: '3★', percent: 2 },
              { label: '2★', percent: 0 },
              { label: '1★', percent: 0 },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 w-5 text-right">{bar.label}</span>
                <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-1000" style={{ width: `${bar.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16 px-2"
        >
          {REVIEWS.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/80 backdrop-blur-md border border-slate-100/50 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative h-full flex flex-col group">
                
                {/* Quote Icon */}
                <span className="absolute top-6 right-6 text-6xl text-blue-100/30 font-serif leading-none group-hover:text-blue-200/50 transition-colors">
                  ❝
                </span>

                {/* Stars */}
                <div className="text-amber-400 text-lg mb-6 tracking-widest relative z-10">★★★★★</div>

                {/* Review Text */}
                <p className="text-[#64748B] text-sm lg:text-base leading-relaxed mb-8 relative z-10 flex-1 font-medium">
                  {item.quote}
                </p>

                {/* User */}
                <div className="flex items-center mt-auto gap-4 relative z-10 pt-6 border-t border-slate-100 flex-none">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
                    <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                  </div>
                  <div>
                    <p className="text-sm lg:text-base font-bold text-slate-900 leading-tight">{item.name}</p>
                    <p className="text-[10px] lg:text-xs text-[#25D366] font-bold uppercase tracking-wider mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">shield</span>
                      Verified Patient
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

