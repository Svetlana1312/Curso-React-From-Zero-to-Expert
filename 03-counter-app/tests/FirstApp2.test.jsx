import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => { 
  const title = 'Hola, soy Svetla';
    test('Debe coincidir con el snapshot', () => { 
       const { container } = render(<FirstApp title={ title } />);

       expect( container ).toMatchSnapshot();
     });

     test('Debe mostrar el titulo "Hola, soy Svetla"', () => { 
      
      render(<FirstApp title={ title }/>);

      //screen.debug();

      expect(screen.getByText(title)).toBeTruthy();
      });
    test('Debe mostrar el titulo en un h1', () => { 

      render(<FirstApp title={ title }/>);
      expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
     })
 });