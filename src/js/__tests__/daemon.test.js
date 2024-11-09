import Daemon from "../class/Daemon";

test('Правильно создается объект', () => {
    const daemon = new Daemon('Dem');
    const correct = {
        name: 'Dem',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    expect(daemon).toEqual(correct);
})