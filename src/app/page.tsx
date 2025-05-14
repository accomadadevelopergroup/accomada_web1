import Image from "next/image";
import brandImage from "@/public/Brand Image.png";

export default function Home() {
  const flats = [
    {
      id: 1,
      title: "Accomada 1: Comfy 2BHK near HSR, Bellandur, Wipro Sarjapur Rd",
      description: `Welcome to a calm and luxurious 2BHK apartment near ORR, HSR Layout, Sarjapura Road, and Bellandur, at the heart of Bangalore’s IT hubs and startups.\n\nFully equipped and well-furnished, it’s surrounded by popular shopping outlets, breweries, pubs, and a variety of food chains and cafes. Hosted by professionals who value honesty, exceptional service, and transparency, ensuring a memorable and comfortable stay.`,
      pax: 4,
      bed: 2,
      checkin: "Self check-in",
      whatsapp: "https://wa.me/919561288234?text=Hi! I'm interested in booking Accomada 1. Please share the details."
    },
    {
      id: 2,
      title: "Accomada 2: Cozy 2BHK – HSR, Bellandur, SJR Rd",
      description: `Welcome to a calm and luxurious 2BHK apartment near ORR, HSR Layout, Sarjapura Road, and Bellandur, at the heart of Bangalore’s IT hubs and startups.\n\nFully equipped and well-furnished, it’s surrounded by popular shopping outlets, breweries, pubs, and a variety of food chains and cafes. Hosted by professionals who value honesty, exceptional service, and transparency, ensuring a memorable and comfortable stay.`,
      pax: 4,
      bed: 2,
      checkin: "Self check-in",
      whatsapp: "https://wa.me/919561288234?text=Hi! I'm interested in booking Accomada 2. Please share the details."
    }
  ];

  return (
    <main className="flex flex-col gap-10 p-6 max-w-5xl mx-auto">
      <section className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={brandImage}
            alt="Accomada Brand Sign"
            className="rounded-xl w-full h-auto object-contain"
            priority
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700 text-sm leading-relaxed">
          <h1 className="text-2xl font-bold mb-2">📌 Brand Purpose</h1>
          <p className="mb-4">
            Accomada is a tech-first short-term rental brand offering fully-furnished,
            work-from-stay-ready homes across India. We sit at the intersection of hospitality,
            accommodation services, and travel tech—bringing together consistent guest experience,
            flexible living, and operational efficiency through technology.
          </p>
          <h2 className="text-xl font-semibold mb-2">🧭 Brand Values</h2>
          <ul className="list-disc list-inside space-y-2">
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
            <h2 className="text-xl font-semibold mb-2">{flat.title}</h2>
            <p className="text-gray-600 whitespace-pre-line mb-3">{flat.description}</p>
            <ul className="text-sm text-gray-500 mb-4">
              <li>🛏 Beds: {flat.bed}</li>
              <li>👥 Pax: {flat.pax}</li>
              <li>🔑 {flat.checkin}</li>
            </ul>
            <a
              href={flat.whatsapp}
              target="_blank"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
