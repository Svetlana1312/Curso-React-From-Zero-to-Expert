import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Tests for the <CounterApp /> application', () => { 
    const initialValue = 10;
test('Debe coinsidir con el snapshot', () => { 

    const { container } = render( <CounterApp value={initialValue}/> );
    expect(container).toMatchSnapshot();

 });
 test('Debe de mostrar el valor inicial de 100', () => { 

    render( <CounterApp value={100}/> );
    
    expect(screen.getByText( 100 )).toBeTruthy();
    expect(screen.getByRole('heading',{level:2}).innerHTML ).toContain('100');

 });
 test('Debe de incrementar con el boton +1', () => { 

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('+1'));
    expect( screen.getByText(`${initialValue + 1 }`) ).toBeTruthy();
    
});
test('Debe de decrementar con el boton -1', () => { 

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('-1'));
    expect( screen.getByText(`${initialValue - 1 }`) ).toBeTruthy();
    
});
test('Debe de resetear con el boton Reset', () => { 

    render( <CounterApp value={initialValue}/> );
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    //fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));

    expect( screen.getByText(initialValue) ).toBeTruthy();
    
});
 })