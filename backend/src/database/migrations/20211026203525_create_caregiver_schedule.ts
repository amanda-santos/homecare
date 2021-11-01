import Knex from "knex";

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
  return knex.schema.createTable("caregiver_schedule", (table) => {
    table.increments("id").primary();

    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    table
      .integer("caregiver_id")
      .notNullable()
      .references("id")
      .inTable("caregivers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
  return knex.schema.dropTable("caregiver_schedule");
}
