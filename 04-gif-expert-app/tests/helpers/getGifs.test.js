import { string } from "prop-types";
import { getGifs } from "../../src/helpers"

describe('Pruebas en getGifs ', () => { 

    test('Debe devolver un array con objetos', async() => { 
        const category = 'One Punch';
        const gifs = await getGifs(category);

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[ 0 ]).toEqual(
            {
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String)
            }
        );
     })
 })