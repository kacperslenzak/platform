// User Button Avatar
'use client'
import { Button } from '@/components/ui/button'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { useCurrentUser } from '@/hooks/user-current-user'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Github, LogOut, Youtube } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { FaDiscord, FaYoutube, FaGithub } from "react-icons/fa"

const UserButton = () => {
  const session = useCurrentUser()
  const router = useRouter()
  const onClick = () => {
    router.push('/auth/register')
  }
  const Logout = async () => {
    signOut();
    router.push('/auth/login')
  }
const style = {
  width: {
    xs: 35,
    md: 40,
  },
  height: {
    xs: 35, 
    md: 40, 
  },
};

  return (
    <>
      {!session ? (
        <>
          <Link href='/auth/register' className='flex md:hidden items-center justify-center  rounded-lg cursor-pointer transition duration-300 hover:bg-white/5 px-2 py-2'>
            <LogOut className='text-slate-100 h-5.5 w-5'/>
          </Link>
          
          <Link  href='/auth/register'
          type="submit"
          className="p-[2px] font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 h-full hidden md:flex"
        >
          <div className="flex items-center px-5 lg:px-7 h-full bg-zinc-800 rounded-md transition duration-300 text-white hover:bg-transparent text-base lg:text-lg py-0.5">
            Sign Up
          </div>
        </Link>
        </>
      ) : (
        
          <DropdownMenu>
            <DropdownMenuTrigger asChild className='cursor-pointer'>
              <Avatar
                src={session.image ? session.image : ''}
                alt="logo"
                className="shadow-md shadow-[#191919] cursor-pointer bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 xs:mt-0.5 ml-0.5 md:my-0"
                sx={style}
              > </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#0E0E0E] border-slate-100/20 w-48'>
              <DropdownMenuLabel className="py-0 pt-1">{session?.name}</DropdownMenuLabel>
              <DropdownMenuLabel className="opacity-70 text-sm font-normal">{session?.email}</DropdownMenuLabel>
              <DropdownMenuSeparator className='bg-slate-100/20'/>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link className="flex" href='https://github.com/NizarAbiZaher'>
                        <FaGithub className="mr-2 mt-0.5 h-4 w-4"/>
                        <span>GitHub</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link className="flex" href='https://www.youtube.com/@NizzyABI'>
                        <FaYoutube className="mr-2 mt-0.5 h-4 w-4"/>
                        <span>Youtube</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link className="flex" href='www.discord.gg/nizar'>
                        <FaDiscord className="mr-2 mt-0.5 h-4 w-4"/>
                        <span>Discord</span>
                    </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className='bg-slate-100/20'/>
              <DropdownMenuItem className='cursor-pointer'>
                <LogOut className='mr-2 h-4 w-4' />
                <button type='submit' onClick={Logout}>Log out</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
       
      )}
    </>
  )
}

export default UserButton
