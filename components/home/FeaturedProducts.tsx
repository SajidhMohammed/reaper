// components/featured-products.tsx
"use client"
import React from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: string
  rating: number
  image: string
  badge: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Reaper Pulse Headphones",
    price: "$149",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518441902110-5810a4b1c80d?q=80&w=1200&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 2,
    name: "Reaper Carbon Backpack",
    price: "$119",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1200&auto=format&fit=crop",
    badge: "Hot"
  },
  {
    id: 3,
    name: "Reaper Aero Sneakers",
    price: "$129",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Reaper Titan Watch",
    price: "$199",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1200&auto=format&fit=crop",
    badge: "Limited"
  }
]

const FeaturedProducts = () => {
  return (
    <section id="featured" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Products</h2>
          <Button variant="outline" className="rounded-xl border-white/15 bg-white/5 backdrop-blur font-semibold hover:bg-white/10">
            View All
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div 
              key={p.id} 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{delay:0.05*i}}
            >
              <Card className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={p.image} alt={p.name} className="h-56 w-full object-cover" />
                    <span className="absolute left-3 top-3 text-[11px] font-bold bg-emerald-500 text-black px-2 py-1 rounded-full">
                      {p.badge}
                    </span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="absolute right-3 top-3 rounded-xl bg-white/5 border-white/10 opacity-0 group-hover:opacity-100 transition"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold leading-snug group-hover:text-emerald-300 transition">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                      <Star className="h-4 w-4 fill-current text-emerald-400" /> {p.rating}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-bold">{p.price}</span>
                      <Button className="px-3 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition inline-flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" /> Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts