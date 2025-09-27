import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Newsletter() {
  return (
    <section id="newsletter" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Card className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Join the Repaid Community</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter for exclusive deals, product launches, and style tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder:text-white/50 focus:outline-none" 
              />
              <Button className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}