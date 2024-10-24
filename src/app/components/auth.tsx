import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs" 

export const Auth = () => {
  return (
    <div>
        <SignedOut>
        <SignInButton><Button>Sign In</Button></SignInButton>
        </SignedOut>
        <SignedIn>
        <UserButton></UserButton>
        </SignedIn>
    </div>
  )
}
