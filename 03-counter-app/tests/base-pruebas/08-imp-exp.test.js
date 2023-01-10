import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );
    
        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

     });
     test('getHeroeById debe de retornar undefinde si no existe el ID', () => { 

        const id = 100;
        const hero = getHeroeById( id );
      
        expect( hero ).toBeFalsy();
     });
     test('getHeroeByOwner(DC) debe de retornar un array con 3 elementos', () => { 

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
      
        expect( heroes.length ).toBe(3);
     });
     test('getHeroeByOwner debe de retornar un array con los 3 heroes de DC', () => { 
       
        const owner = 'DC';
        const heroesDC = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }
    ];
        const heroesFromFun = getHeroesByOwner( owner );
      
        //expect( heroesDC ).toEqual(heroes);
        expect( heroesFromFun ).toEqual (heroes.filter((hero)=>hero.owner==owner));
     });
     test('getHeroeByOwner(Marvel) debe de retornar un array con 2 elementos', () => { 

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );
      
        expect( heroes.length ).toBe(2);
     });
    
 });