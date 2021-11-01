import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("patients").del();

  // Inserts seed entries
  await knex("patients").insert([
    { id: 0, type: "baby" },
    { id: 1, type: "child" },
    { id: 2, type: "teen" },
    { id: 3, type: "elder" },
    { id: 4, type: "sick" },
    { id: 5, type: "disabled" },
  ]);
}
