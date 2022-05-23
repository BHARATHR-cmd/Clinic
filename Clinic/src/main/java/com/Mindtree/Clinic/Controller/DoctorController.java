package com.Mindtree.Clinic.Controller;

import com.Mindtree.Clinic.Entity.Doctor;
import com.Mindtree.Clinic.Repository.DoctorRepository;
import com.Mindtree.Clinic.Repository.PatientRepository;

import org.hibernate.annotations.Parameter;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*")
@RestController
    @RequestMapping("api/v1/doctors")
    public class DoctorController {

        @Autowired
        DoctorRepository doctorRepository;

        @Autowired
        PatientRepository patientRepository;

        @GetMapping("/get")
        List<Doctor> getDoctors() {
            return doctorRepository.findAll();
        }
    @GetMapping("/getbyName/{name}")
//    List<Doctor> getDoctorsByName(@Param("name") String name) {
    List<Doctor> getDoctorsByName(@PathVariable  String name) {
        return doctorRepository.findByName(name);
    }
    @PostMapping("/add")
    Doctor createDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }
}
