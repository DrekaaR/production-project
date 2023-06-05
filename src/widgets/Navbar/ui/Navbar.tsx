import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.NavbarBody, {}, ['container'])}>
                <button onClick={toggleTheme}>Change theme</button>
                <div className={cls.links}>
                    <AppLink to="/">Main</AppLink>
                    <AppLink to="/about">About</AppLink>
                </div>
            </div>
        </div>
    );
};