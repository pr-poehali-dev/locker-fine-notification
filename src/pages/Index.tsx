import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [notificationVisible, setNotificationVisible] = useState(true);

  const plans = [
    {
      name: 'Мини',
      size: 'S',
      price: '500₽',
      period: '/мес',
      features: ['Размер 30x40x50 см', 'Круглосуточный доступ', 'Видеонаблюдение', 'Климат-контроль'],
      popular: false
    },
    {
      name: 'Стандарт',
      size: 'M',
      price: '1200₽',
      period: '/мес',
      features: ['Размер 60x80x100 см', 'Круглосуточный доступ', 'Видеонаблюдение', 'Климат-контроль', 'Страховка'],
      popular: true
    },
    {
      name: 'Макси',
      size: 'L',
      price: '2500₽',
      period: '/мес',
      features: ['Размер 100x120x200 см', 'Круглосуточный доступ', 'Видеонаблюдение', 'Климат-контроль', 'Страховка', 'Приоритетная поддержка'],
      popular: false
    }
  ];

  const services = [
    {
      icon: 'Lock',
      title: 'Безопасность 24/7',
      description: 'Многоуровневая система защиты с биометрическим доступом и круглосуточной охраной'
    },
    {
      icon: 'Thermometer',
      title: 'Климат-контроль',
      description: 'Поддержание оптимальной температуры и влажности для сохранности ваших вещей'
    },
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Непрерывная запись и хранение видео в течение 90 дней'
    },
    {
      icon: 'Shield',
      title: 'Страхование',
      description: 'Защита имущества на сумму до 1 млн рублей'
    },
    {
      icon: 'Clock',
      title: 'Доступ без ограничений',
      description: 'Посещайте хранилище в любое время суток без предварительной записи'
    },
    {
      icon: 'Zap',
      title: 'Быстрая регистрация',
      description: 'Оформление онлайн за 5 минут, заселение в день обращения'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none"></div>
      
      <div className="relative z-10">
        <header className="border-b border-primary/30 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Box" className="text-primary glow-text" size={32} />
              <h1 className="text-2xl font-bold glow-text">QUANTUM STORAGE</h1>
            </div>
            <div className="flex gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            </div>
          </nav>
        </header>

        <section id="home" className="container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 glow-text">
              Храним будущее
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Высокотехнологичные хранилища нового поколения с максимальным уровнем защиты и комфорта
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="glow-border bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Забронировать ячейку
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Icon name="Database" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-muted-foreground">Активных ячеек</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Icon name="Users" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">1200+</h3>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Icon name="Award" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">5 лет</h3>
                  <p className="text-muted-foreground">На рынке</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 glow-text">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите оптимальный размер для ваших нужд</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105 ${
                  plan.popular ? 'glow-border animate-glow-pulse' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className="text-center">
                    <div className="inline-block p-3 bg-primary/20 rounded-full mb-4">
                      <Icon name="Box" className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">Размер {plan.size}</CardDescription>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-5xl font-bold glow-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="services" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 glow-text">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Технологии будущего для вашего комфорта</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <footer className="border-t border-primary/30 mt-20">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p>&copy; 2025 Quantum Storage. Все права защищены.</p>
          </div>
        </footer>
      </div>

      {notificationVisible && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-in-right max-w-2xl w-full px-4">
          <Alert className="bg-destructive/90 border-destructive text-destructive-foreground backdrop-blur-sm glow-border">
            <Icon name="AlertTriangle" className="h-5 w-5" />
            <AlertDescription className="ml-8 flex items-center justify-between">
              <span className="font-mono">
                <strong className="font-bold">ВНИМАНИЕ:</strong> Владельцу шкафчика <strong className="glow-text">17-122-45</strong> назначен штраф <strong className="glow-text text-xl">5000₽</strong> за порчу имущества (кровь). Обратитесь в администрацию.
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setNotificationVisible(false)}
                className="ml-4 hover:bg-destructive-foreground/20"
              >
                <Icon name="X" size={20} />
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Index;
