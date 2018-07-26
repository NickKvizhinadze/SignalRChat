import jwt_decode from 'jwt-decode';

export function getUserFromToken(token) {
    const decoded = jwt_decode(token);
    const keys = Object.keys(decoded);
    const userId = decoded[keys.filter(k => k.indexOf('nameidentifier') !== -1)];
    return {
        id: userId,
        username: decoded.sub,
        token: token
    };
}

export function isAuthenticated() {
    try {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (!user)
            return false;
        var decoded = jwt_decode(user.token);
        if (decoded.exp > Date.now)
            return false;
        return true;
    } catch (error) {
        return false;
    }
}