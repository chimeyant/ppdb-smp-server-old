"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KelulusansSchema extends Schema {
  up() {
    this.table("kelulusans", (table) => {
      // alter table
      table.string("jenis_kelamin");
      table.string("kelas");
    });
  }

  down() {
    this.table("kelulusans", (table) => {
      // reverse alternations
      table.dropColumn("jenis_kelamin");
      table.dropColumn("kelas");
    });
  }
}

module.exports = KelulusansSchema;
