"use client";

import { useUserStore } from '@/stores/user.store';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Settings, BarChart3, Shield, LogOut, User } from "lucide-react";
import Cookies from "js-cookie";

const Dashboard = () => {
    const { user, clearUser } = useUserStore((state) => state);
    const accessToken = Cookies.get("x-access-token");
    console.log(accessToken);
    const handleLogout = () => {
        clearUser();
        Cookies.remove("x-access-token");
    };

    const stats = [
        { title: "Total Users", value: "2,847", icon: Users, color: "text-blue-600", bgColor: "bg-blue-100" },
        { title: "Active Sessions", value: "184", icon: BarChart3, color: "text-green-600", bgColor: "bg-green-100" },
        { title: "Security Alerts", value: "3", icon: Shield, color: "text-red-600", bgColor: "bg-red-100" },
        { title: "System Health", value: "98%", icon: Settings, color: "text-purple-600", bgColor: "bg-purple-100" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Navigation Header */}
            <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mx-6 mt-6">
                <div className="flex items-center space-x-2">
                    <Users className="h-8 w-8 text-blue-600" />
                    <h1 className="text-2xl font-bold text-gray-900">UMS Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-2">
                        <User className="h-5 w-5 text-gray-600" />
                        <div className="text-sm">
                            <p className="font-medium text-gray-900">{user?.name}</p>
                            <p className="text-gray-500">{user?.role}</p>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleLogout}
                        className="flex items-center space-x-2"
                    >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                    </Button>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, {user?.name}! 👋
                    </h2>
                    <p className="text-gray-600">
                        Here&apos;s what&apos;s happening with your user management system today.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card
                            key={stat.title}
                            className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    {stat.title}
                                </CardTitle>
                                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Dashboard Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Management Card */}
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                <span>User Management</span>
                            </CardTitle>
                            <CardDescription>
                                Manage your users, roles, and permissions
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Active Users</span>
                                <span className="font-semibold text-gray-900">2,847</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Pending Approvals</span>
                                <span className="font-semibold text-orange-600">12</span>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                Manage Users
                            </Button>
                        </CardContent>
                    </Card>

                    {/* System Overview Card */}
                    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <BarChart3 className="h-5 w-5 text-green-600" />
                                <span>System Overview</span>
                            </CardTitle>
                            <CardDescription>
                                Monitor system performance and health
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">System Uptime</span>
                                <span className="font-semibold text-green-600">99.9%</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="text-sm text-gray-600">Response Time</span>
                                <span className="font-semibold text-gray-900">45ms</span>
                            </div>
                            <Button variant="outline" className="w-full">
                                View Analytics
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="outline" className="h-auto py-4 flex-col space-y-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                            <Users className="h-6 w-6 text-blue-600" />
                            <span className="text-sm">Add User</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex-col space-y-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                            <Shield className="h-6 w-6 text-green-600" />
                            <span className="text-sm">Security</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex-col space-y-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                            <Settings className="h-6 w-6 text-purple-600" />
                            <span className="text-sm">Settings</span>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 flex-col space-y-2 bg-white/80 backdrop-blur-sm hover:bg-white">
                            <BarChart3 className="h-6 w-6 text-orange-600" />
                            <span className="text-sm">Reports</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;