<nav x-data="{ open: false }" className="nav">
      <div className="min-h-screen">
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div
              x-data="{ open: true }"
              className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
            >
              <div className="flex flex-row items-center justify-between p-4">
                <a
                  href="#"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  Flowtrail UI
                </a>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={() => (open = !open)}
                >
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    <path
                      x-show="!open"
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      x-show="open"
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className={`flex-col flex-grow ${open ? '' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                <Link
                  to="/"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={isLoggedIn ? handleLogout : undefined}
                >
                  {isLoggedIn ? 'Logout' : 'Login'}
                </Link>
                <Link
                  to="/allusers"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Get All Users
                </Link>
                <Link
                  to="/fuelpricecalender"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Fuel Price
                </Link>
                <Link
                  to="/getuser"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Get User
                </Link>
                <Link
                  to="/updateuser"
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >
                  Update User
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>



<nav x-data="{ open: false }" className="nav">
      <ul className="navbar flex flex-row justify-end ml-auto">
        <li className="mb-4 bg-violet-500 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          {isLoggedIn ? (
            <Link to="/" onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/">Login</Link>
          )}
        </li>

        <li className="mb-4 bg-violet-400 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          <Link to="/allusers">Get All Users</Link>
        </li>

        <li className="mb-4 bg-violet-300 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          <Link to="/fuelpricecalender">Fuel Price</Link>
        </li>

        <li className="mb-4 bg-violet-200 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          <Link to="/getuser">Get User</Link>
        </li>

        <li className="mb-4 bg-violet-100 border p-2 transition-transform transform hover:scale-110 hover:border-t hover:border-r hover:border-b hover:border-l hover:border-black">
          <Link to="/updateuser">Update User</Link>
        </li>
      </ul>
    </nav>