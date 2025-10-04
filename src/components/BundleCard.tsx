import React from 'react';
import GlassButton from './GlassButton';

type BundleProps = {
  name: string;
  image: string;
  price: number;
  items: string[];
};

const BundleCard = ({ name, image, price, items }: BundleProps) => (
  <div className="glass-card flex flex-col items-center p-6 m-4 rounded-xl shadow-xl animate-fade-in">
    <img src={image} alt={name} className="w-32 h-32 object-cover rounded-lg mb-4" />
    <h2 className="text-lg font-semibold text-white">{name}</h2>
    <ul className="text-sm text-gray-200 mb-3">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <div className="flex items-center justify-between w-full">
      <span className="text-xl text-white font-bold">₱{price.toFixed(2)}</span>
      <GlassButton>Add Bundle to Bag</GlassButton>
    </div>
  </div>
);

export default BundleCard;