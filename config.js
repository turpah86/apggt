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
const S_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZWt3a2lkc3VhcmdldWx3a3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxODYxOTEsImV4cCI6MjA5Mzc2MjE5MX0.1ggGqzI0WU0dx0it8k8FC005uhdsqLyg0qWD4odmH8E';
const _supabase = supabase.createClient(S_URL, S_KEY);
