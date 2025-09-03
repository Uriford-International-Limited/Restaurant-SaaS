"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
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

const UserContent = () => {
  const [x] = useState(false);

  return (
    <div className="hidden sm:block">
      {!x ? (
        /* before login */
        <div className="">
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
                    size="lg"
                    variant="outline"
                    className="cursor-pointer text-[15px] h-11 text-white bg-[#1877F2]"
                  >
                    Continue with Facebook
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer text-[15px] h-11 hover:bg-gray-300/50"
                  >
                    Continue with Google
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer text-[15px] h-11 text-white bg-[#000000]"
                  >
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
                <User />
                Al amin
                <ChevronDown color="var(--primary)" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default UserContent;
