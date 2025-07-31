

import React from 'react';
import { Product, MenuItem } from './types';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { RiLineFill } from 'react-icons/ri';

export const BACKGROUND_IMAGES = [
    'https://i.postimg.cc/NfwT4rMJ/hero-section-background-00109.webp',
    'https://i.postimg.cc/XN5ddgVB/hero-section-background-00108.webp',
    'https://i.postimg.cc/RCwJNVRc/hero-section-background-00118.webp',
    'https://i.postimg.cc/7ZtfpCHy/hero-section-background-00121.webp',
    'https://i.postimg.cc/Yq34znT0/hero-section-background-00120.webp',
    'https://i.postimg.cc/50hzDXmt/hero-section-background-00106.webp',
    'https://i.postimg.cc/SRGKVRT3/hero-section-background-00126.webp',
    'https://i.postimg.cc/wBsTZ04h/hero-section-background-00133.webp',
    'https://i.postimg.cc/qvvNbcdL/hero-section-background-00122.webp',
    'https://i.postimg.cc/2y0H4FDt/hero-section-background-0048.webp',
    'https://i.postimg.cc/tgzFZRyS/hero-section-background-0073.webp',
    'https://i.postimg.cc/rmmRDSfs/hero-section-background-0084.webp',
    'https://i.postimg.cc/c1vTjYdd/hero-section-background-0088.webp',
    'https://i.postimg.cc/g0Mqtc5w/hero-section-background-0094.webp',
    'https://i.postimg.cc/L8Yts5tk/sections-backgrounds-0010.jpg',
    'https://i.postimg.cc/hP38gTdP/sections-backgrounds-0011.jpg',
    'https://i.postimg.cc/QdYYC7rM/krisbkk-Advertising-composition-banner-style-of-palm-sugar-prod-1fc4a008-5e9b-41fd-b4cd-3062f4f13ec6.webp',
    'https://i.postimg.cc/gkDT95S8/krisbkk-Advertising-composition-banner-style-of-palm-sugar-prod-4bd9f135-f593-48c8-8d4e-d3f3592d82e1.webp',
    'https://i.postimg.cc/28mKKmwC/krisbkk-Advertising-composition-banner-style-of-palm-sugar-prod-8ac7a8d4-7b50-4ff9-b27d-a6cc937d2db5.webp',
    'https://i.postimg.cc/QddnjbwP/krisbkk-Advertising-composition-banner-style-of-palm-sugar-prod-e5ca8092-96f4-4a9c-8a06-4b382f05960d.webp'
];

export const MENU_ITEMS: MenuItem[] = [
  { name: 'header.menu.home', to: 'home' },
  {
    name: 'header.menu.products',
    to: 'products',
    children: [
      { name: 'header.menu.allProducts', to: 'products' },
      { name: 'header.menu.compareSugars', to: 'compare-sugars' },
      { name: 'header.menu.productBenefits', to: 'benefits' },
    ],
  },
  { name: 'header.menu.recipes', to: 'recipes' },
  {
    name: 'header.menu.aboutUs',
    to: 'about',
    children: [
      { name: 'header.menu.ourStory', to: 'about' },
      { name: 'header.menu.sustainability', to: 'about', anchor: 'commitment' },
      { name: 'header.menu.community', to: 'community' },
    ],
  },
  { name: 'header.menu.faq', to: 'faq' },
  { name: 'header.menu.contact', to: 'contact' },
];

type ProductData = Pick<Product, 'id' | 'sku' | 'image' | 'price' | 'isQuote' | 'category'> & { key: string };

export const PRODUCTS_DATA: ProductData[] = [
  {
    id: 1,
    sku: "GT-BLOCK-500G",
    image: 'https://i.postimg.cc/T1cB4Q79/Traditional-Palm-Sugar-Block.webp',
    price: 12,
    isQuote: false,
    key: 'products.items.1',
    category: 'bar',
  },
  {
    id: 2,
    sku: "GT-POWDER-250G",
    image: 'https://i.postimg.cc/7h4p9jVh/Palm-Sugar-Powder.webp',
    price: 15,
    isQuote: false,
    key: 'products.items.2',
    category: 'powder',
  },
  {
    id: 3,
    sku: "GT-SYRUP-300ML",
    image: 'https://i.postimg.cc/N03h9K21/Palm-Sugar-Syrup.webp',
    price: 18,
    isQuote: false,
    key: 'products.items.3',
    category: 'syrup',
  },
  {
    id: 4,
    sku: "GT-ORGANIC-BULK",
    image: 'https://i.postimg.cc/Xv8fschV/Traditional-Palm-Sugar-Block.webp',
    price: 0,
    isQuote: true,
    key: 'products.items.4',
    category: 'bulk',
  },
  {
    id: 5,
    sku: "GT-FUSION-BULK",
    image: 'https://i.postimg.cc/NLh9rz0D/Palm-Sugar-Fusion-Flavors.webp',
    price: 0,
    isQuote: true,
    key: 'products.items.5',
    category: 'specialty',
  },
];

