import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks";

jest.mock("../../src/hooks");

describe('Pruebas en <GifGrid/>', () => { 
    const category = 'One Punch';
    test('Debe mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={ category }/>);
        //screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText( category )).toBeTruthy();

     });
     test('Debe mostrar items cuando se han cargado las imagenes', () => { 
        const gifs = [{
            id:'ABC',
            title:'Titulo 1',
            url:'http://abc'
        },
        {
            id:'ABCd',
            title:'Titulo 2',
            url:'http://abcd'
        },
    ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={ category }/>);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);

     });
 })