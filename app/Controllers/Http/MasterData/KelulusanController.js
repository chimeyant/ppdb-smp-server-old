"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Kelulusan = use("App/Models/Kelulusan");
const dateFormat = require("dateformat");
const Excel = require("exceljs");
const Helpers = use("Helpers");
const { validate } = use("Validator");


/**
 * Resourceful controller for interacting with kelulusans
 */
class KelulusanController {
  /**
   * Show a list of all kelulusans.
   * GET kelulusans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const kelulusans = await Kelulusan.query().orderBy("nomor", "asc").fetch();

    const datas = [];

    for (let i in kelulusans.rows) {
      const rows = kelulusans.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["nomor"] = rows.nomor;
      row["nopend"] = rows.nopend;
      row["nama"] = rows.nama;
      row["nisn"] = rows.nisn;
      row["ttl"] =
        rows.tempat_lahir + ", " + dateFormat(rows.tanggal_lahir, "dd/mm/yyyy");
      row["jalur"] = rows.jalur;
      row["status"] = rows.status;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new kelulusan.
   * GET kelulusans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new kelulusan.
   * POST kelulusans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single kelulusan.
   * GET kelulusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const kelulusan = await Kelulusan.find(id);

    return kelulusan;
  }

  /**
   * Render a form to update an existing kelulusan.
   * GET kelulusans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update kelulusan details.
   * PUT or PATCH kelulusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const {
      no,
      nopend,
      nisn,
      nama,
      jalur,
      jarak,
      verifikasi,
      status,
      asal_sekolah,
    } = request.all();

    try {
      const kelulusan = await Kelulusan.find(id);
      kelulusan.no = no;
      kelulusan.nopend = nopend;
      kelulusan.nisn = nisn;
      kelulusan.nama = nama;
      kelulusan.jalur = jalur;
      kelulusan.jarak = jarak;
      kelulusan.verifikasi = verifikasi;
      kelulusan.status = status;
      kelulusan.asal_sekolah = asal_sekolah;
      await kelulusan.save();

      return response.json({
        status: true,
        message: "Proses ubah data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a kelulusan with id.
   * DELETE kelulusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    try {
      const kelulusan = await Kelulusan.find(id);
      await kelulusan.delete();
      return response.json({
        status: true,
        message: "Proses hapus data berhasil...!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async import({ request, view, response, auth }) {
    const { file_excel } = request.all();

    const rules = {
      file_excel: "required",
    };

    const messages = {
      "file_excel.required": "File Excel harus dipilih terlebih dahulu",
    };

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      //proses import data
      const filexls = Helpers.publicPath("uploads/datas/") + file_excel;
      var workbook = new Excel.Workbook();
      workbook = await workbook.xlsx.readFile(filexls);
      let worksheet = workbook.getWorksheet("Sheet1");

      let colId = worksheet.getColumn("A");

      //loop data
      colId.eachCell(async (cell, rowNumber) => {
        let nomor = worksheet.getCell("A" + rowNumber).value;
        let nopend = worksheet.getCell("B" + rowNumber).value;
        let nisn = worksheet.getCell("C" + rowNumber).value;
        let nama = worksheet.getCell("D" + rowNumber).value;
        let tempat_lahir = worksheet.getCell("E" + rowNumber).value;
        let tanggal_lahir = worksheet.getCell("F" + rowNumber).value;
        let jalur = worksheet.getCell("G" + rowNumber).value;
        let jarak = worksheet.getCell("H" + rowNumber).value;
        let status = worksheet.getCell("I" + rowNumber).value;
        let asal_sekolah = worksheet.getCell("J" + rowNumber).value;

        //proses simpan ke database
        const kelulusan = new Kelulusan();
        kelulusan.nomor = nomor;
        kelulusan.nopend = nopend;
        kelulusan.nisn = nisn;
        kelulusan.nama = nama;
        kelulusan.tempat_lahir = tempat_lahir;
        kelulusan.tanggal_lahir = dateFormat(tanggal_lahir, "yyyy-mm-dd");
        kelulusan.jalur = jalur;
        kelulusan.jarak = jarak;
        kelulusan.status = status;
        kelulusan.asal_sekolah = asal_sekolah;
        await kelulusan.save();
      });

      return response.json({
        status: true,
        message: "Proses import data kelulusan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan pisan " + error,
      });
    }
  }

  async bulkdelete({ request, view, response, auth }) {
    try {
      await Kelulusan.query().delete();
      return response.json({
        status: true,
        message: "Proses hapus data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = KelulusanController;
