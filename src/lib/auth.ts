import { supabase } from "./supabase";

export type UserRole = "hr" | "candidate";

export interface AuthUser {
  id: string;
  email: string;
  fullName?: string;
  role: UserRole;
}

export async function signUp(
  email: string,
  password: string,
  fullName: string,
  role: UserRole,
) {
  try {
    // Create the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error("User creation failed");

    // Create the user profile in the users table
    const { error: profileError } = await supabase.from("users").insert({
      id: authData.user.id,
      email,
      full_name: fullName,
      role,
    });

    if (profileError) throw profileError;

    return { user: authData.user, error: null };
  } catch (error) {
    console.error("Error signing up:", error);
    return { user: null, error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Fetch the user's role from the users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role, full_name")
      .eq("id", data.user.id)
      .single();

    if (userError) throw userError;

    return {
      user: {
        ...data.user,
        role: userData.role as UserRole,
        fullName: userData.full_name,
      },
      error: null,
    };
  } catch (error) {
    console.error("Error signing in:", error);
    return { user: null, error };
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error signing out:", error);
    return { error };
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;

    // Fetch the user's role from the users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("role, full_name")
      .eq("id", data.user.id)
      .single();

    if (userError) throw userError;

    return {
      id: data.user.id,
      email: data.user.email || "",
      fullName: userData.full_name,
      role: userData.role as UserRole,
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}
