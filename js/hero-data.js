export class HeroData {
    constructor(heroName, description, thumbnail) {
        this.heroName = heroName;
        this.description = description;
        this.thumbnail = thumbnail;
        this.comics = comics
    }
};

export const HERO_PROXY_HANDLER = {
    get: function(target, property) {
        return Reflect.get(target, property);
    }
}