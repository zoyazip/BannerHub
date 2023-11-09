package com.example.bannerhub_backend.banner;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/banner")
public class BannerController {


    private final BannerRepository bannerRepository;
    @GetMapping("/all")
    public ResponseEntity<List<BannerEntity>> test() {
        return ResponseEntity.ok(bannerRepository.findAll());
    }

    @PostMapping("/create")
    public BannerEntity create(@RequestBody BannerEntity banner) {

        return bannerRepository.save(banner);
    }

    @DeleteMapping("/delete")
    public void deleteAll() {
        bannerRepository.deleteAll();
    }
}
