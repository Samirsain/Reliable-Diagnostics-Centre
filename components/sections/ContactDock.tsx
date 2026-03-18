"use client"

import React from "react"
import { Dock, DockIcon } from "@/components/ui/dock"
import { cn } from "@/lib/utils"
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock 
} from "lucide-react"

export function ContactDock() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center">
      <Dock direction="middle" className="bg-primary/5 border-primary/10 shadow-lg shadow-primary/5">
        <DockIcon className="bg-white shadow-md hover:bg-primary hover:text-white transition-colors">
          <a href="tel:07737774617" title="Call Us" className="flex items-center justify-center w-full h-full">
            <Phone className="w-5 h-5" />
          </a>
        </DockIcon>
        <DockIcon className="bg-white shadow-md hover:bg-[#25D366] hover:text-white transition-colors">
          <a href="https://wa.me/917737774617" title="WhatsApp" className="flex items-center justify-center w-full h-full">
            <MessageCircle className="w-5 h-5" />
          </a>
        </DockIcon>
        <DockIcon className="bg-white shadow-md hover:bg-primary hover:text-white transition-colors">
          <a href="https://maps.google.com/?q=Reliable+Diagnostics+Centre+Hanumangarh" target="_blank" title="Location" className="flex items-center justify-center w-full h-full">
            <MapPin className="w-5 h-5" />
          </a>
        </DockIcon>
        <DockIcon className="bg-white shadow-md hover:bg-primary hover:text-white transition-colors">
          <a href="mailto:contact@reliablediagnostics.com" title="Email" className="flex items-center justify-center w-full h-full">
            <Mail className="w-5 h-5" />
          </a>
        </DockIcon>
        <DockIcon className="bg-white shadow-md hover:bg-primary hover:text-white transition-colors">
          <div title="Mon–Sat: 7AM–8PM" className="flex items-center justify-center w-full h-full">
            <Clock className="w-5 h-5" />
          </div>
        </DockIcon>
      </Dock>
    </div>
  )
}
