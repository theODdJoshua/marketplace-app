import React, { useState } from 'react';

const AddToBag = ({ product }: { product: any }) => {
  const [added, setAdded] = useState(false);
  return (
    <button
      className={`glass-btn apple-add-to-bag ${added ? 'added' : ''}`}
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
        // Add to cart logic here
      }}
    >
      {added ? 'Added!' : 'Add to Bag'}
    </button>
  );
};

export default AddToBag;