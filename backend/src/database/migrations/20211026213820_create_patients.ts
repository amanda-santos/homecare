import Knex from "knex";

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
  return knex.schema.createTable("patients", (table) => {
    table.increments("id").primary();
    table.string("type").notNullable();
  });
}

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
  return knex.schema.dropTable("patients");
}
