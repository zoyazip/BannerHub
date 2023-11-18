package com.example.bannerhub_backend.banner;

import com.example.bannerhub_backend.file.StorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ContentDisposition;

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

    @PutMapping("/update")
    public ResponseEntity<String> export(@RequestParam String url) {

        List<BannerEntity> bannerList = bannerRepository.findAll();
        for (BannerEntity banner : bannerList) {
            banner.setUrl(url);
            bannerRepository.save(banner);
        }
        export();
        return ResponseEntity.ok("Url was injected successfully!");
    }

    @GetMapping("/export")
    public ResponseEntity<byte[]> downloadFile() {

        try {
            FileInputStream zipInputStream = new FileInputStream("Export/Export.zip");
            byte[] zipContent = zipInputStream.readAllBytes();
            zipInputStream.close();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDisposition(ContentDisposition.parse("attachment; filename=Export.zip"));
            return ResponseEntity.ok()
                    .headers(headers)
                    .body(zipContent);
        } catch (IOException e) {
            System.out.println("Error while downloading: " + e);
        }
        return ResponseEntity.badRequest().build();
    }

    public void processBanners() {
        List<BannerEntity> banners = bannerRepository.findAll();
        for (BannerEntity banner : banners) {
            bannerService.setSpecificationOfBanner(banner);
        }
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBanner(@PathVariable int id) {
        BannerEntity removedBanner = bannerRepository.findById(id).get();
        storageService.removeFolder(removedBanner.getName());
        bannerRepository.delete(removedBanner);

        return "Banner with id: " + id + " has been removed from database";
    }

    public void export() {
        ArrayList<String> paths = storageService.getListOfFolders();
        processBanners();
        storageService.zipFolders(paths);
    }
}
