package com.example.bannerhub_backend.file;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;



@Service
@RequiredArgsConstructor
public class StorageService {
    private final String uploadFolder = "UploadedFiles";

    public String saveUploadedFiles(List<MultipartFile> files) {
        try {
            for (MultipartFile file : files) {
                String relativePath = file.getOriginalFilename();
                Path filePath = Paths.get(uploadFolder, relativePath);
                Files.createDirectories(filePath.getParent());
                Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                UnzipUtility.unzip(filePath.toString(), uploadFolder);
                Files.deleteIfExists(filePath);
            }
            return "Files uploaded successfully!";
        } catch (IOException e) {
            return "Error uploading files: " + e.getMessage();
        }
    }

}
