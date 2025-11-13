import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Cart, { CartItem } from "@/components/Cart";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Laptops & Desktops",
    "Mobile Phones & Tablets",
    "Accessories",
    "Home & Office Appliances",
    "CCTV & Security",
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />
        
        {/* Products Section */}
        <section id="products" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our wide range of technology products and solutions
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8 overflow-x-auto">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="inline-flex w-auto">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-tech-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Expert Advice?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of tech specialists is ready to help you find the perfect solution for your needs
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
