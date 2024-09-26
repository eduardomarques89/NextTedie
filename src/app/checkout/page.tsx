"use client";

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm';
import { CartProvider } from '../context/CartContext';


// Carregue a chave pública do Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Finalizar Compra</h1>
      {/* Envolver o formulário de checkout com o provedor <Elements> */}
      <CartProvider>      
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      </CartProvider>
    </div>
  );
};

export default CheckoutPage;
