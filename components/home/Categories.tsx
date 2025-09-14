"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: 1,
    name: "Audio Gear",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    items: "32 products"
  },
  {
    id: 2,
    name: "Streetwear",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
    items: "45 products"
  },
  {
    id: 3,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    items: "28 products"
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=1200&auto=format&fit=crop",
    items: "51 products"
  }
]

export default function Categories() {
  return (
    <section id="categories" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
          <Button variant="outline" className="rounded-xl border-white/15 bg-white/5 backdrop-blur font-semibold hover:bg-white/10">
            View All Categories
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, i) => (
            <motion.div 
              key={category.id} 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{delay:0.05*i}}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition h-64"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-lg">{category.name}</h3>
                <p className="text-sm text-white/70">{category.items}</p>
                <Button variant="ghost" size="sm" className="mt-2 p-0 text-emerald-400 hover:text-emerald-300">
                  Explore <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}