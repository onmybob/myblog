
import { create } from 'zustand';

const alertStore = create<IAlertStore>(() => ({}));

interface IAlertStore {
    alert?: IAlert;
}

interface IAlert {
    type: string,
    message: string,
    showAfterRedirect: boolean;
}
interface IAlertService extends IAlertStore {
    success: (message: string, showAfterRedirect?: boolean) => void,
    error: (message: string, showAfterRedirect?: boolean) => void,
    clear: () => void,
}

function alertService(): IAlertService {
    const { alert } = alertStore();

    return {
        alert,
        success: (message: string, showAfterRedirect = false) => {
            const type = 'alert-success';
            alertStore.setState({
                alert: { type, message, showAfterRedirect }
            });
        },
        error: (message: string, showAfterRedirect = false) => {
            const type = 'alert-danger';
            alertStore.setState({
                alert: { type, message, showAfterRedirect }
            });
        },
        clear: () => {
            alertStore.setState(state => {
                let alert = state.alert;

                // if showAfterRedirect is true the alert is kept for
                // one route change (e.g. after successful registration)
                if (alert?.showAfterRedirect) {
                    alert.showAfterRedirect = false;
                } else {
                    alert = undefined;
                }

                return { alert };
            });
        }
    };
};

export default alertService;