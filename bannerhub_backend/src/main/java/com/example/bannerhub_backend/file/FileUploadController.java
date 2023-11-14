package com.example.bannerhub_backend.file;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/upload")
@RequiredArgsConstructor
public class FileUploadController {
    private final StorageService storageService;

    @PostMapping
    public ResponseEntity<String> handleFolderUpload(@RequestParam("folder") List<MultipartFile> file) {
        return ResponseEntity.ok(storageService.saveUploadedFiles(file));
    }

}
