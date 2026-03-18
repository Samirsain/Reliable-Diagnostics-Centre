export default function Ticker() {
  const items = [
    'CBC', 'Thyroid Profiles', 'Liver & Kidney Tests', 'Diabetes Panels', 
    'Cardiac Risk', 'Hormones', 'Viral Serology', 'Full Body Packages', 
    'Microbiology', 'Urine Analysis'
  ]

  return (
    <div className="bg-primary py-4 overflow-hidden flex whitespace-nowrap">
      <div className="animate-ticker flex w-max">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="text-[10px] text-white/50 tracking-[0.2em] font-black uppercase">
              {item}
            </span>
            <span className="text-white text-lg">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
