export const helpers = {
    getRequester() {
        const { $requester } = useNuxtApp();

        return $requester;
    },
    getCurrentUser() {
        const { $currentUser } = useNuxtApp();

        return $currentUser;
    },
    getProfile() {
        return this.getCurrentUser().getProfile();
    },
    getPermissions(permissions: any) {
        try {
            return JSON.parse(permissions.permissions);
        } catch {
            return {
                transfers: {},
                users: {},
            };
        }
    },
    getDeposits(transfers: any) {
        return transfers.filter((item: any) => item.sender.id === item.receiver.id);
    },
    getMyTransfers(transfers: any) {
        return transfers.filter((item: any) => item.sender.id !== item.receiver.id);
    },
    userCan(type: string, permission: string) {
        const permissions = this.getPermissions(this.getProfile().permissions);

        return permissions[type][permission] === 1;
    },
};