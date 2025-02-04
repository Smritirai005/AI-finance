import { Button } from "@/components/ui/button";
import { CardContent,Card } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero";
import { statsData,featuresData,howItWorksData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Features</h2>
            <p className="text-gray-600">Check out our amazing features</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="p-8 bg-white shadow rounded-lg">
                <div className="text-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-gray-600">Get started in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksData.map((step, index) => (
              <div key={index} className="p-8 bg-white shadow rounded-lg">
                <div className="text-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">What other users say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white shadow rounded-lg">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className=" font-semibold">{testimonial.name}</div>
                    <div className=" text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  </div>
                  <p className="text-gray-600 mt-4">{testimonial.quote}</p>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold">Ready to take control of your finance ?</h2>
          </div>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousand of users who are already manging their finances
            smarter with fealth.
          </p>
          <Link href="/dashboard">
              <Button size="lg" className="bg-white text-blue hover:bg-blue-50 animate-bounce">Start free trial</Button>
          </Link>
        </div>
      </section>

      
      
      

    </div>
  );
}
