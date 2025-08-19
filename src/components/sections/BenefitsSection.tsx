import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "TrendingDown",
    title: "Минус до 5 кг за 3 недели",
    description: "Научно обоснованный подход к снижению веса"
  },
  {
    icon: "ChefHat", 
    title: "Простое меню без дорогих продуктов",
    description: "Доступные рецепты из обычных продуктов"
  },
  {
    icon: "Home",
    title: "Тренировки для дома — всего 20 минут в день", 
    description: "Эффективные упражнения без спортзала"
  },
  {
    icon: "Heart",
    title: "Поддержка и мотивация на каждом этапе",
    description: "Персональное сопровождение к цели"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Почему наш курс работает
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Система основана на научном подходе и проверена тысячами женщин
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 border-none bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
                  <Icon name={benefit.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;