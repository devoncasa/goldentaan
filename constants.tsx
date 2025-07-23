
import React from 'react';
import { Product } from './types';
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

export const MENU_ITEMS = [
  { name: 'header.menu.home', to: 'home' },
  { 
    name: 'header.menu.ourStory', 
    to: 'legacy',
    subItems: [
        { name: 'header.menu.ourStoryLegacy', to: 'legacy' },
        { name: 'header.menu.ourStoryPalmyra', to: 'palmyra-palm' },
        { name: 'header.menu.ourStoryHarvest', to: 'harvest-art' },
        { name: 'header.menu.ourStoryCommitment', to: 'commitment' },
        { name: 'header.menu.ourStoryCommunity', to: 'community' },
    ]
  },
  { name: 'header.menu.products', to: 'products' },
  { name: 'header.menu.healthBenefits', to: 'benefits' },
  { name: 'header.menu.recipes', to: 'recipes' },
  { name: 'header.menu.faq', to: 'faq' },
  { name: 'header.menu.contactUs', to: 'contact' },
];

export const PRODUCTS_DATA = [
  {
    id: 1,
    sku: "GT-BLOCK-500G",
    image: 'https://i.postimg.cc/T1cB4Q79/Traditional-Palm-Sugar-Block.webp',
    price: 12,
    isQuote: false,
    key: 'products.items.1',
  },
  {
    id: 2,
    sku: "GT-POWDER-250G",
    image: 'https://i.postimg.cc/7h4p9jVh/Palm-Sugar-Powder.webp',
    price: 15,
    isQuote: false,
    key: 'products.items.2',
  },
  {
    id: 3,
    sku: "GT-SYRUP-300ML",
    image: 'https://i.postimg.cc/N03h9K21/Palm-Sugar-Syrup.webp',
    price: 18,
    isQuote: false,
    key: 'products.items.3',
  },
  {
    id: 4,
    sku: "GT-ORGANIC-BULK",
    image: 'https://i.postimg.cc/Xv8fschV/Traditional-Palm-Sugar-Block.webp',
    price: 0,
    isQuote: true,
    key: 'products.items.4',
  },
  {
    id: 5,
    sku: "GT-FUSION-BULK",
    image: 'https://i.postimg.cc/NLh9rz0D/Palm-Sugar-Fusion-Flavors.webp',
    price: 0,
    isQuote: true,
    key: 'products.items.5',
  },
];

export const RECIPES_DATA_KEYS = [
    { image: "https://i.postimg.cc/d16g9N3q/golden-taan-caramel-latte.jpg", key: 'recipes.items.1', productId: 3 },
    { image: "https://i.postimg.cc/t44TqxP4/gluten-free-palmyra-blondies.jpg", key: 'recipes.items.2', productId: 2 },
    { image: "https://i.postimg.cc/XqM3w0g5/pan-seared-salmon-glaze.jpg", key: 'recipes.items.3', productId: 3 },
    { image: "https://i.postimg.cc/Hnpyk8Kx/smoky-old-fashioned-cocktail.jpg", key: 'recipes.items.4', productId: 3 },
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
  {
    key: 'faq.items.6'
  },
  {
    key: 'faq.items.7'
  },
  {
    key: 'faq.items.8'
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
