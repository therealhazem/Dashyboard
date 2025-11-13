import { Home, Inbox, Calendar, Search, Settings, User2, ChevronDown, ChevronUp, Plus, Projector, UserRound as profile, UsersRound as users, BadgeDollarSign as payments } from "lucide-react"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Collapsible } from "@radix-ui/react-collapsible"
import { CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home
    },
    {
        title: "Profile",
        url: "/users/hazemelgindy",
        icon: profile
    },
    {
        title: "Inbox",
        url: "/",
        icon: Inbox
    },
    {
        title: "Payments",
        url: "/payments",
        icon: payments
    },
    {
        title: "Users",
        url: "/users",
        icon: users
    },
    {
        title: "Calendar",
        url: "/",
        icon: Calendar
    },
    {
        title: "Search",
        url: "/",
        icon: Search
    },
    {
        title: "Settings",
        url: "/",
        icon: Settings
    }
]

const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Image src="https://avatars.githubusercontent.com/u/140704105?v=4" className="rounded-full" alt="Logo" width={25} height={25} />
                                <span> Hazem&apos;s Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarSeparator />

            </SidebarHeader>


            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {item.title === "Inbox" && (
                                        <SidebarMenuBadge>30</SidebarMenuBadge>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus /><span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <Plus />
                                        Add Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Collapsabile */}
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Collapsible Group
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <Projector />
                                                See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <Plus />
                                                Add Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>
                {/* Nested */}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <Plus />
                                                Add Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <Plus />
                                                Add Category
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> Hazem Elgindy <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Accounts</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Sign Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarFooter>
        </Sidebar >
    )
}

export default AppSidebar