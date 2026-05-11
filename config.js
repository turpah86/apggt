const USERS = {
    "огр": {
        password: "123",
        redirect: "ogr23.html",
        quizPrefix: "ogr_razdel"
    },
    "РГО": {
        password: "456",
        redirect: "rgo24.html",
        quiz: "rgo24"
    },
    "Admin": {
        password: "6426",
        redirect: "admin.html"
    }
};
const S_URL = 'https://uqekwkidsuargeulwkuw.supabase.co';
const S_KEY = 'sb_publishable_WefHBfPDA7Fx9ZDRMnZDUA_FfqINH2r';
const _supabase = supabase.createClient(S_URL, S_KEY);
