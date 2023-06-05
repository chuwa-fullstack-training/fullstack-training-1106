let xx = Math.random() < 0.5 ? 10 : 'hello world';

xx = 12;
xx = 'see you later';

xx = true;

// Using type predicates
type Dog = {
    bark: () => void;
}
type Cat = {
    meow: () => void;
}
function isDog(pet: Dog | Cat): pet is Dog {
    return (pet as Dog).bark !== undefined;
}

function createPet(): Dog | Cat {
    return {
        bark: () => console.log('woof')
    };
}

let pet = createPet();

if (isDog(pet)) {
    pet.bark();
} else {
    pet.meow();
}