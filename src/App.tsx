import { useState } from 'react';
import { LangProvider } from '@/lang';
import { CartProvider } from '@/cart';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { IntegralKit } from '@/components/IntegralKit';
import { Subjects } from '@/components/Subjects';
import { OrderProcess } from '@/components/OrderProcess';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <LangProvider>
      <CartProvider>
        <div className="min-h-screen bg-rose-50">
          <Header query={query} setQuery={setQuery} />
          <main>
            <Hero />
            <Intro />
            <IntegralKit />
            <Subjects query={query} />
            <OrderProcess />
            <About />
            <Contact />
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </LangProvider>
  );
}
