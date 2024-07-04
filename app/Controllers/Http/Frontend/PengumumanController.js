"use strict";
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Helpers = use("Helpers");
var dateFormat = require("dateformat");
const { validate } = use("Validator");
const Pesarta = use("App/Models/Kelulusan");

class PengumumanController {
  async index({ request, response }) {
    //validasi waktu
    const profilsekolah = await ProfilSekolah.query().first();

    var date = new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    return current_date;


    if (current_date == tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        const path = Helpers.publicPath("uploads/datas/pengumuman.json");
        return response.download(path);
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      const path = Helpers.publicPath("uploads/datas/pengumuman.json");
      return response.download(path);
    } else {
      return [];
    }
  }
  async topnews({ request, response }) {
    const pengumuman = await Pengumuman.query()
      .where("status", true)
      .orderBy("id", "desc")
      .first();
    return pengumuman;
  }

  async cekpengumuman({ request, response }) {
    const { nisn } = request.all();

    const profilsekolah = await ProfilSekolah.query().first();

    var date = new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    console.log(current_time)

    if (current_date == tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        const rules = {
          nisn: "required|min:10|max:10|number",
        };

        const messages = {
          "nisn.required": "NISN harus diisi",
          "nisn.min": "NISN tidak benar (10 Digit)",
          "nisn.max": "NISN tidak benar (10 Digit)",
          "nisn.number": "NINS tidak benar (ANGKA)",
        };

        const Validation = await validate(request.all(), rules, messages);

        if (Validation.fails()) {
          const msg = await Validation.messages();
          return response.json({
            status: false,
            message: msg[0].message,
            data: {
              nisn: null,
              nopend: null,
              nama: null,
              jalur: null,
              show_jarak: false,
              jarak: null,
              verifikasi: null,
              status_lulus: null,
              asal_sekolah: null,
              kelas: null,
              ttl: null,
              show: false,
            },
          });
        }

        try {
          const peserta = await Pesarta.query().where("nisn", nisn).first();

          const data = {};

          data["nisn"] = peserta.nisn;
          data["nopend"] = peserta.nopend;
          data["nama"] = peserta.nama;
          data["ttl"] =
            peserta.tempat_lahir +
            ", " +
            dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
          data["jalur"] = peserta.jalur;
          data["jarak"] = peserta.jalur == "Zonasi" ? peserta.jarak : "";
          data["show_jarak"] = peserta.jalur == "Zonasi" ? true : false;
          data["verifikasi"] = peserta.verifikasi;
          data["status_lulus"] = peserta.status == "L" ? true : false;
          data["asal_sekolah"] = peserta.asal_sekolah;
          data["kelas"] = peserta.kelas;
          data["show"] = true;

          return response.json({
            status: true,
            message: "Sukses",
            data: data,
          });
        } catch (error) {
          return response.json({
            status: false,
            message: "Opps..., terjadi kesalahan Data tidak ditemukan",
            data: {
              nisn: null,
              nopend: null,
              nama: null,
              ttl: null,
              jalur: null,
              show_jarak: false,
              jarak: null,
              verifikasi: null,
              status_lulus: null,
              asal_sekolah: null,
              kelas: null,
            },
          });
        }
      } else {
        return response.json({
          status: false,
          message: "Opps...,maaf jadwal pengumuman belum di buka",
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
          },
        });
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      const rules = {
        nisn: "required|min:10|max:10|number",
      };

      const messages = {
        "nisn.required": "NISN harus diisi",
        "nisn.min": "NISN tidak benar (10 Digit)",
        "nisn.max": "NISN tidak benar (10 Digit)",
        "nisn.number": "NINS tidak benar (ANGKA)",
      };

      const Validation = await validate(request.all(), rules, messages);

      if (Validation.fails()) {
        const msg = await Validation.messages();
        return response.json({
          status: false,
          message: msg[0].message,
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
            show: false,
          },
        });
      }

