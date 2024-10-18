import axios from 'axios';

export default defineNuxtPlugin({
    name: 'globals',
    setup () {
        const currentUser = {
            getProfile(property: string = '') {
                const profile = useCookie('profile').value;

                if (property === '') {
                    return profile;
                }

                return profile !== undefined ? (<any>profile)[property] : null;
            },
        };

        const requesterConfig = {
            init() {
                axios.defaults.baseURL = useRuntimeConfig().public.API_BASE || 'http://localhost:3000';
                axios.defaults.headers.common['Accept'] = 'application/json';

                axios.interceptors.response.use(
                    response => response,
                    error => ({
                        data: { done: false },
                        error,
                    }),
                );

                this.addAuthorization();
            },
            addAuthorization(token: string | undefined = undefined) {
                const profile = useCookie('profile').value ?? { token };

                if (profile === undefined) {
                    return;
                }

                axios.defaults.headers.common['Authorization'] = `Bearer ${(<any>profile).token}`;
            }
        }

        const getSafe = function(aObject: any, aProperty: string) {
            const empty = ['', undefined, null, 'null', 'undefined'];

            if (empty.indexOf(aObject) > -1) {
                return '';
            }

            aProperty = empty.indexOf(aProperty) > -1 ? '' : aProperty;

            return aObject[aProperty];
        }

        requesterConfig.init();

        return {
            provide: {
                requester: axios,
                requesterConfig,
                currentUser,
                getSafe,
            },
        };
    },
});
