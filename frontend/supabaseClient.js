import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wdbswirajjnsywkwmhbg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkYnN3aXJhampuc3l3a3dtaGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY2MzgzNjIsImV4cCI6MjA5MjIxNDM2Mn0.i47uLXePEJwiPNaL-lR-phDWYtF_Jb7UtXlqmDjyIHo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
