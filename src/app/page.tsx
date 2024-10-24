
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./components/logo";
import { Auth } from "./components/auth";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>

      <main className="flex-grow">
        <div className="container mx-auto text-center px-8">
          <h1 className="text-4xl font-bold mb-4">Ultimate AI Content Generator</h1>
          <p className="text-xl text-gray-600 mb-4">
            Our platform offers a suite of powerful tools to help you generate social media contents with the power of AI
          </p>
        </div>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Experience unparalleled speed and efficiency</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p className="text-gray-600">Your data is safe with our advanced security measures</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p className="text-gray-600">Tailor the platform to fit your unique needs</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4"></form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StartupX. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white mr-4">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
