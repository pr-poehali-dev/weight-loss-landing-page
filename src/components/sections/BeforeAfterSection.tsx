import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-500 text-white text-lg px-6 py-2 animate-bounce">
            🔥 ШОК-РЕЗУЛЬТАТЫ
          </Badge>
          <h2 className="text-4xl font-bold mb-4">До и После 21 дня</h2>
          <p className="text-xl text-gray-300">Невероятные трансформации наших клиенток</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 bg-gray-800 border-gray-700">
            <div className="relative">
              <img 
                src="/img/8298b216-4f47-461f-9e0d-13c5e360b4b9.jpg" 
                alt="Результаты похудения до и после"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                -8 КГ ЗА 21 ДЕНЬ
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">Анастасия, 32 года</h4>
              <p className="text-gray-300">"Я не верила, что это возможно! Смотрю на эти фото и до сих пор не могу поверить, что это я."</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-2xl transition-all hover:scale-105 bg-gray-800 border-gray-700">
            <div className="relative">
              <img 
                src="/img/d954a3de-1103-4112-9b10-68dd7cb4a185.jpg" 
                alt="Результаты похудения успешной трансформации"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                -6 КГ + УВЕРЕННОСТЬ
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">Юлия, 28 лет</h4>
              <p className="text-gray-300">"Теперь я покупаю одежду на 2 размера меньше! Муж в шоке от результата."</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white p-8 rounded-2xl inline-block shadow-2xl animate-glow">
            <Icon name="Zap" size={40} className="mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">ВНИМАНИЕ!</div>
            <div className="text-xl">Эти результаты — не исключение, а норма для нашего курса</div>
            <div className="text-lg mt-2 opacity-90">97% наших клиенток достигают подобных результатов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;