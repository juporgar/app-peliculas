export const HeaderComponent ={
    template: `
   <nav class="navbar navbar-dark bg-dark">
           <li class="nav-item"> 
            <a ui-sref="Inicio" class="nav-link">Inicio</a>
        </li>     
   <li class="nav-item">
            <a ui-sref="films" class="nav-link">Películas</a>
        </li>
        <li class="nav-item"> 
            <a ui-sref="series" class="nav-link">Series</a>
        </li>
    </nav>   
    `
}