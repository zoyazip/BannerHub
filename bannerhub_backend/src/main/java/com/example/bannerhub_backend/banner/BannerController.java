package com.example.bannerhub_backend.banner;

import com.example.bannerhub_backend.file.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/banner")
public class BannerController {
    private final BannerRepository bannerRepository;
    private final BannerService bannerService;
    private final StorageService storageService;
    @GetMapping("/all")
    public ResponseEntity<List<BannerEntity>> all() {
        return ResponseEntity.ok(bannerRepository.findAll());
    }

    @DeleteMapping("/delete")
    public void deleteAll() {
        bannerRepository.deleteAll();
    }

}
