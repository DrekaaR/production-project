import { AppRouter } from 'app/providers/router';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        document.body.className = classNames('app', {}, [theme]);
    }, [theme]);

    return (
        <div>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
