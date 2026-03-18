import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const REVIEWS = [
  { color: '#1173d4', name: 'Kashish Modi', init: 'K', stars: 5, quote: "Good service, staff was very good, cleanliness was well maintained and the reports were received in short period of time.", guide: true },
  { color: '#0ea5e9', name: 'Ischit Jain', init: 'I', stars: 5, quote: "Top level quality test. Best and technologically most advanced lab in the area — highly recommended." },
  { color: '#334155', name: 'Verified Patient', init: 'V', stars: 5, quote: "Best lab in Hanumangarh — good facility with good, careful and professional staff. Very satisfied." },
  { color: '#1e40af', name: 'Rahul Verma', init: 'R', stars: 5, quote: "Very good service and management. Reports were prompt, accurate, and the entire process was smooth." },
  { color: '#0891b2', name: 'Priya Bishnoi', init: 'P', stars: 5, quote: "Came for a full body checkup. Technician was skilled and gentle. Reports shared on WhatsApp within hours." },
]

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 sm:mb-10">
        <div>
          <p className="text-primary font-bold uppercase tracking-widest text-xs lg:text-sm mb-2">Testimonials</p>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase">Loved by patients</h2>
        </div>
      </div>

      {/* Rating Summary - Rule 12 */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 mb-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 shadow-sm">
        <div className="text-center sm:text-left">
          <p className="text-6xl font-black text-primary leading-none mb-4">4.9</p>
          <div className="flex gap-1 text-amber-500 mb-3 justify-center sm:justify-start">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined fill-current">star</span>
            ))}
          </div>
          <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">Based on 46 Google Reviews</p>
        </div>

        <div className="w-full sm:max-w-xs flex flex-col gap-2.5">
          {[
            { stars: 5, per: 95, count: 44 },
            { stars: 4, per: 5, count: 2 },
            { stars: 3, per: 0, count: 0 },
            { stars: 2, per: 0, count: 0 },
            { stars: 1, per: 0, count: 0 }
          ].map((r) => (
            <div key={r.stars} className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 w-3">{r.stars}</span>
              <div className="flex-1 h-2 bg-slate-50 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${r.per}%` }} />
              </div>
              <span className="text-xs font-bold text-slate-400 w-4 text-right">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {REVIEWS.map((rev, i) => (
          <div key={i} className="bg-white p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col">
            <div className="flex gap-1 text-amber-500 mb-4 lg:mb-6">
              {[...Array(rev.stars)].map((_, j) => (
                <span key={j} className="material-symbols-outlined fill-current text-base lg:text-lg">star</span>
              ))}
            </div>
            <p className="text-slate-600 italic text-base lg:text-lg leading-relaxed mb-8 flex-1">
              "{rev.quote}"
            </p>
            <div className="flex items-center gap-3 lg:gap-4 mt-auto pt-6 border-t border-slate-50">
              <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-white font-bold text-base lg:text-xl uppercase" style={{ backgroundColor: rev.color }}>
                {rev.init}
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm lg:text-base">{rev.name}</p>
                <p className="text-[10px] lg:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {rev.guide ? 'Local Guide' : 'Verified Patient'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}
