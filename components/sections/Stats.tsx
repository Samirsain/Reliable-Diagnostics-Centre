"use client"

import { useCountUp } from '@/hooks/useCountUp'

export default function Stats() {
  const reviewsCount = useCountUp(46, 2000)
  const testsCount = useCountUp(200, 2500)
  const turnaroundCount = useCountUp(24, 1500)

  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 divide-y lg:divide-y-0">
        <div className="py-8 px-6 text-center space-y-2">
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            4.9
          </h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Google Star Rating
          </p>
        </div>

        <div ref={reviewsCount.ref} className="py-10 px-6 text-center space-y-2">
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            {reviewsCount.count}
          </h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Verified Reviews
          </p>
        </div>

        <div ref={testsCount.ref} className="py-10 px-6 text-center space-y-2 border-t sm:border-t-0">
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            {testsCount.count}+
          </h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Tests Available
          </p>
        </div>

        <div ref={turnaroundCount.ref} className="py-10 px-6 text-center space-y-2">
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-none">
            {turnaroundCount.count}h
          </h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Report Turnaround
          </p>
        </div>
      </div>
    </section>

  )
}
