import biryani from "@/assets/biryani.asset.json";
import crispy from "@/assets/crispy.asset.json";
import exterior from "@/assets/exterior.asset.json";
import logo from "@/assets/logo.asset.json";
import manchurian from "@/assets/manchurian.asset.json";
import patio from "@/assets/patio.asset.json";
import platter from "@/assets/platter.asset.json";
import signage from "@/assets/signage.asset.json";

// export const img = {
//   biryani: biryani.url,
//   crispy: crispy.url,
//   exterior: exterior.url,
//   logo: logo.url,
//   manchurian: manchurian.url,
//   patio: patio.url,
//   platter: platter.url,
//   signage: signage.url,
// };

export const img = {
  biryani: "/images/biryani.jpeg",
  crispy: "/images/crispy.jpeg",
  exterior: "/images/exterior.jpeg",
  logo: "/images/logo.png",
  manchurian: "/images/manchurian.jpeg",
  patio: "/images/patio.png",
  platter: "/images/platter.jpeg",
  signage: "/images/signage.jpeg",
};

export const PHONE = "+919090674545";
export const PHONE_DISPLAY = "+919090674545";
export const WHATSAPP = `https://wa.me/919090674545?text=${encodeURIComponent(
  "Hello Madhuban Pure Veg, I'd like to place an order.",
)}`;
export const ADDRESS = "Lakshmi Rd, near Ellora Shopee, Indrayani Nagar, Chaitanya Park, Sector No. 1, Bhosari, Pune, Pimpri-Chinchwad, Maharashtra 411039";
export const MAPS = "https://maps.app.goo.gl/Qu9EMu86jnJb4vx79";

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const SIGNATURE = [
  {
    name: "Veg Manchurian Dry",
    price: "₹250",
    desc: "Crisp vegetable dumplings tossed in a smoky garlic-chilli glaze with peppers.",
    image: img.manchurian,
  },
  {
    name: "Veg Crispy",
    price: "₹220",
    desc: "Golden batter-fried vegetables in a sweet-hot schezwan toss, spring onion finish.",
    image: img.crispy,
  },
  {
    name: "Paneer Tikka",
    price: "₹290",
    desc: "Chargrilled cottage cheese, hung curd marinade, kasuri methi and charcoal smoke.",
    image: img.platter,
  },
  {
    name: "Hyderabadi Veg Biryani",
    price: "₹310",
    desc: "Long-grain rice layered with saffron, garden vegetables, mint and fried onion.",
    image: img.biryani,
  },
];

export type MenuCategory = {
  id: string;
  label: string;
  items: { name: string; desc: string; price: string }[];
};

export const MENU: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      { name: "Paneer Tikka", desc: "Chargrilled cottage cheese & spices", price: "₹290" },
      { name: "Veg Crispy", desc: "Batter-fried vegetables, schezwan toss", price: "₹220" },
      { name: "Veg Seekh Kebab", desc: "Spinach, peas and potato, mint chutney", price: "₹420" },
      { name: "Mushroom Chilli", desc: "Button mushrooms, peppers, garlic", price: "₹255" },
    ],
  },
  {
    id: "main",
    label: "Main Course",
    items: [
      { name: "Paneer Butter Masala", desc: "Silky tomato gravy, cashew, cream", price: "₹300" },
      { name: "Dal Tadka", desc: "Comforting yellow lentils, ghee tempering", price: "₹170" },
      { name: "Palak Paneer", desc: "Slow-cooked spinach, fresh cottage cheese", price: "₹300" },
      { name: "Veg Kolhapuri", desc: "Fiery Maharashtrian masala, mixed vegetables", price: "₹230" },
    ],
  },
  {
    id: "breads",
    label: "Breads",
    items: [
      { name: "Butter Naan", desc: "Tandoor-baked, brushed with white butter", price: "₹60" },
      { name: "Tandoori Roti", desc: "Whole wheat, clay oven", price: "₹35" },
      { name: "Lachha Paratha", desc: "Flaky layered paratha", price: "₹60" },
      { name: "Cheese Garlic Naan", desc: "Molten cheese, roasted garlic", price: "₹99" },
    ],
  },
  {
    id: "rice",
    label: "Rice",
    items: [
      { name: "Hyderabadi Veg Biryani", desc: "Saffron rice, vegetables, fried onion", price: "₹310" },
      { name: "Jeera Rice", desc: "Basmati tempered with cumin & ghee", price: "₹150" },
      { name: "Veg Pulao", desc: "Fragrant rice with garden vegetables", price: "₹240" },
      { name: "Curd Rice", desc: "Cooling south-style curd rice", price: "₹170" },
    ],
  },
  {
    id: "chinese",
    label: "Indo-Chinese",
    items: [
      { name: "Veg Manchurian Dry", desc: "Crispy vegetable dumplings, garlic glaze", price: "₹220" },
      { name: "Veg Manchurian Gravy", desc: "Dumplings in a rich soya-chilli gravy", price: "₹240" },
      { name: "Hakka Noodles", desc: "Wok-tossed noodles, julienne vegetables", price: "₹220" },
      { name: " Veg Triple Schezwan Rice", desc: "Rice tossed in house schezwan", price: "₹310" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Gulab Jamun", desc: "Warm khoya dumplings in rose syrup", price: "₹89" },
      { name: "Sizzling Brownie", desc: "Chocolate brownie, vanilla, hot fudge", price: "₹220" },
      { name: "Gajar Halwa", desc: "Slow-cooked carrot halwa, dry fruits", price: "₹150" },
      { name: "Kulfi Falooda", desc: "Malai kulfi, vermicelli, rose", price: "₹160" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The food was fresh, flavourful and the ambience made our family dinner even better. The paneer tikka is easily the best in the area.",
    name: "Priyanka S.",
    meta: "Family dinner",
  },
  {
    quote:
      "We booked the party hall for my father's birthday. Warm service, spotless kitchen and every single guest asked where we ordered from.",
    name: "Rohit K.",
    meta: "Celebration of 40 guests",
  },
  {
    quote:
      "Pure veg done properly. The Manchurian is crisp, the biryani is fragrant, and the staff genuinely care that you enjoy the meal.",
    name: "Anjali M.",
    meta: "Regular guest",
  },
  {
    quote:
      "Lovely outdoor seating in the evening with the lights on. We came for a casual meal and stayed for two hours.",
    name: "Suraj P.",
    meta: "Casual evening",
  },
];

export const GALLERY = [
  { src: img.exterior, alt: "Madhuban Pure Veg restaurant exterior lit up at night", span: "tall" },
  { src: img.manchurian, alt: "Veg Manchurian dry served with fresh salad", span: "normal" },
  { src: img.platter, alt: "Palak paneer platter garnished with tomato and cream", span: "wide" },
  { src: img.patio, alt: "Outdoor patio seating with teal sofas", span: "normal" },
  { src: img.crispy, alt: "Veg crispy starter carried through the dining area", span: "tall" },
  { src: img.biryani, alt: "Hyderabadi vegetable biryani in a black handi", span: "normal" },
  { src: img.signage, alt: "Madhuban signage at the restaurant entrance", span: "normal" },
];
