
"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Orbitron, Roboto_Condensed } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
})

interface TicketType {
  id: string
  name: string
  description: string
  price: number
  currency: string
  available: boolean
  deadline: string
}

interface CheckoutFormProps {
  selectedTicket: TicketType
  onBack: () => void
  onSuccess: (orderId: string) => void
}

export function CheckoutForm({ selectedTicket, onBack, onSuccess }: CheckoutFormProps) {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [country, setCountry] = useState("")
  const [isStudent, setIsStudent] = useState(false)
  const [wantsGalaDinner, setWantsGalaDinner] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        setEmail(user.email || "")
        // You might want to fetch profile data here to pre-fill other fields
      }
    }
    getUser()
  }, [supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // 1. Create an order in your database
      const orderResponse = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketTypeId: selectedTicket.id,
          userEmail: email,
          firstName,
          lastName,
          affiliation,
          country,
          isStudent,
          wantsGalaDinner,
        }),
      })

      if (!orderResponse.ok) {
        throw new Error("Failed to create order.")
      }

      const orderData = await orderResponse.json()
      const { orderId, totalAmount, currency } = orderData

      // 2. Create a payment session with SumUp
      const paymentResponse = await fetch("/api/payments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          amount: totalAmount,
          currency,
        }),
      })

      if (!paymentResponse.ok) {
        throw new Error("Failed to create payment session.")
      }

      const paymentData = await paymentResponse.json()

      // 3. Redirect to SumUp checkout page
      if (paymentData.paymentSession.checkoutUrl) {
        window.location.href = paymentData.paymentSession.checkoutUrl
      } else {
        throw new Error("No checkout URL received from payment provider.")
      }
    } catch (err: any) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return (
    <div
      className={`${orbitron.variable} ${robotoCondensed.variable} max-w-2xl mx-auto bg-gradient-to-br from-[#0D1858] to-[#162A8D] p-8 rounded-lg shadow-2xl text-white`}
    >
      <div className="text-center mb-8">
        <h2 className="font-orbitron text-3xl font-bold uppercase">Complete Your Registration</h2>
        <p className="font-roboto-condensed text-lg text-gray-300 mt-2">
          You are registering for: <span className="font-bold text-[#85AFFB]">{selectedTicket.name}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 font-roboto-condensed">
        {/* User Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-300">
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              className="bg-white/10 border-white/20 focus:ring-[#85AFFB] focus:border-[#85AFFB]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-300">
              Last Name
            </Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
              className="bg-white/10 border-white/20 focus:ring-[#85AFFB] focus:border-[#85AFFB]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={!!user} // Disable if user is logged in
            className="bg-white/10 border-white/20 focus:ring-[#85AFFB] focus:border-[#85AFFB] disabled:opacity-70"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="affiliation" className="text-gray-300">
            Affiliation / Institution
          </Label>
          <Input
            id="affiliation"
            type="text"
            placeholder="e.g., University of Innovation"
            value={affiliation}
            onChange={e => setAffiliation(e.target.value)}
            required
            className="bg-white/10 border-white/20 focus:ring-[#85AFFB] focus:border-[#85AFFB]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="text-gray-300">
            Country
          </Label>
          <Select onValueChange={setCountry} value={country} required>
            <SelectTrigger className="w-full bg-white/10 border-white/20 focus:ring-[#85AFFB] focus:border-[#85AFFB]">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent className="bg-[#162A8D] text-white border-white/20">
              {/* Add a comprehensive list of countries here */}
              <SelectItem value="USA">United States</SelectItem>
              <SelectItem value="DEU">Germany</SelectItem>
              <SelectItem value="JPN">Japan</SelectItem>
              {/* ... more countries */}
            </SelectContent>
          </Select>
        </div>

        {/* Options */}
        <div className="space-y-4 pt-4">
          {selectedTicket.name.toLowerCase().includes("student") && (
            <div className="flex items-center space-x-3">
              <Checkbox
                id="isStudent"
                checked={isStudent}
                onCheckedChange={() => setIsStudent(!isStudent)}
                className="border-white/30 data-[state=checked]:bg-[#85AFFB]"
              />
              <Label htmlFor="isStudent" className="text-gray-300 cursor-pointer">
                I confirm I am a student and will provide proof upon request.
              </Label>
            </div>
          )}
          <div className="flex items-center space-x-3">
            <Checkbox
              id="galaDinner"
              checked={wantsGalaDinner}
              onCheckedChange={() => setWantsGalaDinner(!wantsGalaDinner)}
              className="border-white/30 data-[state=checked]:bg-[#85AFFB]"
            />
            <Label htmlFor="galaDinner" className="text-gray-300 cursor-pointer">
              I would like to attend the Gala Dinner (additional fee may apply).
            </Label>
          </div>
        </div>

        {/* Total and Submission */}
        <div className="pt-6 text-center">
          <div className="mb-6">
            <p className="font-roboto-condensed text-xl">Total Amount</p>
            <p className="font-orbitron text-4xl font-bold text-[#85AFFB]">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: selectedTicket.currency,
              }).format(selectedTicket.price)}
            </p>
          </div>

          {error && <p className="text-red-400 mb-4">{error}</p>}

          <div className="flex items-center justify-center space-x-4">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="border-[#85AFFB] text-[#85AFFB] hover:bg-[#85AFFB] hover:text-[#0D1858] w-40 h-12 font-orbitron uppercase"
              disabled={isLoading}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#FE6448] to-[#E53E3E] hover:from-[#E53E3E] hover:to-[#FE6448] w-40 h-12 font-orbitron uppercase text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
