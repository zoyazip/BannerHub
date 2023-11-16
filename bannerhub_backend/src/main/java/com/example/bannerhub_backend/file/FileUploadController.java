package com.example.bannerhub_backend.file;

import com.example.bannerhub_backend.banner.BannerEntity;
import com.example.bannerhub_backend.banner.BannerRepository;
import com.example.bannerhub_backend.banner.BannerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class FileUploadController {
    private final StorageService storageService;
    private final BannerRepository bannerRepository;
    private final BannerService bannerService;

    @PostMapping("/upload")
    public ResponseEntity<ArrayList<BannerEntity>> handleFolderUpload(@RequestParam("folder") List<MultipartFile> file) {
        storageService.saveUploadedFiles(file);

        ArrayList<String> pathToBanner = storageService.getListOfFolders();
        ArrayList<BannerEntity> banners = new ArrayList<>();
        for (String folder : pathToBanner) {
            System.out.println(folder);
            String pathToHtml = folder + "/index.html";
            String pathToJS = folder + "/index.js";
            String pathToImages = folder + "/images";

            String name = bannerService.getName(pathToHtml);
            String dimension = bannerService.getDimension(pathToHtml);
            String spec = bannerService.getSpecificationFromFileName(pathToHtml);
            String size = bannerService.getBannerSize(folder);

            BannerEntity bannerEntity = new BannerEntity();

            bannerEntity.setPathToHtml(pathToHtml);
            bannerEntity.setPathToJs(pathToJS);
            bannerEntity.setPathToImages(pathToImages);
            bannerEntity.setName(name);
            bannerEntity.setDimension(dimension);
            bannerEntity.setSpec(spec);
            bannerEntity.setSize(size);

            bannerRepository.save(bannerEntity);
            banners.add(bannerEntity);
        }

        return ResponseEntity.ok(banners);
    }

}
