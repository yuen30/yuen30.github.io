import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Mesh Gradient Background */}
      <div className="mesh-bg">
        <div className="mesh-blob bg-indigo-600/20 top-[10%] left-[10%]" />
        <div className="mesh-blob bg-purple-600/20 bottom-[20%] right-[15%]" />
        <div className="mesh-blob bg-blue-600/20 top-[40%] right-[10%] delay-[5s]" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />

        {/* Statistics Section (Optional Premium Touch) */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Articles", value: "40+" },
              { label: "Subscribers", value: "2k+" },
              { label: "Coffee", value: "Infinite" },
              { label: "Projects", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl font-bold text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProjectGrid />

        <BlogGrid />

        {/* Newsletter / CTA Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto glass-card p-12 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of the <span className="text-gradient">Curve</span></h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto text-lg">
              Subscribe to get my latest articles and curation of the best tech resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>

          {/* Subtle background glow for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[100px]" />
        </section>
      </div>

      <Footer />
    </main>
  );
}