      try {
        const peserta = await Pesarta.query().where("nisn", nisn).first();

        const data = {};

        data["nisn"] = peserta.nisn;
        data["nopend"] = peserta.nopend;
        data["nama"] = peserta.nama;
        data["ttl"] =
          peserta.tempat_lahir +
          ", " +
          dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
        data["jalur"] = peserta.jalur;
        data["jarak"] = peserta.jalur == "Zonasi" ? peserta.jarak : "";
        data["show_jarak"] = peserta.jalur == "Zonasi" ? true : false;
        data["verifikasi"] = peserta.verifikasi;
        data["status_lulus"] = peserta.status == "L" ? true : false;
        data["asal_sekolah"] = peserta.asal_sekolah;
        data["kelas"] = peserta.kelas;
        data["show"] = true;

        return response.json({
          status: true,
          message: "Sukses",
          data: data,
        });
      } catch (error) {
        return response.json({
          status: false,
          message: "Opps..., terjadi kesalahan Data tidak ditemukan",
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
          },
        });
      }
    } else {
      return response.json({
        status: false,
        message: "Opps...,maaf jadwal pengumuman belum di buka",
        data: {
          nisn: null,
          nopend: null,
          nama: null,
          ttl: null,
          jalur: null,
          show_jarak: false,
          jarak: null,
          verifikasi: null,
          status_lulus: null,
          asal_sekolah: null,
          kelas: null,
        },
      });
    }
  }
  async cekpengumumanbyauth({ request, response }) {
    const { nisn } = request.all();

    const profilsekolah = await ProfilSekolah.query().first();

    var date = new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    if (current_date != tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        const rules = {
          nisn: "required|min:10|max:10|number",
        };

        const messages = {
          "nisn.required": "NISN harus diisi",
          "nisn.min": "NISN tidak benar (10 Digit)",
          "nisn.max": "NISN tidak benar (10 Digit)",
          "nisn.number": "NINS tidak benar (ANGKA)",
        };

        const Validation = await validate(request.all(), rules, messages);

        if (Validation.fails()) {
          const msg = await Validation.messages();
          return response.json({
            status: false,
            message: msg[0].message,
            data: {
              nisn: null,
              nopend: null,
              nama: null,
              jalur: null,
              show_jarak: false,
              jarak: null,
              verifikasi: null,
              status_lulus: null,
              asal_sekolah: null,
              kelas: null,
              ttl: null,
              show: false,
            },
          });
        }

        try {
          const peserta = await Pesarta.query().where("nisn", nisn).first();

          const data = {};

          data["nisn"] = peserta.nisn;
          data["nopend"] = peserta.nopend;
          data["nama"] = peserta.nama;
          data["ttl"] =
            peserta.tempat_lahir +
            ", " +
            dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
          data["jalur"] = peserta.jalur;
          data["jarak"] = peserta.jalur == "Zonasi" ? peserta.jarak : "";
          data["show_jarak"] = peserta.jalur == "Zonasi" ? true : false;
          data["verifikasi"] = peserta.verifikasi;
          data["status_lulus"] = peserta.status == "L" ? true : false;
          data["asal_sekolah"] = peserta.asal_sekolah;
          data["kelas"] = peserta.kelas;
          data["show"] = true;

          return response.json({
            status: true,
            message: "Sukses",
            data: data,
          });
        } catch (error) {
          return response.json({
            status: false,
            message: "Opps..., terjadi kesalahan Data tidak ditemukan",
            data: {
              nisn: null,
              nopend: null,
              nama: null,
              ttl: null,
              jalur: null,
              show_jarak: false,
              jarak: null,
              verifikasi: null,
              status_lulus: null,
              asal_sekolah: null,
              kelas: null,
            },
          });
        }
      } else {
        return response.json({
          status: false,
          message: "Opps...,maaf jadwal pengumuman belum di buka",
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
          },
        });
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      const rules = {
        nisn: "required|min:10|max:10|number",
      };

      const messages = {
        "nisn.required": "NISN harus diisi",
        "nisn.min": "NISN tidak benar (10 Digit)",
        "nisn.max": "NISN tidak benar (10 Digit)",
        "nisn.number": "NINS tidak benar (ANGKA)",
      };

      const Validation = await validate(request.all(), rules, messages);

      if (Validation.fails()) {
        const msg = await Validation.messages();
        return response.json({
          status: false,
          message: msg[0].message,
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
            show: false,
          },
        });
      }

      try {
        const peserta = await Pesarta.query().where("nisn", nisn).first();

        const data = {};

        data["nisn"] = peserta.nisn;
        data["nopend"] = peserta.nopend;
        data["nama"] = peserta.nama;
        data["ttl"] =
          peserta.tempat_lahir +
          ", " +
          dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
        data["jalur"] = peserta.jalur;
        data["jarak"] = peserta.jalur == "Zonasi" ? peserta.jarak : "";
        data["show_jarak"] = peserta.jalur == "Zonasi" ? true : false;
        data["verifikasi"] = peserta.verifikasi;
        data["status_lulus"] = peserta.status == "L" ? true : false;
        data["asal_sekolah"] = peserta.asal_sekolah;
        data["kelas"] = peserta.kelas;
        data["show"] = true;

        return response.json({
          status: true,
          message: "Sukses",
          data: data,
        });
      } catch (error) {
        return response.json({
          status: false,
          message: "Opps..., terjadi kesalahan Data tidak ditemukan",
          data: {
            nisn: null,
            nopend: null,
            nama: null,
            ttl: null,
            jalur: null,
            show_jarak: false,
            jarak: null,
            verifikasi: null,
            status_lulus: null,
            asal_sekolah: null,
            kelas: null,
          },
        });
      }
    } else {
      return response.json({
        status: false,
        message: "Opps...,maaf jadwal pengumuman belum di buka",
        data: {
          nisn: null,
          nopend: null,
          nama: null,
          ttl: null,
          jalur: null,
          show_jarak: false,
          jarak: null,
          verifikasi: null,
          status_lulus: null,
          asal_sekolah: null,
          kelas: null,
        },
      });
    }
  }

  timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
}

module.exports = PengumumanController;
