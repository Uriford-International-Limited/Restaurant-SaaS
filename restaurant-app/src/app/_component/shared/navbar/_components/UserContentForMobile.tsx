"use client";

import { Button } from "@/components/ui/button";
import facebook from "../../../../../../public/facebook.svg";
import google from "../../../../../../public/google.svg";
import apple from "../../../../../../public/apple.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import Logo from "@/components/ui/Logo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { User, X } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const UserContentForMobile = () => {
  const { data: session } = useSession();

  return (
    <div className="sm:hidden ">
      {session ? (
        <div>
          {/* checkbox */}
          <input type="checkbox" id="menuToggle" className="hidden peer" />

          <label htmlFor="menuToggle" className="peer-checked:hidden">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                width={100}
                height={100}
                alt="Profile picture"
                className="size-8 rounded-full"
              />
            ) : (
              <User className="bg-accent p-1.5 size-10 rounded-full" />
            )}
          </label>

          {/* Main user content */}

          <div className="absolute bg-white top-0 left-0 w-full h-screen -translate-x-full peer-checked:translate-0 transition duration-150">
            <div className="flex justify-between items-center p-4 pb-18 border-b">
              <Logo />
              <label
                htmlFor="menuToggle"
                className="cursor-pointer flex items-center"
              >
                <X className="mr-1" />
              </label>
            </div>

            <ul className="p-3">
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Profile
              </li>
              <DropdownMenuSeparator />
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Pandapay
              </li>
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Subscribe to free delivery
              </li>
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Orders & recording
              </li>
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Voucher
              </li>
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Panda rewards
              </li>
              <DropdownMenuSeparator />
              <Select>
                <SelectTrigger className="w-full text-base border-none outline-none bg-transparent shadow-none">
                  <SelectValue placeholder="Languages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="bangla">Bangla</SelectItem>
                </SelectContent>
              </Select>
              <li className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
                Help center
              </li>
              <DropdownMenuSeparator />
              <li
                className="py-1.5 px-2.5 hover:bg-accent rounded-sm"
                onClick={() => signOut()}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Drawer>
          <DrawerTrigger asChild>
            <User className="bg-accent p-1.5 size-10 rounded-full" />
          </DrawerTrigger>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader className="flex">
                <DrawerTitle>Welcome!</DrawerTitle>
                <DrawerDescription>
                  Sign up or log in to continue
                </DrawerDescription>

                <DrawerClose asChild className="absolute right-4 top-4">
                  <Button
                    variant="outline"
                    className="rounded-full size-9 shadow-md"
                  >
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <div className="grid gap-4 px-5">
                <Button
                  disabled
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-[15px] h-11 text-white bg-[#1877F2] grid grid-cols-4"
                >
                  <Image
                    src={facebook}
                    width={100}
                    height={100}
                    alt="facebook"
                    className="size-6"
                  />
                  Continue with Facebook
                </Button>
                <Button
                  onClick={() => signIn("google")}
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-[15px] h-11 hover:bg-gray-300/50 grid grid-cols-4"
                >
                  <Image
                    src={google}
                    width={100}
                    height={100}
                    alt="google"
                    className="size-6"
                  />
                  Continue with Google
                </Button>
                <Button
                  disabled
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-[15px] h-11 text-white bg-[#000000] grid grid-cols-4"
                >
                  <Image
                    src={apple}
                    width={100}
                    height={100}
                    alt="apple"
                    className="size-6"
                  />
                  Continue with Apple
                </Button>
                <Separator className="my-2" />
                <Button size="lg" className="cursor-pointer text-[15px] h-11 ">
                  Login
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer text-[15px] h-11"
                >
                  Sign up
                </Button>
              </div>

              <DrawerFooter>
                <p className="text-sm text-gray-500">
                  By signing up, you agree to our
                  <span className="text-secondary">
                    {" "}
                    Terms and Conditions
                  </span>{" "}
                  and
                  <span className="text-secondary"> Privacy Policy.</span>
                </p>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default UserContentForMobile;
