package com.Mindtree.Clinic.Entity;



        import com.fasterxml.jackson.annotation.JsonIgnore;
        import lombok.AllArgsConstructor;
        import lombok.Builder;
        import lombok.Data;
        import lombok.NoArgsConstructor;
        import org.hibernate.annotations.OnDelete;
        import org.hibernate.annotations.OnDeleteAction;

        import javax.persistence.*;
        import java.util.HashSet;
        import java.util.List;
        import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Doctor {

    @Id
    @SequenceGenerator(
            name = "doctor_sequence",
            sequenceName = "doctor_sequence",
            initialValue = 10001,
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "doctor_sequence"
    )
    private Long doctorId;
    private String name;
    private String gender;
    private String age;
    private String speciality;
    @JsonIgnore
    @OneToMany(mappedBy = "visitedDoctor")
    private Set<Patient> patients;
  @Column(name = "numberOfPatients",nullable = false)
    private int numberOfPatients = 0;
    
}