import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className='max-w-7xl mx-auto px-6 pt-20 pb-32'>
        <div className='text-center max-w-4xl mx-auto'>
          {/* <div className='inline-block mb-6'>
            <span className='px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium'>
              Inspired by Jeff Huang's 14-year productivity system
            </span>
          </div> */}

          <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            Your life's work in
            <br />
            <span className='bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              one text file
            </span>
          </h1>

          <p className='text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto'>
            Stop juggling apps. Track your entire life—meetings, ideas, todos—in
            a single, searchable text file. Just like the pros do.
          </p>

          <div className='flex items-center justify-center gap-4 mb-16'>
            <button
              type='button'
              className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-all'
            >
              Get Started Free
            </button>
            <button
              type='button'
              className='px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold border border-gray-700'
            >
              Watch Demo
            </button>
          </div>

          <div className='text-sm text-gray-500'>
            No credit card required • Free forever • 2-minute setup
          </div>
        </div>

        {/* Hero Image - App Preview */}
        <div className='mt-20 relative'>
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10'></div>
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transform hover:scale-[1.02] transition-transform'>
            {/* Mini App Preview */}
            <div className='bg-gray-950 px-4 py-3 border-b border-gray-800 flex items-center gap-2'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-red-500'></div>
                <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                <div className='w-3 h-3 rounded-full bg-green-500'></div>
              </div>
              <div className='flex-1 text-center text-gray-500 text-xs font-mono'>
                productivity.txt — 51,690 lines
              </div>
            </div>

            <div className='p-8 font-mono text-sm leading-relaxed text-gray-300'>
              <div className='text-blue-400 font-bold mb-3'>2025-12-17</div>
              <div className='space-y-1.5 text-gray-400'>
                <div>9am team standup</div>
                <div className='pl-4'>- reviewed sprint progress ✓</div>
                <div className='pl-4'>- discussed Q1 roadmap</div>
                <div>11am meet with investors</div>
                <div className='pl-4'>- pitched new feature set</div>
                <div className='pl-4'>
                  - secured $500k funding{" "}
                  <span className='text-green-400'>#milestone</span>
                </div>
                <div>
                  lunch with Sarah{" "}
                  <span className='text-purple-400'>#idea</span>
                </div>
                <div className='pl-4'>- brainstormed AI integration</div>
                <div>2pm code review</div>
                <div>4pm customer interviews</div>
                <div className='pl-4'>- users love the simplicity</div>
                <div>write blog post about our journey</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className='bg-gray-800/50 py-20 border-y border-gray-800'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Productivity apps are making you less productive
            </h2>
            <p className='text-xl text-gray-400'>
              Stop context switching. Start accomplishing.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='bg-gray-900 p-8 rounded-xl border border-gray-800'>
              <div className='text-4xl mb-4'>📱</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Too Many Apps
              </h3>
              <p className='text-gray-400'>
                Calendar, notes, todos, meetings—all scattered across different
                tools. Spend more time organizing than doing.
              </p>
            </div>

            <div className='bg-gray-900 p-8 rounded-xl border border-gray-800'>
              <div className='text-4xl mb-4'>🔄</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Lost Context
              </h3>
              <p className='text-gray-400'>
                What did you discuss in that meeting 3 months ago? Good luck
                finding it across Slack, email, and meeting notes.
              </p>
            </div>

            <div className='bg-gray-900 p-8 rounded-xl border border-gray-800'>
              <div className='text-4xl mb-4'>📈</div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Endless Lists
              </h3>
              <p className='text-gray-400'>
                Your todo list keeps growing. Tasks get pushed indefinitely. No
                sense of what you've actually accomplished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Simple by design
            </h2>
            <p className='text-xl text-gray-400'>
              Three steps to reclaim your productivity
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg shadow-blue-500/30'>
                1
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Plan Tonight
              </h3>
              <p className='text-gray-400'>
                Every evening, copy tomorrow's calendar into your text file. See
                exactly what needs to be done.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg shadow-blue-500/30'>
                2
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Work & Note
              </h3>
              <p className='text-gray-400'>
                Throughout the day, add notes, ideas, and outcomes right below
                each task. Your todo becomes your done.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg shadow-blue-500/30'>
                3
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Search Forever
              </h3>
              <p className='text-gray-400'>
                Need to remember something? Search your entire history
                instantly. Everything you've done, in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='bg-gray-800/50 py-20 border-y border-gray-800'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-white mb-6'>
                Everything you need.
                <br />
                Nothing you don't.
              </h2>

              <div className='space-y-6'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>⚡</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      Lightning Fast
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Auto-saves every 2 seconds. Works offline. No loading
                      spinners.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>🔍</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      Powerful Search
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Find anything instantly. Search by date, tags, or keywords
                      across years of notes.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>🏷️</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      Smart Tags
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Use #tags to organize ideas, track projects, and find
                      related entries instantly.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>📅</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      Calendar Sync
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Import tomorrow's schedule with one click. Google Calendar
                      integration included.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>📊</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      See Your Progress
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Track streaks, count meetings, visualize your productivity
                      over time.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center'>
                    <span className='text-blue-400'>🔒</span>
                  </div>
                  <div>
                    <h3 className='text-white font-semibold mb-1'>
                      Private & Secure
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      Your data is encrypted and only accessible by you. Export
                      anytime as .txt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-900 rounded-2xl p-8 border border-gray-800'>
              <div className='font-mono text-sm space-y-4 text-gray-400'>
                <div className='text-blue-400 font-bold'>
                  💡 Real user stories
                </div>
                <div className='border-l-2 border-blue-500 pl-4 py-2'>
                  <p className='text-white mb-2'>
                    "14 years of my career in one searchable file. Game
                    changer."
                  </p>
                  <p className='text-xs text-gray-500'>
                    — Jeff Huang, Professor at Brown University
                  </p>
                </div>
                <div className='border-l-2 border-green-500 pl-4 py-2'>
                  <p className='text-white mb-2'>
                    "Finally quit Notion. This is so much faster and clearer."
                  </p>
                  <p className='text-xs text-gray-500'>
                    — Sarah K., Product Manager
                  </p>
                </div>
                <div className='border-l-2 border-purple-500 pl-4 py-2'>
                  <p className='text-white mb-2'>
                    "Used for 6 months. Can't imagine going back to todo apps."
                  </p>
                  <p className='text-xs text-gray-500'>
                    — Mike R., Startup Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Simple, honest pricing
            </h2>
            <p className='text-xl text-gray-400'>
              Start free. Upgrade when you're ready.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {/* Free */}
            <div className='bg-gray-900 rounded-2xl p-8 border border-gray-800'>
              <h3 className='text-xl font-bold text-white mb-2'>Free</h3>
              <div className='text-4xl font-bold text-white mb-6'>
                $0
                <span className='text-lg text-gray-500 font-normal'>
                  /forever
                </span>
              </div>
              <ul className='space-y-3 mb-8 text-gray-400 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>1 year of history</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Basic search</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Manual backups</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>10 MB storage</span>
                </li>
              </ul>
              <button
                type='button'
                className='w-full px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold'
              >
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className='bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 border-2 border-blue-500 relative transform scale-105 shadow-2xl shadow-blue-500/20'>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                <span className='px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-xs font-bold'>
                  MOST POPULAR
                </span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Pro</h3>
              <div className='text-4xl font-bold text-white mb-6'>
                $5
                <span className='text-lg text-blue-200 font-normal'>
                  /month
                </span>
              </div>
              <ul className='space-y-3 mb-8 text-blue-50 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Everything in Free</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Unlimited history</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Calendar sync (Google)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Advanced search & tags</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Auto daily backups</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-white'>✓</span>
                  <span>Statistics dashboard</span>
                </li>
              </ul>
              <button
                type='button'
                className='w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100'
              >
                Start Free Trial
              </button>
            </div>

            {/* Lifetime */}
            <div className='bg-gray-900 rounded-2xl p-8 border border-gray-800'>
              <h3 className='text-xl font-bold text-white mb-2'>Lifetime</h3>
              <div className='text-4xl font-bold text-white mb-6'>
                $99
                <span className='text-lg text-gray-500 font-normal'>/once</span>
              </div>
              <ul className='space-y-3 mb-8 text-gray-400 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Lifetime access</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Priority support</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Early access to features</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-green-400'>✓</span>
                  <span>Support indie dev ❤️</span>
                </li>
              </ul>
              <button
                type='button'
                className='w-full px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold'
              >
                Buy Lifetime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 border-t border-gray-800'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-5xl font-bold text-white mb-6'>
            Ready to simplify your life?
          </h2>
          <p className='text-xl text-gray-400 mb-12'>
            Join thousands who've ditched complex productivity apps for
            something better.
          </p>
          <button
            type='button'
            className='px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-all'
          >
            Start Your Free Account
          </button>
          <p className='text-sm text-gray-500 mt-6'>
            No credit card required • Export your data anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-gray-800 py-12'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <div className='flex items-center gap-3'>
              <div className='w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center font-bold text-white'>
                T
              </div>
              <span className='text-white font-semibold'>TextFlow</span>
            </div>

            <div className='flex gap-8 text-sm text-gray-400'>
              <a href='#' className='hover:text-white'>
                About
              </a>
              <a href='#' className='hover:text-white'>
                Blog
              </a>
              <a href='#' className='hover:text-white'>
                Privacy
              </a>
              <a href='#' className='hover:text-white'>
                Terms
              </a>
              <a href='#' className='hover:text-white'>
                Contact
              </a>
            </div>

            <div className='text-sm text-gray-500'>
              © 2025 TextFlow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
