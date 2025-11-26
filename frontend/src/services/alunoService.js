import { API_URL } from "../config/api";

export async function getAlunos() {
  const res = await fetch(`${API_URL}/aluno`);
  return res.json();
}

export async function createAluno(aluno) {
  const res = await fetch(`${API_URL}/aluno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aluno),
  });
  return res.json();
}

export async function updateAluno(id, aluno) {
  const res = await fetch(`${API_URL}/aluno/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(aluno),
  });
  return res.json();
}

export async function deleteAluno(id) {
  const res = await fetch(`${API_URL}/aluno/${id}`, { method: "DELETE" });
  return res.json();
}
