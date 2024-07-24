import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
    return ( 
        <div className="guest">
            <h1>Welcome Guest</h1>
            <p>Please sign in to manage your transactions</p>
            <SignInButton />
        </div>
     );
}
 
export default Guest;