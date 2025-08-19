import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const courseIncludes = [
  {
    icon: "Video",
    title: "Видеоуроки",
    description: "Пошаговые инструкции от экспертов"
  },
  {
    icon: "Calendar",
    title: "План питания на 21 день", 
    description: "Готовое меню на каждый день"
  },
  {
    icon: "Dumbbell",
    title: "Готовые тренировки",
    description: "Комплексы упражнений для дома"
  },
  {
    icon: "CheckSquare",
    title: "Чек-листы и мотивационные материалы",
    description: "Инструменты для отслеживания прогресса"
  }
];

const CourseIncludesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-orange-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что входит в курс
          </h2>
          <p className="text-xl text-gray-600">
            Всё необходимое для достижения результата за 21 день
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courseIncludes.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 animate-float">
                  <Icon name={item.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseIncludesSection;