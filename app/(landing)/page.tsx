import { UserDropdown } from "@/components/user-dropdown";
import Head from "next/head";
import { cookies } from "next/headers";
import Link from "next/link";
import { auth } from "../(auth)/auth";

export default async function Home() {
  const newChat = `/recommend`
  const [session, cookieStore] = await Promise.all([auth(), cookies()]);
  const user = session?.user;
  return (
    <>
      <Head>
        <title>
          Movie Therapy | Personalized Movie Recommendations Based on Your
          Emotions
        </title>
        <meta
          name="description"
          content="Get perfect movie suggestions tailored to your current mood. Whether you're happy, sad, angry or nostalgic, we'll find films that match your emotions."
        />
        <meta
          name="keywords"
          content="movie recommendations, films by mood, what to watch, emotional movies, personalized suggestions"
        />
        <meta
          property="og:title"
          content="Movie Therapy | Movies That Match Your Feelings"
        />
        <meta
          property="og:description"
          content="AI-powered movie suggestions based on your emotions"
        />
        <link rel="canonical" href="https://movie-therapy.com" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Movie Therapy
          </div>
          <div className="flex gap-4">
            {user ? (
              <UserDropdown user={user} />
            ) : (
              <Link
                href="/login"
                className="text-gray-600 hover:text-black px-4 py-2"
              >
                Sign In
              </Link>
            )}
            <Link
              href={newChat}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent leading-tight">
            AI that understands
            <br />
            your movie mood
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Describe how you feel and what you need. Our AI will analyze
            thousands of films to find your perfect match and improve your
            feelings, fixing them to live a better life.
          </p>

          <div className="bg-white p-1 rounded-xl shadow-lg inline-flex">
            <Link
              href={newChat}
              className="bg-black text-white font-medium py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition"
            >
              Try Movie Therapy →
            </Link>
          </div>

          <div id="examples" className="mt-16 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 p-4 border-b border-gray-200 text-left">
              <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="p-6 bg-white text-left">
              <div className="flex">
                <div className="mr-4 text-gray-400">User:</div>
                <div>
                  "I'm feeling nostalgic for my childhood and want something
                  heartwarming"
                </div>
              </div>
              <div className="flex mt-4">
                <div className="mr-4 text-gray-400">Movie Therapy:</div>
                <div>
                  <p>
                    Based on your mood, I recommend{" "}
                    <span className="font-semibold">The Sandlot (1993)</span> -
                    a classic coming-of-age story about childhood summers,
                    friendship, and baseball.
                  </p>
                  <p className="mt-2 text-gray-600">
                    Why it fits: 92% match for nostalgia • 88% heartwarming
                    score
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            How our AI works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Analysis</h3>
              <p className="text-gray-600">
                Our AI processes your mood description and matches it with
                films' emotional arcs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Metrics</h3>
              <p className="text-gray-600">
                See match percentages for mood alignment and emotional impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Private & Secure</h3>
              <p className="text-gray-600">
                Your mood data is never stored or shared with third parties.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to find movies that truly resonate?
            </h2>
            <p className="text-xl mb-10 text-gray-300">
              Join thousands discovering films matched to their emotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
              href={newChat}
                className="bg-white text-black font-medium py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
              >
                Try Movie Therapy Free
              </Link>
              <a
                href="#examples"
                className="border-2 border-gray-600 font-medium py-3 px-8 rounded-lg text-lg hover:bg-gray-800 transition"
              >
                See Examples
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
