import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";
const inputValue = 'Svetlana';
describe('Pruebas en <AddCategory />', () => { 
    test('Debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={ ()=>{}}/>);
        
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);
        //screen.debug();
    });
    test('Debe llamar onNewCategory si el input tiene un valor', () => { 
       
       
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        // screen.debug();
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue);

     });
     test('No debe llamar onNewCategory si el input tiene menos de 1 caracter', () => { 

        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory}/>);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        
        // screen.debug();
        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
      })
 })