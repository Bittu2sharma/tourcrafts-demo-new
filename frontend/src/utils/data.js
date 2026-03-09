// Mock data for TourCrafts Demo

export const packages = [
  {
    id: 1,
    title: "Enchanting Andaman Escape",
    destination: "Andaman & Nicobar",
    price: 24999,
    originalPrice: 32999,
    duration: "5 Nights / 6 Days",
    description: "Explore pristine beaches, crystal-clear waters, and stunning coral reefs in the Andaman Islands. Includes Havelock Island, Neil Island, and Ross Island excursions.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    rating: 4.8,
    reviews: 234,
    category: "Beach",
    highlights: ["Scuba Diving", "Island Hopping", "Snorkeling", "Beach Camping"],
    itinerary: [
      { day: 1, title: "Arrival in Port Blair", description: "Arrive at Veer Savarkar Airport. Check-in at hotel. Visit Cellular Jail and attend the Light & Sound Show." },
      { day: 2, title: "Port Blair to Havelock Island", description: "Ferry to Havelock Island. Visit the stunning Radhanagar Beach (Beach No. 7), rated Asia's best beach." },
      { day: 3, title: "Havelock Island Exploration", description: "Scuba diving at Elephant Beach. Enjoy water sports and coral reef viewing." },
      { day: 4, title: "Havelock to Neil Island", description: "Ferry to Neil Island. Visit Bharatpur Beach, Lakshmanpur Beach, and Natural Bridge." },
      { day: 5, title: "Neil Island to Port Blair", description: "Return to Port Blair. Visit Chidiya Tapu for sunset. Shopping at Aberdeen Bazaar." },
      { day: 6, title: "Departure", description: "Visit Samudrika Marine Museum. Transfer to airport for departure." }
    ],
    inclusions: ["Accommodation in 3-star hotels", "Daily breakfast and dinner", "All ferry transfers", "Airport transfers", "Sightseeing as per itinerary", "All applicable taxes"],
    exclusions: ["Airfare", "Scuba diving charges", "Personal expenses", "Camera fees at monuments"],
    tiers: {
      budget: { price: 24999, hotel: "3-Star Hotels", meals: "Breakfast + Dinner" },
      deluxe: { price: 34999, hotel: "4-Star Resorts", meals: "All Meals Included" },
      premium: { price: 49999, hotel: "5-Star Beach Resorts", meals: "All Meals + Private Dining" }
    }
  },
  {
    id: 2,
    title: "Magical Goa Getaway",
    destination: "Goa",
    price: 14999,
    originalPrice: 19999,
    duration: "3 Nights / 4 Days",
    description: "Sun, sand, and serenity — experience the best of Goa with beach parties, Portuguese heritage, and spice plantations.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    rating: 4.6,
    reviews: 456,
    category: "Beach",
    highlights: ["Beach Parties", "Water Sports", "Heritage Walks", "Spice Plantation"],
    itinerary: [
      { day: 1, title: "Arrival in Goa", description: "Arrive at Dabolim Airport. Transfer to North Goa hotel. Evening at Baga Beach." },
      { day: 2, title: "North Goa Tour", description: "Visit Fort Aguada, Calangute Beach, Anjuna Flea Market. Evening cruise on Mandovi River." },
      { day: 3, title: "South Goa Exploration", description: "Visit Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple. Afternoon at Palolem Beach." },
      { day: 4, title: "Departure", description: "Morning visit to Spice Plantation. Transfer to airport." }
    ],
    inclusions: ["3-star hotel stay", "Breakfast daily", "Airport transfers", "Sightseeing", "River cruise"],
    exclusions: ["Airfare", "Water sports", "Lunch & dinner", "Personal expenses"],
    tiers: {
      budget: { price: 14999, hotel: "3-Star Hotels", meals: "Breakfast" },
      deluxe: { price: 22999, hotel: "4-Star Resorts", meals: "Breakfast + Dinner" },
      premium: { price: 35999, hotel: "5-Star Beach Resorts", meals: "All Meals" }
    }
  },
  {
    id: 3,
    title: "Royal Rajasthan Circuit",
    destination: "Rajasthan",
    price: 29999,
    originalPrice: 39999,
    duration: "6 Nights / 7 Days",
    description: "Discover the land of kings — majestic forts, golden deserts, vibrant culture, and royal palaces of Rajasthan.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    rating: 4.9,
    reviews: 312,
    category: "Heritage",
    highlights: ["Desert Safari", "Fort Tours", "Cultural Shows", "Heritage Hotels"],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", description: "Arrive in Jaipur. Check-in to heritage hotel. Evening at Chokhi Dhani." },
      { day: 2, title: "Jaipur Sightseeing", description: "Visit Amber Fort, Hawa Mahal, City Palace, Jantar Mantar." },
      { day: 3, title: "Jaipur to Jodhpur", description: "Drive to Jodhpur. Visit Mehrangarh Fort and Jaswant Thada." },
      { day: 4, title: "Jodhpur to Jaisalmer", description: "Drive to Jaisalmer. Visit Patwon Ki Haveli. Evening at Sam Sand Dunes." },
      { day: 5, title: "Jaisalmer Desert Experience", description: "Camel safari, desert camping, cultural folk dance & music night." },
      { day: 6, title: "Jaisalmer to Udaipur", description: "Drive to Udaipur. Visit Ranakpur Jain Temple en route. Evening boat ride on Lake Pichola." },
      { day: 7, title: "Udaipur & Departure", description: "Visit City Palace, Saheliyon Ki Bari. Transfer to airport." }
    ],
    inclusions: ["Heritage hotel stays", "All meals", "AC cab for transfers", "Sightseeing", "Desert safari", "Cultural shows"],
    exclusions: ["Airfare", "Camera fees", "Personal shopping", "Tips"],
    tiers: {
      budget: { price: 29999, hotel: "Heritage Havelis", meals: "All Meals" },
      deluxe: { price: 44999, hotel: "4-Star Heritage Hotels", meals: "All Meals + Royal Dinner" },
      premium: { price: 69999, hotel: "5-Star Palace Hotels", meals: "All Meals + Private Dining" }
    }
  },
  {
    id: 4,
    title: "Serene Kerala Backwaters",
    destination: "Kerala",
    price: 19999,
    originalPrice: 27999,
    duration: "4 Nights / 5 Days",
    description: "God's Own Country awaits — houseboat rides, tea plantations, Ayurvedic spas, and lush tropical beauty.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    rating: 4.7,
    reviews: 389,
    category: "Nature",
    highlights: ["Houseboat Stay", "Tea Plantation", "Ayurvedic Spa", "Hill Station"],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive in Kochi. Visit Fort Kochi, Chinese Fishing Nets, St. Francis Church. Evening Kathakali show." },
      { day: 2, title: "Kochi to Munnar", description: "Drive to Munnar. Visit tea plantations, Eravikulam National Park." },
      { day: 3, title: "Munnar to Alleppey", description: "Drive to Alleppey. Board premium houseboat for backwater cruise." },
      { day: 4, title: "Alleppey to Kovalam", description: "Drive to Kovalam. Relax at Lighthouse Beach. Ayurvedic massage session." },
      { day: 5, title: "Departure from Trivandrum", description: "Morning at leisure. Transfer to Trivandrum airport." }
    ],
    inclusions: ["Hotel + houseboat stay", "Breakfast & dinner", "AC cab", "Sightseeing", "Kathakali show", "Ayurvedic spa"],
    exclusions: ["Airfare", "Lunch", "Personal expenses", "Boating charges"],
    tiers: {
      budget: { price: 19999, hotel: "3-Star + Standard Houseboat", meals: "Breakfast + Dinner" },
      deluxe: { price: 29999, hotel: "4-Star + Premium Houseboat", meals: "All Meals" },
      premium: { price: 45999, hotel: "5-Star + Luxury Houseboat", meals: "All Meals + Spa" }
    }
  },
  {
    id: 5,
    title: "Exotic Bali Paradise",
    destination: "Bali, Indonesia",
    price: 44999,
    originalPrice: 59999,
    duration: "5 Nights / 6 Days",
    description: "Tropical paradise with stunning temples, rice terraces, beach clubs, and adventure sports in beautiful Bali.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    rating: 4.8,
    reviews: 278,
    category: "International",
    highlights: ["Temple Tours", "Rice Terraces", "Beach Clubs", "Water Sports"],
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrive at Ngurah Rai Airport. Transfer to Seminyak. Evening at beach club." },
      { day: 2, title: "Ubud Cultural Tour", description: "Visit Tegallalang Rice Terraces, Ubud Monkey Forest, Tirta Empul Temple." },
      { day: 3, title: "Adventure Day", description: "White water rafting at Ayung River. Afternoon at Tegenungan Waterfall." },
      { day: 4, title: "Nusa Penida Island", description: "Full-day Nusa Penida tour — Kelingking Beach, Angel's Billabong, Broken Beach." },
      { day: 5, title: "Uluwatu & Kecak Dance", description: "Morning at leisure. Evening visit to Uluwatu Temple for sunset Kecak Dance." },
      { day: 6, title: "Departure", description: "Last-minute shopping at Seminyak. Transfer to airport." }
    ],
    inclusions: ["5-night villa stay", "Daily breakfast", "Airport transfers", "Tours & sightseeing", "Nusa Penida ferry", "Water rafting"],
    exclusions: ["International airfare", "Visa fees", "Lunch & dinner", "Personal expenses"],
    tiers: {
      budget: { price: 44999, hotel: "3-Star Hotels", meals: "Breakfast" },
      deluxe: { price: 64999, hotel: "4-Star Pool Villas", meals: "Breakfast + Dinner" },
      premium: { price: 89999, hotel: "5-Star Luxury Villas", meals: "All Meals + Private Chef" }
    }
  },
  {
    id: 6,
    title: "Dubai Dazzle Experience",
    destination: "Dubai, UAE",
    price: 54999,
    originalPrice: 74999,
    duration: "4 Nights / 5 Days",
    description: "Glittering skyscrapers, desert adventures, luxury shopping, and world-class entertainment in spectacular Dubai.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    rating: 4.7,
    reviews: 198,
    category: "International",
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Shopping"],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", description: "Arrive at DXB Airport. Transfer to hotel. Evening at Dubai Marina." },
      { day: 2, title: "Dubai City Tour", description: "Visit Burj Khalifa, Dubai Mall, Dubai Fountain show, Dubai Frame." },
      { day: 3, title: "Desert Safari", description: "Morning at Miracle Garden. Afternoon desert safari with BBQ dinner, belly dance, camel ride." },
      { day: 4, title: "Abu Dhabi Day Trip", description: "Visit Sheikh Zayed Grand Mosque, Yas Island, Ferrari World." },
      { day: 5, title: "Departure", description: "Shopping at Gold Souk and Spice Souk. Transfer to airport." }
    ],
    inclusions: ["4-star hotel stay", "Daily breakfast", "Airport transfers", "City tour", "Desert safari with dinner", "Abu Dhabi trip"],
    exclusions: ["Airfare", "Visa fees", "Lunch & dinner (except safari)", "Shopping expenses"],
    tiers: {
      budget: { price: 54999, hotel: "4-Star Hotels", meals: "Breakfast + Safari Dinner" },
      deluxe: { price: 74999, hotel: "5-Star Hotels", meals: "Half Board" },
      premium: { price: 99999, hotel: "5-Star Luxury Hotels", meals: "All Meals + Yacht Dinner" }
    }
  },
  {
    id: 7,
    title: "Mystical Ladakh Adventure",
    destination: "Ladakh",
    price: 27999,
    originalPrice: 36999,
    duration: "6 Nights / 7 Days",
    description: "Conquer the highest motorable passes, pristine lakes, and ancient monasteries in the breathtaking Ladakh region.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    rating: 4.9,
    reviews: 167,
    category: "Adventure",
    highlights: ["Pangong Lake", "Khardung La Pass", "Monasteries", "River Rafting"],
    itinerary: [
      { day: 1, title: "Arrival in Leh", description: "Arrive at Leh Airport. Rest and acclimatize. Evening walk at Leh Market." },
      { day: 2, title: "Leh Local Sightseeing", description: "Visit Leh Palace, Shanti Stupa, Hall of Fame, Magnetic Hill." },
      { day: 3, title: "Leh to Nubra Valley", description: "Drive via Khardung La Pass (18,380 ft). Camel ride at Hunder Sand Dunes." },
      { day: 4, title: "Nubra to Pangong Lake", description: "Drive to Pangong Tso via Shyok Route. Overnight camping by the lake." },
      { day: 5, title: "Pangong to Leh", description: "Morning at Pangong Lake. Drive back to Leh via Chang La Pass." },
      { day: 6, title: "Leh Exploration", description: "Visit Hemis Monastery, Thiksey Monastery. River rafting at Zanskar River." },
      { day: 7, title: "Departure", description: "Transfer to Leh Airport for departure." }
    ],
    inclusions: ["Guesthouse & camp stays", "All meals", "Innova/Xylo transfers", "Permits", "Oxygen cylinder", "River rafting"],
    exclusions: ["Airfare", "Personal expenses", "Medical insurance", "Tips"],
    tiers: {
      budget: { price: 27999, hotel: "Guesthouses & Camps", meals: "All Meals" },
      deluxe: { price: 39999, hotel: "Boutique Hotels & Luxury Camps", meals: "All Meals" },
      premium: { price: 59999, hotel: "5-Star Hotels & Glamping", meals: "All Meals + Bonfire Dinner" }
    }
  },
  {
    id: 8,
    title: "Thailand Beach & Culture",
    destination: "Thailand",
    price: 34999,
    originalPrice: 44999,
    duration: "5 Nights / 6 Days",
    description: "From bustling Bangkok to tropical Phuket — experience Thai temples, floating markets, and paradise islands.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    rating: 4.6,
    reviews: 345,
    category: "International",
    highlights: ["Thai Temples", "Floating Market", "Phi Phi Islands", "Thai Massage"],
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", description: "Arrive at Suvarnabhumi Airport. Transfer to hotel. Evening at Khao San Road." },
      { day: 2, title: "Bangkok City Tour", description: "Visit Grand Palace, Wat Pho, Wat Arun. Evening at Asiatique Market." },
      { day: 3, title: "Bangkok to Phuket", description: "Morning at Floating Market. Fly to Phuket. Evening at Patong Beach." },
      { day: 4, title: "Phi Phi Islands Tour", description: "Full-day Phi Phi Islands tour with snorkeling, Maya Bay." },
      { day: 5, title: "Phuket Leisure", description: "Morning Thai cooking class. Afternoon Thai massage. Evening beach sunset." },
      { day: 6, title: "Departure", description: "Transfer to Phuket Airport for departure." }
    ],
    inclusions: ["Hotel stays", "Daily breakfast", "Transfers", "Bangkok city tour", "Phi Phi Island tour", "Internal flight"],
    exclusions: ["International airfare", "Visa on arrival fees", "Lunch & dinner", "Personal expenses"],
    tiers: {
      budget: { price: 34999, hotel: "3-Star Hotels", meals: "Breakfast" },
      deluxe: { price: 49999, hotel: "4-Star Hotels", meals: "Breakfast + Dinner" },
      premium: { price: 74999, hotel: "5-Star Resorts", meals: "All Meals + Spa" }
    }
  },
];

