import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

const logado = false;

export default function Routes() {
    if (logado) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
}