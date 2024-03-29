import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-30 w-30 bg-dark">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/public/image/hero.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Get your Product</h1>
      <p className="py-6"></p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    
  )
}
