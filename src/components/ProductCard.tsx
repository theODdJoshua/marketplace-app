import React from 'react';
import GlassButton from './GlassButton';
import AddToBag from './AddToBag';

type ProductProps = {
  name: string;
  image: string;
  price: number;
  description: string;
};

const ProductCard = ({ name, image, price, description }: ProductProps) => (
  <div className="glass-card flex flex-col items-center p-6 m-4 rounded-xl shadow-xl animate-fade-in">
    <img src={image} alt={name} className="w-32 h-32 object-cover rounded-lg mb-4" />
    <h2 className="text-lg font-semibold text-white">{name}</h2>
    <p className="text-sm text-gray-200 mb-3">{description}</p>
    <div className="flex items-center justify-between w-full">
      <span className="text-xl text-white font-bold">₱{price.toFixed(2)}</span>
      <AddToBag product={{ name, image, price }} />
    </div>
  </div>
);

export default ProductCard;
