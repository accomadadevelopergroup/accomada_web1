export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Accomada</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Professionally managed, fully-furnished stays for family, friends, business travelers, and remote workers.
        Comfort. Speed. Work-from-home ready.
      </p>
      <a
        href="https://wa.me/919561288234"
        target="_blank"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Book on WhatsApp
      </a>
    </main>
  );
}
