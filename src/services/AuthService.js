export function signin() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                email: "annam.silva@uvvnet.com",
                nome: "Anna Maria Lima",
                token: "nfkj2s36dnfs7io8op10",
            });
        }, 3000);
    });
}