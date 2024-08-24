import '../App.css'

function Exchange() {
  return (
    <>
        <main class="min-h-screen overflow-hidden rounded-t-3xl bg-base-100 p-4 pb-36">
            <header class="hero min-h-48">
                <div class="hero-content flex-col text-center">
                    <h1 class="text-base font-normal">Total Balance</h1>
                    <p class="text-5xl font-bold my-4">$960.50</p>
                    <section class="join rounded-xl overflow-hidden"><button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Deposit</button><button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Withdraw</button>
                        <button class="btn rounded-full px-8 py-4 capitalize btn-primary rounded-none">Trade</button>
                    </section>
                </div>
            </header>
            <div class="divider"></div>
            <section>
                <ul class="flex flex-col gap-4">
                    <li class="flex items-center justify-between gap-4 p-4 rounded-lg shadow-md">
                        <div class="user__profile flex basis-32 items-center gap-4">
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt=""/>
                            <span>@shakichowdhury1</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm">100</span>
                            <span class="font-bold">$0.00</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between gap-4 p-4 rounded-lg shadow-md">
                        <div class="user__profile flex basis-32 items-center gap-4">
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="40" alt=""/><span>apa kek</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm">200</span>
                            <span class="font-bold">$0.00</span>
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    </>
  )
}

export default Exchange
