const allowed = [
    'login',
    'register'
];

export default defineNuxtRouteMiddleware((to, from) => {
    const logged = useCookie('profile').value !== undefined;

    if (to.name === 'login' && logged) {
        return navigateTo('/transfers')
    }

    if (allowed.indexOf(<string>to.name) > -1) {
        return;
    }

    if (!logged) {
        return navigateTo('/login')
    }
});
