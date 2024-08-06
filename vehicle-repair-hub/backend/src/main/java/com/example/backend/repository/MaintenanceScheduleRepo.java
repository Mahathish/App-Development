package com.example.backend.repository;

import com.example.backend.model.MaintenanceSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MaintenanceScheduleRepo extends JpaRepository<MaintenanceSchedule, Long> {
}
