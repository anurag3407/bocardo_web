export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
  calories?: string;
  restaurantId: string;
  restaurantName: string;
}

export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  distance: string;
  deliveryFee: number;
  minOrder: number;
  promoTag?: string;
  cuisines: string[];
  dietary: string[];
  isBocardoPass: boolean;
  image: string;
  address: string;
  isOpen: boolean;
  closingTime: string;
  menu: {
    categoryName: string;
    items: FoodItem[];
  }[];
}

export interface FoodCategory {
  id: string;
  name: string;
  slug: string;
  itemCount: number;
  image: string;
  highlightText?: string;
}

export const CATEGORIES: FoodCategory[] = [
  {
    id: "burgers",
    name: "Burgers",
    slug: "burgers",
    itemCount: 42,
    image: "/categories/burger.png",
    highlightText: "Smash & Classic",
  },
  {
    id: "pizza",
    name: "Artisan Pizza",
    slug: "pizza",
    itemCount: 38,
    image: "/categories/pizza.png",
    highlightText: "Wood-fired sourdough",
  },
  {
    id: "sushi",
    name: "Sushi & Poke",
    slug: "sushi",
    itemCount: 29,
    image: "/categories/sushi.png",
    highlightText: "Fresh daily catch",
  },
  {
    id: "biryani",
    name: "Biryani & Curries",
    slug: "biryani",
    itemCount: 34,
    image: "/categories/biryani.png",
    highlightText: "Rich royal dum",
  },
  {
    id: "pasta",
    name: "Fresh Pasta",
    slug: "pasta",
    itemCount: 22,
    image: "/categories/pasta.png",
    highlightText: "Handmade noodles",
  },
  {
    id: "tacos",
    name: "Tacos & Mexican",
    slug: "tacos",
    itemCount: 19,
    image: "/categories/tacos.png",
    highlightText: "Street-style flavour",
  },
  {
    id: "salad",
    name: "Gourmet Bowls",
    slug: "salad",
    itemCount: 25,
    image: "/categories/salad.png",
    highlightText: "Nutritious & fresh",
  },
  {
    id: "noodles",
    name: "Asian Wok",
    slug: "noodles",
    itemCount: 31,
    image: "/categories/noodles.png",
    highlightText: "Stir-fry & Ramen",
  },
  {
    id: "dessert",
    name: "Desserts & Bakes",
    slug: "dessert",
    itemCount: 27,
    image: "/categories/dessert.png",
    highlightText: "Warm cookies & treats",
  },
  {
    id: "coffee",
    name: "Specialty Coffee",
    slug: "coffee",
    itemCount: 18,
    image: "/categories/coffee.png",
    highlightText: "Roastery brews & boba",
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "burger-craft",
    name: "The Burger Craft Co.",
    tagline: "Dry-aged smashed beef patties, buttery brioche & black truffle glaze",
    rating: 4.8,
    reviewCount: 1420,
    deliveryTime: "20 - 30 min",
    distance: "1.2 miles",
    deliveryFee: 0,
    minOrder: 12.0,
    promoTag: "20% OFF OVER £20",
    cuisines: ["Gourmet Burgers", "American", "Sides"],
    dietary: ["Halal Available", "Gluten-Free Buns"],
    isBocardoPass: true,
    image: "/restaurants/burger-craft.jpg",
    address: "24 Marylebone High Street, London W1U 4PQ",
    isOpen: true,
    closingTime: "23:00",
    menu: [
      {
        categoryName: "Signature Smashed Burgers",
        items: [
          {
            id: "bc-1",
            name: "Double Truffle Smash Burger",
            description:
              "Two 3oz aged British beef patties, black truffle glaze, double Monterey Jack cheese, caramelized shallots and brioche.",
            price: 11.5,
            originalPrice: 13.5,
            image: "/food/burger.png",
            isVeg: false,
            isBestseller: true,
            calories: "780 kcal",
            restaurantId: "burger-craft",
            restaurantName: "The Burger Craft Co.",
          },
          {
            id: "bc-2",
            name: "Crispy Buttermilk Hot Chicken",
            description:
              "Crispy 24hr brined chicken thigh tossed in smoky habanero honey glaze with house slaw & pickles.",
            price: 10.5,
            image: "/food/burger.png",
            isVeg: false,
            isBestseller: true,
            isSpicy: true,
            calories: "710 kcal",
            restaurantId: "burger-craft",
            restaurantName: "The Burger Craft Co.",
          },
          {
            id: "bc-3",
            name: "The Green Earth Burger",
            description:
              "Charred plant patty, vegan smoked gouda, pickled pink onion, roasted garlic vegan aioli.",
            price: 9.9,
            image: "/food/burger.png",
            isVeg: true,
            calories: "590 kcal",
            restaurantId: "burger-craft",
            restaurantName: "The Burger Craft Co.",
          },
        ],
      },
      {
        categoryName: "Loaded Sides & Dips",
        items: [
          {
            id: "bc-4",
            name: "Parmesan Truffle Skinny Fries",
            description:
              "Hand-cut crispy fries tossed in rosemary salt, aged parmesan flakes and white truffle essence.",
            price: 4.8,
            image: "/food/burger.png",
            isVeg: true,
            isBestseller: true,
            calories: "420 kcal",
            restaurantId: "burger-craft",
            restaurantName: "The Burger Craft Co.",
          },
        ],
      },
    ],
  },
  {
    id: "pizza-palace",
    name: "Napoli Fire Artisans",
    tagline: "48-hour slow-fermented sourdough pizza baked in wood-fired oven at 450°C",
    rating: 4.9,
    reviewCount: 2180,
    deliveryTime: "25 - 35 min",
    distance: "1.6 miles",
    deliveryFee: 1.49,
    minOrder: 15.0,
    promoTag: "FREE MARGHERITA ON £30+",
    cuisines: ["Neapolitan Pizza", "Italian", "Sourdough"],
    dietary: ["Vegetarian", "Vegan Options"],
    isBocardoPass: true,
    image: "/restaurants/pizza-palace.jpg",
    address: "78 Dean Street, Soho, London W1D 3SL",
    isOpen: true,
    closingTime: "23:30",
    menu: [
      {
        categoryName: "Wood-Fired Pizzas",
        items: [
          {
            id: "pp-1",
            name: "Bufala Margherita D.O.P.",
            description:
              "San Marzano tomato sauce, certified Buffalo Mozzarella, fresh torn basil, Sicilian EVOO.",
            price: 12.8,
            originalPrice: 14.5,
            image: "/food/pizza.png",
            isVeg: true,
            isBestseller: true,
            calories: "820 kcal",
            restaurantId: "pizza-palace",
            restaurantName: "Napoli Fire Artisans",
          },
          {
            id: "pp-2",
            name: "Spicy Diavola & Hot Honey",
            description:
              "Calabrian spicy spianata salami, fior di latte mozzarella, chilli flakes drizzled with wildflower hot honey.",
            price: 14.2,
            image: "/food/pizza.png",
            isVeg: false,
            isBestseller: true,
            isSpicy: true,
            calories: "910 kcal",
            restaurantId: "pizza-palace",
            restaurantName: "Napoli Fire Artisans",
          },
          {
            id: "pp-3",
            name: "Wild Mushroom & Truffle Cream",
            description:
              "Portobello & oyster mushrooms, white truffle mascarpone base, fresh thyme, toasted pine nuts.",
            price: 14.8,
            image: "/food/pizza.png",
            isVeg: true,
            calories: "860 kcal",
            restaurantId: "pizza-palace",
            restaurantName: "Napoli Fire Artisans",
          },
        ],
      },
    ],
  },
  {
    id: "tokyo-sushi",
    name: "Tokyo Kaiseki & Sushi Bar",
    tagline: "Sustainably sourced salmon, yellowtail & hand-pressed nigiri",
    rating: 4.9,
    reviewCount: 940,
    deliveryTime: "20 - 30 min",
    distance: "0.8 miles",
    deliveryFee: 0,
    minOrder: 18.0,
    promoTag: "FREE EDAMAME WITH ROLLS",
    cuisines: ["Japanese", "Sushi & Sashimi", "Healthy"],
    dietary: ["Pescatarian", "Gluten-Free Available"],
    isBocardoPass: true,
    image: "/restaurants/tokyo-sushi.jpg",
    address: "15 Brewer Street, Piccadilly, London W1F 0RJ",
    isOpen: true,
    closingTime: "22:30",
    menu: [
      {
        categoryName: "Signature Platters & Rolls",
        items: [
          {
            id: "ts-1",
            name: "Dragon Salmon Avocado Roll (8 pcs)",
            description:
              "Crispy tiger prawn tempura inside, topped with Atlantic salmon slices, ripe hass avocado and unagi reduction.",
            price: 13.9,
            image: "/food/sushi.png",
            isVeg: false,
            isBestseller: true,
            calories: "520 kcal",
            restaurantId: "tokyo-sushi",
            restaurantName: "Tokyo Kaiseki & Sushi Bar",
          },
          {
            id: "ts-2",
            name: "Omakase Nigiri Selection (10 pcs)",
            description:
              "Chef curated hand-pressed nigiri featuring Scottish salmon, bluefin tuna, sea bass, and unagi eel.",
            price: 21.0,
            originalPrice: 24.0,
            image: "/food/sushi.png",
            isVeg: false,
            isBestseller: true,
            calories: "480 kcal",
            restaurantId: "tokyo-sushi",
            restaurantName: "Tokyo Kaiseki & Sushi Bar",
          },
        ],
      },
    ],
  },
  {
    id: "royal-spice",
    name: "Royal Awadh Biryani House",
    tagline: "Slow-cooked dum pukht biryani sealed with hand-rolled dough",
    rating: 4.8,
    reviewCount: 1650,
    deliveryTime: "30 - 40 min",
    distance: "1.9 miles",
    deliveryFee: 1.2,
    minOrder: 14.0,
    promoTag: "15% OFF ALL CURRIES",
    cuisines: ["Indian", "Dum Biryani", "Mughlai"],
    dietary: ["Halal Certified", "Vegetarian Selection"],
    isBocardoPass: false,
    image: "/restaurants/royal-spice.jpg",
    address: "52 Brick Lane, Shoreditch, London E1 6RF",
    isOpen: true,
    closingTime: "23:45",
    menu: [
      {
        categoryName: "Dum Pukht Biryanis",
        items: [
          {
            id: "rs-1",
            name: "Nawabi Lamb Shank Dum Biryani",
            description:
              "Tender overnight slow-braised spring lamb, extra long aged basmati rice infused with saffron, rose water, and brown onions.",
            price: 15.5,
            originalPrice: 17.5,
            image: "/food/biryani.png",
            isVeg: false,
            isBestseller: true,
            calories: "890 kcal",
            restaurantId: "royal-spice",
            restaurantName: "Royal Awadh Biryani House",
          },
          {
            id: "rs-2",
            name: "Subz Shahi Paneer Dum Biryani",
            description:
              "Fresh organic cottage cheese cubes marinated in mint and roasted spices, layered with saffron rice and crispy onions.",
            price: 12.8,
            image: "/food/biryani.png",
            isVeg: true,
            calories: "730 kcal",
            restaurantId: "royal-spice",
            restaurantName: "Royal Awadh Biryani House",
          },
        ],
      },
    ],
  },
  {
    id: "el-camino",
    name: "El Camino Taqueria",
    tagline: "Nixtamalized corn tortillas, 12hr slow-cooked birria & fresh guacamole",
    rating: 4.8,
    reviewCount: 1120,
    deliveryTime: "20 - 30 min",
    distance: "1.4 miles",
    deliveryFee: 0.99,
    minOrder: 12.0,
    promoTag: "3 TACOS FOR £10",
    cuisines: ["Mexican", "Street Tacos", "Burritos"],
    dietary: ["Halal Beef", "Vegetarian Tacos"],
    isBocardoPass: true,
    image: "/restaurants/el-camino.jpg",
    address: "39 Commercial Street, Spitalfields, London E1 6BF",
    isOpen: true,
    closingTime: "23:00",
    menu: [
      {
        categoryName: "Street Tacos (Trio)",
        items: [
          {
            id: "ec-1",
            name: "Birria Beef Tacos with Consomé",
            description:
              "Three crispy griddled corn tacos filled with slow-cooked shredded beef, Oaxaca cheese, cilantro and rich broth.",
            price: 12.5,
            originalPrice: 14.0,
            image: "/food/tacos.png",
            isVeg: false,
            isBestseller: true,
            isSpicy: true,
            calories: "690 kcal",
            restaurantId: "el-camino",
            restaurantName: "El Camino Taqueria",
          },
        ],
      },
    ],
  },
  {
    id: "ramen-house",
    name: "Shinjuku Wok & Ramen Bar",
    tagline: "Rich 18-hour tonkotsu broth, springy hand-pulled noodles & crispy gyozas",
    rating: 4.9,
    reviewCount: 1890,
    deliveryTime: "25 - 35 min",
    distance: "1.7 miles",
    deliveryFee: 1.5,
    minOrder: 15.0,
    cuisines: ["Ramen & Wok", "Japanese", "Dumplings"],
    dietary: ["Vegan Broth Available"],
    isBocardoPass: false,
    image: "/restaurants/ramen-house.jpg",
    address: "8 Charlotte Street, Fitzrovia, London W1T 2LS",
    isOpen: true,
    closingTime: "22:45",
    menu: [
      {
        categoryName: "House Specialty Noodles",
        items: [
          {
            id: "rh-1",
            name: "Black Garlic Oil Dan Dan Noodles",
            description:
              "Wok-tossed hand-pulled noodles with spiced sesame minced protein, pak choi, scallions, and toasted Sichuan aromatics.",
            price: 13.5,
            image: "/food/noodles.png",
            isVeg: false,
            isBestseller: true,
            isSpicy: true,
            calories: "740 kcal",
            restaurantId: "ramen-house",
            restaurantName: "Shinjuku Wok & Ramen Bar",
          },
        ],
      },
    ],
  },
  {
    id: "le-patisserie",
    name: "Maison Dorée Artisanal Bakery",
    tagline: "Pure French butter viennoiseries, molten lava cakes & specialty espresso",
    rating: 4.9,
    reviewCount: 860,
    deliveryTime: "15 - 25 min",
    distance: "0.6 miles",
    deliveryFee: 0,
    minOrder: 8.0,
    promoTag: "FREE CROISSANT ON £15+",
    cuisines: ["Bakery", "Desserts", "Specialty Coffee"],
    dietary: ["Vegetarian"],
    isBocardoPass: true,
    image: "/restaurants/le-patisserie.jpg",
    address: "94 Kensington Church Street, London W8 4BH",
    isOpen: true,
    closingTime: "20:00",
    menu: [
      {
        categoryName: "Warm Patisserie & Bakes",
        items: [
          {
            id: "lp-1",
            name: "Valrhona Molten Chocolate Lava Tart",
            description:
              "70% Dark French cocoa fondant with warm liquid chocolate centre, vanilla bean chantilly and crushed pistachio.",
            price: 6.9,
            image: "/food/dessert.png",
            isVeg: true,
            isBestseller: true,
            calories: "450 kcal",
            restaurantId: "le-patisserie",
            restaurantName: "Maison Dorée Artisanal Bakery",
          },
          {
            id: "lp-2",
            name: "Flat White & Artisanal Croissant Bundle",
            description:
              "Double shot Colombian single-origin espresso with silky steamed microfoam, served with fresh morning butter croissant.",
            price: 5.8,
            image: "/food/coffee.png",
            isVeg: true,
            calories: "320 kcal",
            restaurantId: "le-patisserie",
            restaurantName: "Maison Dorée Artisanal Bakery",
          },
        ],
      },
    ],
  },
];

