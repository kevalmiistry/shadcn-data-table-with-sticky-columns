import type { ApiResponse, User } from "@/types";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-data`,
    {
      cache: "no-store",
    }
  );

  const result: ApiResponse<User[]> = await response.json();

  const users = result.success ? result.data : null;

  return (
    <section>
      {users
        ? users.map((user) => (
            <p key={user.user_id}>
              {user.first_name} {user.last_name}
            </p>
          ))
        : "no users"}
    </section>
  );
}
