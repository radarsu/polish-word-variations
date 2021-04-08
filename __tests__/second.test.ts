import { second } from '../src/word-definitions/time-measures';
import { wordVariations } from '../src';

test(`second`, async () => {
    const { singular, dual, plural } = second.nominative;

    wordVariations.addWord(singular, second);

    const wordZero = await wordVariations.getWord(singular, 0);
    expect(wordZero).toBe(plural);

    const wordSingular = await wordVariations.getWord(singular);
    expect(wordSingular).toBe(singular);

    const promises = [...Array(3).keys()].map(async (value, i) => {
        const wordDual = await wordVariations.getWord(singular, i + 2);
        expect(wordDual).toBe(dual);
    });

    await Promise.all(promises);

    const wordPlural = await wordVariations.getWord(singular, 5);
    expect(wordPlural).toBe(plural);
});
