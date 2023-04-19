

<nav>
    <ul>
        <li><a href="/">Inicio</a></li>

     
            <li><a href="profile">Perfil</a></li> 
            <li><a href="about">Nosotros</a></li>
            <li><a href="collections">Librería Digital</a></li>
            <li><a href="magazine">Revista</a></li>
            <li><a href="contact">Contacto</a></li>
            <li><a href="login">Ingresar</a></li>
            <li><a href="images">Imágenes</a></li>
            <!--<li><a class:active="{$page.path === '/login'}" href="login">login</a></li>
            <li><a class:active="{$page.path === '/signup'}" href="signup">register</a></li> -->
        
    </ul>
</nav>

<style>
    nav {
        border-bottom: 1px solid rgba(21, 10, 34, 0.1);
        font-weight: 400;
        padding: 0 1em;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }

  
</style>