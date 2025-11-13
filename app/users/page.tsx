import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const UserPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl">This Page Should have Contained Users List, BUT!</h1>
            <h2>Unfortunately i couldn&apos;t have time to do it so, Apologize! 🤣</h2>
            <h3>For now, Go Check My Profile 👇</h3>
            <br />
            <Button className="py-5 px-5">
                <Link href="/users/hazemelgindy" className="flex flex-row items-center justify-between gap-4">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/140704105?v=4" />
                        <AvatarFallback>HE</AvatarFallback>
                    </Avatar>
                    <div>
                        Hazem Elgindy
                    </div>
                </Link>
            </Button>
            <br />

            <h2>Hopefully, after finishing my ecommerce Website and after i link this dashboard with it, this page will be completed</h2>

            <h2>So please, Wish my luck!</h2>
        </div>
    )
}

export default UserPage