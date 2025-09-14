// components/navbar.tsx
"use client"
import React, { useState } from "react"
import { ShoppingCart, Search, Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [cartItems] = useState(2) // Example cart item count

  const navItems = ['Home', 'Shop', 'Categories', 'Deals', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400/30 to-emerald-500/60 ring-1 ring-emerald-400/50 flex items-center justify-center shadow-[0_0_40px_0_rgba(16,185,129,0.35)]">
              <span className="font-black text-xl tracking-tight text-emerald-100">R</span>
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-wide">Reaper</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item} href="#" className="hover:text-white transition">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 p-2 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
              <Search className="h-4 w-4 text-white/60" />
              <Input 
                placeholder="Search..." 
                className="w-32 bg-transparent placeholder:text-white/50 border-0 focus-visible:ring-0 text-white" 
              />
            </div>
            
            <Button variant="outline" size="icon" className="rounded-xl bg-white/5 border-white/10">
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="relative rounded-xl bg-white/5 border-white/10 hover:bg-white/10"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-emerald-500 text-black font-bold rounded-full px-1.5 py-0.5">
                  {cartItems}
                </span>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden rounded-xl bg-white/5 border-white/10" 
              onClick={() => setOpen(v => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden border-t border-white/10 backdrop-blur bg-black/30">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 text-white/80">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar