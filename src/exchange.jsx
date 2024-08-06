import './App.css'

function Earn() {
  return (
    <>
        <div class="bg-base-300">
            <header class="navbar px-4">
                <button class="flex-1">
                    <svg viewBox="0 0 448 512" width="1.06em" height="1.2em">
                        <path fill="currentColor" d="m257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3"></path>
                    </svg>
                </button>
                <button class="flex-none">
                    <svg viewBox="0 0 512 512" width="1.2em" height="1.2em">
                        <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72m104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72m-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72"></path>
                    </svg>
                </button>
            </header>
            <main class="min-h-screen overflow-hidden rounded-t-3xl bg-base-100 p-4 pb-36">
                <header class="hero min-h-48">
                    <div class="hero-content flex-col text-center">
                        <h1 class="text-base font-normal">Total Balance</h1>
                        <p class="text-5xl font-bold my-4">$960.50</p>
                        <section class="join rounded-xl overflow-hidden"><button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Deposit</button><button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Withdraw</button><button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Trade</button></section>
                    </div>
                </header>
                <div class="divider"></div>
                <section>
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center justify-between gap-4 p-4 rounded-lg shadow-md">
                            <div class="user__profile flex basis-32 items-center gap-4"><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt=""><span>@shakichowdhury1</span></div>
                            <div class="flex flex-col"><span class="text-sm">100</span><span class="font-bold">$0.00</span></div>
                        </li>
                        <li class="flex items-center justify-between gap-4 p-4 rounded-lg shadow-md">
                            <div class="user__profile flex basis-32 items-center gap-4"><img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt=""><span>apa kek</span></div>
                            <div class="flex flex-col"><span class="text-sm">200</span><span class="font-bold">$0.00</span></div>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
        <nav class="btn-nav-sm btm-nav text-sm">
            <a href="/" class="">
                <svg viewBox="0 0 576 512" width="1.36em" height="1.2em">
                    <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"></path>
                </svg>
                <span>home</span>
            </a>
            <a href="/earn" class="">
                <svg viewBox="0 0 512 512" width="1.2em" height="1.2em">
                    <path fill="currentColor" d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3M320 128c106 0 192-28.7 192-64S426 0 320 0S128 28.7 128 64s86 64 192 64M0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4m416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5zM192 160C86 160 0 195.8 0 240s86 80 192 80s192-35.8 192-80s-86-80-192-80m219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8c29.5 14.3 51.2 33.5 60 57.2"></path>
                </svg>
                <span>earn</span>
            </a>
            <a href="/friends" class="">
                <svg viewBox="0 0 640 512" width="1.5em" height="1.2em">
                    <path fill="currentColor" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2M480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96m48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112"></path>
                </svg>
                <span>friends</span>
            </a>
            <a href="/leaders" class="">
                <svg viewBox="0 0 576 512" width="1.36em" height="1.2em">
                    <path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7c31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7c39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24M99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2c-15.1-5.2-29.2-12.4-41.7-21.4M512 144c0 16.1-17.7 36.1-35.3 48.8c-12.5 9-26.7 16.2-41.8 21.4c7-25 11.8-53.6 12.8-86.2H512z"></path>
                </svg>
                <span>leaders</span>
            </a>
            <a href="/exchange" class="router-link-active text-primary border-t border-primary bg-gradient-to-b from-primary/10 to-transparent" aria-current="page">
                <svg viewBox="0 0 576 512" width="1.36em" height="1.2em">
                    <path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7c31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7c39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24M99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2c-15.1-5.2-29.2-12.4-41.7-21.4M512 144c0 16.1-17.7 36.1-35.3 48.8c-12.5 9-26.7 16.2-41.8 21.4c7-25 11.8-53.6 12.8-86.2H512z"></path>
                </svg>
                <span>exchange</span>
            </a>
        </nav>
    </>
  )
}

export default Earn
