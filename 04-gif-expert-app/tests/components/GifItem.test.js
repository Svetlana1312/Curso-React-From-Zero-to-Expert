import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas de <GifItem />', () => { 
    const tituloPrueba = "Titulo de prueba";
    const urlPrueba = "https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=8f8dcbc2rk79w7lfibtxt2zjdy3jtxg9kn8bbo6vfq6ztf1r&rid=giphy.gif&ct=g";
   
    test('Debe coincidir con el shapshot', () => { 
        const {container}  = render(<GifItem title={ tituloPrueba }  url={ urlPrueba }/>);
        expect(container).toMatchSnapshot();
     });
     test('Debe mostrar el texto alternativo y la url indicados', () => { 
        render(<GifItem title={ tituloPrueba }  
                            url={ urlPrueba }/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(urlPrueba);
        expect(alt).toBe(tituloPrueba);
     });
     test('Debe mostrar el titulo indicado', () => { 
        render(<GifItem title={ tituloPrueba }  
                            url={ urlPrueba }/>);
        expect(screen.getByText(tituloPrueba)).toBeTruthy();
     });
 });