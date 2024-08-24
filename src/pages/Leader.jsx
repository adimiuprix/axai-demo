import '../App.css'

function Leader() {
  return (
    <>
        <main class="min-h-screen overflow-hidden rounded-t-3xl bg-base-100 p-4 pb-36">
            <header class="hero min-h-48">
                <div class="hero-content flex-col text-center">
                    <h1>Leaderboard</h1>
                    <div class="flex items-center justify-between gap-8 py-4 text-left">
                        <img src="/assets/profile-W2spSLgN.png" width="50" alt="" class="mask mask-circle"/>
                        <div class="flex-1">
                            <p class="font-bold">@shakibchowdury1</p>
                            <p class="text-sm">2500 AxAi</p>
                        </div>
                        <span>#10.000</span>
                    </div>
                    <button class="btn rounded-full px-8 py-4 capitalize btn-primary btn-block">More earnings</button>
                </div>
            </header>
            <div class="divider"></div>
            <section>
                <h2 class="text-lg">3 Leaders</h2>
                <ul class="flex flex-col">
                    <li class="flex items-center justify-between gap-4 p-4">
                        <img src="/assets/profile-W2spSLgN.png" width="50" height="50" alt="" class="mask mask-circle"/>
                        <div class="flex-1">
                            <p class="font-bold">Crypto God</p>
                            <p class="text-sm">92.98 AxAi</p>
                        </div>
                        <span class="font-bold">#1</span>
                    </li>
                    <li class="flex items-center justify-between gap-4 p-4">
                        <img src="/assets/profile-W2spSLgN.png" width="50" height="50" alt="" class="mask mask-circle"/>
                        <div class="flex-1">
                            <p class="font-bold">Siapa kek</p>
                            <p class="text-sm">92.98 AxAi</p>
                        </div>
                        <span class="font-bold">#2</span>
                    </li>
                    <li class="flex items-center justify-between gap-4 p-4">
                        <img src="/assets/profile-W2spSLgN.png" width="50" height="50" alt="" class="mask mask-circle"/>
                        <div class="flex-1">
                            <p class="font-bold">Adi NodeJS</p>
                            <p class="text-sm">82.00 AxAi</p>
                        </div>
                        <span class="font-bold">#4</span>
                    </li>
                </ul>
            </section>
        </main>
    </>
  )
}

export default Leader
