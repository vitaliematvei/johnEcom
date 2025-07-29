import React from 'react';

const CheckoutBtn = () => {
  return (
    <div className="flex justify-center">
      <button className="btn btn-primary w-3/4 h-10 bg-blue-600 hover:bg-blue-700 hover:scale-105  rounded-2xl text-white transition-all duration-200">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
