import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  purchaseCount: number;
  currentViewers: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ purchaseCount, currentViewers }) => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-emerald-400 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-spin"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-25 animate-float"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center gap-4 mb-6">
          <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 hover:from-purple-200 hover:to-pink-200 animate-bounce">
            ⭐ Уже помогли похудеть {purchaseCount}+ женщинам
          </Badge>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              {currentViewers} человек сейчас на сайте
            </div>
            <div className="flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
              <Icon name="ShoppingCart" size={12} className="mr-1" />
              17 покупок за последний час
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Похудей за{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            21 день
          </span>
          <br />
          без голодовок и изнуряющих тренировок
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Пошаговый курс с питанием, тренировками и поддержкой.
          Простая система, которая реально работает.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-pink-600 hover:via-purple-600 hover:to-orange-600 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-glow relative overflow-hidden">
            <a href="https://t.me/start21day_bot?start=dGFyaWZfNjcyNDAy" target="_blank" rel="noopener noreferrer">
              Начать сейчас за 990 ₽
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </a>
          </Button>
          <div className="flex items-center text-gray-600">
            <Icon name="Clock" size={16} className="mr-2" />
            <span>Старт сразу после оплаты</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Icon name="Shield" size={16} className="mr-2 text-purple-600" />
            Гарантия результата
          </div>
          <div className="flex items-center">
            <Icon name="Users" size={16} className="mr-2 text-pink-500" />
            2000+ довольных клиентов
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;