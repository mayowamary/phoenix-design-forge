import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const Auth = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful! Welcome back.");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully! Welcome to Project Phoenix.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-large">
              <CardHeader className="text-center">
                <CardTitle className="font-serif text-3xl">Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="login-email">Email</Label>
                        <Input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="login-password">Password</Label>
                        <Input
                          id="login-password"
                          type="password"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Login
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        <Link to="/forgot-password" className="hover:text-primary">
                          Forgot password?
                        </Link>
                      </p>
                    </form>
                  </TabsContent>

                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="signup-name">Full Name</Label>
                        <Input
                          id="signup-name"
                          value={signupData.name}
                          onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-email">Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          value={signupData.email}
                          onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">Password</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          value={signupData.password}
                          onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Create Account
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        By signing up, you agree to our{" "}
                        <Link to="/terms" className="hover:text-primary">
                          Terms of Service
                        </Link>
                      </p>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
