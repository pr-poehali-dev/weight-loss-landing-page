import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Анна Петрова",
    age: "28 лет",
    result: "-4.5 кг за 3 недели",
    text: "Не верила, что можно похудеть без голодовок. Но курс действительно работает! Чувствую себя увереннее.",
    image: "/img/3a18e751-1816-4f64-8cbd-88d35b451828.jpg"
  },
  {
    name: "Мария Сидорова", 
    age: "35 лет",
    result: "-6 кг за 21 день",
    text: "Домашние тренировки идеально вписались в мой график. Дети не мешают заниматься собой.",
    image: "/img/d0aae556-e60a-4955-b266-a3267d4d4fbe.jpg"
  },
  {
    name: "Елена Козлова",
    age: "42 года", 
    result: "-5.2 кг за 3 недели",
    text: "Наконец-то нашла систему, которая работает. Рекомендую всем своим подругам!",
    image: "/img/dc3005f0-1734-4303-a15b-2bf287925f8d.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Реальные истории успеха
          </h2>
          <p className="text-xl text-gray-600">
            Посмотрите, как изменилась жизнь наших клиенток
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={`Результаты ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.age}</p>
                  <Badge className="mt-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800">
                    {testimonial.result}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;