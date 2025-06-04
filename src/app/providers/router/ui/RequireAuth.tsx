import { getUserAuthData, getUserRole, UserRole } from 'entities/User';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export const RequireAuth = (props: RequireAuthProps) => {
    const { roles, children } = props;
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRole);
    const location = useLocation();

    const hasRequiredRole = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!hasRequiredRole) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
