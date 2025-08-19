import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Можно ли без спортзала?",
    answer: "Да, все тренировки разработаны для выполнения дома. Вам потребуется только коврик и желание изменить себя."
  },
  {
    question: "Подходит ли новичкам?",
    answer: "Программа рассчитана на любой уровень подготовки. Начинаем с простых упражнений и постепенно усложняем."
  },
  {
    question: "Когда будут результаты?",
    answer: "Первые изменения заметите уже через 7 дней. Значительный результат — через 21 день следования программе."
  },
  {
    question: "Что если не подойдет питание?",
    answer: "В курсе предусмотрены альтернативы для каждого блюда. Можете адаптировать под свои предпочтения."
  },
  {
    question: "Нужна ли особая диета?",
    answer: "Никаких жёстких ограничений. Сбалансированное питание из доступных продуктов с правильными пропорциями."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на все ваши сомнения
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;