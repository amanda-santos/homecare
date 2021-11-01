import Knex from "knex";

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
  return knex.schema.createTable("caregiver_patient", (table) => {
    table.increments("id").primary();

    table
      .integer("caregiver_id")
      .notNullable()
      .references("id")
      .inTable("caregivers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("patient_id")
      .notNullable()
      .references("id")
      .inTable("patients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
  return knex.schema.dropTable("caregiver_patient");
}
