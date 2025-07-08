"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { LoginUserDTO } from "@/types";
import { login } from "@/services";
import { handleAxiosError } from "@/utils/helpers/error.handler";
import { loginValidator } from "@/utils/validations/auth.validator";
import { useUserStore } from "@/stores/user.store";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const setUser = useUserStore((state) => state.setUser);
    const router = useRouter();

    const formik = useFormik<LoginUserDTO>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidator,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const res = await login(values);
                setUser(res.data);
                toast.success(res.message || "Login successful");
                router.push("/home");
            } catch (error) {
                console.log(error);
                toast.error(handleAxiosError(error));
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                        <Users className="h-8 w-8 text-blue-600" />
                        <span>UMS</span>
                    </Link>
                </div>

                <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center space-y-2 pb-6">
                        <CardTitle className="text-2xl font-bold text-gray-900">Welcome Back</CardTitle>
                        <CardDescription className="text-gray-600">
                            Sign in to your account to continue
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={formik.handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-xs text-red-500">{formik.errors.email}</p>
                                )}
                            </div>


                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                        Password
                                    </Label>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 text-sm text-blue-600 hover:text-blue-700"
                                    >
                                        Forgot password?
                                    </Button>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-11 px-3 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4 text-gray-400" />
                                        ) : (
                                            <Eye className="h-4 w-4 text-gray-400" />
                                        )}
                                    </Button>
                                </div>
                                {formik.touched.password && formik.errors.password && (
                                    <p className="text-xs text-red-500">{formik.errors.password}</p>
                                )}
                            </div>


                            <Button
                                type="submit"
                                className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-medium mt-6"
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Signing in...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center space-x-2">
                                        <span>Sign In</span>
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don&apos;t have an account?{" "}
                                <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <p className="text-center text-xs text-gray-500 mt-6">
                    Protected by industry-standard security measures.
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