export const POPULAR_DISHES: FoodItem[] = [
  {
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
  },
  {
    id: "pop-2",
    name: "Bufala Margherita D.O.P.",
    description: "San Marzano D.O.P tomatoes, certified fresh buffalo mozzarella, fresh basil, EVOO.",
    price: 12.8,
    originalPrice: 14.5,
    image: "/food/pizza.png",
    isVeg: true,
    isBestseller: true,
    calories: "820 kcal",
    restaurantId: "pizza-palace",
    restaurantName: "Napoli Fire Artisans",
  },
  {
    id: "pop-3",
    name: "Nawabi Lamb Shank Biryani",
    description: "Tender slow-cooked lamb, saffron aged basmati, caramelized shallots and raita.",
    price: 15.5,
    originalPrice: 17.5,
    image: "/food/biryani.png",
    isVeg: false,
    isBestseller: true,
    calories: "890 kcal",
    restaurantId: "royal-spice",
    restaurantName: "Royal Awadh Biryani House",
  },
  {
    id: "pop-4",
    name: "Dragon Salmon Avocado Roll",
    description: "Crispy prawn tempura rolled with Atlantic salmon, avocado & house unagi glaze.",
    price: 13.9,
    image: "/food/sushi.png",
    isVeg: false,
    isBestseller: true,
    calories: "520 kcal",
    restaurantId: "tokyo-sushi",
    restaurantName: "Tokyo Kaiseki & Sushi Bar",
  },
  {
    id: "pop-5",
    name: "Crispy Birria Tacos Trio",
    description: "Slow-cooked barbacoa beef folded in griddled corn tortillas with savory consomé.",
    price: 12.5,
    originalPrice: 14.0,
    image: "/food/tacos.png",
    isVeg: false,
    isBestseller: true,
    isSpicy: true,
    calories: "690 kcal",
    restaurantId: "el-camino",
    restaurantName: "El Camino Taqueria",
  },
  {
    id: "pop-6",
    name: "Valrhona Molten Chocolate Tart",
    description: "French cocoa fondant with warm liquid chocolate centre, vanilla bean chantilly and pistachio.",
    price: 6.9,
    image: "/food/dessert.png",
    isVeg: true,
    isBestseller: true,
    calories: "450 kcal",
    restaurantId: "le-patisserie",
    restaurantName: "Maison Dorée Artisanal Bakery",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Pick your neighbourhood kitchen",
    description:
      "Explore curated top-tier restaurants, artisan bakeries, and local food heroes with transparent reviews and live kitchen hours.",
    icon: "Utensils",
  },
  {
    step: "02",
    title: "Precision live road tracking",
    description:
      "Watch your rider move along the street in real-time from the kitchen pass straight to your front door.",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Hot & eco-friendly delivery",
    description:
      "Delivered in thermal insulated bags via 100% electric e-bikes with contactless drop-off options.",
    icon: "Bike",
  },
];

export const FAQS = [
  {
    q: "When are the Bocardo iOS and Android apps releasing?",
    a: "The Bocardo apps are in final store review and launching this month! You can enter your phone number or email in our Launch Waitlist to receive an instant alert and 50% OFF your first 3 orders on launch day.",
  },
  {
    q: "How does Bocardo ensure food stays piping hot and fresh?",
    a: "Our riders use triple-insulated thermal containers specifically calibrated for hot pizzas, crispy burgers, and delicate sushi. We strictly route orders directly with zero detour batching.",
  },
  {
    q: "What is Bocardo Pass?",
    a: "Bocardo Pass gives you unlimited £0 delivery fees across all partner restaurants on orders over £12, exclusive secret menu items, and priority support.",
  },
  {
    q: "How do I partner my restaurant or join as a rider?",
    a: "You can click 'Partner with us' or 'Ride with Bocardo' right on this website. Our restaurant onboarding takes under 48 hours with full tablet POS setup and rider equipment provided.",
  },
];
