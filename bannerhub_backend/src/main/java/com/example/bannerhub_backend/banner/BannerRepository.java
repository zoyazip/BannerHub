package com.example.bannerhub_backend.banner;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BannerRepository extends JpaRepository<BannerEntity, Integer> { }
