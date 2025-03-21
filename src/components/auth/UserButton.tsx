import { useState } from 'react';
import { LogIn, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import AuthModal from './AuthModal';
import { useUser, useAuth, UserButton as ClerkUserButton, SignInButton } from '@clerk/clerk-react';

interface UserButtonProps {
  openSavedBrands: () => void;
}

export default function UserButton({ openSavedBrands }: UserButtonProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Show loading state when Clerk is initializing
  if (!isLoaded) {
    return <Button variant="ghost" size="sm" disabled>Loading...</Button>;
  }

  return (
    <>
      {isSignedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full p-0 h-10 w-10" aria-label="User menu">
              <ClerkUserButton />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex flex-col space-y-1 p-2">
              <p className="text-sm font-medium leading-none">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={openSavedBrands} className="cursor-pointer">
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Saved Brands</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer text-red-600">
              <LogIn className="mr-2 h-4 w-4" />
              <span>Sign Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <SignInButton mode="modal">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </SignInButton>
      )}
    </>
  );
}
