import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <section>
        <div>
          <div>
            {statsData.map((stat, index) => (
              <div key={index}>
                <div>{stat.value}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
  );
}