export const RECIPES_DATA_KEYS = [
    { image: "https://i.postimg.cc/d16g9N3q/golden-taan-caramel-latte.jpg", key: 'recipes.items.1', productId: 3, category: 'beverage' as const },
    { image: "https://i.postimg.cc/t44TqxP4/gluten-free-palmyra-blondies.jpg", key: 'recipes.items.2', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/XqM3w0g5/pan-seared-salmon-glaze.jpg", key: 'recipes.items.3', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/Hnpyk8Kx/smoky-old-fashioned-cocktail.jpg", key: 'recipes.items.4', productId: 3, category: 'beverage' as const },
    { image: "https://i.postimg.cc/k4G7f9zS/khanom-kluay.jpg", key: 'recipes.items.5', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/tJn0W4XJ/thapthim-krop.jpg", key: 'recipes.items.6', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/W1Y45q5g/khanom-piak-poon.jpg", key: 'recipes.items.7', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/J4Z7F5v0/sangkaya.jpg", key: 'recipes.items.8', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/GpdVzGzK/khao-niao-moon.jpg", key: 'recipes.items.9', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/W3h4g3hH/met-khanun.jpg", key: 'recipes.items.10', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/Pqj959F5/khao-tom-mat.jpg", key: 'recipes.items.11', productId: 2, category: 'thai-dessert' as const },
    { image: "https://i.postimg.cc/k4G7zM5Y/pork-chop-apple-sauce.jpg", key: 'recipes.items.12', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/T3sL3w3y/salted-caramel-tart.jpg", key: 'recipes.items.13', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/pT4yY2fM/quinoa-salad-balsamic.jpg", key: 'recipes.items.14', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/d1c9F7Fz/taan-old-fashioned.jpg", key: 'recipes.items.15', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/W1vXqB1H/duck-breast-berry-sauce.jpg", key: 'recipes.items.16', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/tJnQJq8z/smoked-bbq-sauce.jpg", key: 'recipes.items.17', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/J4R8D10J/palm-sugar-cookies.jpg", key: 'recipes.items.18', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/d16p2v4p/candied-bacon.jpg", key: 'recipes.items.19', productId: 2, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/pTkzD5tJ/roasted-root-vegetables.jpg", key: 'recipes.items.20', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/t44Vz1z5/homemade-granola.jpg", key: 'recipes.items.21', productId: 3, category: 'western-dish' as const },
    { image: "https://i.postimg.cc/k4GzM5yq/nam-pla-wan.jpg", key: 'recipes.items.22', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/T3sL4w4z/mee-krob.jpg", key: 'recipes.items.23', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/pT4yZ3fG/pla-rad-prik.jpg", key: 'recipes.items.24', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/d1c9G8fH/massaman-curry.jpg", key: 'recipes.items.25', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/W1vXqC2j/moo-hong.jpg", key: 'recipes.items.26', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/tJnQKr9A/nam-jim-jaew.jpg", key: 'recipes.items.27', productId: 2, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/J4R8D21K/pad-thai-sauce.jpg", key: 'recipes.items.28', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/d16p3v5q/miang-kham.jpg", key: 'recipes.items.29', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/pTkzD6tL/tod-mun-sauce.jpg", key: 'recipes.items.30', productId: 2, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/t44Vy2z6/gai-pad-med-mamuang.jpg", key: 'recipes.items.31', productId: 2, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/Hnpyk9Ky/khao-soi.jpg", key: 'recipes.items.32', productId: 1, category: 'thai-traditional' as const },
    { image: "https://i.postimg.cc/k4G7f0zT/gai-yang-sauce.jpg", key: 'recipes.items.33', productId: 2, category: 'thai-traditional' as const }
];


export const FAQ_DATA = [
  {
    key: 'faq.items.1'
  },
  {
    key: 'faq.items.2'
  },
  {
    key: 'faq.items.3'
  },
  {
    key: 'faq.items.4'
  },
  {
    key: 'faq.items.5'
  },
];

export const SOCIAL_LINKS = [
  { icon: <FaFacebook />, href: 'https://facebook.com', name: 'Facebook' },
  { icon: <FaInstagram />, href: 'https://instagram.com', name: 'Instagram' },
  { icon: <FaYoutube />, href: 'https://youtube.com', name: 'YouTube' },
];

export const CERTIFICATION_ICONS = [
  { src: 'https://picsum.photos/seed/organic/100/100', alt: 'Organic Certified' },
  { src: 'https://picsum.photos/seed/otop/100/100', alt: 'OTOP Certified' },
  { src: 'https://picsum.photos/seed/halal/100/100', alt: 'HALAL Certified' },
];

export const CHAT_OPTIONS = [
    { icon: <FaWhatsapp className="w-8 h-8"/>, href: 'https://wa.me/66968615795', name: 'WhatsApp'},
    { icon: <RiLineFill className="w-8 h-8"/>, href: '#', name: 'LINE'}
];