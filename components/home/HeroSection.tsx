"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Award, Clock, Zap, Play, Pause, ArrowRight, Trophy, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Trophy, title: "Elite Performance", desc: "Pro-grade equipment" },
  { icon: Shield, title: "Durability Guarantee", desc: "Built to last" },
  { icon: Target, title: "Precision Engineering", desc: "Maximize your potential" },
]

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1920&auto=format&fit=crop",
    title: "Game Day Essentials",
    subtitle: "Performance gear designed for champions",
    cta: "Shop Now",
    color: "from-blue-500/10 via-blue-400/5 to-transparent"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1920&auto=format&fit=crop",
    title: "Training Equipment",
    subtitle: "Elevate your performance with pro-grade gear",
    cta: "View Collection",
    color: "from-red-500/10 via-red-400/5 to-transparent"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1920&auto=format&fit=crop",
    title: "Team Collections",
    subtitle: "Official apparel and equipment for your squad",
    cta: "Team Store",
    color: "from-green-500/10 via-green-400/5 to-transparent"
  }
]

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToBanner = (index: number) => {
    setCurrentBanner(index)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Wide banner section */}
      <div className="w-full relative h-[85vh] min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
        <AnimatePresence mode="wait">
          {banners.map((banner, index) => (
            currentBanner === index && (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 bg-gradient-to-br ${banner.color}`}
              >
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="object-cover w-full h-full" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 md:mt-0">
                    <div className="max-w-2xl">
                      <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center md:text-left"
                      >
                        {banner.title}
                      </motion.h1>
                      <motion.p 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-lg sm:text-xl text-white/90 mb-8 max-w-lg text-center md:text-left mx-auto md:mx-0"
                      >
                        {banner.subtitle}
                      </motion.p>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="text-center md:text-left"
                      >
                        <Button className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30">
                          {banner.cta}
                          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation buttons - hidden on mobile, visible on tablet and up */}
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur border-white/30 hover:bg-black/70 h-10 w-10 lg:h-12 lg:w-12"
          onClick={prevBanner}
        >
          <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur border-white/30 hover:bg-black/70 h-10 w-10 lg:h-12 lg:w-12"
          onClick={nextBanner}
        >
          <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
        </Button>

        {/* Play/Pause button */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 rounded-full bg-black/50 backdrop-blur border-white/30 hover:bg-black/70 h-8 w-8 sm:h-10 sm:w-10"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-blue-500' : 'bg-white/60 hover:bg-white'
              }`}
              onClick={() => goToBanner(index)}
            />
          ))}
        </div>
      </div>

      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 -mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={f.title} 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{delay:0.1*i, duration:0.5}} 
              className="p-4 sm:p-6 rounded-xl md:rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-blue-600/10">
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-bold text-lg sm:text-xl mb-1">{f.title}</div>
                  <div className="text-white/70 text-sm sm:text-base">{f.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.4, duration:0.5}}
          className="mt-12 sm:mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Elevate Your Game</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Discover performance-driven sports equipment and apparel designed to help you train harder, play smarter, and compete at your highest level.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button className="px-6 py-4 sm:px-8 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold inline-flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30">
              Shop Performance Gear <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" className="px-6 py-4 sm:px-8 sm:py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur font-semibold hover:bg-white/10 transition">
              New Arrivals
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection