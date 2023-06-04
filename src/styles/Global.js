import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: "Poppins", sans-serif;
        
    }
    #root{
        overflow-x: hidden;
        
        
    }
    body {
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');        -webkit-font-smoothing: antialiased;
        font-family: "Poppins", sans-serif;
        font-size: 62.5%;  
    }
    body::-webkit-scrollbar {
        width: .5rem;
    }
    body::-webkit-scrollbar-track {
        background: transparent;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #00000090;
        border-radius: .5rem;
    }
    .link {
      text-decoration: none;
      color: inherit;
    }
    
`;
