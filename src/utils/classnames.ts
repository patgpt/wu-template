type ClassDictionary = {
    [id: string]: boolean;
};

export default function classNames(classes: ClassDictionary): string {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}