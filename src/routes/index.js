import AuthRoutes from "./AuthRoutes";

const logado = true;

export default function Routes() {
    if (logado) {
        return <AppRoutes />
    } else {
        return <AuthRoutes />
    }
}