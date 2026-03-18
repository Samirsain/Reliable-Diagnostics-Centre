"use client"

import { Dock, DockIcon } from "@/components/ui/dock"

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden
                    bg-white border-t border-slate-200
                    pb-[env(safe-area-inset-bottom)]
                    shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex h-16 items-center justify-center bg-white border-t border-slate-100 shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
        <Dock 
          iconSize={40} 
          iconMagnification={40} 
          disableMagnification={true}
          className="bg-transparent border-none shadow-none m-0 p-0 h-12 flex items-center gap-8"
        >
          <DockIcon className="bg-slate-50 hover:bg-primary/10 group transition-colors">
            <a href="tel:07737774617" className="flex items-center justify-center w-full h-full">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform text-[22px]">call</span>
            </a>
          </DockIcon>
          
          <DockIcon className="bg-primary hover:bg-primary/90 group transition-all shadow-xl shadow-primary/30 scale-125">
            <a href="#contact" className="flex items-center justify-center w-full h-full">
              <span className="material-symbols-outlined text-white text-[22px]">calendar_month</span>
            </a>
          </DockIcon>

          <DockIcon className="bg-[#25D366]/5 hover:bg-[#25D366]/10 group transition-colors">
            <a href="https://wa.me/917737774617" className="flex items-center justify-center w-full h-full">
              <span className="material-symbols-outlined text-[#25D366] group-hover:scale-110 transition-transform text-[22px]">chat</span>
            </a>
          </DockIcon>
        </Dock>
      </div>
    </div>
  )
}
