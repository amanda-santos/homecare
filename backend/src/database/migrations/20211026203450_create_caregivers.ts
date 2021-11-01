import Knex from "knex";

// quais alterações queremos fazer no banco
export async function up(knex: Knex) {
  return knex.schema.createTable("caregivers", (table) => {
    table.increments("id").primary();
    // table.string('subject').notNullable();
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

// se der problema, o que deve ser desfeito
export async function down(knex: Knex) {
  return knex.schema.dropTable("caregivers");
}
