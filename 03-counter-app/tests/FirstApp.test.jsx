import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 

    test('Debe coincidir con el snapshot', () => { 
       const { container } = render(<FirstApp title="Titulo de prueba"/>);

       expect( container ).toMatchSnapshot();
     });
     test('Debe mostrar el titulo en un h1', () => { 
      const title = 'Hola, soy Svetla';
      const {container, getByText } = render(<FirstApp title={ title }/>);

      expect( getByText( title ) ).toBeTruthy();
      const h1 = container.querySelector('h1');
      expect(h1.innerHTML).toBe(title);


      });

 });