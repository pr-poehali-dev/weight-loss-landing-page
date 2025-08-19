import React, { useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CourseIncludesSection from "@/components/sections/CourseIncludesSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustSection from "@/components/sections/TrustSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 23,
    seconds: 45
  });
  
  const [purchaseCount, setPurchaseCount] = useState(1247);
  const [currentViewers, setCurrentViewers] = useState(47);
  
  useEffect(() => {
    const purchaseTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setPurchaseCount(prev => prev + 1);
      }
    }, 8000);
    
    const viewersTimer = setInterval(() => {
      setCurrentViewers(prev => prev + Math.floor(Math.random() * 6) - 3);
    }, 3000);
    
    return () => {
      clearInterval(purchaseTimer);
      clearInterval(viewersTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection purchaseCount={purchaseCount} currentViewers={currentViewers} />
      <BenefitsSection />
      <CourseIncludesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <TrustSection />
      <PricingSection timeLeft={timeLeft} />
      <FAQSection />
    </div>
  );
};

export default Index;