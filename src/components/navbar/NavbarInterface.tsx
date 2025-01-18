export interface navArrayLink {
    title: string;
    path: string;
    icon: React.ReactNode;
}

export interface NavListDrawerProps {
    navArrayLinks: navArrayLink[];

    NavLink: React.ElementType;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

