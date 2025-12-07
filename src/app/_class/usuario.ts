export interface Usuario {
    idUsuario: number;
    nombreUsuario: string;
    passwordHash: string;
    rol: string;
    activo: boolean;
}
