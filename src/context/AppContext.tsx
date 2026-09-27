"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { FoodItem, Restaurant } from "@/data/mockData";

export interface CartItem {
  food: FoodItem;
  quantity: number;
  instructions?: string;
}

interface Address {
  id: string;
  label: string;
  address: string;
  postcode: string;
  icon: "home" | "work" | "other";
}

interface User {
  name: string;
  phone: string;
  email: string;
}

interface AppContextType {
  // Cart
  cart: CartItem[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartCount: number;
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  tipAmount: number;
  setTipAmount: (amount: number) => void;
  promoCode: string;
  discount: number;
  applyPromo: (code: string) => { success: boolean; message: string };
  total: number;

  // Location & Delivery Mode
  deliveryType: "delivery" | "collection";
  setDeliveryType: (type: "delivery" | "collection") => void;
  selectedAddress: Address;
  setSelectedAddress: (addr: Address) => void;
  isAddressModalOpen: boolean;
  setIsAddressModalOpen: (open: boolean) => void;
  savedAddresses: Address[];

  // Modals & UI
  activeRestaurant: Restaurant | null;
  setActiveRestaurant: (restaurant: Restaurant | null) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  authMode: "login" | "signup";
  setAuthMode: (mode: "login" | "signup") => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isPartnerModalOpen: boolean;
  setIsPartnerModalOpen: (open: boolean) => void;
  partnerModalType: "restaurant" | "rider" | "corporate";
  setPartnerModalType: (type: "restaurant" | "rider" | "corporate") => void;
  isTrackingModalOpen: boolean;
  setIsTrackingModalOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  toast: string | null;
  showToast: (msg: string) => void;
}

const defaultAddresses: Address[] = [
  {
    id: "1",
    label: "Home",
    address: "Flat 4, 18 Baker Street, Marylebone",
    postcode: "W1U 3BL",
    icon: "home",
  },
  {
    id: "2",
    label: "Work",
    address: "Level 14, 100 Bishopsgate, City of London",
    postcode: "EC2N 4AG",
    icon: "work",
  },
  {
    id: "3",
    label: "Soho Studio",
    address: "42 Dean Street, Soho",
    postcode: "W1D 4PZ",
    icon: "other",
  },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tipAmount, setTipAmount] = useState(1.5);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const [deliveryType, setDeliveryType] = useState<"delivery" | "collection">("delivery");
  const [savedAddresses] = useState<Address[]>(defaultAddresses);
  const [selectedAddress, setSelectedAddress] = useState<Address>(defaultAddresses[0]);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [user, setUser] = useState<User | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [partnerModalType, setPartnerModalType] = useState<"restaurant" | "rider" | "corporate">("restaurant");
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Initialize with a pre-filled sample item for immediate delight
  useEffect(() => {
    // Add default item so users immediately see a populated cart if they open it
    const defaultItem: FoodItem = {
      id: "pop-1",
      name: "Double Truffle Smash Burger",
      description: "Two 3oz aged beef patties, black truffle glaze, Monterey Jack, caramelised shallots.",
      price: 11.5,
      originalPrice: 13.5,
      image: "/food/burger.png",
      isVeg: false,
      isBestseller: true,
      calories: "780 kcal",
      restaurantId: "burger-craft",
      restaurantName: "The Burger Craft Co.",
    };
    setCart([{ food: defaultItem, quantity: 1 }]);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (food: FoodItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.food.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { food, quantity: 1 }];
    });
    showToast(`Added ${food.name} to basket`);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.food.id !== itemId));
  };

  const updateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.food.id === itemId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setPromoCode("");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.food.price * item.quantity,
    0
  );
  const deliveryFee = deliveryType === "collection" || subtotal > 20 || subtotal === 0 ? 0 : 1.49;
  const serviceFee = subtotal > 0 ? 0.99 : 0;

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "BOCARDO50") {
      setPromoCode("BOCARDO50");
      const disc = Math.round(subtotal * 0.5 * 100) / 100;
      setDiscount(disc);
      showToast("🎉 Promo BOCARDO50 applied! 50% discount added.");
      return { success: true, message: "50% launch discount applied!" };
    } else if (clean === "FREEDEL") {
      setPromoCode("FREEDEL");
      setDiscount(1.49);
      showToast("🚚 Free delivery applied!");
      return { success: true, message: "Free delivery applied!" };
    } else {
      return { success: false, message: "Invalid promo code. Try BOCARDO50" };
    }
  };

  const total = Math.max(0, subtotal - discount + deliveryFee + serviceFee + tipAmount);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
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
        setSelectedAddress,
        isAddressModalOpen,
        setIsAddressModalOpen,
        savedAddresses,
        activeRestaurant,
        setActiveRestaurant,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authMode,
        setAuthMode,
        user,
        setUser,
        isPartnerModalOpen,
        setIsPartnerModalOpen,
        partnerModalType,
        setPartnerModalType,
        isTrackingModalOpen,
        setIsTrackingModalOpen,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
