// app/page.tsx

import BackgroundDecor from "@/components/home/BackgroundDecor";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Newsletter from "@/components/home/Newsletter";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050607] text-white relative overflow-hidden">
      <BackgroundDecor />
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}