"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ChevronDown, User } from "lucide-react";
import facebook from "../../../../../../public/facebook.svg";
import google from "../../../../../../public/google.svg";
import apple from "../../../../../../public/apple.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const UserContent = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:block">
      {!session ? (
        /* before login */
        <div>
          <Dialog>
            <form>
              <div className="flex gap-7">
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    Log in
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button className="hidden md:block cursor-pointer">
                    Sign up for free delivery
                  </Button>
                </DialogTrigger>
              </div>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold">
                    Welcome!
                  </DialogTitle>
                  <DialogDescription className="font-semibold">
                    Sign up or log in to continue
                  </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4">
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

                  <Button
                    size="lg"
                    className="cursor-pointer text-[15px] h-11 "
                  >
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

                <DialogFooter>
                  <p className="text-sm text-gray-500">
                    By signing up, you agree to our
                    <span className="text-secondary">
                      {" "}
                      Terms and Conditions
                    </span>{" "}
                    and
                    <span className="text-secondary"> Privacy Policy.</span>
                  </p>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      ) : (
        <div>
          {/* after login */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    width={100}
                    height={100}
                    alt="Profile picture"
                    className="size-6 rounded-full"
                  />
                ) : (
                  <User />
                )}
                {session.user?.name}
                <ChevronDown color="var(--primary)" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-75 p-3" align="start">
              <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
              <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Pandapay</DropdownMenuItem>
                <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Subscribe to free Delivery</DropdownMenuItem>
                <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Orders and Recording</DropdownMenuItem>
                <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Vouchers</DropdownMenuItem>
                <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Panda rewards</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer">Help Center </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut()}
                className="text-base hover:bg-secondary/15 p-3 px-4 cursor-pointer"
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default UserContent;
