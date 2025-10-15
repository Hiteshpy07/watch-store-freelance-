// import React, { useState } from "react";

// export default function CartPage() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: 1999,
//       quantity: 1,
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: 2499,
//       quantity: 2,
//       image: "https://via.placeholder.com/100",
//     },
//   ]);

//   function increaseQty(id) {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   }

//   function decreaseQty(id) {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   }

//   function removeItem(id) {
//     setItems((prev) => prev.filter((item) => item.id !== id));
//   }

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return React.createElement(
//     "div",
//     {
//       className:
//         "min-h-screen w-full bg-gray-900 text-white flex flex-col items-center p-4 sm:p-6",
//     },

//     // Header
//     React.createElement(
//       "h1",
//       { className: "text-2xl sm:text-3xl font-bold mb-6 text-center w-full" },
//       "Your Cart"
//     ),

//     // If no items
//     items.length === 0
//       ? React.createElement(
//         "p",
//         { className: "text-gray-400 text-center" },
//         "Your cart is empty."
//       )
//       : React.createElement(
//         React.Fragment,
//         null,
//         // Cart Items Container
//         React.createElement(
//           "div",
//           {
//             className:
//               "w-full max-w-3xl flex flex-col gap-4 mb-24", // space at bottom for floating button
//           },
//           items.map((item) =>
//             React.createElement(
//               "div",
//               {
//                 key: item.id,
//                 className:
//                   "flex flex-col sm:flex-row sm:items-center justify-between bg-gray-800 p-4 rounded-lg gap-4 w-full",
//               },
//               // Image + Details
//               React.createElement(
//                 "div",
//                 { className: "flex items-center gap-4 flex-1" },
//                 React.createElement("img", {
//                   src: item.image,
//                   alt: item.name,
//                   className: "w-20 h-20 rounded-md object-cover",
//                 }),
//                 React.createElement(
//                   "div",
//                   { className: "flex flex-col" },
//                   React.createElement(
//                     "h2",
//                     { className: "font-semibold text-base sm:text-lg" },
//                     item.name
//                   ),
//                   React.createElement(
//                     "p",
//                     { className: "text-gray-400 text-sm" },
//                     "₹" + item.price.toLocaleString("en-IN")
//                   )
//                 )
//               ),

//               // Quantity controls
//               React.createElement(
//                 "div",
//                 { className: "flex items-center justify-center gap-3" },
//                 React.createElement(
//                   "button",
//                   {
//                     onClick: () => decreaseQty(item.id),
//                     className:
//                       "px-3 py-1 bg-gray-700 rounded hover:bg-gray-600",
//                   },
//                   "−"
//                 ),
//                 React.createElement(
//                   "span",
//                   { className: "text-sm sm:text-base" },
//                   item.quantity
//                 ),
//                 React.createElement(
//                   "button",
//                   {
//                     onClick: () => increaseQty(item.id),
//                     className:
//                       "px-3 py-1 bg-gray-700 rounded hover:bg-gray-600",
//                   },
//                   "+"
//                 )
//               ),

//               // Remove button
//               React.createElement(
//                 "button",
//                 {
//                   onClick: () => removeItem(item.id),
//                   className:
//                     "text-red-400 hover:text-red-300 text-sm sm:self-auto self-end",
//                 },
//                 "Remove"
//               )
//             )
//           )
//         ),

//         // Floating Checkout Button
//         React.createElement(
//           "div",
//           {
//             className:
//               "fixed bottom-0 left-0 w-full bg-gray-800 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3 p-4 z-50",
//           },
//           React.createElement(
//             "p",
//             { className: "text-lg sm:text-xl font-semibold" },
//             "Total: ₹",
//             total.toLocaleString("en-IN")
//           ),
//           React.createElement(
//             "button",
//             {
//               className:
//                 "w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-semibold py-2 px-4 rounded-lg",
//               onClick: () => alert("Checkout not implemented yet"),
//             },
//             "Proceed to Checkout"
//           )
//         )
//       )
//   );
// }


// import React, { useState } from "react";
// import Navbar from "./Navbar";

// export default function CartPage() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: "Wireless Headphones",
//       price: 1999,
//       quantity: 1,
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       id: 2,
//       name: "Smart Watch",
//       price: 2499,
//       quantity: 2,
//       image: "https://via.placeholder.com/100",
//     },
//   ]);

//   const increaseQty = (id) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col items-center p-4 sm:p-6">
//       {/* Header */}
//       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center w-full text-gray-800">
//         Your Cart
//       </h1>

//       {/* Empty Cart */}
//       {items.length === 0 ? (
//         <p className="text-gray-500 text-center">Your cart is empty.</p>
//       ) : (
//         <>
//           {/* Cart Items */}
//           <div className="w-full max-w-3xl flex flex-col gap-4 mb-24">
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4 w-full transition-all duration-200 hover:shadow-lg"
//               >
//                 {/* Image + Details */}
//                 <div className="flex items-center gap-4 flex-1">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 rounded-md object-cover border border-gray-200"
//                   />
//                   <div className="flex flex-col">
//                     <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                       {item.name}
//                     </h2>
//                     <p className="text-gray-500 text-sm">
//                       ₹{item.price.toLocaleString("en-IN")}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Quantity Controls */}
//                 <div className="flex items-center justify-center gap-3">
//                   <button
//                     onClick={() => decreaseQty(item.id)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//                   >
//                     −
//                   </button>
//                   <span className="text-sm sm:text-base text-gray-800">
//                     {item.quantity}
//                   </span>
//                   <button
//                     onClick={() => increaseQty(item.id)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* Remove Button */}
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="text-red-500 hover:text-red-600 text-sm sm:self-auto self-end font-medium transition-colors"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Floating Checkout Button */}
//           <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 p-4 z-50 shadow-md">
//             <p className="text-lg sm:text-xl font-semibold text-gray-800">
//               Total: ₹{total.toLocaleString("en-IN")}
//             </p>
//             <button
//               onClick={() => alert("Checkout not implemented yet")}
//               className="w-full sm:w-auto bg-black hover:bg-gray-300 hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition-all"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//     </>
//   );
// }


