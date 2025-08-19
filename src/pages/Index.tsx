import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-emerald-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-spin"></div>
          <div className="absolute bottom-32 right-10 w-28 h-28 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-25 animate-float"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center">
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

      {/* Benefits Section */}
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

      {/* What's Included Section */}
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

      {/* Before/After Results Section */}
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

      {/* Testimonials Section */}
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

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-purple-400/20 to-orange-400/20 rounded-full animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
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

      {/* Trust & Guarantees Section */}
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

      {/* FAQ Section */}
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
    </div>
  );
};

export default Index;