import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Гарантии качества и результата
          </h2>
          <p className="text-xl text-gray-600">
            Мы настолько уверены в эффективности курса, что даём железные гарантии
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-8 hover:shadow-xl transition-all border-2 border-blue-100">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">100% гарантия возврата</h3>
            <p className="text-gray-600 mb-4">Если через 7 дней вы не увидите результат — вернём все деньги без вопросов</p>
            <Badge className="bg-green-100 text-green-800">30 дней на возврат</Badge>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-xl transition-all border-2 border-purple-100">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Award" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Сертифицированная программа</h3>
            <p className="text-gray-600 mb-4">Методика одобрена диетологами и фитнес-тренерами с международными сертификатами</p>
            <Badge className="bg-purple-100 text-purple-800">ISO 9001</Badge>
          </Card>
          
          <Card className="text-center p-8 hover:shadow-xl transition-all border-2 border-orange-100">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="HeartHandshake" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Персональная поддержка</h3>
            <p className="text-gray-600 mb-4">Личный куратор будет отвечать на ваши вопросы в течение всего курса</p>
            <Badge className="bg-orange-100 text-orange-800">24/7 поддержка</Badge>
          </Card>
        </div>
        
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-200">
          <div className="text-center mb-8">
            <Icon name="Trophy" size={48} className="mx-auto mb-4 text-yellow-600" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Эксклюзивная гарантия результата</h3>
            <p className="text-xl text-gray-600">Не похудели на 3+ кг за 21 день? Возвращаем 200% стоимости!</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">0%</div>
              <div className="text-gray-600">Отказов в возврате</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-4 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">21</div>
              <div className="text-gray-600">День до результата</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;