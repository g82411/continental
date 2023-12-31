import LoginBtn from "./loginBtn.jsx";


export default function Example() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex w-screen items-center shadow-lg justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <LoginBtn onClick = {() => {}}/>
      </nav>
    </header>
  )
}