// import React, { useState } from "react";
// import Navbar from "./Navbar";

// export default function CartPage() {
//   const [items, setItems] = useState([]); // 🧾 Empty cart initially

//   const increaseQty = (id) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col items-center p-4 sm:p-6">
//         {/* Header */}
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center w-full text-gray-800">
//           Your Cart
//         </h1>

//         {/* Empty Cart */}
//         {items.length === 0 ? (
//           <p className="text-gray-500 text-center text-lg mt-10">
//             🛒 Your cart is empty.
//           </p>
//         ) : (
//           <>
//             {/* Cart Items */}
//             <div className="w-full max-w-3xl flex flex-col gap-4 mb-24">
//               {items.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4 w-full transition-all duration-200 hover:shadow-lg"
//                 >
//                   {/* Image + Details */}
//                   <div className="flex items-center gap-4 flex-1">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-20 h-20 rounded-md object-cover border border-gray-200"
//                     />
//                     <div className="flex flex-col">
//                       <h2 className="font-semibold text-base sm:text-lg text-gray-800">
//                         {item.name}
//                       </h2>
//                       <p className="text-gray-500 text-sm">
//                         ₹{item.price.toLocaleString("en-IN")}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center justify-center gap-3">
//                     <button
//                       onClick={() => decreaseQty(item.id)}
//                       className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//                     >
//                       −
//                     </button>
//                     <span className="text-sm sm:text-base text-gray-800">
//                       {item.quantity}
//                     </span>
//                     <button
//                       onClick={() => increaseQty(item.id)}
//                       className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
//                     >
//                       +
//                     </button>
//                   </div>

//                   {/* Remove Button */}
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 hover:text-red-600 text-sm sm:self-auto self-end font-medium transition-colors"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>

//             {/* Floating Checkout Button */}
//             <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 p-4 z-50 shadow-md">
//               <p className="text-lg sm:text-xl font-semibold text-gray-800">
//                 Total: ₹{total.toLocaleString("en-IN")}
//               </p>
//               <button
//                 onClick={() => alert("Checkout not implemented yet")}
//                 className="w-full sm:w-auto bg-black hover:bg-gray-300 hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition-all"
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

export default function CartPage() {
  // 🧾 Dummy item initially
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceed = () => setShowLoginPopup(true);

  const handleProceedToBuy = () => {
    setShowLoginPopup(false);
    setTimeout(() => {
      alert("✅ Purchase successful! (dummy checkout)");
    }, 300);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col items-center p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center w-full text-gray-800">
          Your Cart
        </h1>

        {/* Empty Cart */}
        {items.length === 0 ? (
          <p className="text-gray-500 text-center text-lg mt-10">
            🛒 Your cart is empty.
          </p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="w-full max-w-3xl flex flex-col gap-4 mb-24">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4 w-full transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-md object-cover border border-gray-200"
                    />
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-base sm:text-lg text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-500 text-sm">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm sm:text-base text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600 text-sm sm:self-auto self-end font-medium transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Floating Checkout Button */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 p-4 z-50 shadow-md">
              <p className="text-lg sm:text-xl font-semibold text-gray-800">
                Total: ₹{total.toLocaleString("en-IN")}
              </p>
              <button
                onClick={handleProceed}
                className="w-full sm:w-auto bg-black hover:bg-gray-300 hover:text-black text-white font-semibold py-2 px-4 rounded-lg transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}

        {/* Animated Login/Signup Modal */}
        <AnimatePresence>
          {showLoginPopup && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 60, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <button
                  onClick={() => setShowLoginPopup(false)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                  {isLogin ? "Login to Continue" : "Create an Account"}
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleProceedToBuy();
                  }}
                  className="flex flex-col gap-3"
                >
                  {/* Fields for Signup only */}
                  {!isLogin && (
                    <>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Location"
                        className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        required
                      />
                    </>
                  )}

                  {/* Common Fields */}
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-300 hover:text-black transition-all"
                  >
                    Proceed to Buy
                  </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                  {isLogin
                    ? "Don’t have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </button>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
