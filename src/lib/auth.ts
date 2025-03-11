// Mock authentication service

export type UserRole = "hr" | "candidate";

export interface AuthUser {
  id: string;
  email: string;
  fullName?: string;
  role: UserRole;
}

// Mock user database
const mockUsers: Record<
  string,
  {
    id: string;
    email: string;
    password: string;
    fullName: string;
    role: UserRole;
  }
> = {
  user1: {
    id: "user1",
    email: "hr@example.com",
    password: "password123",
    fullName: "HR Admin",
    role: "hr",
  },
  user2: {
    id: "user2",
    email: "candidate@example.com",
    password: "password123",
    fullName: "John Candidate",
    role: "candidate",
  },
};

// Mock user session
let currentUser: AuthUser | null = null;

export async function signUp(
  email: string,
  password: string,
  fullName: string,
  role: UserRole,
) {
  try {
    // Check if user already exists
    const userExists = Object.values(mockUsers).some(
      (user) => user.email === email,
    );
    if (userExists) {
      throw new Error("User with this email already exists");
    }

    // Create new user
    const id = `user${Object.keys(mockUsers).length + 1}`;
    mockUsers[id] = {
      id,
      email,
      password,
      fullName,
      role,
    };

    return { user: { id, email, fullName, role }, error: null };
  } catch (error) {
    console.error("Error signing up:", error);
    return { user: null, error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    // Find user by email
    const user = Object.values(mockUsers).find((user) => user.email === email);
    if (!user) {
      throw new Error("User not found");
    }

    // Check password
    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    // Set current user
    currentUser = {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    };

    return { user: currentUser, error: null };
  } catch (error) {
    console.error("Error signing in:", error);
    return { user: null, error };
  }
}

export async function signOut() {
  try {
    currentUser = null;
    return { error: null };
  } catch (error) {
    console.error("Error signing out:", error);
    return { error };
  }
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  return currentUser;
}
