<template>
    <div class="seccion-usuarios">
        <div class="seccion-buscar">
            <div class="input-buscar">
                <input type="search" placeholder="Buscar usuario">
                <i class="fas fa-search"></i>
            </div>
        </div>
        <div class="seccion-lista-usuarios">
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario ocupado"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    1
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario desconectado"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    1
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
            <div class="usuario">
                <div class="avatar">
                    <img src="ruta_img" alt="img">
                    <span class="estado-usuario enlinea"></span>
                </div>
                <div class="cuerpo">
                    <span> Nombre apellido</span>
                    <span>detalles de mensaje</span>
                </div>
                <span class="notificacion">
                    3
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({
   
  }),

};
</script>

<style lang="scss" scoped>
.seccion-usuarios {
    width: 320px;
    margin-right: 1.5rem;
    border-right: 1px solid #E7E7E7;
    padding-right: 15px;
}
/* seccion usuarios */
.input-buscar {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    margin-bottom: 1rem;
}
.seccion-buscar input[type="search"] {
    display: block;
    width: 100%;
    background-color: #F3F3F3;
    border: 0;
    padding: 8px 15px;
    border-radius: 2rem;
}
.seccion-buscar i {
    position: absolute;
    right: 15px;
}

.seccion-lista-usuarios {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.usuario {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1rem;
}
.mensaje .avatar,
.usuario-seleccionado .avatar,
.usuario .avatar {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    position: relative;
    background-color: #E4E8F0;
    border-radius: 50%;
}
.mensaje .avatar {
    width: 35px;
    height: 35px;
    margin-right: 1rem;
}
.mensaje.left .avatar {
    margin-right: 0;
    margin-left: 1rem;
}
.usuario .cuerpo {
    flex-grow: 1;
    flex-basis: 0;
}
.usuario .cuerpo span {
    display: block;
}
.usuario-seleccionado .cuerpo span:nth-child(2),
.usuario .cuerpo span:nth-child(2) {
    font-size: .8em;
    color: #929292;
}
.usuario .estado-usuario {
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    background-color: #ADADAD;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    border: 2px solid #fff;
}
.usuario .estado-usuario.enlinea {
    background-color: #49DD45;
}
.usuario .estado-usuario.ocupado {
    background-color: #5160F0;
}

.usuario .estado-usuario.desconectado {
    background-color: #ADADAD;
}

.notificacion {
    display: block;
    width: auto;
    float: right;
    background-color: #4981D5;
    color: #fff;
    padding: 0 8px;
    border-radius: 8px;
    vertical-align: center;
}
@media (max-width: 780px) {
    .seccion-usuarios {
        width: 280px;
    }
}

</style>