"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Tag,
  Bike,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    serviceFee,
    tipAmount,
    setTipAmount,
    promoCode,
    discount,
    applyPromo,
    total,
    deliveryType,
    setDeliveryType,
    selectedAddress,
    setIsTrackingModalOpen,
    showToast,
  } = useApp();

  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [orderInstructions, setOrderInstructions] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromo(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError("");
      setPromoInput("");
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsCartOpen(false);
      setIsTrackingModalOpen(true);
      showToast("🚀 Order confirmed! Live tracking started.");
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0bdcfc] text-slate-950 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-950 text-base">Your Basket</h3>
                <div className="text-xs text-slate-500 font-medium">
                  {cart.length === 0 ? "Empty" : `${cart.reduce((a, b) => a + b.quantity, 0)} items`}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Delivery Mode Toggle */}
          <div className="p-4 border-b border-slate-100 bg-white">
            <div className="flex bg-slate-100 rounded-xl p-1 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setDeliveryType("delivery")}
                className={`flex-1 py-1.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  deliveryType === "delivery"
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                Delivery (20-30 min)
              </button>
              <button
                type="button"
                onClick={() => setDeliveryType("collection")}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  deliveryType === "collection"
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Collection (15 min)
              </button>
            </div>

            <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Delivering to: <strong className="text-slate-800">{selectedAddress.label}</strong></span>
              <span className="text-[#0891b2] font-semibold">{selectedAddress.postcode}</span>
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-slate-800 text-base">Your basket is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs">
                  Explore our curated restaurants and chef specials to add delicious dishes to your order.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-[#0bdcfc] text-slate-950 rounded-xl font-bold text-xs"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Selected Dishes
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Clear all
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.food.id}
                    className="flex gap-3 items-center justify-between p-3 rounded-2xl bg-slate-50/70 border border-slate-100"
                  >
                    <div className="relative w-14 h-14 bg-white rounded-xl p-1 border border-slate-100 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={item.food.image}
                        alt={item.food.name}
                        fill
                        sizes="56px"
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-2">
                      <h4 className="font-bold text-slate-900 text-xs truncate">
                        {item.food.name}
                      </h4>
                      <div className="text-[11px] text-slate-400">
                        {item.food.restaurantName}
                      </div>
                      <div className="text-xs font-black text-slate-950 mt-0.5">
                        ₹{Math.round(item.food.price * item.quantity)}
                      </div>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center bg-white border border-slate-200 rounded-full shadow-2xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.food.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        {item.quantity === 1 ? (
                          <Trash2 className="w-3 h-3 text-red-500" />
                        ) : (
                          <Minus className="w-3 h-3" />
                        )}
                      </button>
                      <span className="px-2 text-xs font-black text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.food.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Free Delivery Goal Bar */}
                {deliveryType === "delivery" && (
                  <div className="bg-[#0bdcfc]/10 border border-[#0bdcfc]/30 rounded-xl p-3 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#0891b2] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        {subtotal >= 299
                          ? "You unlocked FREE delivery!"
                          : `Add ₹${Math.round(299 - subtotal)} for FREE delivery`}
                      </span>
                      <span className="text-[11px] font-bold text-slate-600">
                        {subtotal >= 299 ? "100%" : `${Math.min(100, Math.round((subtotal / 299) * 100))}%`}
                      </span>
                    </div>
                    <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0bdcfc] h-full rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (subtotal / 299) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Promo Code Input */}
                <div className="space-y-2 pt-2">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        placeholder="Promo code (try BOCARDO50)"
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold uppercase placeholder-normal placeholder-slate-400 outline-none focus:border-[#0bdcfc]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {/* Pre-fill suggestion pill */}
                  {!promoCode && (
                    <button
                      type="button"
                      onClick={() => applyPromo("BOCARDO50")}
                      className="text-[11px] font-bold text-[#0891b2] bg-[#0bdcfc]/15 px-2.5 py-1 rounded-md inline-flex items-center gap-1 hover:bg-[#0bdcfc]/25"
                    >
                      <span>Apply 50% Launch Discount</span>
                      <strong className="underline">BOCARDO50</strong>
                    </button>
                  )}

                  {promoError && (
                    <div className="text-[11px] text-red-500 font-semibold">{promoError}</div>
                  )}

                  {promoCode && (
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs text-emerald-800 font-bold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Code {promoCode} active
                      </span>
                      <span>-₹{Math.round(discount)}</span>
                    </div>
                  )}
                </div>

                {/* Driver Tip (Swiggy / Deliveroo style) */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span>Tip your delivery partner</span>
                    <span className="text-slate-400 font-normal">100% goes to rider</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[0, 20, 30, 50].map((tip) => (
                      <button
                        key={tip}
                        type="button"
                        onClick={() => setTipAmount(tip)}
                        className={`py-1.5 rounded-xl text-xs font-bold transition-all border ${
                          tipAmount === tip
                            ? "bg-[#0bdcfc] text-slate-950 border-[#0bdcfc] shadow-2xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {tip === 0 ? "None" : `₹${tip}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Note */}
                <div className="pt-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Delivery Instructions (Optional)
                  </label>
                  <input
                    type="text"
                    value={orderInstructions}
                    onChange={(e) => setOrderInstructions(e.target.value)}
                    placeholder="e.g. Ring doorbell, leave at security gate"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 outline-none focus:border-[#0bdcfc]"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Bill & Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-200 bg-slate-50/90 space-y-3">
              {/* Detailed Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">₹{Math.round(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-bold">
                    <span>Launch Discount (50%)</span>
                    <span>-₹{Math.round(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Service & Packaging Fee</span>
                  <span>₹{serviceFee}</span>
                </div>

                {tipAmount > 0 && (
                  <div className="flex justify-between">
                    <span>Rider Tip</span>
                    <span>₹{tipAmount}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-black text-slate-950">
                  <span>Total to Pay</span>
                  <span className="text-base text-[#0891b2]">₹{Math.round(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-xl bg-[#0bdcfc] hover:bg-[#00caeb] active:scale-98 text-slate-950 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isCheckingOut ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Place Order • ₹{Math.round(total)}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted 256-bit secure checkout • UPI, Cards & Net Banking</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
