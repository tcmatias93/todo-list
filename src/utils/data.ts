export async function getTasks() {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Fallo fetch");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}
