import { RequestHandler } from "express";
import db from "../config/db";

export const getAppointmentsByScheduleId: RequestHandler = async (req, res) => {
  const scheduleId = req.params.scheduleId

  const query: string = `
    SELECT *
    FROM appointment
    WHERE scheduleid = ${scheduleId}
  `;

  db.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

export const getAppointmentsByPatientId: RequestHandler = async (req, res) => {
  const patientId = req.params.patientId

  const query: string = `
    SELECT *
    FROM appointment a, patient p, schedule s
    WHERE pid = '${patientId}' AND p.email = a.pid AND s.scheduleid = a.scheduleid
  `;

  db.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

export const addAppointment: RequestHandler = async (req, res) => {
  const { pid, apponum, scheduleid, appodate } = req.body;  

  const query = `
    INSERT INTO appointment VALUE (
      NULL, '${pid}', ${apponum}, ${scheduleid}, '${appodate.split('T')[0]}'
    )`;

  db.query(query, (error, result) => {
    if (error) {
      if (error.sqlMessage?.startsWith("Duplicate entry")) {
        res.status(409).send("You have already added this doctor");
        return;
      }

      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

export const deleteAppointmentById: RequestHandler = async (req, res) => {
  const id = req.params.id;

  const query = `
    DELETE FROM appointment
    WHERE appoid = '${id}'
  `;

  db.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

export const getAllAppointmentsByDoctorId: RequestHandler = async (req, res) => {
  const id = req.params.id;

  const query: string = `
    SELECT 
      p.name AS pname, 
      p.email AS pemail, 
      p.mobileNumber AS pmobile, 
      p.password AS ppassword,
      a.*,
      s.*, 
      d.name AS dname, 
      d.email AS demail, 
      d.mobileNumber AS dmobile, 
      d.password AS dpassword,
      d.specialties AS dspecialties
    FROM appointment a
    JOIN patient p ON p.email = a.pid
    JOIN schedule s ON s.scheduleid = a.scheduleid
    JOIN doctor d ON s.docid = d.email
    WHERE d.email = '${id}';
  `;

  db.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

export const getAllAppointments: RequestHandler = async (req, res) => {
  const query: string = `
    SELECT 
      p.name AS pname, 
      p.email AS pemail, 
      p.mobileNumber AS pmobile, 
      p.password AS ppassword,
      a.*,
      s.*, 
      d.name AS dname, 
      d.email AS demail, 
      d.mobileNumber AS dmobile, 
      d.password AS dpassword,
      d.specialties AS dspecialties
    FROM appointment a
    JOIN patient p ON p.email = a.pid
    JOIN schedule s ON s.scheduleid = a.scheduleid
    JOIN doctor d ON s.docid = d.email;
  `;

  db.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};