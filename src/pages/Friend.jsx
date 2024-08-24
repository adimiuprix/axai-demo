import '../App.css'

function Friend() {
  return (
    <>
            <main class="min-h-screen overflow-hidden rounded-t-3xl bg-base-100 p-4 pb-36">
                <header class="flex flex-col justify-center items-center min-h-[80vh]">
                    <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e" width="250" alt=""/>
                    <h1 class="text-center my-8">Invite friends and get more with AxAi</h1>
                    <button class="btn rounded-full px-8 py-4 capitalize btn-primary">Invite friends</button>
                </header>
            </main>
    </>
  )
}

export default Friend
