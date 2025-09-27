"use client"
import React, { useState } from "react"
import { ShoppingCart, Heart, Star, Truck, Shield, Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Mock product data - in a real app, you'd fetch this based on the ID
  const product = {
    id: 1,
    name: "Repaid Pulse Headphones",
    price: "$149",
    rating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1518441902110-5810a4b1c80d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
    ],
    badge: "New",
    description: "Experience immersive audio with the Repaid Pulse Headphones. Featuring advanced noise cancellation, premium sound quality, and a comfortable over-ear design perfect for extended listening sessions.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium memory foam ear cushions",
      "Bluetooth 5.2 with multi-device pairing",
      "Built-in microphone with voice assistant support"
    ],
    specifications: {
      "Weight": "265g",
      "Connection": "Bluetooth 5.2, 3.5mm jack",
      "Battery": "30 hours playback",
      "Charging": "USB-C fast charging",
      "Color": "Matte Black"
    },
    reviews: [
      {
        user: "Alex Johnson",
        rating: 5,
        comment: "Best headphones I've ever owned. The noise cancellation is incredible!",
        date: "2 days ago"
      },
      {
        user: "Sarah Miller",
        rating: 4,
        comment: "Great sound quality and comfortable for long periods. Battery life is impressive.",
        date: "1 week ago"
      },
      {
        user: "Michael Chen",
        rating: 5,
        comment: "Worth every penny. The build quality is exceptional and the audio is crystal clear.",
        date: "2 weeks ago"
      }
    ]
  }

  const relatedProducts = [
    {
      id: 5,
      name: "Repaid SoundBlast Speakers",
      price: "$179",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1200&auto=format&fit=crop",
      badge: "Popular"
    },
    {
      id: 6,
      name: "Repaid Audio Cable Pack",
      price: "$49",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1599669454699-248893623464?q=80&w=1200&auto=format&fit=crop",
      badge: "Value"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Button 
          variant="outline" 
          className="rounded-xl border-white/15 bg-white/5 backdrop-blur font-semibold hover:bg-white/10 inline-flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Button>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-96 object-cover" 
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`rounded-xl overflow-hidden border ${selectedImage === index ? 'border-emerald-400' : 'border-white/10'} bg-white/5 backdrop-blur-xl transition`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="h-20 w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold bg-emerald-500 text-black px-2 py-1 rounded-full">
                {product.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-2">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-emerald-400 text-emerald-400' : 'text-white/30'}`} 
                    />
                  ))}
                </div>
                <span className="text-white/70">{product.rating} • 128 Reviews</span>
              </div>
            </div>

            <div className="text-3xl font-bold">{product.price}</div>

            <p className="text-white/80">{product.description}</p>

            <div className="space-y-3">
              <h3 className="font-semibold">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-white/15 rounded-xl overflow-hidden">
                <Button 
                  variant="ghost" 
                  className="h-10 w-10 rounded-none" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2">{quantity}</span>
                <Button 
                  variant="ghost" 
                  className="h-10 w-10 rounded-none" 
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </Button>
              </div>

              <Button className="flex-1 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition inline-flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </Button>

              <Button variant="outline" size="icon" className="rounded-xl border-white/15 bg-white/5 backdrop-blur hover:bg-white/10">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                <Truck className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="font-semibold">Free Shipping</div>
                  <div className="text-xs text-white/70">Delivery in 3-5 days</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                <Shield className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="font-semibold">Secure Checkout</div>
                  <div className="text-xs text-white/70">256-bit encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <Card className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-white/70">{key}</span>
                    <span className="font-medium text-white">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <Card key={index} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{review.user}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? 'fill-emerald-400 text-emerald-400' : 'text-white/30'}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 mb-2">{review.comment}</p>
                  <span className="text-sm text-white/50">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <Card key={p.id} className="group rounded-2xl overflow-hidden border text-white border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
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
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails