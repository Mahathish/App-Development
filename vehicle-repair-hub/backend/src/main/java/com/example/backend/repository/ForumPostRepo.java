package com.example.backend.repository;

import com.example.backend.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumPostRepo extends JpaRepository<ForumPost, Long> {
}
