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


import React, { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      quantity: 2,
      image: "https://via.placeholder.com/100",
    },
  ]);

  function increaseQty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return React.createElement(
    "div",
    {
      className:
        "min-h-screen w-full bg-gray-100 text-gray-900 flex flex-col items-center p-4 sm:p-6",
    },

    // Header
    React.createElement(
      "h1",
      { className: "text-2xl sm:text-3xl font-bold mb-6 text-center w-full text-gray-800" },
      "Your Cart"
    ),

    // If no items
    items.length === 0
      ? React.createElement(
          "p",
          { className: "text-gray-500 text-center" },
          "Your cart is empty."
        )
      : React.createElement(
          React.Fragment,
          null,
          // Cart Items Container
          React.createElement(
            "div",
            {
              className:
                "w-full max-w-3xl flex flex-col gap-4 mb-24",
            },
            items.map((item) =>
              React.createElement(
                "div",
                {
                  key: item.id,
                  className:
                    "flex flex-col sm:flex-row sm:items-center justify-between bg-white shadow-md p-4 rounded-lg gap-4 w-full transition-all duration-200 hover:shadow-lg",
                },
                // Image + Details
                React.createElement(
                  "div",
                  { className: "flex items-center gap-4 flex-1" },
                  React.createElement("img", {
                    src: item.image,
                    alt: item.name,
                    className: "w-20 h-20 rounded-md object-cover border border-gray-200",
                  }),
                  React.createElement(
                    "div",
                    { className: "flex flex-col" },
                    React.createElement(
                      "h2",
                      { className: "font-semibold text-base sm:text-lg text-gray-800" },
                      item.name
                    ),
                    React.createElement(
                      "p",
                      { className: "text-gray-500 text-sm" },
                      "₹" + item.price.toLocaleString("en-IN")
                    )
                  )
                ),

                // Quantity controls
                React.createElement(
                  "div",
                  { className: "flex items-center justify-center gap-3" },
                  React.createElement(
                    "button",
                    {
                      onClick: () => decreaseQty(item.id),
                      className:
                        "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors",
                    },
                    "−"
                  ),
                  React.createElement(
                    "span",
                    { className: "text-sm sm:text-base text-gray-800" },
                    item.quantity
                  ),
                  React.createElement(
                    "button",
                    {
                      onClick: () => increaseQty(item.id),
                      className:
                        "px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors",
                    },
                    "+"
                  )
                ),

                // Remove button
                React.createElement(
                  "button",
                  {
                    onClick: () => removeItem(item.id),
                    className:
                      "text-red-500 hover:text-red-600 text-sm sm:self-auto self-end font-medium transition-colors",
                  },
                  "Remove"
                )
              )
            )
          ),

          // Floating Checkout Button
          React.createElement(
            "div",
            {
              className:
                "fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center gap-3 p-4 z-50 shadow-md",
            },
            React.createElement(
              "p",
              { className: "text-lg sm:text-xl font-semibold text-gray-800" },
              "Total: ₹",
              total.toLocaleString("en-IN")
            ),
            React.createElement(
              "button",
              {
                className:
                  "w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-2 px-4 rounded-lg transition-all",
                onClick: () => alert("Checkout not implemented yet"),
              },
              "Proceed to Checkout"
            )
          )
        )
  );
}
