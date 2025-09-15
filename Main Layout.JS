import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Home, FileText, Users, BarChart3, Settings } from 'lucide-react'

export default function Layout({ children, title = 'JMA Field Trip Management' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Submit Request', href: '/staff/submit', icon: FileText },
    { name: 'Admin Dashboard', href: '/admin/dashboard', icon: Users },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="JMA Middle School Field Trip Management System - One Mission, Many Places & Endless Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-space-gradient">
        {/* Navigation */}
        <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xl font-bold text-white">JMA Field Trips</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-slate-300 hover:text-white p-2"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-700">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">🚀</span>
                  <span className="text-xl font-bold text-white">JMA Field Trips</span>
                </div>
                <p className="text-slate-400 text-sm">
                  One Mission, Many Places & Endless Possibilities
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/staff/submit" className="text-slate-400 hover:text-white text-sm block">
                    Submit Request
                  </Link>
                  <Link href="/admin/dashboard" className="text-slate-400 hover:text-white text-sm block">
                    Admin Dashboard
                  </Link>
                  <Link href="/reports" className="text-slate-400 hover:text-white text-sm block">
                    Reports
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Support</h3>
                <div className="space-y-2">
                  <a href="mailto:support@jma-fieldtrips.com" className="text-slate-400 hover:text-white text-sm block">
                    Email Support
                  </a>
                  <Link href="/docs" className="text-slate-400 hover:text-white text-sm block">
                    Documentation
                  </Link>
                  <a href="https://github.com/YOUR_USERNAME/jma-field-trip-system" className="text-slate-400 hover:text-white text-sm block">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-slate-400 text-sm">
                &copy; 2025 JMA Middle School. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
