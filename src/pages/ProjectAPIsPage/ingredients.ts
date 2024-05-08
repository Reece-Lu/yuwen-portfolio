export const allIngredients = [
    { icon: "⚡️", label: "FastAPI", swagger: "https://www.meetyuwen.com/api/openapi.json"},
    { icon: "🍃", label: "Spring Boot", swagger: "https://www.meetyuwen.com/springapp/v3/api-docs" },
];

const [tomato, lettuce] = allIngredients;
export const initialTabs = [tomato, lettuce];

export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}
