"use strict";
var InterSectionUnionType;
(function (InterSectionUnionType) {
    function getName(human) {
        return human.name;
    }
    function getSpecies(animal) {
        return animal.species;
    }
    const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
    const human = { name: 'name', age: 25 };
    const animal = { species: 'dog' };
    // compile error
    // mysteryFunc(human);
    // mysteryFunc(animal);
    const animalHuman = {
        ...human, ...animal
    };
    console.log(animalHuman);
    console.log(mysteryFunc(animalHuman));
    function useMaybeHuman(human) {
        const age = human?.age;
        console.log(age);
    }
    useMaybeHuman(human);
    useMaybeHuman(undefined);
    function useTime(getTimeFunc) {
        const timeOrUndefined = getTimeFunc?.();
        console.log(timeOrUndefined);
    }
    useTime(() => new Date());
    useTime(undefined);
})(InterSectionUnionType || (InterSectionUnionType = {}));
