package com.Mindtree.Clinic.Controller;

import com.Mindtree.Clinic.Entity.Patient;
import com.Mindtree.Clinic.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1/patients")
public class PatientController {

    @Autowired
    PatientRepository patientRepository;

    @GetMapping("/get")
    List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    @GetMapping("/get/{id}")
    Patient getPatientbyid(
            @PathVariable Long id
    ) {
        return patientRepository.findById(id).get();
    }
    @PostMapping("/add")
     Patient createPatient(@RequestBody Patient patient) {

        int i = patient.toString().indexOf("doctorId=");
        System.out.println("###############################");
        System.out.println(i);
        String id=patient.toString().substring(i+9,i+14);
        System.out.println(id);
        System.out.println("###############################");

        patientRepository.updateNumberofPatients(Long.valueOf(id));
        return patientRepository.save(patient);
    }
}
