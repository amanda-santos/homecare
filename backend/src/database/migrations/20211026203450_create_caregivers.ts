import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("caregivers", (table) => {
    table.increments("id").primary();
    table.decimal("cost").notNullable();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("caregivers");
}
