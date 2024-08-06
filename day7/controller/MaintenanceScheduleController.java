package com.example.backend.controller;

import com.example.backend.config.ResourceNotFoundException;
import com.example.backend.model.MaintenanceSchedule;
import com.example.backend.service.MaintenanceScheduleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/maintenance-schedules")
public class MaintenanceScheduleController {

    @Autowired
    private MaintenanceScheduleService service;

    @GetMapping
    public List<MaintenanceSchedule> getAllSchedules() {
        return service.getAllSchedules();
    }

    @GetMapping("/{id}")
    public MaintenanceSchedule getScheduleById(@PathVariable Long id) {
        return service.getScheduleById(id)
                .orElseThrow(() -> new ResourceNotFoundException("MaintenanceSchedule not found with id " + id));
    }

    @PostMapping
    public MaintenanceSchedule createSchedule(@RequestBody MaintenanceSchedule schedule) {
        return service.saveSchedule(schedule);
    }

    @PutMapping("/{id}")
    public MaintenanceSchedule updateSchedule(@PathVariable Long id, @RequestBody MaintenanceSchedule scheduleDetails) {
        return service.updateSchedule(id, scheduleDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteSchedule(@PathVariable Long id) {
        service.deleteSchedule(id);
    }
}
