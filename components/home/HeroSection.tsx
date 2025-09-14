"use client"
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, Truck, Shield, Star, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  { icon: Truck, title: "Fast Shipping", desc: "Worldwide 3–5 days" },
  { icon: Shield, title: "Secure Checkout", desc: "256-bit encryption" },
  { icon: Star, title: "Premium Quality", desc: "4.7★ average" },
]

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    title: "Next-Gen Audio",
    subtitle: "Experience sound like never before",
    cta: "Shop Headphones",
    color: "from-emerald-500/10 via-emerald-400/5 to-transparent"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    title: "Urban Style",
    subtitle: "Elevate your streetwear game",
    cta: "Explore Collection",
    color: "from-blue-500/10 via-blue-400/5 to-transparent"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop",
    title: "Precision Timepieces",
    subtitle: "Where technology meets elegance",
    cta: "Discover Watches",
    color: "from-purple-500/10 via-purple-400/5 to-transparent"
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
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 
              initial={{opacity:0, y:20}} 
              animate={{opacity:1, y:0}} 
              transition={{duration:0.6}} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Unleash the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">Reaper</span>
              <br /> Shop the Future Today
            </motion.h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Sleek gear. Neon vibes. Built for speed. Explore curated tech and streetwear with a glassy aesthetic and secure checkout.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {features.map((f, i) => (
                <motion.div 
                  key={f.title} 
                  initial={{opacity:0, y:10}} 
                  animate={{opacity:1, y:0}} 
                  transition={{delay:0.1*i, duration:0.5}} 
                  className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <f.icon className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold">{f.title}</div>
                      <div className="text-xs text-white/70">{f.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="px-5 py-3 rounded-2xl bg-emerald-500 text-black font-semibold inline-flex items-center gap-2 hover:bg-emerald-400 transition shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                Shop Featured <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-5 py-3 rounded-2xl border border-white/15 bg-white/5 backdrop-blur font-semibold hover:bg-white/10 transition">
                View Deals
              </Button>
            </div>
          </div>

          <motion.div 
            initial={{opacity:0, scale:0.98}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.6}} 
            className="relative"
          >
            <Card className="overflow-hidden border border-white/10 bg-gradient-to-br shadow-[0_0_120px_rgba(16,185,129,0.12)] relative h-[420px]">
              <CardContent className="p-0 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={banners[currentBanner].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`h-full w-full bg-gradient-to-br ${banners[currentBanner].color}`}
                  >
                    <img 
                      src={banners[currentBanner].image} 
                      alt="Reaper showcase" 
                      className="object-cover h-full w-full" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-1"
                      >
                        {banners[currentBanner].title}
                      </motion.h2>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/80 mb-4"
                      >
                        {banners[currentBanner].subtitle}
                      </motion.p>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Button className="rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
                          {banners[currentBanner].cta}
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur border-white/20 hover:bg-black/50"
                  onClick={prevBanner}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 backdrop-blur border-white/20 hover:bg-black/50"
                  onClick={nextBanner}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Play/Pause button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full bg-black/30 backdrop-blur border-white/20 hover:bg-black/50"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentBanner ? 'bg-emerald-400' : 'bg-white/40'
                      }`}
                      onClick={() => goToBanner(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection