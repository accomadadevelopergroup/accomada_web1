"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const [activeFlat, setActiveFlat] = useState(null);

  const flats = [
    {
      id: 1,
      title: "Accomada 1: Comfy 2BHK near HSR, Bellandur, Wipro Sarjapur Rd",
      images: [
        "Hall1.png", "Hall2.png", "Hall3.png", "hall4.png",
        "Kitchen.png",
        "Bed1.png", "Bed1_1.png", "Bed2.png", "Bed2_1.png",
        "Washroom1.png", "washroom2.png",
        "Appliances.png", "workstation.png", "worktstation_1.png"
      ],
      folder: "flat1",
      description: `Welcome to a calm and luxurious 2BHK apartment near ORR, HSR Layout, Sarjapura Road, and Bellandur, at the heart of Bangalore’s IT hubs and startups.\n\nFully equipped and well-furnished, it’s surrounded by popular shopping outlets, breweries, pubs, and a variety of food chains and cafes. Hosted by professionals who value honesty, exceptional service, and transparency, ensuring a memorable and comfortable stay.`,
      pax: 4,
      bed: 2,
      checkin: "Self check-in",
      whatsapp: "https://wa.me/919561288234?text=Hi! I'm interested in booking Accomada 1. Please share the details.",
      airbnb: "https://www.airbnb.co.in/rooms/1329103474312116901?guests=1&adults=1&s=67&unique_share_id=895ed79f-b511-4af5-9eb4-5b1e97e46c62"
    },
    {
      id: 2,
      title: "Accomada 2: Cozy 2BHK – HSR, Bellandur, SJR Rd",
      images: [
        "Hall1.png", "Hall2.png", "Hall3.png", "Hall4.png", "Hall5.png",
        "Kitchen.png",
        "Bedroom1.png", "Bedroom2.png", "Bedroom2_1.png",
        "Washroom1.png", "Washroom2.png",
        "Appliances.png", "Workstation.png"
      ],
      folder: "flat2",
      description: `Welcome to a calm and luxurious 2BHK apartment near ORR, HSR Layout, Sarjapura Road, and Bellandur, at the heart of Bangalore’s IT hubs and startups.\n\nFully equipped and well-furnished, it’s surrounded by popular shopping outlets, breweries, pubs, and a variety of food chains and cafes. Hosted by professionals who value honesty, exceptional service, and transparency, ensuring a memorable and comfortable stay.`,
      pax: 4,
      bed: 2,
      checkin: "Self check-in",
      whatsapp: "https://wa.me/919561288234?text=Hi! I'm interested in booking Accomada 2. Please share the details.",
      airbnb: "https://www.airbnb.co.in/rooms/1416055485668202412?guests=1&adults=1&s=67&unique_share_id=805fbb3b-3341-48cc-859a-26f5a568f246"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <main className="flex flex-col gap-10 p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Welcome to Accomada</h1>

      <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Image
            src="/Brand_Image.png"
            alt="Accomada Brand Sign"
            className="rounded-xl w-full h-auto object-contain"
            width={600}
            height={400}
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700 text-base leading-relaxed">
          <h1 className="text-2xl font-bold mb-4">📌 Brand Purpose</h1>
          <p className="mb-6">
            Accomada is a tech-first short-term rental brand offering fully-furnished,
            work-from-stay-ready homes across India. We sit at the intersection of hospitality,
            accommodation services, and travel tech—bringing together consistent guest experience,
            flexible living, and operational efficiency through technology.
          </p>
          <h2 className="text-xl font-semibold mb-3">🧭 Brand Values</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Comfort with Consistency</strong> – Every Accomada stay feels like home, but better.</li>
            <li><strong>Transparency & Trust</strong> – No hidden terms, no unkept promises. What you see is what you get.</li>
            <li><strong>Efficiency through Tech</strong> – Tech-enabled operations that streamline bookings, communication, and property management.</li>
          </ul>
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold text-center mb-8">Our Stays</h1>
        {flats.map(flat => (
          <div
            key={flat.id}
            className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white mb-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{flat.title}</h2>
                <p className="text-gray-600 whitespace-pre-line mb-3">{flat.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  <li>🛏 Beds: {flat.bed}</li>
                  <li>👥 Pax: {flat.pax}</li>
                  <li>🔑 {flat.checkin}</li>
                </ul>
                <div className="flex gap-4 mb-4">
                  <a
                    href={flat.whatsapp}
                    target="_blank"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={flat.airbnb}
                    target="_blank"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    View on Airbnb
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 cursor-pointer" onClick={() => setActiveFlat(flat)}>
                <Image
                  src={`/${flat.folder}/${flat.images[0]}`}
                  alt={flat.title}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Modal for Carousel */}
        {activeFlat && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-3xl w-full relative">
              <button
                className="absolute top-2 right-2 text-lg font-bold text-gray-600 hover:text-black"
                onClick={() => setActiveFlat(null)}
              >
                ✕
              </button>
              <Slider {...settings}>
                {activeFlat.images.map((img, idx) => (
                  <div key={idx}>
                    <Image
                      src={`/${activeFlat.folder}/${img}`}
                      alt={`Image ${idx + 1}`}
                      width={800}
                      height={500}
                      className="rounded-lg mx-auto object-contain"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
