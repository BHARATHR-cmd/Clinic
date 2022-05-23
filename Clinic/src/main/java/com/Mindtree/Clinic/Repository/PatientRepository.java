package com.Mindtree.Clinic.Repository;
import com.Mindtree.Clinic.Entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
@Modifying
@Transactional
@Query(
        value = "update doctor set number_of_patients = number_of_patients+1 where doctor_id = :id",
        nativeQuery = true
)
int updateNumberofPatients(Long id);

}