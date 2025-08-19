import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface PricingSectionProps {
  timeLeft: TimeLeft;
}

const PricingSection: React.FC<PricingSectionProps> = ({ timeLeft }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Badge className="mb-6 bg-white/20 text-white hover:bg-white/20">
          ⏰ Ограниченное предложение
        </Badge>
        
        <h2 className="text-4xl font-bold mb-4">
          Начните менять свою жизнь уже сегодня
        </h2>
        
        <div className="text-6xl font-bold mb-2">
          990 ₽
        </div>
        <p className="text-xl mb-8 opacity-90">
          Полный курс • Пожизненный доступ • Поддержка 24/7
        </p>
        
        <div className="bg-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Clock" size={24} className="mr-3" />
            <span className="text-xl font-semibold">Акция заканчивается через:</span>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-3 mb-2">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
              </div>
              <div className="text-sm opacity-80">дней</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-3 mb-2">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
              </div>
              <div className="text-sm opacity-80">часов</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-3 mb-2">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              </div>
              <div className="text-sm opacity-80">минут</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-3 mb-2">
                <div className="text-2xl font-bold animate-pulse">{timeLeft.seconds}</div>
              </div>
              <div className="text-sm opacity-80">секунд</div>
            </div>
          </div>
          
          <p className="text-lg opacity-90 text-center">
            После этого цена вырастет до 1990 ₽
          </p>
        </div>
        
        <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-glow relative overflow-hidden">
          <a href="https://t.me/start21day_bot?start=dGFyaWZfNjcyNDAy" target="_blank" rel="noopener noreferrer">
            Получить доступ сейчас
            <Icon name="Sparkles" size={24} className="ml-3" />
          </a>
        </Button>
        
        <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-90">
          <div className="flex items-center">
            <Icon name="Lock" size={16} className="mr-2" />
            Безопасная оплата
          </div>
          <div className="flex items-center">
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Возврат в течение 7 дней
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;