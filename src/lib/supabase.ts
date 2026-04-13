import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types"; // tạo ở Bước 6

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true, // tự refresh JWT khi gần hết hạn
    persistSession: true, // lưu session vào localStorage
    detectSessionInUrl: true, // xử lý OAuth redirect tự động
  },
});