export const destinations = [
  { id: 1, name: "Andaman & Nicobar", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80", packages: 12, startingPrice: 24999, region: "Islands" },
  { id: 2, name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80", packages: 18, startingPrice: 14999, region: "Beach" },
  { id: 3, name: "Rajasthan", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", packages: 15, startingPrice: 29999, region: "Heritage" },
  { id: 4, name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", packages: 14, startingPrice: 19999, region: "Nature" },
  { id: 5, name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", packages: 10, startingPrice: 44999, region: "International" },
  { id: 6, name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", packages: 8, startingPrice: 54999, region: "International" },
  { id: 7, name: "Ladakh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", packages: 9, startingPrice: 27999, region: "Adventure" },
  { id: 8, name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80", packages: 11, startingPrice: 34999, region: "International" },
  { id: 9, name: "Himachal Pradesh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", packages: 16, startingPrice: 12999, region: "Mountains" },
  { id: 10, name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80", packages: 7, startingPrice: 64999, region: "International" },
];

export const blogs = [
  {
    id: 1,
    title: "Ultimate Andaman Travel Guide 2025",
    excerpt: "Everything you need to know before planning your Andaman trip — best time to visit, budget tips, must-see spots, and hidden gems.",
    content: "The Andaman and Nicobar Islands are a tropical paradise...",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Travel Guide",
    author: "TourCrafts Team",
    date: "March 5, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Top 10 Beaches in Goa You Must Visit",
    excerpt: "From the party vibes of Baga to the serene beauty of Palolem — discover Goa's best beaches for every kind of traveler.",
    content: "Goa is synonymous with beaches...",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
    category: "Destinations",
    author: "TourCrafts Team",
    date: "February 28, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "Rajasthan on a Budget: Complete Guide",
    excerpt: "Royal Rajasthan doesn't have to break the bank. Here's how to explore forts, deserts, and palaces on a budget.",
    content: "Rajasthan is the jewel of India...",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
    category: "Budget Travel",
    author: "TourCrafts Team",
    date: "February 20, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 4,
    title: "Why Kerala is Called God's Own Country",
    excerpt: "Backwaters, houseboats, tea gardens, and Ayurveda — discover why Kerala deserves its divine nickname.",
    content: "Kerala, located on the Malabar Coast...",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    category: "Travel Guide",
    author: "TourCrafts Team",
    date: "February 15, 2025",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 5,
    title: "First Time in Bali? Read This Before You Go",
    excerpt: "Visa tips, currency exchange, best areas to stay, and cultural etiquette — your complete Bali first-timer guide.",
    content: "Bali is a dream destination...",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    category: "International",
    author: "TourCrafts Team",
    date: "February 10, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 6,
    title: "Ladakh Road Trip: The Ultimate Guide",
    excerpt: "Planning a Leh-Ladakh road trip? Here's everything about routes, permits, packing, and altitude sickness prevention.",
    content: "A road trip to Ladakh is a bucket list adventure...",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    category: "Adventure",
    author: "TourCrafts Team",
    date: "February 5, 2025",
    readTime: "10 min read",
    featured: false
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "TourCrafts made our Andaman trip absolutely magical! Every detail was perfectly planned. The houseboat experience was beyond our expectations.",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Rahul Verma",
    location: "Delhi",
    text: "Best Rajasthan tour ever! The heritage hotels and desert safari were incredible. Will definitely book with TourCrafts again.",
    rating: 5,
    avatar: "RV"
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    text: "Our family trip to Kerala was seamless from start to finish. The backwater houseboat was a highlight. Highly recommend TourCrafts!",
    rating: 5,
    avatar: "AD"
  },
];

export const stats = [
  { label: "Happy Travelers", value: "15,000+" },
  { label: "Destinations", value: "50+" },
  { label: "Tour Packages", value: "200+" },
  { label: "Years Experience", value: "8+" },
];

export const whyChooseUs = [
  {
    title: "Best Price Guarantee",
    description: "We offer competitive pricing with no hidden charges. Get the best deals on every trip.",
    icon: "currency"
  },
  {
    title: "Handcrafted Tours",
    description: "Every itinerary is thoughtfully designed by our travel experts for unforgettable experiences.",
    icon: "sparkles"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock during your trip for any assistance.",
    icon: "support"
  },
  {
    title: "Trusted by Thousands",
    description: "Join 15,000+ happy travelers who have explored the world with TourCrafts.",
    icon: "users"
  },
  {
    title: "Flexible Booking",
    description: "Easy cancellation and rescheduling policies. Book with confidence and peace of mind.",
    icon: "calendar"
  },
  {
    title: "Local Expertise",
    description: "Our local partners ensure authentic experiences and insider access at every destination.",
    icon: "map"
  },
];
