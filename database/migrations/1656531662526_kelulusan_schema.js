"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class KelulusanSchema extends Schema {
  up() {
    this.create("kelulusans", (table) => {
      table.increments();
      table.integer("nomor");
      table.string("nopend");
      table.string("nisn").index();
      table.string("nama");
      table.string("jalur").nullable();
      table.string("jarak").nullable();
      table.string("verifikasi").nullable();
      table.string("status").nullable();
      table.string("asal_sekolah");
      table.timestamps();
    });
  }

  down() {
    this.drop("kelulusans");
  }
}

module.exports = KelulusanSchema;
