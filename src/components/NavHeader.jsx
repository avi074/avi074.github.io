import {
  IconButton,
  Navbar,
  Tooltip,
  Typography,
} from "@material-tailwind/react"
import { FaMoon, FaSun } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

function NavHeader() {
  const [activeLink, setActiveLink] = useState("")
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleTheme = () => setDarkTheme((val) => !val)
  const location = useLocation()

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme)
  }, [darkTheme])

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Certifications",
      link: "/certifications",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const navList = (
    <>
      {links.map((li, idx) => (
        <Tooltip
          key={`link-${li.name}-${idx}`}
          content={li.name}
          className='bg-blue-gray-800 '>
          <NavLink
            to={li.link}
            className={`link-tag ${activeLink == li.link ? "active-link" : ""}`}
            onClick={() => setActiveLink(li.link)}>
            {li.name}
          </NavLink>
        </Tooltip>
      ))}
    </>
  )

  return (
    <>
      <Navbar
        shadow
        className='rounded-t-none sticky top-0 z-50 text-inherit font-medium flex xl:justify-between items-center px-8 dark:bg-[#000713]'>
        <Typography
          as='a'
          href='/'
          className='mr-4 cursor-pointer py-1.5 text-2xl hover:uppercase font-medium lg:w-1/4'
          onClick={() => setActiveLink("/")}>
          Avinash Gautam
        </Typography>

        <div className='hidden lg:flex items-center justify-evenly min-w-fit w-3/5'>
          {navList}
        </div>

        <Tooltip content='Change Theme' className='bg-blue-gray-900'>
          <IconButton
            variant='gradient'
            color={darkTheme ? "white" : "gray"}
            className='rounded-full bg-opacity-95 p-0 !size-8 ml-auto mr-4 border-0 hover:ring-2'
            onClick={toggleTheme}>
            {darkTheme ? <FaSun size={16} /> : <FaMoon size={20} />}
          </IconButton>
        </Tooltip>
      </Navbar>
    </>
  )
}

export default NavHeader
