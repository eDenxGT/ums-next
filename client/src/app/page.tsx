import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">UMS</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Modern User Management
            <span className="block text-blue-600">Made Simple</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your user authentication and management with our beautiful,
            secure, and easy-to-use platform.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="px-8 py-3">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Secure Authentication</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Industry-standard security with encrypted passwords and secure session management.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-xl">User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Comprehensive user profiles and management tools for administrators.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600">
                Optimized performance with modern technologies for the best user experience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-gray-900 font-semibold">UMS</span>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 User Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
