import { Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/70">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400/30 to-emerald-500/60 ring-1 ring-emerald-400/50 flex items-center justify-center">
                <span className="font-black text-lg text-emerald-100">R</span>
              </div>
              <span className="font-bold">Repaid</span>
            </div>
            <p className="mb-4">Glassy commerce for the speed-obsessed.</p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-xl bg-white/5 border-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl bg-white/5 border-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl bg-white/5 border-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Shop</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Support</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none" 
              />
              <Button className="w-full px-4 py-2 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p>© {new Date().getFullYear()} Repaid. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}