"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Tech Enthusiast",
    comment: "The Reaper headphones are incredible! The sound quality is unmatched and the design is sleek.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Fashion Blogger",
    comment: "I love my Reaper backpack! It's stylish, durable and fits all my gear perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Designer",
    comment: "The attention to detail in Reaper products is exceptional. You can tell they care about quality.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=200&auto=format&fit=crop"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id} 
              initial={{opacity:0, y:20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{delay:0.05*i}}
            >
              <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx} 
                        className={`h-4 w-4 ${starIdx < testimonial.rating ? 'fill-emerald-400 text-emerald-400' : 'text-white/30'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-white/80 mb-6 italic">&quot;{testimonial.comment}&quot;</p>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover" 
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
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