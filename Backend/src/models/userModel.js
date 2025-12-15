export async function findUserByEmail(db, email) {
  const [rows] = await db.execute("SELECT * FROM user_master WHERE email = ?", [email]);
  return rows[0];
}

export async function createUser(db, email, passwordHash, role) {
  await db.execute("INSERT INTO user_master (email, password, role) VALUES (?, ?, ?)", [
    email,
    passwordHash,
    role,
  ]);
}
