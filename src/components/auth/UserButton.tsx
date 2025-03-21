
import { useState } from 'react';
import { LogIn, UserCircle2, LogOut, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/context/AuthContext';
import AuthModal from './AuthModal';

interface UserButtonProps {
  openSavedBrands: () => void;
}

export default function UserButton({ openSavedBrands }: UserButtonProps) {
  const { user, logout, isLoading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return <Button variant="ghost" size="sm" disabled>Loading...</Button>;
  }

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
              <UserCircle2 className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex flex-col space-y-1 p-2">
              <p className="text-sm font-medium leading-none">{user.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={openSavedBrands} className="cursor-pointer">
              <Bookmark className="mr-2 h-4 w-4" />
              <span>Saved Brands</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setAuthModalOpen(true)}
          className="gap-2"
        >
          <LogIn className="h-4 w-4" />
          Sign In
        </Button>
      )}
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </>
  );
}
