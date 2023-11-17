package com.example.bannerhub_backend.banner;

import com.example.bannerhub_backend.file.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.Banner;
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
        storageService.removeBannersFromStorage();
        bannerRepository.deleteAll();
    }

    @PutMapping("/update-spec/{id}")
    public ResponseEntity<BannerEntity> updateSpec(@RequestParam String spec, @PathVariable int id, @RequestParam String url) {
        BannerEntity banner = bannerRepository.findById(id).get();
        banner.setSpec(spec);
        banner.setUrl(url);
        bannerRepository.save(banner);
        System.out.println("Spec of id: " + id + " is updated");

        return ResponseEntity.ok(banner);
    }

    @GetMapping("/export-banners")
    public void exportBanners() {
        List<BannerEntity> banners = bannerRepository.findAll();
        for (BannerEntity banner : banners) {
            bannerService.setSpecificationOfBanner(banner);
        }
    }
}
