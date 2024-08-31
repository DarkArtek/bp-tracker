export function getInitLocale(): string {
    if (navigator.language.toUpperCase().startsWith("EN")) {
        return "en";
    } else if (navigator.language.toUpperCase().startsWith("IT")) {
        return "it";
    } else {
        return "en";
    }
}