import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas);

const NavDashboard = (props) => {
  const {pageTitle, sidebar, toggleSidebar} = props

  return (
    <nav className="fixed px-2 top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                data-drawer-target={sidebar}
                data-drawer-toggle={sidebar}
                aria-controls={sidebar}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <FontAwesomeIcon icon="fa-solid fa-bars" size="lg" />
              </button>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                {pageTitle}
              </span>
            </div>

            <div>
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <FontAwesomeIcon icon="fa-solid fa-circle-user" size="2xl" color="white"/>
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavDashboard