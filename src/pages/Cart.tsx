import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

// Mock cart data
const mockCartItems = [
  { id: 1, name: "Modern Beige Sofa", price: 1200, quantity: 1, image: "/placeholder.svg" },
  { id: 2, name: "Elegant Dining Chair", price: 250, quantity: 2, image: "/placeholder.svg" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [discountCode, setDiscountCode] = useState("");

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-subtle py-12 border-b">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">Shopping Cart</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
                <h2 className="font-serif text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
                <Link to="/shop">
                  <Button size="lg">Browse Products</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="border-0 shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0" />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{item.name}</h3>
                            <p className="text-sm text-muted-foreground mb-3">${item.price}</p>
                            <div className="flex items-center gap-2">
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <Button
                                size="icon"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold mb-2">${item.price * item.quantity}</p>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div>
                  <Card className="border-0 shadow-medium sticky top-24">
                    <CardContent className="p-6 space-y-4">
                      <h2 className="font-serif text-2xl font-bold">Order Summary</h2>
                      
                      <div className="space-y-2 py-4 border-y">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">${subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span className="font-semibold">${shipping}</span>
                        </div>
                      </div>

                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${total}</span>
                      </div>

                      <div className="space-y-2">
                        <Input
                          placeholder="Discount code"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <Button variant="outline" className="w-full">
                          Apply Code
                        </Button>
                      </div>

                      <Button size="lg" className="w-full">
                        Proceed to Checkout
                      </Button>

                      <Link to="/shop">
                        <Button variant="ghost" className="w-full">
                          Continue Shopping
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
