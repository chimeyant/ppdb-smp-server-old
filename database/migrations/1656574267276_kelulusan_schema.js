"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KelulusanSchema extends Schema {
  up() {
    this.table("kelulusans", (table) => {
      // alter table
      table.string("tempat_lahir").nullable();
      table.date("tanggal_lahir").nullable();
    });
  }

  down() {
    this.table("kelulusans", (table) => {
      // reverse alternations
      table.dropColumn("tempat_lahir");
      table.dropColumn("tanggal_lahir");
    });
  }
}

module.exports = KelulusanSchema;
