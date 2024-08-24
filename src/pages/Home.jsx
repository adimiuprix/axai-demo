import '../App.css'
import Logo from '../assets/logo.png'

function Home() {
  return (
    <>
        <main class="min-h-screen overflow-hidden rounded-t-3xl bg-base-100 p-4 pb-36">
            <header class="hero min-h-48">
                <div class="hero-content flex-col text-center">
                    <img src={Logo} width="150" alt="Logo" />
                    <h1>56754 Axai</h1>
                    <button class="btn rounded-full px-8 py-4 capitalize btn-primary self-stretch">Withdraw</button>
                </div>
            </header>
            <div class="divider"></div>
            <section class="py-4">
                <ul>
                    <li class="flex items-center justify-between gap-4 p-4">
                        <div class="user__profile flex flex-1 basis-32 items-center gap-4">
                            <img src={Logo} width="40" alt="" />
                            <span>@shakichowdhury1</span>
                        </div>
                        <button class="btn rounded-full px-8 py-4 capitalize flex-1">Verify</button>
                    </li>
                </ul>
            </section>
            <section class="py-4">
                <h2>Earnings</h2>
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center justify-between gap-4 p-4 border border-secondary rounded-lg">
                        <div class="grid flex-1 basis-48 grid-cols-[50px_1fr] items-center gap-x-4">
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt="" class="row-span-2" />
                            <span class="font-bold">Follow on Telegram</span><span>+2.500 on AxAi</span>
                        </div>
                        <button class="btn rounded-full px-8 py-4 capitalize btn-primary flex-1">Go</button>
                    </li>
                    <li class="flex items-center justify-between gap-4 p-4 border border-secondary rounded-lg">
                        <div class="grid flex-1 basis-48 grid-cols-[50px_1fr] items-center gap-x-4">
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt="" class="row-span-2" />
                            <span class="font-bold">Follow on X</span><span>+2.500 on AxAi</span>
                        </div>
                        <button class="btn rounded-full px-8 py-4 capitalize btn-primary flex-1">Go</button>
                    </li>
                </ul>
                <button class="btn rounded-full px-8 py-4 capitalize btn-outline btn-primary btn-block my-4">More earnings</button>
            </section>
        </main>
    </>
  )
}

export default Home
