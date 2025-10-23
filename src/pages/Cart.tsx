import React from "react";
import type { CartItem } from "../types";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  // Expecting the CartContext to provide these values.
  // If your context uses different names, rename accordingly.
  const { cartItems, updateQuantity, getCartTotal, clearCart, removeFromCart } =
    useCart();

  // local helper to decrease/increase but never below 1
  const changeQuantity = (id: number, nextQty: number) => {
    const safeQty = Math.max(0, Math.floor(nextQty)); // allow 0 for removal
    // if the context exposes removeFromCart prefer it when qty is 0
    if (safeQty === 0) {
      if (typeof removeFromCart === "function") {
        removeFromCart(id);
      } else {
        // fallback to updateQuantity(0) if remove isn't available
        updateQuantity(id, 0);
      }
      return;
    }
    updateQuantity(id, safeQty);
  };

  const handleClear = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      clearCart();
    }
  };

  return (
    <div
      style={{
        height: "100vh", // full viewport
        width: "100vw",
        boxSizing: "border-box",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
        gap: "20px",
      }}
    >

        
      <h1 style={{ marginBottom: '15px', color: "#222", textAlign: "center" }}>
        Shopping Cart
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "#555" }}>
          {cartItems?.length ?? 0} item{(cartItems?.length ?? 0) !== 1 ? "s" : ""}
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: "10px" }}>
          <button
            onClick={handleClear}
            style={{
              padding: "10px 14px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1, // take remaining vertical space
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {(!cartItems || cartItems.length === 0) ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "1.1rem",
            }}
          >
            Your cart is empty
          </div>
        ) : (
          cartItems.map((item: CartItem) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #e3e3e3",
                borderRadius: "8px",
                padding: "14px",
                background: "white",
                display: "flex",
                gap: "16px",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                {/* if you have an image URL */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 6 }}
                  />
                ) : (
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 6,
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#888",
                    }}
                  >
                    Img
                  </div>
                )}

                <div>
                  <h3 style={{ margin: 0, fontSize: 16 }}>{item.name}</h3>
                  <div style={{ color: "#666", marginTop: 6 }}>Price: ${item.price.toFixed(2)}</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <button
                    onClick={() => changeQuantity(item.id, item.quantity - 1)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      border: "1px solid #ddd",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>

                  <div style={{ minWidth: 60, textAlign: "center" }}>
                    Qty: <strong>{item.quantity}</strong>
                  </div>

                  <button
                    onClick={() => changeQuantity(item.id, item.quantity + 1)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 6,
                      border: "1px solid #ddd",
                      background: "white",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                <div style={{ minWidth: 120, textAlign: "right" }}>
                  <div style={{ fontWeight: 600 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() =>
                      typeof removeFromCart === "function"
                        ? removeFromCart(item.id)
                        : updateQuantity(item.id, 0)
                    }
                    style={{
                      marginTop: 8,
                      padding: "8px 12px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid #e6e6e6",
          paddingTop: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          Total: ${getCartTotal().toFixed(2)}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => alert("Proceeding to checkout (not implemented)")}
            style={{
              padding: "12px 18px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            Checkout
          </button>
          <button
            onClick={handleClear}
            style={{
              padding: "12px 18px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
