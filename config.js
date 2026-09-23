const S_URL = 'https://uqekwkidsuargeulwkuw.supabase.co';
const S_KEY = 'sb_publishable_WefHBfPDA7Fx9ZDRMnZDUA_FfqINH2r';
const _supabase = supabase.createClient(S_URL, S_KEY);
// ГЛОБАЛЬНАЯ КАРТА ВСЕХ КУРСОВ ТЕХНИКУМА
const GLOBAL_COURSES = {
    "огр": {
        title: "Направление: Открытые горные работы",
        themes: [
            { name: "Введение в технологию ОГР", link: "https://yandex.ru" },
            { name: "Подготовка горных пород к выемке", link: "https://yandex.ru" },
            { name: "Выемочно-погрузочные работы на карьере", link: "https://yandex.ru" }
        ]
    },
    "рго": {
        title: "Направление: Ремонт горного оборудования",
        themes: [
            { name: "Понятие об энергосистеме и электросетях", link: "https://yandex.ru" },
            { name: "Схемы внешних распределительных сетей", link: "https://yandex.ru" },
            { name: "Определение электрических нагрузок предприятия", link: "https://yandex.ru" }
        ]
    },
    "rem": { // Твой изначальный курс slesar
        title: "Электротехника и Технология ремонта",
        themes: [
            { name: "Основные понятия и закон Ома", link: "https://yandex.ru" },
            { name: "Законы Кирхгофа", link: "https://yandex.ru" },
            { name: "Введение в технологию ремонта горных машин", link: "https://yandex.ru" }
        ]
    }
    // Сюда можно добавлять новые группы без переписывания страниц сайта!
};
