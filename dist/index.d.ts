export interface SingularWordDefinition {
    singular: string;
}
export interface SimpleWordDefinition extends SingularWordDefinition {
    plural: string;
}
export interface DualWordDefinition extends SimpleWordDefinition {
    dual: string;
}
export interface WordDefinition {
    nominative: DualWordDefinition;
    genitive?: SimpleWordDefinition;
    dative?: SimpleWordDefinition;
    accusative?: DualWordDefinition;
    instrumental?: SimpleWordDefinition;
    locative?: SimpleWordDefinition;
    vocative?: SingularWordDefinition;
}
export declare class WordVariationsDictionary {
    dictionary: Record<string, WordDefinition | undefined>;
    addWord(wordKey: string, options: WordDefinition): void;
    getWord(wordKey: string, count?: number, polishCase?: keyof WordDefinition): string;
}
export declare const wordVariations: WordVariationsDictionary;
