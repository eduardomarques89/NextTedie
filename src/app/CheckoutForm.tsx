"use client";

import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useCart } from "./context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const CheckoutForm: React.FC = () => {
  const { cart, getTotalAmount } = useCart();
  const stripe = useStripe();
  const elements = useElements();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [pixQrCode, setPixQrCode] = useState<string | null>(null);
  const [pixCopyPasteKey, setPixCopyPasteKey] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      if (paymentMethod === "pix") {
        const response = await axios.post("https://w7startup.azurewebsites.net/api/pix/create", {
          ExpiracaoSegundos: 3600, // 1 hora para expirar
        });
        
      } else if (paymentMethod === "card" && stripe && elements) {
        const cardElement = elements.getElement(CardElement);

        if (cardElement) {
          const { paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
          });

          const response = await axios.post("/api/checkout", {
            paymentMethodId: stripePaymentMethod?.id,
            address,
            zipCode,
            phone,
            shippingMethod,
            cartItems: cart,
            totalAmount: getTotalAmount(),
          });

          if (response.data.success) {
            console.log("Pagamento realizado com sucesso!");
            router.push("/success"); // Redirecionar para uma página de sucesso
          } else {
            setError("Falha no pagamento");
          }
        }
      }
    } catch (error) {
      setError("Erro ao processar o pagamento");
    }

    setIsProcessing(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-lg mx-auto"
    >
      <button
        type="button"
        onClick={() => router.push("/")}
        className="flex items-center text-red-600 hover:text-red-800 mb-8 font-semibold text-lg transition-colors duration-300"
        aria-label="Voltar à Página Inicial"
      >
        <FaArrowLeft size={20} className="mr-2" />
        Voltar à Página Inicial
      </button>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">
          Endereço:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700">
          CEP:
        </label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Telefone:
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="shippingMethod" className="block text-gray-700">
          Método de Envio:
        </label>
        <select
          id="shippingMethod"
          value={shippingMethod}
          onChange={(e) => setShippingMethod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="standard">Envio Padrão - $5.00</option>
          <option value="express">Envio Expresso - $15.00</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="paymentMethod" className="block text-gray-700">
          Método de Pagamento:
        </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="card">Cartão de Crédito</option>
          <option value="pix">Pix</option>
        </select>
      </div>

      {paymentMethod === "card" && (
        <div className="mb-4">
          <label className="block text-gray-700">Dados do Cartão:</label>
          <CardElement className="p-2 border border-gray-300 rounded mt-1" />
        </div>
      )}

      {error && <div className="text-red-600">{error}</div>}

      {pixQrCode && (
        <div className="mb-4">
          <label className="block text-gray-700">QR Code Pix:</label>
          <img src={pixQrCode} alt="QR Code para pagamento" className="w-full" />
        </div>
      )}

      {pixCopyPasteKey && (
        <div className="mb-4">
          <label className="block text-gray-700">Chave Pix (Copia e Cola):</label>
          <input
            type="text"
            value={pixCopyPasteKey}
            readOnly
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-100"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        disabled={isProcessing}
      >
        {isProcessing ? "Processando..." : "Pagar"}
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Itens no Carrinho:</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between py-2 border-b border-gray-200"
              >
                <img
                  src={product.imagem}
                  alt={product.nome}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-gray-700">{product.nome}</h4>
                  <p className="text-gray-600">{product.descricao}</p>
                </div>
                <p className="text-gray-800 font-semibold">
                  ${product.preco_De.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Total:</h3>
        <p className="text-gray-800 text-2xl font-bold">
          ${(getTotalAmount()).toFixed(2)}
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;
